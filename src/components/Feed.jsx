import {Box} from "@mui/material";
import React from "react";
import Post from "./Post";

const Feed = () => {
  return (
    <>
      <Box className="feed" flex={4} p={2}>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      </Box>
    </>
  );
};

export default Feed;
