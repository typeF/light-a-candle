import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Notifications from "../../components/Notifications/Notifications";
import CandleButton from "../../components/CandleButton/CandleButton";

const FooterContainer = styled.footer``;

function Footer({ isMainPage }) {
  console.log(isMainPage);
  return <FooterContainer>{isMainPage ? <Notifications /> : <CandleButton />}</FooterContainer>;
}

Footer.propTypes = {
  isMainPage: PropTypes.bool,
};

Footer.defaultProps = {
  isMainPage: true,
};

export default Footer;
