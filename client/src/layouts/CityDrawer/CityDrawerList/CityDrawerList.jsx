import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import ProfileSummary from "layouts/ProfileSummary/ProfileSummary";
import CityDrawerListItem from "./CityDrawListItem/CityDrawerListItem";

const ListWrapper = styled.div`
  width: 85%;
  margin: 0 auto;
  position: relative;
  color: #fff;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

function CityDrawerList({ memorials, handleClose }) {
  const [openProfile, setOpenProfile] = useState(false);
  // use to pass info about which profile to pass into profileSummary
  const [profile, setProfile] = useState({});

  const openProfileSummary = (currentProfile) => {
    setOpenProfile(true);
    setProfile(currentProfile);
  };

  const closeProfileSummary = () => {
    setOpenProfile(false);
  };

  return (
    <>
      <ListWrapper role="presentation">
        <List>
          {memorials.map(({ id, ...rest }) => (
            <CityDrawerListItem key={id} {...rest} handleClick={openProfileSummary} />
          ))}
        </List>
      </ListWrapper>
      <ProfileSummary
        isOpen={openProfile}
        profileData={profile}
        handleClose={handleClose}
        handleBack={closeProfileSummary}
      />
    </>
  );
}

CityDrawerList.propTypes = {
  memorials: PropTypes.arrayOf(
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
  handleClose: PropTypes.func.isRequired,
};

export default CityDrawerList;
