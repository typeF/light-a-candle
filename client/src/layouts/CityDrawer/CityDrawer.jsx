import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { SwipeableDrawer, IconButton } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import CityDrawerHeader from "./CityDrawerHeader/CityDrawerHeader";
import CityDrawerFilter from "./CityDrawerFilter/CityDrawerFilter";
import CityDrawerList from "./CityDrawerList/CityDrawerList";

const CustomDrawer = withStyles({
  paper: {
    height: (props) => props.height,
    backgroundColor: "#1e2a32",
    borderRadius: "20px 20px 0px 0px",
    // transition: "transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms, height 225ms cubic-bezier(0,0,0.2,1) 0ms !important",
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

const ExpandButton = withStyles({
  root: {
    position: "absolute",
    top: "-1.25%",
    color: "#fff",
    left: "45.5%",
  },
})(IconButton);

// const tempData = [
//   {
//     name: "Wendy Watson",
//     occupation: "Doctor",
//     img: `https://randomuser.me/api/portraits/thumb/men/${1}.jpg`,
//     date_died: Date.now() - 10 * 86400000,
//   },
//   {
//     name: "Dustin Watson",
//     occupation: "Doctor",
//     img: `https://randomuser.me/api/portraits/thumb/men/${2}.jpg`,
//     date_died: Date.now() - 13 * 86400000,
//   },
//   {
//     name: "Shane Fisher",
//     occupation: "Nurse",
//     img: `https://randomuser.me/api/portraits/thumb/men/${3}.jpg`,
//     date_died: Date.now() - 25 * 86400000,
//   },
// ];

function CityDrawer({ isOpen, handleDrawer, city, data }) {
  const memorials = data;
  // const [openDrawer, setOpenDrawer] = useState(true);

  const [filter, setFilter] = useState("Most recent");
  const filterOptions = ["Most recent", "Name(A-Z)", "Name(Z-A)"];
  // TODO: state to manage between half & full
  const [isFullScreen, setisFullScreen] = useState(false);

  // TODO: logic to make request to fetch people associated to a city    given as a prop?

  // TODO: add logic to filter memorials

  const toggleFullScreen = (state) => {
    setisFullScreen(state);
  };

  const handleClose = (state) => {
    setisFullScreen(state);
    handleDrawer(state);
  };

  const toggleDrawer = (state) => {
    handleDrawer(state);
  };

  return (
    <>
      {/* <Button onClick={toggleDrawer}>open</Button> */}
      <CustomDrawer
        // height is used to control the height of the CustomDrawer
        height={isFullScreen ? "100%" : "50%"}
        anchor="bottom"
        open={isOpen}
        containerStyle={{ height: "calc(100% - 64px)", top: 64 }}
        onClose={() => toggleDrawer(false)}
        onOpen={() => toggleDrawer(true)}
      >
        {!isFullScreen && (
          <ExpandButton type="button" onClick={() => toggleFullScreen(true)}>
            <ExpandLessIcon fontSize="small" />
          </ExpandButton>
        )}
        <ClearButton type="button" onClick={() => handleClose(false)}>
          <ClearIcon fontSize="large" />
        </ClearButton>
        <CityDrawerHeader city={city.city} />
        <CityDrawerFilter selected={filter} handleClick={setFilter} filters={filterOptions} />
        <CityDrawerList memorials={memorials} handleClose={handleClose} />
      </CustomDrawer>
    </>
  );
}

CityDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleDrawer: PropTypes.func.isRequired,
  city: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }),
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      img: PropTypes.string,
      name: PropTypes.string,
      title: PropTypes.string,
      workplace: PropTypes.string,
      city: PropTypes.string,
      province: PropTypes.string,
      country: PropTypes.string,
      dob: PropTypes.string,
      dod: PropTypes.string,
      date_died: PropTypes.instanceOf(Date),
      tribute: PropTypes.string,
    })
  ).isRequired,
};

CityDrawer.defaultProps = {
  city: {
    city: "New York",
    country: "USA",
  },
};
export default CityDrawer;
