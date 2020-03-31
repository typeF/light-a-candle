import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import ProfileSummaryHeader from "./ProfileSummaryHeader";
import ProfileHero from "./ProfileHero";
import ProfileSummaryDetails from "./ProfileSummaryDetails";

const backgroundColor = "#1E2A32";

const ProfileSummaryOuterContainer = styled.div`
  position: absolute;
  z-index: 1 !important;
  background-color: ${backgroundColor};
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: auto;
`;

const ProfileSummaryContainer = styled.div`
  background-color: ${backgroundColor};
  padding: 36px 32px 0px 32px;
  max-width: 375px;
  height: 100%;
  background-color: #1e2a32;
`;

/*
Takes in a profileData prop with structure matching that of the fake data
 */
const ProfileSummary = ({ profileData }) => {
  const fakeProfileData = {
    img: "https://vignette.wikia.nocookie.net/spongebob/images/c/c2/GreenDoctor.png",
    name: "Shane Fisher",
    title: "Nurse",
    workplace: "Bellevue Hospital Center",
    city: "New York",
    province: "NY",
    country: "USA",
    dob: "1970/01/02",
    dod: "2020/03/10",
    tribute:
      " Curabitur neque tortor, tempor lobortis accumsan at, malesuada vel mauris. Vestibulum nec condimentum ipsum. Maecenas ut metus sodales, feugiat lectus quis, lacinia urna. Fusce viverra varius condimentum. Nunc nec magna gravida urna luctus pulvinar vel ut nisi. Sed commodo pellentesque odio et cursus. Duis magna magna, lobortis sed ligula in, mollis luctus justo.",
  };

  const closeSummary = () => {
    console.log("Close profile clicked");
  };

  return (
    <ProfileSummaryOuterContainer>
      <ProfileSummaryContainer>
        <ProfileSummaryHeader clickHandler={closeSummary} />
        <ProfileHero profileData={fakeProfileData} />
        <ProfileSummaryDetails profileData={fakeProfileData} />
      </ProfileSummaryContainer>
    </ProfileSummaryOuterContainer>
  );
};

ProfileSummary.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  profileData: PropTypes.object,
};

ProfileSummary.defaultProps = {
  /* eslint-disable react/forbid-prop-types */
  profileData: {},
};

export default ProfileSummary;
