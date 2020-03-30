import React, { useState } from "react";
import styled from "styled-components";
import Hero from "./layouts/Hero/Hero";
import Header from "./layouts/Header/Header";
import Notifications from "./components/Notifications/Notifications";
import Footer from "./layouts/Footer/Footer";
import { withStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const PageContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #1e2a32;
  font-family: "Crimson Pro", serif;
  font-weight: 300;
  position: relative;
`;
const ExpandButton = withStyles({
  root: {
    position: "absolute",
    fontSize: "2rem",
    bottom: "0.25%",
    color: "#a5b9bd",
  },
})(IconButton);

const tempData = [
  { user: "Alexa", message: "Thank you so much !", date_created: Date.now() },
  { user: "Frank", message: "You will all be forever missed", date_created: Date.now() },
  { user: "Benard", message: "Thank you for saving my family. You are all heroes", date_created: Date.now() },
];

function App() {
  // Boolean to swtich between 'homepage' & 'map'
  const [isMainPage, setIsMainPage] = useState(true);
  const [notifications, setNotifications] = useState(tempData);

  const addNotification = (notification) => {
    setNotifications((state) => [...state, notification]);
  };

  return (
    // TODO: refractor HOC to manage mainPage toggle
    <PageContainer>
      <Header />
      {isMainPage && (
        <>
          <Hero />
          <Notifications notifications={notifications} />
        </>
      )}
      <Footer isMainPage={isMainPage} handleNotification={addNotification} />
      <ExpandButton type="button" onClick={() => setIsMainPage(!isMainPage)}>
        <ExpandMoreIcon />
      </ExpandButton>
    </PageContainer>
  );
}

export default App;
