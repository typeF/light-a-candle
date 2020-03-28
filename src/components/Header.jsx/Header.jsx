import React from "react";
import PropTypes from "prop-types";

function Header({ value }) {
  return <header>{value}</header>;
}

Header.propTypes = {
  value: PropTypes.string,
};

Header.defaultProps = {
  value: "Light a candle",
};

export default Header;
