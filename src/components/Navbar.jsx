import styled from "@emotion/styled";
import { AccountTree, Mail, Notifications, Pets } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: "10px",
    width: "40%",
  }));
  const Icons = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "20px",
  }));
  const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
  }));
  return (
    <>
      <AppBar position="sticky">
        <StyledToolbar>
          <Typography
            variant="h5"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Alba Tross
          </Typography>
          <AccountTree sx={{ display: { xs: "block", sm: "none" } }} />
          <Search bgcolor={"background.default"} color={"text.primary"} >
            <InputBase placeholder="Search..." />
          </Search>
          <Icons sx={{ display: { xs: "none", sm: "flex" } }}>
            <Badge badgeContent={4} color="error">
              <Mail color="white" />
            </Badge>
            <Badge badgeContent={3} color="error">
              <Notifications color="white" />
            </Badge>
            <Avatar
              sx={{ width: "30px", height: "30px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRuRip5LBOHjlx6SIMhLsGHLxpw_wUUXG8Z0sz9YUBaP9PstT_BmRY1CGaFBqqDeFAX9w&usqp=CAU"
              onClick={(e) => setOpen(true)}
            />
          </Icons>
          <UserBox sx={{ display: { xs: "flex", sm: "none" } }}>
            <Avatar
              sx={{ width: "30px", height: "30px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRuRip5LBOHjlx6SIMhLsGHLxpw_wUUXG8Z0sz9YUBaP9PstT_BmRY1CGaFBqqDeFAX9w&usqp=CAU"
              onClick={(e) => setOpen(true)}
            />
            <Typography variant="span">Alba</Typography>
          </UserBox>
        </StyledToolbar>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={(e) => setOpen(false)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </AppBar>
    </>
  );
};

export default Navbar;
