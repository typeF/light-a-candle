import React from "react";
import Home from "./Home/Home";

// const HomeContainer = styled.div`

function Hero({ count }) {
  return (
    <div id="hero" className="hero">
      <Home count={count} />
    </div>
  );
}

export default Hero;
