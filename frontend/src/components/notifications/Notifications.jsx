import { Avatar, Box, Typography } from "@mui/material";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import styled from "@emotion/styled";

const NotificationLink = styled(ButtonUnstyled)`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  color: blue;
  font-size: 0.75rem;
`;

const Notifications = () => {
  const time = "5 min ago";
  return (
    <Box flex={1} display="flex" flexDirection="column">
      {/* Notifications */}
      <Box flex={1} p="12px 24px" display="flex" flexDirection="column" gap="1rem" overflow="hidden">
        <Typography fontSize="1.5rem" fontWeight="bold">
          Notifications
        </Typography>
        {/* Notification List */}
        <Box
          flexGrow={1}
          display="flex"
          flexDirection="column"
          gap="0.5rem"
          sx={{
            overflowY: "overlay",
            "&:hover::-webkit-scrollbar": {
              display: "block",
            },
            "::-webkit-scrollbar": { width: "10px", display: "none" },
            "::-webkit-scrollbar-thumb": {
              backgroundColor: "#8f0acd73",
              borderRadius: "20px",
            },
          }}
        >
          {/* Notification */}
          <Box
            display="flex"
            gap="1rem"
            alignItems="center"
            p="0.5rem"
            borderRadius="10px"
            sx={{
              cursor: "pointer",
              "&:hover": {
                backgroundColor: (theme) => theme.palette.primary.main,
                color: (theme) => theme.palette.primary.contrastText,
              },
            }}
          >
            <Avatar src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
            <Box>
              <Typography
                fontSize="0.75rem"
                lineHeight="1.5"
                display="block"
                sx={{
                  "&:after": {
                    content: `" - ${time}"`,
                    fontSize: "0.6rem",
                    color: (theme) => theme.palette.grey["400"],
                    marginLeft: "1rem",
                  },
                }}
              >
                <NotificationLink variant="text">@Niel</NotificationLink> mentioned you in "Vortext mission"
              </Typography>
            </Box>
          </Box>
          {/* Notification */}
          <Box
            display="flex"
            gap="1rem"
            alignItems="center"
            p="0.5rem"
            borderRadius="10px"
            sx={{
              cursor: "pointer",
              "&:hover": {
                backgroundColor: (theme) => theme.palette.primary.main,
                color: (theme) => theme.palette.primary.contrastText,
              },
            }}
          >
            <Avatar src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
            <Box>
              <Typography
                fontSize="0.75rem"
                lineHeight="1.5"
                display="block"
                sx={{
                  "&:after": {
                    content: `" - ${time}"`,
                    fontSize: "0.6rem",
                    color: (theme) => theme.palette.grey["400"],
                    marginLeft: "1rem",
                  },
                }}
              >
                <NotificationLink variant="text">@Niel</NotificationLink> mentioned you in "Vortext mission"
              </Typography>
            </Box>
          </Box>
          {/* Notification */}
          <Box
            display="flex"
            gap="1rem"
            alignItems="center"
            p="0.5rem"
            borderRadius="10px"
            sx={{
              cursor: "pointer",
              "&:hover": {
                backgroundColor: (theme) => theme.palette.primary.main,
                color: (theme) => theme.palette.primary.contrastText,
              },
            }}
          >
            <Avatar src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
            <Box>
              <Typography
                fontSize="0.75rem"
                lineHeight="1.5"
                display="block"
                sx={{
                  "&:after": {
                    content: `" - ${time}"`,
                    fontSize: "0.6rem",
                    color: (theme) => theme.palette.grey["400"],
                    marginLeft: "1rem",
                  },
                }}
              >
                <NotificationLink variant="text">@Niel</NotificationLink> mentioned you in "Vortext mission"
              </Typography>
            </Box>
          </Box>
          {/* Notification */}
          <Box
            display="flex"
            gap="1rem"
            alignItems="center"
            p="0.5rem"
            borderRadius="10px"
            sx={{
              cursor: "pointer",
              "&:hover": {
                backgroundColor: (theme) => theme.palette.primary.main,
                color: (theme) => theme.palette.primary.contrastText,
              },
            }}
          >
            <Avatar src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
            <Box>
              <Typography
                fontSize="0.75rem"
                lineHeight="1.5"
                display="block"
                sx={{
                  "&:after": {
                    content: `" - ${time}"`,
                    fontSize: "0.6rem",
                    color: (theme) => theme.palette.grey["400"],
                    marginLeft: "1rem",
                  },
                }}
              >
                <NotificationLink variant="text">@Niel</NotificationLink> mentioned you in "Vortext mission"
              </Typography>
            </Box>
          </Box>
          {/* Notification */}
          <Box
            display="flex"
            gap="1rem"
            alignItems="center"
            p="0.5rem"
            borderRadius="10px"
            sx={{
              cursor: "pointer",
              "&:hover": {
                backgroundColor: (theme) => theme.palette.primary.main,
                color: (theme) => theme.palette.primary.contrastText,
              },
            }}
          >
            <Avatar src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
            <Box>
              <Typography
                fontSize="0.75rem"
                lineHeight="1.5"
                display="block"
                sx={{
                  "&:after": {
                    content: `" - ${time}"`,
                    fontSize: "0.6rem",
                    color: (theme) => theme.palette.grey["400"],
                    marginLeft: "1rem",
                  },
                }}
              >
                <NotificationLink variant="text">@Niel</NotificationLink> mentioned you in "Vortext mission"
              </Typography>
            </Box>
          </Box>
          {/* Notification */}
          <Box
            display="flex"
            gap="1rem"
            alignItems="center"
            p="0.5rem"
            borderRadius="10px"
            sx={{
              cursor: "pointer",
              "&:hover": {
                backgroundColor: (theme) => theme.palette.primary.main,
                color: (theme) => theme.palette.primary.contrastText,
              },
            }}
          >
            <Avatar src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
            <Box>
              <Typography
                fontSize="0.75rem"
                lineHeight="1.5"
                display="block"
                sx={{
                  "&:after": {
                    content: `" - ${time}"`,
                    fontSize: "0.6rem",
                    color: (theme) => theme.palette.grey["400"],
                    marginLeft: "1rem",
                  },
                }}
              >
                <NotificationLink variant="text">@Niel</NotificationLink> mentioned you in "Vortext mission"
              </Typography>
            </Box>
          </Box>
          {/* Notification */}
          <Box
            display="flex"
            gap="1rem"
            alignItems="center"
            p="0.5rem"
            borderRadius="10px"
            sx={{
              cursor: "pointer",
              "&:hover": {
                backgroundColor: (theme) => theme.palette.primary.main,
                color: (theme) => theme.palette.primary.contrastText,
              },
            }}
          >
            <Avatar src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
            <Box>
              <Typography
                fontSize="0.75rem"
                lineHeight="1.5"
                display="block"
                sx={{
                  "&:after": {
                    content: `" - ${time}"`,
                    fontSize: "0.6rem",
                    color: (theme) => theme.palette.grey["400"],
                    marginLeft: "1rem",
                  },
                }}
              >
                <NotificationLink variant="text">@Niel</NotificationLink> mentioned you in "Vortext mission"
              </Typography>
            </Box>
          </Box>
          {/* Notification */}
          <Box
            display="flex"
            gap="1rem"
            alignItems="center"
            p="0.5rem"
            borderRadius="10px"
            sx={{
              cursor: "pointer",
              "&:hover": {
                backgroundColor: (theme) => theme.palette.primary.main,
                color: (theme) => theme.palette.primary.contrastText,
              },
            }}
          >
            <Avatar src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
            <Box>
              <Typography
                fontSize="0.75rem"
                lineHeight="1.5"
                display="block"
                sx={{
                  "&:after": {
                    content: `" - ${time}"`,
                    fontSize: "0.6rem",
                    color: (theme) => theme.palette.grey["400"],
                    marginLeft: "1rem",
                  },
                }}
              >
                <NotificationLink variant="text">@Niel</NotificationLink> mentioned you in "Vortext mission"
              </Typography>
            </Box>
          </Box>
          {/* Notification */}
          <Box
            display="flex"
            gap="1rem"
            alignItems="center"
            p="0.5rem"
            borderRadius="10px"
            sx={{
              cursor: "pointer",
              "&:hover": {
                backgroundColor: (theme) => theme.palette.primary.main,
                color: (theme) => theme.palette.primary.contrastText,
              },
            }}
          >
            <Avatar src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
            <Box>
              <Typography
                fontSize="0.75rem"
                lineHeight="1.5"
                display="block"
                sx={{
                  "&:after": {
                    content: `" - ${time}"`,
                    fontSize: "0.6rem",
                    color: (theme) => theme.palette.grey["400"],
                    marginLeft: "1rem",
                  },
                }}
              >
                <NotificationLink variant="text">@Niel</NotificationLink> mentioned you in "Vortext mission"
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Online Friends */}
      <Box flex={1} p="12px 24px" display="flex" flexDirection="column" gap="1rem" overflow="hidden">
        <Typography fontSize="1.5rem" fontWeight="bold">
          Online Friends
        </Typography>
        {/* Online Friends  List */}
        <Box
          flexGrow={1}
          display="flex"
          flexDirection="column"
          gap="0.5rem"
          sx={{
            overflowY: "overlay",
            "&:hover::-webkit-scrollbar": {
              display: "block",
            },
            "::-webkit-scrollbar": { width: "10px", display: "none" },
            "::-webkit-scrollbar-thumb": {
              backgroundColor: "#8f0acd73",
              borderRadius: "20px",
            },
          }}
        >
          {/* Friend */}
          <Box
            display="flex"
            gap="1rem"
            alignItems="center"
            p="0.5rem"
            borderRadius="10px"
            sx={{
              cursor: "pointer",
              "&:hover": {
                backgroundColor: (theme) => theme.palette.primary.main,
                color: (theme) => theme.palette.primary.contrastText,
              },
            }}
          >
            <Avatar src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
            <Box>
              <Typography fontSize="1rem" fontWeight="bold">
                Ash Caddick
              </Typography>
              <Typography fontSize="x-small">What a great day !</Typography>
            </Box>
          </Box>
          {/* Friend */}
          <Box
            display="flex"
            gap="1rem"
            alignItems="center"
            p="0.5rem"
            borderRadius="10px"
            sx={{
              cursor: "pointer",
              "&:hover": {
                backgroundColor: (theme) => theme.palette.primary.main,
                color: (theme) => theme.palette.primary.contrastText,
              },
            }}
          >
            <Avatar src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
            <Box>
              <Typography fontSize="1rem" fontWeight="bold">
                Neil Oosthuizen
              </Typography>
              <Typography fontSize="x-small">What a great day !</Typography>
            </Box>
          </Box>
          {/* Friend */}
          <Box
            display="flex"
            gap="1rem"
            alignItems="center"
            p="0.5rem"
            borderRadius="10px"
            sx={{
              cursor: "pointer",
              "&:hover": {
                backgroundColor: (theme) => theme.palette.primary.main,
                color: (theme) => theme.palette.primary.contrastText,
              },
            }}
          >
            <Avatar src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
            <Box>
              <Typography fontSize="1rem" fontWeight="bold">
                Dean van Zyl
              </Typography>
              <Typography fontSize="x-small">What a great day !</Typography>
            </Box>
          </Box>
          {/* Friend */}
          <Box
            display="flex"
            gap="1rem"
            alignItems="center"
            p="0.5rem"
            borderRadius="10px"
            sx={{
              cursor: "pointer",
              "&:hover": {
                backgroundColor: (theme) => theme.palette.primary.main,
                color: (theme) => theme.palette.primary.contrastText,
              },
            }}
          >
            <Avatar src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
            <Box>
              <Typography fontSize="1rem" fontWeight="bold">
                Ash Caddick
              </Typography>
              <Typography fontSize="x-small">What a great day !</Typography>
            </Box>
          </Box>
          {/* Friend */}
          <Box
            display="flex"
            gap="1rem"
            alignItems="center"
            p="0.5rem"
            borderRadius="10px"
            sx={{
              cursor: "pointer",
              "&:hover": {
                backgroundColor: (theme) => theme.palette.primary.main,
                color: (theme) => theme.palette.primary.contrastText,
              },
            }}
          >
            <Avatar src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
            <Box>
              <Typography fontSize="1rem" fontWeight="bold">
                Neil Oosthuizen
              </Typography>
              <Typography fontSize="x-small">What a great day !</Typography>
            </Box>
          </Box>
          {/* Friend */}
          <Box
            display="flex"
            gap="1rem"
            alignItems="center"
            p="0.5rem"
            borderRadius="10px"
            sx={{
              cursor: "pointer",
              "&:hover": {
                backgroundColor: (theme) => theme.palette.primary.main,
                color: (theme) => theme.palette.primary.contrastText,
              },
            }}
          >
            <Avatar src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
            <Box>
              <Typography fontSize="1rem" fontWeight="bold">
                Dean van Zyl
              </Typography>
              <Typography fontSize="x-small">What a great day !</Typography>
            </Box>
          </Box>
          {/* Friend */}
          <Box
            display="flex"
            gap="1rem"
            alignItems="center"
            p="0.5rem"
            borderRadius="10px"
            sx={{
              cursor: "pointer",
              "&:hover": {
                backgroundColor: (theme) => theme.palette.primary.main,
                color: (theme) => theme.palette.primary.contrastText,
              },
            }}
          >
            <Avatar src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
            <Box>
              <Typography fontSize="1rem" fontWeight="bold">
                Ash Caddick
              </Typography>
              <Typography fontSize="x-small">What a great day !</Typography>
            </Box>
          </Box>
          {/* Friend */}
          <Box
            display="flex"
            gap="1rem"
            alignItems="center"
            p="0.5rem"
            borderRadius="10px"
            sx={{
              cursor: "pointer",
              "&:hover": {
                backgroundColor: (theme) => theme.palette.primary.main,
                color: (theme) => theme.palette.primary.contrastText,
              },
            }}
          >
            <Avatar src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
            <Box>
              <Typography fontSize="1rem" fontWeight="bold">
                Neil Oosthuizen
              </Typography>
              <Typography fontSize="x-small">What a great day !</Typography>
            </Box>
          </Box>
          {/* Friend */}
          <Box
            display="flex"
            gap="1rem"
            alignItems="center"
            p="0.5rem"
            borderRadius="10px"
            sx={{
              cursor: "pointer",
              "&:hover": {
                backgroundColor: (theme) => theme.palette.primary.main,
                color: (theme) => theme.palette.primary.contrastText,
              },
            }}
          >
            <Avatar src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
            <Box>
              <Typography fontSize="1rem" fontWeight="bold">
                Dean van Zyl
              </Typography>
              <Typography fontSize="x-small">What a great day !</Typography>
            </Box>
          </Box>
          {/* Friend */}
          <Box
            display="flex"
            gap="1rem"
            alignItems="center"
            p="0.5rem"
            borderRadius="10px"
            sx={{
              cursor: "pointer",
              "&:hover": {
                backgroundColor: (theme) => theme.palette.primary.main,
                color: (theme) => theme.palette.primary.contrastText,
              },
            }}
          >
            <Avatar src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
            <Box>
              <Typography fontSize="1rem" fontWeight="bold">
                Ash Caddick
              </Typography>
              <Typography fontSize="x-small">What a great day !</Typography>
            </Box>
          </Box>
          {/* Friend */}
          <Box
            display="flex"
            gap="1rem"
            alignItems="center"
            p="0.5rem"
            borderRadius="10px"
            sx={{
              cursor: "pointer",
              "&:hover": {
                backgroundColor: (theme) => theme.palette.primary.main,
                color: (theme) => theme.palette.primary.contrastText,
              },
            }}
          >
            <Avatar src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
            <Box>
              <Typography fontSize="1rem" fontWeight="bold">
                Neil Oosthuizen
              </Typography>
              <Typography fontSize="x-small">What a great day !</Typography>
            </Box>
          </Box>
          {/* Friend */}
          <Box
            display="flex"
            gap="1rem"
            alignItems="center"
            p="0.5rem"
            borderRadius="10px"
            sx={{
              cursor: "pointer",
              "&:hover": {
                backgroundColor: (theme) => theme.palette.primary.main,
                color: (theme) => theme.palette.primary.contrastText,
              },
            }}
          >
            <Avatar src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
            <Box>
              <Typography fontSize="1rem" fontWeight="bold">
                Dean van Zyl
              </Typography>
              <Typography fontSize="x-small">What a great day !</Typography>
            </Box>
          </Box>
          {/* Friend */}
          <Box
            display="flex"
            gap="1rem"
            alignItems="center"
            p="0.5rem"
            borderRadius="10px"
            sx={{
              cursor: "pointer",
              "&:hover": {
                backgroundColor: (theme) => theme.palette.primary.main,
                color: (theme) => theme.palette.primary.contrastText,
              },
            }}
          >
            <Avatar src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
            <Box>
              <Typography fontSize="1rem" fontWeight="bold">
                Ash Caddick
              </Typography>
              <Typography fontSize="x-small">What a great day !</Typography>
            </Box>
          </Box>
          {/* Friend */}
          <Box
            display="flex"
            gap="1rem"
            alignItems="center"
            p="0.5rem"
            borderRadius="10px"
            sx={{
              cursor: "pointer",
              "&:hover": {
                backgroundColor: (theme) => theme.palette.primary.main,
                color: (theme) => theme.palette.primary.contrastText,
              },
            }}
          >
            <Avatar src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
            <Box>
              <Typography fontSize="1rem" fontWeight="bold">
                Neil Oosthuizen
              </Typography>
              <Typography fontSize="x-small">What a great day !</Typography>
            </Box>
          </Box>
          {/* Friend */}
          <Box
            display="flex"
            gap="1rem"
            alignItems="center"
            p="0.5rem"
            borderRadius="10px"
            sx={{
              cursor: "pointer",
              "&:hover": {
                backgroundColor: (theme) => theme.palette.primary.main,
                color: (theme) => theme.palette.primary.contrastText,
              },
            }}
          >
            <Avatar src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
            <Box>
              <Typography fontSize="1rem" fontWeight="bold">
                Dean van Zyl
              </Typography>
              <Typography fontSize="x-small">What a great day !</Typography>
            </Box>
          </Box>
          {/* Friend */}
          <Box
            display="flex"
            gap="1rem"
            alignItems="center"
            p="0.5rem"
            borderRadius="10px"
            sx={{
              cursor: "pointer",
              "&:hover": {
                backgroundColor: (theme) => theme.palette.primary.main,
                color: (theme) => theme.palette.primary.contrastText,
              },
            }}
          >
            <Avatar src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
            <Box>
              <Typography fontSize="1rem" fontWeight="bold">
                Ash Caddick
              </Typography>
              <Typography fontSize="x-small">What a great day !</Typography>
            </Box>
          </Box>
          {/* Friend */}
          <Box
            display="flex"
            gap="1rem"
            alignItems="center"
            p="0.5rem"
            borderRadius="10px"
            sx={{
              cursor: "pointer",
              "&:hover": {
                backgroundColor: (theme) => theme.palette.primary.main,
                color: (theme) => theme.palette.primary.contrastText,
              },
            }}
          >
            <Avatar src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
            <Box>
              <Typography fontSize="1rem" fontWeight="bold">
                Neil Oosthuizen
              </Typography>
              <Typography fontSize="x-small">What a great day !</Typography>
            </Box>
          </Box>
          {/* Friend */}
          <Box
            display="flex"
            gap="1rem"
            alignItems="center"
            p="0.5rem"
            borderRadius="10px"
            sx={{
              cursor: "pointer",
              "&:hover": {
                backgroundColor: (theme) => theme.palette.primary.main,
                color: (theme) => theme.palette.primary.contrastText,
              },
            }}
          >
            <Avatar src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
            <Box>
              <Typography fontSize="1rem" fontWeight="bold">
                Dean van Zyl
              </Typography>
              <Typography fontSize="x-small">What a great day !</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Notifications;
