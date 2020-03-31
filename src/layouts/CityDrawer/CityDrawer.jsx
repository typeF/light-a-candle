import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { SwipeableDrawer, IconButton, Button } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import CityDrawerHeader from "./CityDrawerHeader/CityDrawerHeader";
import CityDrawerFilter from "./CityDrawerFilter/CityDrawerFilter";
import CityDrawerList from "./CityDrawerList/CityDrawerList";

const CustomDrawer = withStyles({
  paper: {
    height: (props) => props.height,
    backgroundColor: "#1e2a32",
    borderRadius: "20px 20px 0px 0px",
  },
})((props) => {
  const { classes, ...rest } = props;
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <SwipeableDrawer classes={{ paper: classes.paper }} {...rest} />;
});

const ClearButton = withStyles({
  root: {
    position: "absolute",
    top: "0",
    right: "0",
    color: "#fff",
  },
})(IconButton);

const tempData = [
  {
    name: "Wendy Watson",
    occupation: "Doctor",
    img: `https://randomuser.me/api/portraits/thumb/men/${1}.jpg`,
    date_died: Date.now() - 10 * 86400000,
  },
  {
    name: "Dustin Watson",
    occupation: "Doctor",
    img: `https://randomuser.me/api/portraits/thumb/men/${2}.jpg`,
    date_died: Date.now() - 13 * 86400000,
  },
  {
    name: "Shane Fisher",
    occupation: "Nurse",
    img: `https://randomuser.me/api/portraits/thumb/men/${3}.jpg`,
    date_died: Date.now() - 25 * 86400000,
  },
];

function CityDrawer() {
  const [memorials, setMemorials] = useState(tempData);
  const [openDrawer, setOpenDrawer] = useState(true);

  const [filter, setFilter] = useState("Most recent");
  const filterOptions = ["Most recent", "Name(A-Z)", "Name(Z-A)"];
  // TODO: state to manage between half & full
  // const [isFullScreen, setisFullScreen] = useState(true);

  // TODO: logic to make request to fetch people associated to a city    given as a prop?

  // TODO: add logic to filter memorials

  const toggleDrawer = (state) => {
    setOpenDrawer(state);
  };

  return (
    <>
      <Button onClick={toggleDrawer}>open</Button>
      <CustomDrawer
        // height is used to control the height of the CustomDrawer
        height="50%"
        anchor="bottom"
        open={openDrawer}
        containerStyle={{ height: "calc(100% - 64px)", top: 64 }}
        onClose={() => toggleDrawer(false)}
        onOpen={() => toggleDrawer(true)}
      >
        <ClearButton type="button" onClick={() => toggleDrawer(false)}>
          <ClearIcon fontSize="large" />
        </ClearButton>
        <CityDrawerHeader city="New York" date_updated={Date.now()} />
        <CityDrawerFilter selected={filter} handleClick={setFilter} filters={filterOptions} />
        <CityDrawerList memorials={memorials} />
      </CustomDrawer>
    </>
  );
}

export default CityDrawer;
