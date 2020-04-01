import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import NotificationList from "./NotificationList/NotificationList";
import { getAllCandles } from "../../api/candlesApi";

const NotificationContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  max-height: 120px;
  overflow: scroll;
  pointer-events: initial;
`;

function Notifications({ notifications }) {
  // TODO: create scrolling animation

  // Fetches candle data from back end
  useEffect(() => {
    getAllCandles()
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.err(`Error fetching candles: ${err}`);
      });
  });

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
