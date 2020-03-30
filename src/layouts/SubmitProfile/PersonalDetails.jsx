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

const PersonalDetails = () => {
  // TODO: These states will likely need to be passed from parent in order to share with page 2 & 3
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState(""); // TODO: use proper date in utc
  const [deathDate, setDeathDate] = useState(""); // TODO: use proper date in utc

  return (
    <Container>
      <CloseButton onClick={() => console.log("Close this form and go back to main page")} />
      <main>
        <FormHeader>Add a name 1/3</FormHeader>
        <FormTheme>Personal Details</FormTheme>
        <div>
          <InputComponent
            value={firstName}
            setValue={setFirstName}
            placeholder="First Name"
            containerCustomStyles={{ ...marginBottom }}
          />
          <InputComponent
            value={middleName}
            setValue={setMiddleName}
            placeholder="Middle Name"
            containerCustomStyles={{ ...marginBottom }}
          />
          <InputComponent
            value={lastName}
            setValue={setLastName}
            placeholder="Last Name"
            containerCustomStyles={{ ...marginBottom }}
          />
          <InputComponent
            // TODO: This needs to be a Date picker component
            value={dob}
            setValue={setDob}
            placeholder="Date of Birth"
            containerCustomStyles={{ ...marginBottom }}
          />
          <InputComponent
            // TODO: This needs to be a Date picker component
            value={deathDate}
            setValue={setDeathDate}
            placeholder="Last Name"
            containerCustomStyles={{ ...marginBottom }}
          />
        </div>
      </main>
      <NextButton type="button" onClick={() => console.log("Next button clicked, go to page 2")}>
        Next
      </NextButton>
    </Container>
  );
};

export default PersonalDetails;
