import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <>
      <Box
        flex={2}
        p={2}
        color={"gray"}
        sx={{ display: { xs: "none", sm: "block" } }}
      >
        <Box position={"sticky"} top={0} height={"100vh, auto"} width="300">
          <Typography variant="h6" fontWeight={100}>
            Online Friends
          </Typography>
          <AvatarGroup max={7}>
            <Avatar
              alt="Remy Sharp"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqKO5PGjYJQUH20uYNk_kV9JXaOJbhvD_vxg&usqp=CAU"
            />
            <Avatar
              alt="Travis Howard"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzNF2YIDP9cVqoLBNf4Pr7kJ82bWmA1Ups2g&usqp=CAU"
            />
            <Avatar
              alt="Cindy Baker"
              src="https://media.istockphoto.com/id/1051107790/photo/pretty-girl-with-long-curly-brown-hair-laughs.jpg?s=612x612&w=0&k=20&c=BAmjGzzsKVAWDaE9nT8BZ2XSHIK3lMWB2caIgsZwU34="
            />
            <Avatar
              alt="Agnes Walker"
              src="https://t3.ftcdn.net/jpg/06/38/85/64/240_F_638856438_bEVjZRkOaO8rcPoEEQHbRH2IL7lXEjVq.jpg"
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://t4.ftcdn.net/jpg/03/25/73/59/360_F_325735908_TkxHU7okor9CTWHBhkGfdRumONWfIDEb.jpg"
            />
            <Avatar
              alt="Alba herry"
              src="https://image.shutterstock.com/image-photo/confident-rich-eastern-indian-business-260nw-2200214153.jpg"
            />
            <Avatar
              alt="Henderson"
              src="https://www.shutterstock.com/shutterstock/photos/1617540484/display_1500/stock-photo-closeup-photo-of-amazing-short-hairdo-lady-looking-up-empty-space-deep-thinking-creative-person-arm-1617540484.jpg"
            />
            <Avatar
              alt="Trevor mon"
              src="https://images.assetsdelivery.com/compings_v2/gstockstudio/gstockstudio1604/gstockstudio160400008.jpg"
            />
            <Avatar
              alt="Haider Ali"
              src="https://media.istockphoto.com/id/1334702614/photo/young-man-with-laptop-and-coffee-working-indoors-home-office-concept.jpg?s=612x612&w=0&k=20&c=qAhnrFIMKaObf7Ybf19FVE605g5OVcR7CSt0E3xYSMo="
            />
          </AvatarGroup>
          <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
            Latest Photos
          </Typography>
          <ImageList cols={3} rowHeight={100} gap={5}>
            <ImageListItem>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHaS6vsPLVFOOOe_ZvZxJv3iFSPSp4W1AQIQ&usqp=CAU"
                alt="work"
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src="https://builtin.com/cdn-cgi/image/f=auto,quality=80,width=752,height=435/https://builtin.com/sites/www.builtin.com/files/styles/byline_image/public/2022-05/unconscious-bias-examples_0.png"
                alt="work"
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src="https://cdn.pixabay.com/photo/2014/12/16/22/25/sunset-570881_1280.jpg"
                alt="fun"
              />
            </ImageListItem>
          </ImageList>
          <Typography variant="h6" fontWeight={100} mt={2}>
            Latest Conversations
          </Typography>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src="https://t3.ftcdn.net/jpg/03/02/88/46/360_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Travis Howard"
                  src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-874158.jpg&fm=jpg"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Cindy Baker"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNEkfgACpezCN_oWfVGoFtTktTYpAcW1NhIYEFn4c3AzkRsqb0m43zSDy-JvSmZ8v-fQg&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNEkfgACpezCN_oWfVGoFtTktTYpAcW1NhIYEFn4c3AzkRsqb0m43zSDy-JvSmZ8v-fQg&usqp=CAU"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Sandra Adams
                    </Typography>
                    {" — Do you have Paris recommendations? Have you ever…"}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
};

export default Rightbar;
