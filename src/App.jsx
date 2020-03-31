import React, { useState } from "react";
import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Hero from "./layouts/Hero/Hero";
import Header from "./layouts/Header/Header";
import Notifications from "./components/Notifications/Notifications";
import Footer from "./layouts/Footer/Footer";
// import CityDrawer from "./layouts/CityDrawer/CityDrawer";
import Mapbox from "./layouts/Mapbox";

const PageContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(30, 42, 50, 0.4);
  font-family: "Crimson Pro", serif;
  font-weight: 300;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
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
    setIsMainPage(true);
    setNotifications((state) => [...state, notification]);
  };

  return (
    // TODO: refractor HOC to manage mainPage toggle
    <div>
      <Mapbox />
      <PageContainer>
        <Header isMainPage={isMainPage} />
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
        {/* <CityDrawer /> */}
      </PageContainer>
    </div>
  );
}

export default App;
