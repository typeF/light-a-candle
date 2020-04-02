import React from "react";
import PropTypes from "prop-types";
import InputComponent from "../../components/InputComponent/InputComponent";
import {
  Container,
  CloseButton,
  FormContainer,
  FormHeader,
  FormTheme,
  NextButton,
} from "../../components/SubmitProfile/CommonComponents";

const marginBottom = { "margin-bottom": "3rem" };

const PersonalDetails = ({
  firstName,
  setFirstName,
  middleName,
  setMiddleName,
  lastName,
  setLastName,
  dob,
  setDob,
  dod,
  setDod,
  pageNum,
  handleSubmit,
  handleClose,
}) => {
  return (
    <Container>
      <CloseButton onClick={handleClose} />
      <main>
        <FormHeader>Add a Hero {pageNum}/3</FormHeader>
        <FormTheme>Health care workers who passed away during COVID-19</FormTheme>
        <FormContainer>
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
            type="date"
            value={dob}
            setValue={setDob}
            label="Date of Birth"
            containerCustomStyles={{ ...marginBottom }}
          />
          <InputComponent
            type="date"
            value={dod}
            setValue={setDod}
            label="Date of Death"
            containerCustomStyles={{ ...marginBottom }}
          />
        </FormContainer>
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
  dod: PropTypes.string.isRequired,
  setDod: PropTypes.func.isRequired,
  pageNum: PropTypes.number.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default PersonalDetails;
