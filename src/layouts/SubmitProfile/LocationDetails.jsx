import React, { useState } from "react";
import InputComponent from "../../components/InputComponent/InputComponent";
import {
  Container,
  CloseButton,
  FormHeader,
  FormTheme,
  NextButton,
} from "../../components/SubmitProfile/CommonComponents";

const marginBottom = { "margin-bottom": "1rem" };

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
