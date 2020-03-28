import React from "react";
import styled from "styled-components";

const Button = styled.button`
  display: block;
  background-color: grey;
  width: 100px;
  height: 50px;
  border-radius: 100px;
  margin-bottom: 30px;
`;

function CandleButton() {
  return <Button>+</Button>;
}

export default CandleButton;
