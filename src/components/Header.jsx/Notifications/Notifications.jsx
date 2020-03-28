import React from "react";
import NotificationList from "./NotificationList/NotificationList";

const NotificationContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
function Notifications() {
  // some logic here to fetch data on mount
  return (
    <NotificationContainer>
      <NotificationList />
    </NotificationContainer>
  );
}

export default Notifications;
