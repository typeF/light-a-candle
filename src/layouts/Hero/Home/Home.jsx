import React from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  text-align: center;
`;

const HomeNumbers = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 3px;
  margin: 0;
`;

const HomeMainText = styled.p`
  font-size: 1.5rem;
  margin: 0.5rem 0 1rem 0;
`;

const HomeBodyText = styled.p`
  font-size: 1rem;
  margin: 0;
`;

function Home() {
  return (
    <HomeContainer>
      <HomeNumbers>100,389</HomeNumbers>
      <HomeMainText>Candles Lit</HomeMainText>
      <HomeBodyText>to honor and remmember all healthcare professionals...</HomeBodyText>
    </HomeContainer>
  );
}

export default Home;
