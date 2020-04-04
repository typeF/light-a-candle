import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import addHeroIcon from "assets/add-hero-icon.svg";

import CandleWrapper from "../CandleWrapper/CandleWrapper";
import COVIDBanner from "../../components/COVIDBanner/COVIDBanner";
import FooterButton from "../../components/FooterButton/FooterButton";
import SubmitProfile from "../SubmitProfile";
import ProfileSummary from "../ProfileSummary";

const FooterContainer = styled.footer`
  width: 100%;
  margin-bottom: 15%;
  pointer-events: initial;
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Numbers = styled.div`
  display: flex;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #667d7c;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NumbersText = styled.p`
  font-size: 2.4rem;
  color: white;
  margin: 0;
`;

const Text = styled.p`
  position: fixed;
  left: 15%;
  bottom: 6.5%;
  margin: 1rem 0 0;
  color: white;
  font-size: 1rem;
  width: 110%;
`;

function Footer({ isMainPage, handleNotification, count, map, handleDrawer, setMemorials, setLocation }) {
  const [onlyShowIcon, setOnlyShowIcon] = useState("");
  // Did this quickly, could probably be implemented better
  const [showProfileSummary, setShowProfileSummary] = useState(false);
  const [summaryData, setSummaryData] = useState({});

  // isOpen={openProfile}
  // profileData={profile}
  // handleClose={handleClose}
  // handleBack={closeProfileSummary}
  return (
    <FooterContainer>
      {isMainPage ? (
        <COVIDBanner />
      ) : (
        <IconsContainer>
          {onlyShowIcon !== "addHero" && onlyShowIcon !== "lightCandle" && (
            <FooterButton>Candles lit</FooterButton>
          ) /* This is just a filler until it gets hooked up as well; */}
          {onlyShowIcon !== "candlesLit" && onlyShowIcon !== "addHero" && (
            <CandleWrapper addNotification={handleNotification} setOnlyShowIcon={setOnlyShowIcon} />
          )}
          {onlyShowIcon !== "candlesLit" && onlyShowIcon !== "lightCandle" && (
            <FooterButton icon={addHeroIcon} handleClick={() => setOnlyShowIcon("addHero")}>
              add Hero
            </FooterButton>
          )}
        </IconsContainer>
      )}
      {onlyShowIcon === "addHero" && (
        <SubmitProfile
          setShowProfileSummary={setShowProfileSummary}
          setSummaryData={setSummaryData}
          handleClose={() => setOnlyShowIcon("")}
          map={map}
          handleDrawer={handleDrawer}
          setMemorials={setMemorials}
          setLocation={setLocation}
        />
      )}
      {showProfileSummary && (
        <ProfileSummary
          isOpen={() => {}}
          handleBack={setShowProfileSummary}
          handleClose={setShowProfileSummary}
          profileData={summaryData}
        />
      )}
    </FooterContainer>
  );
}

Footer.propTypes = {
  isMainPage: PropTypes.bool,
  handleNotification: PropTypes.func.isRequired,
};

Footer.defaultProps = {
  isMainPage: true,
};

export default Footer;
