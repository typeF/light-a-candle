import React, { useState } from "react";
import PropTypes from "prop-types";
import InputComponent from "../../components/InputComponent/InputComponent";
import {
  Container,
  CloseButton,
  FormHeader,
  FormTheme,
  NextButton,
} from "../../components/SubmitProfile/CommonComponents";
import styled from "styled-components";
import axios from "axios";

const ErrorMessage = styled.p`
  color: red;
  margin-top: 2rem;
`;

const marginBottom = { "margin-bottom": "1rem" };

const LocationDetails = ({
  country,
  setCountry,
  province,
  setProvince,
  city,
  setCity,
  setCoords,
  hospitalName,
  setHospitalName,
  occupation,
  setOccupation,
  pageNum,
  handleSubmit,
  handleClose,
}) => {
  const [error, setError] = useState("");

  const handleNextButton = () => {
    let url = "";
    let location = "";
    if (city) {
      location += `${city.toLowerCase()}`;

      if (province) {
        location += `,${province.toLowerCase()}`;
      }

      url += `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?`;
      if (country) url += `${country.toLowerCase()}&`;
      url += `access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`;
    }

    axios.get(url).then((res) => {
      const [firstLocation] = res.data.features;
      const coordinates = firstLocation?.geometry?.coordinates;
      if (coordinates) {
        setCoords(coordinates);
        handleSubmit();
      } else
        setError(
          "Could not find a location, please try to input City, Province, and Country perfectly, including the spelling."
        );
    });
  };

  return (
    <Container>
      <CloseButton onClick={handleClose} />
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
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </main>
      <NextButton type="button" onClick={handleNextButton}>
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
  setCoords: PropTypes.func.isRequired,
  hospitalName: PropTypes.string.isRequired,
  setHospitalName: PropTypes.func.isRequired,
  occupation: PropTypes.string.isRequired,
  setOccupation: PropTypes.func.isRequired,
  pageNum: PropTypes.number.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default LocationDetails;
