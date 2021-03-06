import React from "react";
import styled from "styled-components";

const COVIDBlock = styled.div`
  display: flex;
  background-color: #636c76;
  width: 150px;
  height: 30px;
  border-radius: 25px;
  color: white;
  align-items: center;
  margin: 0 auto 1% auto;
  justify-content: center;
  font-weight: 1.6rem;
  line-height: 22px;
`;

function COVIDBanner() {
  return <COVIDBlock>COVID-19 Memorial</COVIDBlock>;
}

export default COVIDBanner;
