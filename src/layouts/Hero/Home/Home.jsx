import React from "react";
import styled from "styled-components";
import CandleIcon from "../../../components/CandleIcon/CandleIcon";

const HomeContainer = styled.div`
  text-align: center;
  color: #fff;
`;

const HomeNumbers = styled.p`
  font-family: "Playfair Display", serif;
  font-size: 3rem;
  margin: 0;
`;

const HomeMainText = styled.p`
  font-size: 1.75rem;
  margin: 0.5rem 0 1rem 0;
  font-weight: 500;
`;

const HomeBodyText = styled.p`
  font-size: 0.85rem;
  font-weight: 100;
  margin: 0;
  padding: 0 10%;
`;

function Home() {
  return (
    <HomeContainer>
      <CandleIcon size="50px" />
      <HomeNumbers>100,389</HomeNumbers>
      <HomeMainText>Candles Lit</HomeMainText>
      <HomeBodyText>
        to honor and remmember all healthcare workers who devoted their lives to the fight of COVID-19.
      </HomeBodyText>
    </HomeContainer>
  );
}

export default Home;
