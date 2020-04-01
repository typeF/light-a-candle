import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import PersonalDetails from "./PersonalDetails"; // Page 1
import LocationDetails from "./LocationDetails"; // Page 2
import TributeDetails from "./TributeDetails"; // Page 3

const Container = styled.div`
  /* TODO: It's probably better to use a portal (ie. modals) but this is the fastest way to get it on the screen for now
     It may not be reliable if any one of its parents change in the future though.
  */
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1;
`;

const SubmitProfile = ({ handleClose }) => {
  const [pageNum, setPageNum] = useState(1);

  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState(""); // TODO: use proper date in utc
  const [deathDate, setDeathDate] = useState(""); // TODO: use proper date in utc

  const [country, setCountry] = useState(""); // TODO: Use dropdown
  const [province, setProvince] = useState(""); // TODO: Use dropdown
  const [city, setCity] = useState("");
  const [coords, setCoords] = useState([0, 0]);
  const [hospitalName, setHospitalName] = useState("");
  const [occupation, setOccupation] = useState("");

  const [tributeMessage, setTributeMessage] = useState("");
  const [picture, setPicture] = useState("");

  const handlePersonalDetailsSubmit = () => {
    // TODO: Handle validations (ie. required fields and error output)

    setPageNum(pageNum + 1);
  };

  const handleLocationDetailsSubmit = () => {
    // TODO: Handle validations (ie. required fields and error output)

    setPageNum(pageNum + 1);
  };

  const handleSubmitProfile = () => {
    const data = {
      firstName,
      middleName,
      lastName,
      dob,
      deathDate,
      country,
      province,
      city,
      coords,
      hospitalName,
      occupation,
      tributeMessage,
      picture,
    };

    // TODO: Make backend call with axios and go to summary page
  };

  return (
    <Container>
      {pageNum === 1 && (
        <PersonalDetails
          firstName={firstName}
          setFirstName={setFirstName}
          middleName={middleName}
          setMiddleName={setMiddleName}
          lastName={lastName}
          setLastName={setLastName}
          dob={dob}
          setDob={setDob}
          deathDate={deathDate}
          setDeathDate={setDeathDate}
          pageNum={pageNum}
          handleSubmit={handlePersonalDetailsSubmit}
          handleClose={handleClose}
        />
      )}
      {pageNum === 2 && (
        <LocationDetails
          country={country}
          setCountry={setCountry}
          province={province}
          setProvince={setProvince}
          city={city}
          setCity={setCity}
          coords={coords}
          setCoords={setCoords}
          hospitalName={hospitalName}
          setHospitalName={setHospitalName}
          occupation={occupation}
          setOccupation={setOccupation}
          pageNum={pageNum}
          handleSubmit={handleLocationDetailsSubmit}
          handleClose={handleClose}
        />
      )}
      {pageNum === 3 && (
        <TributeDetails
          tributeMessage={tributeMessage}
          setTributeMessage={setTributeMessage}
          picture={picture}
          setPicture={setPicture}
          pageNum={pageNum}
          submitProfile={handleSubmitProfile}
          handleClose={handleClose}
        />
      )}
    </Container>
  );
};

SubmitProfile.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default SubmitProfile;
