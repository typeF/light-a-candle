import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { SwipeableDrawer, Button } from "@material-ui/core";
import CityDrawerList from "./CityDrawerList/CityDrawerList";

const CustomDrawer = withStyles({
  paper: {
    height: (props) => props.height,
    backgroundColor: "#1e2a32",
  },
})((props) => {
  const { classes, ...rest } = props;
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <SwipeableDrawer classes={{ paper: classes.paper }} {...rest} />;
});

const tempData = [
  {
    name: "Wendy Watson",
    occupation: "Doctor",
    img: `https://randomuser.me/api/portraits/thumb/men/${1}.jpg`,
    date_died: Date.now() - 10,
  },
  {
    name: "Dustin Watson",
    occupation: "Doctor",
    img: `https://randomuser.me/api/portraits/thumb/men/${2}.jpg`,
    date_died: Date.now() - 13,
  },
  {
    name: "Shane Fisher",
    occupation: "Nurse",
    img: `https://randomuser.me/api/portraits/thumb/men/${3}.jpg`,
    date_died: Date.now() - 25,
  },
];

function CityDrawer() {
  const [memorials, setMemorials] = useState(tempData);
  const [openDrawer, setOpenDrawer] = useState(true);
  // TODO: state to manage between half & full
  // const [isFullScreen, setisFullScreen] = useState(true);

  // TODO: logic to make request to fetch people associated to a city    given as a prop?

  const toggleDrawer = (state) => {
    setOpenDrawer(state);
  };

  return (
    <>
      <Button onClick={toggleDrawer}>Open</Button>
      <CustomDrawer
        // height is used to control the height of the CustomDrawer
        height="100%"
        anchor="bottom"
        open={openDrawer}
        containerStyle={{ height: "calc(100% - 64px)", top: 64 }}
        onClose={() => toggleDrawer(false)}
        onOpen={() => toggleDrawer(true)}
      >
        <CityDrawerList handleClose={toggleDrawer} memorials={memorials} />
      </CustomDrawer>
    </>
  );
}

export default CityDrawer;
