import React from "react";
import styled from "styled-components";
import NotificationList from "./NotificationList/NotificationList";

const NotificationContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const tempData = [
  { user: "Alexa", message: "Thanks", date_created: Date.now() },
  { user: "Frank", message: "Thanks", date_created: Date.now() },
  { user: "Benard", message: "Thanks", date_created: Date.now() },
];
function Notifications() {
  // some logic here to fetch data on mount
  return (
    <NotificationContainer>
      <NotificationList notifications={tempData} />
    </NotificationContainer>
  );
}

export default Notifications;
