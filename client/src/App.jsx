import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { getAllCandles, saveCandle } from "api/candlesApi";
import Hero from "./layouts/Hero/Hero";
import Header from "./layouts/Header/Header";
import Notifications from "./components/Notifications/Notifications";
import Footer from "./layouts/Footer/Footer";
import CityDrawer from "./layouts/CityDrawer/CityDrawer";
import Mapbox from "./layouts/Mapbox";

const PageContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(30, 42, 50, 0.4);
  font-family: "Noto Sans", serif;
  font-weight: 300;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  pointer-events: none;
`;

const ExpandButton = withStyles({
  root: {
    position: "absolute",
    fontSize: "2rem",
    bottom: "0.25%",
    color: "#a5b9bd",
    "pointer-events": "initial",
  },
})(IconButton);

// const tempData = [
//   { user: "Alexa", message: "Thank you so much !", date_created: Date.now() },
//   { user: "Frank", message: "You will all be forever missed", date_created: Date.now() },
//   { user: "Benard", message: "Thank you for saving my family. You are all heroes", date_created: Date.now() },
// ];

function App() {
  // Boolean to swtich between 'homepage' & 'map'
  const [isMainPage, setIsMainPage] = useState(false);
  const [candlesLit, setCandlesLit] = useState([]);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [location, setLocation] = useState({});
  const [memorials, setMemorials] = useState([]);
  const [map, setMapbox] = useState(() => () => {});

  // Fetches candle data from back end
  useEffect(() => {
    getAllCandles()
      .then((res) => setCandlesLit(res.data))
      .catch((err) => {
        console.log(`Error fetching candles: ${err}`);
      });
  }, []);

  const addNotification = (notification) => {
    setIsMainPage(true);
    saveCandle(notification);
    setCandlesLit((state) => [...state, notification]);
  };

  return (
    <div>
      <Mapbox
        mapBoxInstance={setMapbox}
        handleDrawer={setOpenDrawer}
        setLocation={setLocation}
        setMemorials={setMemorials}
      />
      <PageContainer>
        <Header isMainPage={isMainPage} />
        {isMainPage && (
          <>
            <Hero count={candlesLit.length} />
            <Notifications notifications={candlesLit} />
          </>
        )}
        <Footer
          isMainPage={isMainPage}
          handleNotification={addNotification}
          count={candlesLit.length}
          location={location}
          map={map}
          handleDrawer={setOpenDrawer}
          setMemorials={setMemorials}
          setLocation={setLocation}
        />
        <ExpandButton type="button" onClick={() => setIsMainPage(!isMainPage)}>
          <ExpandMoreIcon />
        </ExpandButton>
        <CityDrawer isOpen={openDrawer} handleDrawer={setOpenDrawer} city={location} data={memorials} />
      </PageContainer>
    </div>
  );
}

export default App;
