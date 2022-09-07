import { Box } from "@mui/material";

const MessageFeed = () => {
  return (
    <Box p="12px 8px" boxShadow={(theme) => theme.shadows["10"]} overflow="hidden" display="flex">
      <Box
        flexGrow={1}
        display="flex"
        flexDirection="column"
        gap="0.25rem"
        p="0 16px"
        sx={{
          overflowY: "overlay",
          "&:hover::-webkit-scrollbar": {
            display: "block",
          },
          "::-webkit-scrollbar": { width: "10px", display: "none" },
          "::-webkit-scrollbar-thumb": {
            // backgroundColor: (theme) => theme.palette.secondary.main,
            backgroundColor: "#8f0acd73",
            borderRadius: "20px",
          },
        }}
      >
        {/* Message */}
        <Box
          backgroundColor={(theme) => theme.palette.primary.main}
          color={(theme) => theme.palette.primary.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-end"
          sx={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderTopRightRadius: "30px",
          }}
        >
          Are we meeting today? What time would be best for you? Any time is fine with me
        </Box>
        <Box
          backgroundColor={(theme) => theme.palette.primary.main}
          color={(theme) => theme.palette.primary.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-end"
          sx={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderBottomRightRadius: "30px",
          }}
        >
          Would like to discuss new opportunity
        </Box>

        <Box
          backgroundColor={(theme) => theme.palette.grey["200"]}
          color={(theme) => theme.palette.grey.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-start"
          borderRadius="30px"
        >
          Yes let's meet
        </Box>

        <Box
          backgroundColor={(theme) => theme.palette.primary.main}
          color={(theme) => theme.palette.primary.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-end"
          sx={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderBottomRightRadius: "30px",
          }}
        >
          Okay let's say around 8 PM?
        </Box>
        {/* Message */}
        <Box
          backgroundColor={(theme) => theme.palette.primary.main}
          color={(theme) => theme.palette.primary.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-end"
          sx={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderTopRightRadius: "30px",
          }}
        >
          Are we meeting today? What time would be best for you? Any time is fine with me
        </Box>
        <Box
          backgroundColor={(theme) => theme.palette.primary.main}
          color={(theme) => theme.palette.primary.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-end"
          sx={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderBottomRightRadius: "30px",
          }}
        >
          Would like to discuss new opportunity
        </Box>

        <Box
          backgroundColor={(theme) => theme.palette.grey["200"]}
          color={(theme) => theme.palette.grey.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-start"
          borderRadius="30px"
        >
          Yes let's meet
        </Box>

        <Box
          backgroundColor={(theme) => theme.palette.primary.main}
          color={(theme) => theme.palette.primary.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-end"
          sx={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderBottomRightRadius: "30px",
          }}
        >
          Okay let's say around 8 PM?
        </Box>
        {/* Message */}
        <Box
          backgroundColor={(theme) => theme.palette.primary.main}
          color={(theme) => theme.palette.primary.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-end"
          sx={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderTopRightRadius: "30px",
          }}
        >
          Are we meeting today? What time would be best for you? Any time is fine with me
        </Box>
        <Box
          backgroundColor={(theme) => theme.palette.primary.main}
          color={(theme) => theme.palette.primary.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-end"
          sx={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderBottomRightRadius: "30px",
          }}
        >
          Would like to discuss new opportunity
        </Box>

        <Box
          backgroundColor={(theme) => theme.palette.grey["200"]}
          color={(theme) => theme.palette.grey.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-start"
          borderRadius="30px"
        >
          Yes let's meet
        </Box>

        <Box
          backgroundColor={(theme) => theme.palette.primary.main}
          color={(theme) => theme.palette.primary.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-end"
          sx={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderBottomRightRadius: "30px",
          }}
        >
          Okay let's say around 8 PM?
        </Box>
        {/* Message */}
        <Box
          backgroundColor={(theme) => theme.palette.primary.main}
          color={(theme) => theme.palette.primary.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-end"
          sx={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderTopRightRadius: "30px",
          }}
        >
          Are we meeting today? What time would be best for you? Any time is fine with me
        </Box>
        <Box
          backgroundColor={(theme) => theme.palette.primary.main}
          color={(theme) => theme.palette.primary.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-end"
          sx={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderBottomRightRadius: "30px",
          }}
        >
          Would like to discuss new opportunity
        </Box>

        <Box
          backgroundColor={(theme) => theme.palette.grey["200"]}
          color={(theme) => theme.palette.grey.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-start"
          borderRadius="30px"
        >
          Yes let's meet
        </Box>

        <Box
          backgroundColor={(theme) => theme.palette.primary.main}
          color={(theme) => theme.palette.primary.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-end"
          sx={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderBottomRightRadius: "30px",
          }}
        >
          Okay let's say around 8 PM?
        </Box>
        {/* Message */}
        <Box
          backgroundColor={(theme) => theme.palette.primary.main}
          color={(theme) => theme.palette.primary.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-end"
          sx={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderTopRightRadius: "30px",
          }}
        >
          Are we meeting today? What time would be best for you? Any time is fine with me
        </Box>
        <Box
          backgroundColor={(theme) => theme.palette.primary.main}
          color={(theme) => theme.palette.primary.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-end"
          sx={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderBottomRightRadius: "30px",
          }}
        >
          Would like to discuss new opportunity
        </Box>

        <Box
          backgroundColor={(theme) => theme.palette.grey["200"]}
          color={(theme) => theme.palette.grey.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-start"
          borderRadius="30px"
        >
          Yes let's meet
        </Box>

        <Box
          backgroundColor={(theme) => theme.palette.primary.main}
          color={(theme) => theme.palette.primary.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-end"
          sx={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderBottomRightRadius: "30px",
          }}
        >
          Okay let's say around 8 PM?
        </Box>
        {/* Message */}
        <Box
          backgroundColor={(theme) => theme.palette.primary.main}
          color={(theme) => theme.palette.primary.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-end"
          sx={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderTopRightRadius: "30px",
          }}
        >
          Are we meeting today? What time would be best for you? Any time is fine with me
        </Box>
        <Box
          backgroundColor={(theme) => theme.palette.primary.main}
          color={(theme) => theme.palette.primary.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-end"
          sx={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderBottomRightRadius: "30px",
          }}
        >
          Would like to discuss new opportunity
        </Box>

        <Box
          backgroundColor={(theme) => theme.palette.grey["200"]}
          color={(theme) => theme.palette.grey.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-start"
          borderRadius="30px"
        >
          Yes let's meet
        </Box>

        <Box
          backgroundColor={(theme) => theme.palette.primary.main}
          color={(theme) => theme.palette.primary.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-end"
          sx={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderBottomRightRadius: "30px",
          }}
        >
          Okay let's say around 8 PM?
        </Box>
        {/* Message */}
        <Box
          backgroundColor={(theme) => theme.palette.primary.main}
          color={(theme) => theme.palette.primary.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-end"
          sx={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderTopRightRadius: "30px",
          }}
        >
          Are we meeting today? What time would be best for you? Any time is fine with me
        </Box>
        <Box
          backgroundColor={(theme) => theme.palette.primary.main}
          color={(theme) => theme.palette.primary.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-end"
          sx={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderBottomRightRadius: "30px",
          }}
        >
          Would like to discuss new opportunity
        </Box>

        <Box
          backgroundColor={(theme) => theme.palette.grey["200"]}
          color={(theme) => theme.palette.grey.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-start"
          borderRadius="30px"
        >
          Yes let's meet
        </Box>

        <Box
          backgroundColor={(theme) => theme.palette.primary.main}
          color={(theme) => theme.palette.primary.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-end"
          sx={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderBottomRightRadius: "30px",
          }}
        >
          Okay let's say around 8 PM?
        </Box>
        {/* Message */}
        <Box
          backgroundColor={(theme) => theme.palette.primary.main}
          color={(theme) => theme.palette.primary.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-end"
          sx={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderTopRightRadius: "30px",
          }}
        >
          Are we meeting today? What time would be best for you? Any time is fine with me
        </Box>
        <Box
          backgroundColor={(theme) => theme.palette.primary.main}
          color={(theme) => theme.palette.primary.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-end"
          sx={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderBottomRightRadius: "30px",
          }}
        >
          Would like to discuss new opportunity
        </Box>

        <Box
          backgroundColor={(theme) => theme.palette.grey["200"]}
          color={(theme) => theme.palette.grey.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-start"
          borderRadius="30px"
        >
          Yes let's meet
        </Box>

        <Box
          backgroundColor={(theme) => theme.palette.primary.main}
          color={(theme) => theme.palette.primary.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-end"
          sx={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderBottomRightRadius: "30px",
          }}
        >
          Okay let's say around 8 PM?
        </Box>
        {/* Message */}
        <Box
          backgroundColor={(theme) => theme.palette.primary.main}
          color={(theme) => theme.palette.primary.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-end"
          sx={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderTopRightRadius: "30px",
          }}
        >
          Are we meeting today? What time would be best for you? Any time is fine with me
        </Box>
        <Box
          backgroundColor={(theme) => theme.palette.primary.main}
          color={(theme) => theme.palette.primary.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-end"
          sx={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderBottomRightRadius: "30px",
          }}
        >
          Would like to discuss new opportunity
        </Box>

        <Box
          backgroundColor={(theme) => theme.palette.grey["200"]}
          color={(theme) => theme.palette.grey.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-start"
          borderRadius="30px"
        >
          Yes let's meet
        </Box>

        <Box
          backgroundColor={(theme) => theme.palette.primary.main}
          color={(theme) => theme.palette.primary.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-end"
          sx={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderBottomRightRadius: "30px",
          }}
        >
          Okay let's say around 8 PM?
        </Box>
        {/* Message */}
        <Box
          backgroundColor={(theme) => theme.palette.primary.main}
          color={(theme) => theme.palette.primary.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-end"
          sx={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderTopRightRadius: "30px",
          }}
        >
          Are we meeting today? What time would be best for you? Any time is fine with me
        </Box>
        <Box
          backgroundColor={(theme) => theme.palette.primary.main}
          color={(theme) => theme.palette.primary.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-end"
          sx={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderBottomRightRadius: "30px",
          }}
        >
          Would like to discuss new opportunity
        </Box>

        <Box
          backgroundColor={(theme) => theme.palette.grey["200"]}
          color={(theme) => theme.palette.grey.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-start"
          borderRadius="30px"
        >
          Yes let's meet
        </Box>

        <Box
          backgroundColor={(theme) => theme.palette.primary.main}
          color={(theme) => theme.palette.primary.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-end"
          sx={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderBottomRightRadius: "30px",
          }}
        >
          Okay let's say around 8 PM?
        </Box>
        {/* Message */}
        <Box
          backgroundColor={(theme) => theme.palette.primary.main}
          color={(theme) => theme.palette.primary.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-end"
          sx={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderTopRightRadius: "30px",
          }}
        >
          Are we meeting today? What time would be best for you? Any time is fine with me
        </Box>
        <Box
          backgroundColor={(theme) => theme.palette.primary.main}
          color={(theme) => theme.palette.primary.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-end"
          sx={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderBottomRightRadius: "30px",
          }}
        >
          Would like to discuss new opportunity
        </Box>

        <Box
          backgroundColor={(theme) => theme.palette.grey["200"]}
          color={(theme) => theme.palette.grey.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-start"
          borderRadius="30px"
        >
          Yes let's meet
        </Box>

        <Box
          backgroundColor={(theme) => theme.palette.primary.main}
          color={(theme) => theme.palette.primary.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-end"
          sx={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderBottomRightRadius: "30px",
          }}
        >
          Okay let's say around 8 PM?
        </Box>
        {/* Message */}
        <Box
          backgroundColor={(theme) => theme.palette.primary.main}
          color={(theme) => theme.palette.primary.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-end"
          sx={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderTopRightRadius: "30px",
          }}
        >
          Are we meeting today? What time would be best for you? Any time is fine with me
        </Box>
        <Box
          backgroundColor={(theme) => theme.palette.primary.main}
          color={(theme) => theme.palette.primary.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-end"
          sx={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderBottomRightRadius: "30px",
          }}
        >
          Would like to discuss new opportunity
        </Box>

        <Box
          backgroundColor={(theme) => theme.palette.grey["200"]}
          color={(theme) => theme.palette.grey.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-start"
          borderRadius="30px"
        >
          Yes let's meet
        </Box>

        <Box
          backgroundColor={(theme) => theme.palette.primary.main}
          color={(theme) => theme.palette.primary.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-end"
          sx={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderBottomRightRadius: "30px",
          }}
        >
          Okay let's say around 8 PM?
        </Box>
        {/* Message */}
        <Box
          backgroundColor={(theme) => theme.palette.primary.main}
          color={(theme) => theme.palette.primary.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-end"
          sx={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderTopRightRadius: "30px",
          }}
        >
          Are we meeting today? What time would be best for you? Any time is fine with me
        </Box>
        <Box
          backgroundColor={(theme) => theme.palette.primary.main}
          color={(theme) => theme.palette.primary.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-end"
          sx={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderBottomRightRadius: "30px",
          }}
        >
          Would like to discuss new opportunity
        </Box>

        <Box
          backgroundColor={(theme) => theme.palette.grey["200"]}
          color={(theme) => theme.palette.grey.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-start"
          borderRadius="30px"
        >
          Yes let's meet
        </Box>

        <Box
          backgroundColor={(theme) => theme.palette.primary.main}
          color={(theme) => theme.palette.primary.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-end"
          sx={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderBottomRightRadius: "30px",
          }}
        >
          Okay let's say around 8 PM?
        </Box>
        {/* Message */}
        <Box
          backgroundColor={(theme) => theme.palette.primary.main}
          color={(theme) => theme.palette.primary.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-end"
          sx={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderTopRightRadius: "30px",
          }}
        >
          Are we meeting today? What time would be best for you? Any time is fine with me
        </Box>
        <Box
          backgroundColor={(theme) => theme.palette.primary.main}
          color={(theme) => theme.palette.primary.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-end"
          sx={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderBottomRightRadius: "30px",
          }}
        >
          Would like to discuss new opportunity
        </Box>

        <Box
          backgroundColor={(theme) => theme.palette.grey["200"]}
          color={(theme) => theme.palette.grey.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-start"
          borderRadius="30px"
        >
          Yes let's meet
        </Box>

        <Box
          backgroundColor={(theme) => theme.palette.primary.main}
          color={(theme) => theme.palette.primary.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-end"
          sx={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderBottomRightRadius: "30px",
          }}
        >
          Okay let's say around 8 PM?
        </Box>
        {/* Message */}
        <Box
          backgroundColor={(theme) => theme.palette.primary.main}
          color={(theme) => theme.palette.primary.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-end"
          sx={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderTopRightRadius: "30px",
          }}
        >
          Are we meeting today? What time would be best for you? Any time is fine with me
        </Box>
        <Box
          backgroundColor={(theme) => theme.palette.primary.main}
          color={(theme) => theme.palette.primary.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-end"
          sx={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderBottomRightRadius: "30px",
          }}
        >
          Would like to discuss new opportunity
        </Box>

        <Box
          backgroundColor={(theme) => theme.palette.grey["200"]}
          color={(theme) => theme.palette.grey.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-start"
          borderRadius="30px"
        >
          Yes let's meet
        </Box>

        <Box
          backgroundColor={(theme) => theme.palette.primary.main}
          color={(theme) => theme.palette.primary.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-end"
          sx={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderBottomRightRadius: "30px",
          }}
        >
          Okay let's say around 8 PM?
        </Box>
        {/* Message */}
        <Box
          backgroundColor={(theme) => theme.palette.primary.main}
          color={(theme) => theme.palette.primary.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-end"
          sx={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderTopRightRadius: "30px",
          }}
        >
          Are we meeting today? What time would be best for you? Any time is fine with me
        </Box>
        <Box
          backgroundColor={(theme) => theme.palette.primary.main}
          color={(theme) => theme.palette.primary.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-end"
          sx={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderBottomRightRadius: "30px",
          }}
        >
          Would like to discuss new opportunity
        </Box>

        <Box
          backgroundColor={(theme) => theme.palette.grey["200"]}
          color={(theme) => theme.palette.grey.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-start"
          borderRadius="30px"
        >
          Yes let's meet
        </Box>

        <Box
          backgroundColor={(theme) => theme.palette.primary.main}
          color={(theme) => theme.palette.primary.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-end"
          sx={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderBottomRightRadius: "30px",
          }}
        >
          Okay let's say around 8 PM?
        </Box>
        {/* Message */}
        <Box
          backgroundColor={(theme) => theme.palette.primary.main}
          color={(theme) => theme.palette.primary.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-end"
          sx={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderTopRightRadius: "30px",
          }}
        >
          Are we meeting today? What time would be best for you? Any time is fine with me
        </Box>
        <Box
          backgroundColor={(theme) => theme.palette.primary.main}
          color={(theme) => theme.palette.primary.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-end"
          sx={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderBottomRightRadius: "30px",
          }}
        >
          Would like to discuss new opportunity
        </Box>

        <Box
          backgroundColor={(theme) => theme.palette.grey["200"]}
          color={(theme) => theme.palette.grey.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-start"
          borderRadius="30px"
        >
          Yes let's meet
        </Box>

        <Box
          backgroundColor={(theme) => theme.palette.primary.main}
          color={(theme) => theme.palette.primary.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-end"
          sx={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderBottomRightRadius: "30px",
          }}
        >
          Okay let's say around 8 PM?
        </Box>
        {/* Message */}
        <Box
          backgroundColor={(theme) => theme.palette.primary.main}
          color={(theme) => theme.palette.primary.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-end"
          sx={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderTopRightRadius: "30px",
          }}
        >
          Are we meeting today? What time would be best for you? Any time is fine with me
        </Box>
        <Box
          backgroundColor={(theme) => theme.palette.primary.main}
          color={(theme) => theme.palette.primary.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-end"
          sx={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderBottomRightRadius: "30px",
          }}
        >
          Would like to discuss new opportunity
        </Box>

        <Box
          backgroundColor={(theme) => theme.palette.grey["200"]}
          color={(theme) => theme.palette.grey.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-start"
          borderRadius="30px"
        >
          Yes let's meet
        </Box>

        <Box
          backgroundColor={(theme) => theme.palette.primary.main}
          color={(theme) => theme.palette.primary.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-end"
          sx={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderBottomRightRadius: "30px",
          }}
        >
          Okay let's say around 8 PM?
        </Box>
        {/* Message */}
        <Box
          backgroundColor={(theme) => theme.palette.primary.main}
          color={(theme) => theme.palette.primary.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-end"
          sx={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderTopRightRadius: "30px",
          }}
        >
          Are we meeting today? What time would be best for you? Any time is fine with me
        </Box>
        <Box
          backgroundColor={(theme) => theme.palette.primary.main}
          color={(theme) => theme.palette.primary.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-end"
          sx={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderBottomRightRadius: "30px",
          }}
        >
          Would like to discuss new opportunity
        </Box>

        <Box
          backgroundColor={(theme) => theme.palette.grey["200"]}
          color={(theme) => theme.palette.grey.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-start"
          borderRadius="30px"
        >
          Yes let's meet
        </Box>

        <Box
          backgroundColor={(theme) => theme.palette.primary.main}
          color={(theme) => theme.palette.primary.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-end"
          sx={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderBottomRightRadius: "30px",
          }}
        >
          Okay let's say around 8 PM?
        </Box>
        {/* Message */}
        <Box
          backgroundColor={(theme) => theme.palette.primary.main}
          color={(theme) => theme.palette.primary.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-end"
          sx={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderTopRightRadius: "30px",
          }}
        >
          Are we meeting today? What time would be best for you? Any time is fine with me
        </Box>
        <Box
          backgroundColor={(theme) => theme.palette.primary.main}
          color={(theme) => theme.palette.primary.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-end"
          sx={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderBottomRightRadius: "30px",
          }}
        >
          Would like to discuss new opportunity
        </Box>

        <Box
          backgroundColor={(theme) => theme.palette.grey["200"]}
          color={(theme) => theme.palette.grey.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-start"
          borderRadius="30px"
        >
          Yes let's meet
        </Box>

        <Box
          backgroundColor={(theme) => theme.palette.primary.main}
          color={(theme) => theme.palette.primary.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-end"
          sx={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderBottomRightRadius: "30px",
          }}
        >
          Okay let's say around 8 PM?
        </Box>
        {/* Message */}
        <Box
          backgroundColor={(theme) => theme.palette.primary.main}
          color={(theme) => theme.palette.primary.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-end"
          sx={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderTopRightRadius: "30px",
          }}
        >
          Are we meeting today? What time would be best for you? Any time is fine with me
        </Box>
        <Box
          backgroundColor={(theme) => theme.palette.primary.main}
          color={(theme) => theme.palette.primary.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-end"
          sx={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderBottomRightRadius: "30px",
          }}
        >
          Would like to discuss new opportunity
        </Box>

        <Box
          backgroundColor={(theme) => theme.palette.grey["200"]}
          color={(theme) => theme.palette.grey.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-start"
          borderRadius="30px"
        >
          Yes let's meet
        </Box>

        <Box
          backgroundColor={(theme) => theme.palette.primary.main}
          color={(theme) => theme.palette.primary.contrastText}
          p="0.5rem 1rem"
          alignSelf="flex-end"
          sx={{
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            borderBottomRightRadius: "30px",
          }}
        >
          Okay let's say around 8 PM?
        </Box>
      </Box>
    </Box>
  );
};

export default MessageFeed;
