import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  display: block;
`;

function NotificationList({ notifications }) {
  return (
    <List>
      {notifications.map(({ id, user, message, date_created }) => {
        return (
          <li key={id}>
            <p>{`${user}: ${message}`}</p>
          </li>
        );
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
