import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Notifications from "../../components/Notifications/Notifications";
import CandleWrapper from "../CandleWrapper/CandleWrapper";

const FooterContainer = styled.footer``;

function Footer({ isMainPage }) {
  const [notifications, setNotifications] = useState([]);

  return (
    <FooterContainer>
      {isMainPage ? (
        <Notifications notifications={notifications} />
      ) : (
        <CandleWrapper addNotification={setNotifications} />
      )}
    </FooterContainer>
  );
}

Footer.propTypes = {
  isMainPage: PropTypes.bool,
};

Footer.defaultProps = {
  isMainPage: true,
};

export default Footer;
