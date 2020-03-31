import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import NotificationListItem from "./NotificationListItem/NotificationListItem";

const List = styled.ul`
  width: 80%;
  list-style: none;
  padding: 0;
  margin: 0 auto;
  font-size: 0.75rem;
`;

function NotificationList({ notifications }) {
  return (
    <List>
      {notifications.map(({ user, message, date_created }) => {
        return <NotificationListItem key={user} user={user} message={message} date_created={date_created} />;
      })}
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
