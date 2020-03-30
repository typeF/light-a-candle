import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 33px;
`;

const imgSize = "160px";

const HeroImg = styled.img`
  height: ${imgSize};
  width: ${imgSize};
  border-radius: 10px;
  margin-bottom: 8px;
`;

const HeroName = styled.div`
  font-family: Crimson Pro;
  font-size: 30px;
  line-height: 33px;
  text-align center;
  color: #FFFFFF;
  margin-bottom: 8px;
`;

const HeroTitle = styled.div`
  font-family: Noto Sans;
  font-size: 16px;
  line-height: 22px;
  text-align center;
  color: #a5b9bd;
`;

const ProfileHero = ({ profileData }) => {
  const { img, name, title } = profileData;
  return (
    <HeroContainer>
      <HeroImg src={img} alt="Worker Picture " />
      <HeroName>{name}</HeroName>
      <HeroTitle>{title}</HeroTitle>
    </HeroContainer>
  );
};

ProfileHero.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  profileData: PropTypes.object,
};

ProfileHero.defaultProps = {
  /* eslint-disable react/forbid-prop-types */
  profileData: {},
};

export default ProfileHero;
