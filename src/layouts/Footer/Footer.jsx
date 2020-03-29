import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import CandleWrapper from "../CandleWrapper/CandleWrapper";
import COVIDBanner from "../../components/COVIDBanner/COVIDBanner";

const FooterContainer = styled.footer`
  width: 100%;
  margin-bottom: 10%;
`;

function Footer({ isMainPage, handleNotification }) {
  return (
    <FooterContainer>
      {isMainPage ? <COVIDBanner /> : <CandleWrapper addNotification={handleNotification} />}
    </FooterContainer>
  );
}

Footer.propTypes = {
  isMainPage: PropTypes.bool,
  handleNotification: PropTypes.func.isRequired,
};

Footer.defaultProps = {
  isMainPage: true,
};

export default Footer;
