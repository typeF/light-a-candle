import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import formatDate from "../../../utils/formatDate";

const DetailsContainer = styled.div``;

const DetailsSection = styled.div``;

const DetailsHeading = styled.span`
  font-family: Noto Sans;
  font-size: 12px;
  line-height: 16px;
  color: #d9cdf0;
`;

const DetailsContent = styled.p`
  font-family: Noto Sans;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
  margin-top: -2px;
  margin-bottom: 16px;
`;

const ProfileSummaryDetails = ({ profileData }) => {
  const { city, workplace, dob, dod, tribute } = profileData;
  return (
    <DetailsContainer>
      <DetailsSection>
        <DetailsHeading>City</DetailsHeading>
        <DetailsContent>{city}</DetailsContent>
      </DetailsSection>
      <DetailsSection>
        <DetailsHeading>Hospital</DetailsHeading>
        <DetailsContent>{workplace}</DetailsContent>
      </DetailsSection>
      <DetailsSection>
        <DetailsHeading>Date of birth</DetailsHeading>
        <DetailsContent>{formatDate(dob)}</DetailsContent>
      </DetailsSection>
      <DetailsSection>
        <DetailsHeading>Date of death</DetailsHeading>
        <DetailsContent>{formatDate(dod)}</DetailsContent>
      </DetailsSection>
      <DetailsSection>
        <DetailsHeading>Tribute</DetailsHeading>
        <DetailsContent>{tribute}</DetailsContent>
      </DetailsSection>
    </DetailsContainer>
  );
};

ProfileSummaryDetails.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  profileData: PropTypes.object,
};

ProfileSummaryDetails.defaultProps = {
  /* eslint-disable react/forbid-prop-types */
  profileData: {},
};

export default ProfileSummaryDetails;
