import React, { useState } from "react";
import PersonalDetails from "./PersonalDetails"; // Page 1
import LocationDetails from "./LocationDetails"; // Page 2
import TributeDetails from "./TributeDetails"; // Page 3

const SubmitProfile = () => {
  const [pageNum, setPageNum] = useState(1);

  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState(""); // TODO: use proper date in utc
  const [deathDate, setDeathDate] = useState(""); // TODO: use proper date in utc

  const [country, setCountry] = useState(""); // TODO: Use dropdown
  const [province, setProvince] = useState(""); // TODO: Use dropdown
  const [city, setCity] = useState("");
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
      hospitalName,
      occupation,
      tributeMessage,
      picture,
    };

    // TODO: Make backend call with axios and go to summary page
  };

  return (
    <div>
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
          hospitalName={hospitalName}
          setHospitalName={setHospitalName}
          occupation={occupation}
          setOccupation={setOccupation}
          pageNum={pageNum}
          handleSubmit={handleLocationDetailsSubmit}
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
        />
      )}
    </div>
  );
};

export default SubmitProfile;
