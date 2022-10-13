import { selectedChatVar } from "../variables/selectedChat";

const chatTypePolicies = {
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

export { chatTypePolicies };
