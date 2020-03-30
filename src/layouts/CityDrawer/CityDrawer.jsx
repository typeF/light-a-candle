import React, { useState } from "react";
import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";
import { SwipeableDrawer, Button } from "@material-ui/core";
import { List, ListItem, ListItemIcon, ListItemText, Divider } from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

const ListWrapper = styled.div`
  width: auto;
`;

const CustomDrawer = withStyles({
  paper: {
    height: "100%",
  },
})(SwipeableDrawer);

function CityDrawer() {
  const [openDrawer, setOpenDrawer] = useState(true);
  const [isFullScreen, setisFullScreen] = useState(true);

  const toggleDrawer = (state) => {
    setOpenDrawer(state);
    console.log("here");
  };

  const list = (anchor) => (
    <ListWrapper role="presentation" onClick={() => toggleDrawer()} onKeyDown={() => toggleDrawer()}>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </ListWrapper>
  );
  return (
    <>
      <Button onClick={toggleDrawer}>Open</Button>
      <CustomDrawer
        anchor="bottom"
        open={openDrawer}
        containerStyle={{ height: "calc(100% - 64px)", top: 64 }}
        onClose={() => toggleDrawer(false)}
        onOpen={() => toggleDrawer(true)}
      >
        {list("bottom")}
      </CustomDrawer>
    </>
  );
}

export default CityDrawer;
