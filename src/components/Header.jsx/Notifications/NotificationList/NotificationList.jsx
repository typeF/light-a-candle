import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const List = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  display: block;
`;

function NotificationList({ notifications }) {
  return (
    <List>
      {notifications.map((notification) => {
        return (
          <li key={notification.id}>
            <p>Alexa: Thank you so much for alskdjasld</p>
          </li>
        );
      })}
    </List>
  );
}

NotificationList.propTypes = {
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string,
      date_created: PropTypes.instanceOf(Date),
    })
  ),
};

NotificationList.defaultProps = {
  notifications: [{ message: "Thanks", date_created: Date.now() }],
};
export default NotificationList;
