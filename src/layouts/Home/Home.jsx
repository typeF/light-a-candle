import React from "react";

// Mapbox doesn't seem to like to share space. Components need z-index >= 1 with absolute positioning to stay on top of
const style = {
  position: "absolute",
  zIndex: "1",
  color: "white",
};

function Home() {
  return (
    <div id="home" className="home" style={style}>
      <h2>100,389</h2>
      <h3>Candles Lit</h3>
      <p>to honor and remmember all healthcare professionals...</p>
    </div>
  );
}

export default Home;
