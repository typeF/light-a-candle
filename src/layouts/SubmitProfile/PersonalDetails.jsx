import React from "react";
import PropTypes from "prop-types";
import InputComponent from "../../components/InputComponent/InputComponent";
import {
  Container,
  CloseButton,
  FormHeader,
  FormTheme,
  NextButton,
} from "../../components/SubmitProfile/CommonComponents";

const marginBottom = { "margin-bottom": "1rem" };

const PersonalDetails = ({
  firstName,
  setFirstName,
  middleName,
  setMiddleName,
  lastName,
  setLastName,
  dob,
  setDob,
  deathDate,
  setDeathDate,
  pageNum,
  handleSubmit,
}) => {
  return (
    <Container>
      <CloseButton onClick={() => console.log("Close this form and go back to main page")} />
      <main>
        <FormHeader>Report a death {pageNum}/3</FormHeader>
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
      <NextButton type="button" onClick={handleSubmit}>
        Next
      </NextButton>
    </Container>
  );
};

PersonalDetails.propTypes = {
  firstName: PropTypes.string.isRequired,
  setFirstName: PropTypes.func.isRequired,
  middleName: PropTypes.string.isRequired,
  setMiddleName: PropTypes.func.isRequired,
  lastName: PropTypes.string.isRequired,
  setLastName: PropTypes.func.isRequired,
  dob: PropTypes.string.isRequired,
  setDob: PropTypes.func.isRequired,
  deathDate: PropTypes.string.isRequired,
  setDeathDate: PropTypes.func.isRequired,
  pageNum: PropTypes.number.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default PersonalDetails;
