import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import COVIDBanner from "../../components/COVIDBanner/COVIDBanner";

const TopBar = styled.header`
  margin-top: 7.5%;
  pointer-events: initial;
`;

const HeaderText = styled.div`
  color: #fff;
  margin: 0 auto;
  font-size: ${(props) => (props.isMainPage ? "1.6rem" : "1rem")};
`;

function Header({ isMainPage }) {
  return (
    <TopBar>
      {!isMainPage && <COVIDBanner />}
      <HeaderText isMainPage={isMainPage}>
        {isMainPage ? "Light up for COVID-19" : "For all our brave health care heroes"}
      </HeaderText>
    </TopBar>
  );
}

Header.propTypes = {
  isMainPage: PropTypes.bool,
};

Header.defaultProps = {
  isMainPage: true,
};

export default Header;
