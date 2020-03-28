import React from "react";
import styled from "styled-components";
import Hero from "./layouts/Hero/Hero";
import Header from "./components/Header.jsx/Header";

const PageContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

function App() {
  return (
    <PageContainer>
      <Header />
      <Hero />
    </PageContainer>
  );
}

export default App;
