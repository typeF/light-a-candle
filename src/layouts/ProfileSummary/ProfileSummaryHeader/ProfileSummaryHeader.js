import React from "react";
import styled from "styled-components";
import x from "./x.svg";
import chevronLeft from "./chevron-left.svg";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderBack = styled.div`
  display: flex;
  cursor: pointer;
`;

const HeaderBackText = styled.span`
  color: #ffffff;
  font-family: Noto Sans, sans-serif;
  font-size: 18px;
  line-height: 25px;
`;

const HeaderBackImg = styled.img``;

const closeSize = 20;

const HeaderClose = styled.img`
  height: ${closeSize};
  width: ${closeSize};
  cursor: pointer;
`;

const ProfileSummaryHeader = ({ clickHandler }) => {
  return (
    <HeaderContainer>
      <HeaderBack onClick={() => clickHandler()}>
        <HeaderBackImg src={chevronLeft} alt="Summary back chevron" />
        <HeaderBackText>COVID-19 Memorial</HeaderBackText>
      </HeaderBack>
      <HeaderClose src={x} alt="Close summary button" onClick={() => clickHandler()} />
    </HeaderContainer>
  );
};

export default ProfileSummaryHeader;
