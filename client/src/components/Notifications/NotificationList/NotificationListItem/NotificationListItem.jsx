import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import CandleIcon from "../../../CandleIcon/CandleIcon";

function timeSince(date) {
  const seconds = Math.floor((new Date() - date) / 1000);
  const interval = Math.floor(seconds / 60);
  return interval > 1 ? `${interval} minutes ago` : "just now";
}

const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 2.5%;
`;

const Message = styled.p`
  margin: 0;
  font-size: 1.1rem;
`;

const TextWrapper = styled.div`
  margin-left: 5px;
  display: flex;
  flex-direction: column;
`;

const SmallText = styled.small`
  margin: 0;
  padding: 0;
  font-size: 0.8rem;
  color: #636c76;
`;

function NotificationListItem({ user, message, date_created }) {
  return (
    <ListItem>
      <CandleIcon size="25px" />
      <TextWrapper>
        <SmallText>{timeSince(date_created)}</SmallText>
        <Message>{`${user}: ${message}`}</Message>
      </TextWrapper>
    </ListItem>
  );
}

NotificationListItem.propTypes = {
  user: PropTypes.string,
  message: PropTypes.string,
  date_created: PropTypes.instanceOf(Date).isRequired,
};

NotificationListItem.defaultProps = {
  user: "Alexa",
  message: "Thanks",
};

export default NotificationListItem;
