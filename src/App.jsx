import React, { useState } from "react";
import styled from "styled-components";
import Hero from "./layouts/Hero/Hero";
import Header from "./layouts/Header/Header";
import Footer from "./layouts/Footer/Footer";

const PageContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

function App() {
  // Boolean to swtich between 'homepage' & 'map'
  const [isMainPage, setIsMainPage] = useState(false);

  return (
    <PageContainer>
      <Header />
      <Hero />
      <button type="button" onClick={() => setIsMainPage(!isMainPage)}>
        Switch
      </button>
      <Footer isMainPage={isMainPage} />
    </PageContainer>
  );
}

export default App;
