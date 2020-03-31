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

const LocationDetails = ({
  country,
  setCountry,
  province,
  setProvince,
  city,
  setCity,
  hospitalName,
  setHospitalName,
  occupation,
  setOccupation,
  pageNum,
  handleSubmit,
}) => {
  return (
    <Container>
      <CloseButton onClick={() => console.log("Close this form and go back to main page")} />
      <main>
        <FormHeader>Report a death {pageNum}/3</FormHeader>
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
      <NextButton type="button" onClick={handleSubmit}>
        Next
      </NextButton>
    </Container>
  );
};

LocationDetails.propTypes = {
  country: PropTypes.string.isRequired,
  setCountry: PropTypes.func.isRequired,
  province: PropTypes.string.isRequired,
  setProvince: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
  setCity: PropTypes.func.isRequired,
  hospitalName: PropTypes.string.isRequired,
  setHospitalName: PropTypes.func.isRequired,
  occupation: PropTypes.string.isRequired,
  setOccupation: PropTypes.func.isRequired,
  pageNum: PropTypes.number.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default LocationDetails;
