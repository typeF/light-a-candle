import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

function timeSince(date) {
  const seconds = Math.floor((new Date() - date) / 1000);
  const interval = Math.floor(seconds / 60);
  return interval > 1 ? `${interval} minutes ago` : "just now";
}

const ListItem = styled.li`
  /* display: flex; */
`;

const Message = styled.p`
  margin: 0;
  font-size: 0.75rem;
`;

const SmallText = styled.small`
  margin: 0;
  padding: 0;
  font-size: 0.45rem;
  color: #636c76;
`;

function NotificationListItem({ user, message, date_created }) {
  return (
    <ListItem>
      <SmallText>{timeSince(date_created)}</SmallText>
      <Message>{`${user}: ${message}`}</Message>
    </ListItem>
  );
}

NotificationListItem.propTypes = {
  user: PropTypes.string,
  message: PropTypes.string,
  date_created: PropTypes.instanceOf(Date),
};

NotificationListItem.defaultProps = {
  user: "Alexa",
  message: "Thanks",
  date_created: Date.now(),
};

export default NotificationListItem;
