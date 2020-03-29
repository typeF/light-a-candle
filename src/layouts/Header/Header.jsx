import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TopBar = styled.div`
  margin-top: 7.5%;
`;

const HeaderText = styled.div`
  margin: 0;
  color: #fff;
`;

function Header({ value }) {
  return (
    <TopBar>
      <header>
        <HeaderText>{value}</HeaderText>
      </header>
    </TopBar>
  );
}

Header.propTypes = {
  value: PropTypes.string,
};

Header.defaultProps = {
  value: "Light a candle",
};

export default Header;
