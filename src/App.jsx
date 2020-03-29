import React, { useState } from "react";
import styled from "styled-components";
import Hero from "./layouts/Hero/Hero";
import Header from "./layouts/Header/Header";
import Notifications from "./components/Notifications/Notifications";
import Footer from "./layouts/Footer/Footer";

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

const ScreenButton = styled.button`
  position: absolute;
  bottom: 2%;
`;

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
    <PageContainer>
      <Header />
      <Hero />
      <Notifications notifications={notifications} />
      <Footer isMainPage={isMainPage} handleNotification={addNotification} />
      <ScreenButton type="button" onClick={() => setIsMainPage(!isMainPage)}>
        Switch
      </ScreenButton>
    </PageContainer>
  );
}

export default App;
