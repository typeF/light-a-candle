import React from "react";
import styled from "styled-components";
import CandleIcon from "../../../components/CandleIcon/CandleIcon";
import formatNumber from "utils/formatNumber";

const HomeContainer = styled.div`
  text-align: center;
  color: #fff;
`;

const HomeNumbers = styled.p`
  font-family: "Playfair Display", serif;
  font-size: 5.6rem;
  line-height: 7rem;
  margin: 0;
`;

const HomeMainText = styled.p`
  font-size: 2.5rem;
  margin: 0.5rem 0 1rem 0;
  font-weight: 500;
  font-family: "Crimson Pro", sans-serif;
  line-height: 3.3rem;
`;

const HomeBodyText = styled.p`
  font-size: 1.4rem;
  line-height: 1.9rem;
  font-weight: 100;
  margin: 0;
  padding: 0 10%;
  color: #c2b3df;
`;

function Home({ count }) {
  return (
    <HomeContainer>
      <CandleIcon size="50px" />
      <HomeNumbers>{formatNumber(count)}</HomeNumbers>
      <HomeMainText>Candles lit</HomeMainText>
      <HomeBodyText>
        in honour and remembrance of all the brave health care workers who have lost their lives in the fight against
        COVID-19
      </HomeBodyText>
    </HomeContainer>
  );
}

export default Home;
