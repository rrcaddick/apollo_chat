import { gql } from "@apollo/client";

const isFirstInCluster = (messages, index, readField) => {
  // Only message in chat
  if (messages.length === 1) return true;

  // First message in chat
  if (index === 0) return true;

  // First message in next group
  const prevIsUser = readField("isUserMessage", messages[index - 1]);
  const currIsUser = readField("isUserMessage", messages[index]);
  if (prevIsUser !== currIsUser) return true;

  // Not the first message in group
  return false;
};

const isLastInCluster = (messages, index, readField) => {
  // Only message in chat
  if (messages.length === 1) return true;

  // First message in next group
  const nextIsUser = readField("isUserMessage", messages[index + 1]);
  const currIsUser = readField("isUserMessage", messages[index]);
  if (nextIsUser !== currIsUser) return true;

  // Not the first message in group
  return false;
};

const queryTypePolicies = {
  Query: {
    fields: {
      chatMessages: {
        merge(existing = [], incoming = [], { cache, readField }) {
          let i = existing.length === 0 ? 0 : existing.length - 1;
          for (i; i < incoming.length; i++) {
            cache.writeFragment({
              id: incoming[i].__ref,
              fragment: gql`
                fragment UpdateUIFields on Message {
                  isFirstInCluster
                  isLastInCluster
                }
              `,
              data: {
                isFirstInCluster: isFirstInCluster(incoming, i, readField),
                isLastInCluster: isLastInCluster(incoming, i, readField),
              },
            });
          }

          return incoming;
        },
      },
    },
  },
};

export { queryTypePolicies };
