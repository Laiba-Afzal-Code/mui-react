import {
  ChildFriendly,
  ContentCopy,
  Favorite,
  Group,
  Home,
  ModeNight,
  Pages,
  Settings,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import React from "react";

const Sidebar = ({setMode, mode}) => {
  return (
    <>
      <Box
        className="sidebar"
      
        flex={2}
        p={2}
        sx={{ display: { xs: "none", sm: "block" }, position:"sticky",top:"0", height:"100vh" }}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/home">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/content">
              <ListItemIcon>
                <ContentCopy />
              </ListItemIcon>
              <ListItemText primary="Content" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/pages">
              <ListItemIcon>
                <Pages />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/group">
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/favorite">
              <ListItemIcon>
                <Favorite />
              </ListItemIcon>
              <ListItemText primary="Favorite" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/friend">
              <ListItemIcon>
                <ChildFriendly />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/setting">
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/setting">
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch inputProps={{ "aria-label": "controlled" }} onChange={(e)=>setMode(mode==="light"? "dark" :"light")} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </>
  );
};

export default Sidebar;
