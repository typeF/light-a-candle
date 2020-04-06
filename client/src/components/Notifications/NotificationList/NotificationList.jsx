import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import NotificationListItem from "./NotificationListItem/NotificationListItem";

const List = styled.ul`
  width: 80%;
  list-style: none;
  padding: 0;
  margin: 0 auto;
  font-size: 1.2rem;
`;

function NotificationList({ notifications }) {
  const messsagesEndRef = useRef(null);

  // manages auto scroll
  const scrollToBottom = () => {
    messsagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [notifications]);

  return (
    <List>
      {notifications.map(({ name, message, createdAt }) => {
        return <NotificationListItem key={name} name={name} message={message} date_created={createdAt} />;
      })}
      <div ref={messsagesEndRef} />
    </List>
  );
}

NotificationList.propTypes = {
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      user: PropTypes.string,
      message: PropTypes.string,
      date_created: PropTypes.instanceOf(Date),
    })
  ),
};

NotificationList.defaultProps = {
  notifications: [{ user: "Alexa", message: "Thanks", date_created: Date.now() }],
};
export default NotificationList;
