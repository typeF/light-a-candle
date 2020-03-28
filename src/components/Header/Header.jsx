import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TopBar = styled.div`
  margin-top: 7.5%;
`;

function Header({ value }) {
  return (
    <TopBar>
      <header>{value}</header>
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
