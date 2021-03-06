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
`;

const HomeBodyText = styled.p`
  font-size: 1.4rem;
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
      <HomeMainText>Candles Lit</HomeMainText>
      <HomeBodyText>
        to honor and remember all healthcare workers who devoted their lives to the fight of COVID-19.
      </HomeBodyText>
    </HomeContainer>
  );
}

export default Home;
