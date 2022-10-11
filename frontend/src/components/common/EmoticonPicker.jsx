import EmojiPicker from "emoji-picker-react";
import { Box } from "@mui/material";
import { useReactiveVar } from "@apollo/client";
import { emojiTrayOpenVar } from "../../graphql/variables/common";
import ScreenBackdrop from "./ScreenBackdrop";

const EmoticonPicker = () => {
  const isOpen = useReactiveVar(emojiTrayOpenVar);
  return (
    <>
      <ScreenBackdrop
        isOpen={isOpen}
        invisible={true}
        onClick={() => {
          emojiTrayOpenVar(false);
        }}
      />
      <Box
        position="absolute"
        padding="0 1rem"
        width="100%"
        sx={{
          zIndex: 1,
          transition: "transform 200ms linear",
          transform: `translateY(${isOpen ? "0%" : "110%"})`,
          "& li[data-name='suggested']": {
            display: "none !important",
          },
          "& div.Flex.epr-header-overlay.FlexRow": {
            display: "none !important",
          },
          "& button.epr-icn-suggested": {
            display: "none !important",
          },
          "& > .EmojiPickerReact": {
            width: "100% !important",
            height: "350px !important",
            "& > .epr-body": {
              overflowY: "overlay",
              "&:hover::-webkit-scrollbar": {
                display: "none",
              },
            },
          },
        }}
      >
        <EmojiPicker previewConfig={{ showPreview: false }} />
      </Box>
    </>
  );
};

export default EmoticonPicker;
