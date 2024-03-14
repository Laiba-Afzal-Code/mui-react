import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import {
  Add as AddIcon,
  ChildFriendly,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoFileOutlined,
} from "@mui/icons-material";
import React, { useState } from "react";

const StyledModal = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "5px",
});
const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        title="Add"
        sx={{
          position: "fixed",
          bottom: "20px",
          left: { xs: "calc(50% - 25px)", md: "30px" },
        }}
        onClick={(e) => setOpen(true)}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          
            width={300}
            height={280}
            bgcolor={"background.default"} color={"text.primary"}
            padding="20px"
            borderRadius="12px"
         
        >
          <Typography variant="h5" color="gray" textAlign={"center"}>
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqKO5PGjYJQUH20uYNk_kV9JXaOJbhvD_vxg&usqp=CAU"
              sx={{ width: 30, height: 30 }}
            />

            <Typography variant="span" color="gray" fontWeight={500}>
              Helan Mera
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's in your mind?"
            variant="standard"
          />
          <Stack direction="rows" gap={2} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoFileOutlined color="error" />
            <PersonAdd color="success" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="outlined"
            aria-label="Basic button group"
          >
            <Button>Post</Button>
            <Button>
              <DateRange />
            </Button>
            <Button>Tag</Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
