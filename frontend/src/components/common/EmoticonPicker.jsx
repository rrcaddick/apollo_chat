import EmojiPicker from "emoji-picker-react";
import { Backdrop, Box } from "@mui/material";
import { useReactiveVar } from "@apollo/client";
import { emojiTrayOpenVar } from "../../graphql/variables/common";

const EmoticonPicker = () => {
  const isOpen = useReactiveVar(emojiTrayOpenVar);

  const onPickHandler = (emojiData, e) => {
    console.log(emojiData);
  };

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isOpen}
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
          zIndex: (theme) => theme.zIndex.drawer + 2,
          bottom: "10px",
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
        <EmojiPicker previewConfig={{ showPreview: false }} onEmojiClick={onPickHandler} />
      </Box>
    </>
  );
};

export default EmoticonPicker;
