import { selectedChatVar } from "../variables/selectedChat";

const chatPolicies = {
  Chat: {
    fields: {
      isSelected: {
        read(_, { readField }) {
          return readField("id") === selectedChatVar()?.id;
        },
      },
    },
  },
};

export { chatPolicies };
