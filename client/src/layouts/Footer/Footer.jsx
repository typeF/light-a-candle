import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import CandleWrapper from "../CandleWrapper/CandleWrapper";
import COVIDBanner from "../../components/COVIDBanner/COVIDBanner";
import AddHeroButton from "../../components/AddHeroButton/AddHeroButton";
import SubmitProfile from "../SubmitProfile";
import ProfileSummary from "../ProfileSummary";

const FooterContainer = styled.footer`
  width: 100%;
  margin-bottom: 10%;
  pointer-events: initial;
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

function Footer({ isMainPage, handleNotification }) {
  const [onlyShowIcon, setOnlyShowIcon] = useState("");
  // Did this quickly, could probably be implemented better
  const [showProfileSummary, setShowProfileSummary] = useState(false);
  const [summaryData, setSummaryData] = useState({});

  return (
    <FooterContainer>
      {isMainPage ? (
        <COVIDBanner />
      ) : (
        <IconsContainer>
          {onlyShowIcon !== "addHero" && onlyShowIcon !== "lightCandle" && (
            <AddHeroButton />
          ) /* This is just a filler until it gets hooked up as well; */}
          {onlyShowIcon !== "candlesLit" && onlyShowIcon !== "addHero" && (
            <CandleWrapper addNotification={handleNotification} setOnlyShowIcon={setOnlyShowIcon} />
          )}
          {onlyShowIcon !== "candlesLit" && onlyShowIcon !== "lightCandle" && (
            <AddHeroButton handleClick={setOnlyShowIcon} />
          )}
        </IconsContainer>
      )}
      {onlyShowIcon === "addHero" && (
        <SubmitProfile setShowProfileSummary={setShowProfileSummary} handleClose={() => setOnlyShowIcon("")} />
      )}
      {showProfileSummary && <ProfileSummary />}
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
