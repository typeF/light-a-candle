import React, { useState } from "react";
import styled from "styled-components";
import InputComponent from "../../components/InputComponent/InputComponent";

const marginBottom = { "margin-bottom": "1rem" };

const Container = styled.div`
  background-color: black;
  box-sizing: border-box; /* TODO: This should be global for all elements */
  color: white;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 1.5rem;
  position: relative;
  justify-content: space-between;
`;

const CloseButton = styled.div`
  /* TODO: This needs to be refactored to look like a real close button */
  position: absolute;
  top: 1rem;
  right: 1rem;
  &:after {
    content: "x";
    color: #fff;
    font-size: 2rem;
    font-weight: 900;
    font-family: Arial, sans-serif;
  }
`;

const FormHeader = styled.h1`
  display: flex;
  font-size: 1.2rem;
  font-weight: 300;
  margin: 0;
  margin-bottom: 1.5rem;
`;

const FormTheme = styled.h2`
  display: flex;
  font-size: 1.2rem;
  font-weight: 300;
  margin: 0;
  margin-bottom: 1.5rem;
`;

const NextButton = styled.button`
  align-self: flex-end;
  background-color: inherit;
  border: 0;
  color: inherit;
  font-size: 1.5rem;
  outline: 0;
  user-select: none;

  &:active {
    /* INFO: Below can be deleted, just wanted a way to show users that button is clicked */
    background-color: rgba(75, 75, 75, 0.9);
    transform: scale(1.1);
  }
`;

const LocationDetails = () => {
  // TODO: These states will likely need to be passed from parent in order to share with page 2 & 3
  const [country, setCountry] = useState(""); // TODO: Use dropdown
  const [province, setProvince] = useState(""); // TODO: Use dropdown
  const [city, setCity] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [occupation, setOccupation] = useState("");

  return (
    <Container>
      <CloseButton onClick={() => console.log("Close this form and go back to main page")} />
      <main>
        <FormHeader>Report a death 2/3</FormHeader>
        <FormTheme>Healthcare workers who passed away during COVID-19.</FormTheme>
        <div>
          <InputComponent
            value={country}
            setValue={setCountry}
            placeholder="Country*"
            containerCustomStyles={{ ...marginBottom }}
          />
          <InputComponent
            value={province}
            setValue={setProvince}
            placeholder="Province/State*"
            containerCustomStyles={{ ...marginBottom }}
          />
          <InputComponent
            value={city}
            setValue={setCity}
            placeholder="City/Town*"
            containerCustomStyles={{ ...marginBottom }}
          />
          <InputComponent
            value={hospitalName}
            setValue={setHospitalName}
            placeholder="Hospital"
            containerCustomStyles={{ ...marginBottom }}
          />
          <InputComponent
            value={occupation}
            setValue={setOccupation}
            placeholder="Title/Occupation"
            containerCustomStyles={{ ...marginBottom }}
          />
        </div>
      </main>
      <NextButton type="button" onClick={() => console.log("Next button clicked, go to page 3")}>
        Next
      </NextButton>
    </Container>
  );
};

export default LocationDetails;
