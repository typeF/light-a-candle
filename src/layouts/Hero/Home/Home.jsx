import React from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  text-align: center;
`;
function Home() {
  return (
    <HomeContainer>
      <h2>100,389</h2>
      <h3>Candles Lit</h3>
      <p>to honor and remmember all healthcare professionals...</p>
    </HomeContainer>
  );
}

export default Home;
