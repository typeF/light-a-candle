import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Notifications from "../../components/Notifications/Notifications";
import CandleWrapper from "../CandleWrapper/CandleWrapper";

const FooterContainer = styled.footer`
  width: 100%;
`;

const tempData = [
  { user: "Alexa", message: "Thanks", date_created: Date.now() },
  { user: "Frank", message: "Thanks", date_created: Date.now() },
  { user: "Benard", message: "Thanks", date_created: Date.now() },
];

function Footer({ isMainPage }) {
  const [notifications, setNotifications] = useState(tempData);

  const addNotification = (notification) => {
    setNotifications((state) => [...state, notification]);
  };

  return (
    <FooterContainer>
      {isMainPage ? (
        <Notifications notifications={notifications} />
      ) : (
        <CandleWrapper addNotification={addNotification} />
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
