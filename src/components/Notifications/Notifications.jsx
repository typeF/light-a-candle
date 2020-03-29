import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import NotificationList from "./NotificationList/NotificationList";

const NotificationContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
`;

function Notifications({ notifications }) {
  // some logic here to fetch data on mount
  return (
    <NotificationContainer>
      <NotificationList notifications={notifications} />
    </NotificationContainer>
  );
}

Notifications.propTypes = {
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      user: PropTypes.string,
      message: PropTypes.string,
      date_created: PropTypes.instanceOf(Date),
    })
  ),
};

Notifications.defaultProps = {
  notifications: [{ user: "Alexa", message: "Thanks", date_created: Date.now() }],
};

export default Notifications;
