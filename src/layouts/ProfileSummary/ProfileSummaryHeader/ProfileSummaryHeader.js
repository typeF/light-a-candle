import React from "react";
import styled from "styled-components";
import x from "./x.svg";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderBack = styled.div`
  color: #ffffff;
  font-family: Noto Sans, sans-serif;
  font-size: 18px;
  line-height: 25px;
`;

const closeSize = 20;
const HeaderClose = styled.img`
  height: ${closeSize}
  width: ${closeSize}
`;

const ProfileSummaryHeader = ({ clickHandler }) => {
  return (
    <HeaderContainer>
      <HeaderBack onClick={() => clickHandler()}>COVID-19 Memorial</HeaderBack>
      <HeaderClose src={x} alt="Close summary button" onClick={() => clickHandler()} />
    </HeaderContainer>
  );
};

export default ProfileSummaryHeader;
