import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import InputComponent from "../../components/InputComponent/InputComponent";
import FileInputComponent from "../../components/FileInputComponent/FileInputComponent";
import { Container, CloseButton, FormHeader, FormTheme } from "../../components/SubmitProfile/CommonComponents";

const marginBottom = { "margin-bottom": "1rem" };

const PhotoInstruction = styled.p`
  color: inherit;
  display: flex;
  margin: 0;
  margin-bottom: 1rem;
`;

const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DeceasedImage = styled.img`
  max-width: 128px;
  max-height: 128px;
  margin-bottom: 1rem;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
`;

const AddButton = styled.button`
  align-self: center;
  background-color: #fff;
  border: 0;
  border-radius: 3rem;
  color: #000;
  font-size: 1.5rem;
  outline: 0;
  user-select: none;
  padding: 0.8rem 2rem;

  &:active {
    /* INFO: Below can be deleted, just wanted a way to show users that button is clicked */
    background-color: rgba(225, 225, 225, 0.9);
    transform: scale(1.1);
  }
`;

const TributeDetails = ({
  tributeMessage,
  setTributeMessage,
  picture,
  setPicture,
  pageNum,
  submitProfile,
  handleClose,
}) => {
  const handlePictureUpload = (e) => {
    // TODO: Automatically resize photo
    // Source for toBase64 function: https://stackoverflow.com/a/57272491
    const toBase64 = (file) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });

    toBase64(e.target.files[0])
      .then((res) => {
        setPicture(res);
      })
      .catch((err) => {
        console.error(err); // eslint-disable-line no-console
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
            type="textarea"
            value={tributeMessage}
            setValue={setTributeMessage}
            placeholder="Tribute"
            containerCustomStyles={{ ...marginBottom }}
          />
          {picture ? (
            <DeceasedImage src={picture} alt="deceased person" />
          ) : (
            <PhotoInstruction>Attach a photo</PhotoInstruction>
          )}
          <FileInputComponent
            fileId="photo-of-deceased"
            accept={[".jpg", ".jpeg", ".png", ".bmp"]}
            handleFileUpload={handlePictureUpload}
            customLabelStyle={picture ? { "font-size": "1.2rem", "min-height": "46px" } : {}}
          >
            {picture ? "Use another photo" : "+"}
          </FileInputComponent>
        </div>
      </main>
      <AddButton type="button" onClick={submitProfile}>
        Submit
      </AddButton>
    </Container>
  );
};

TributeDetails.propTypes = {
  tributeMessage: PropTypes.string.isRequired,
  setTributeMessage: PropTypes.func.isRequired,
  picture: PropTypes.string.isRequired,
  setPicture: PropTypes.func.isRequired,
  pageNum: PropTypes.number.isRequired,
  submitProfile: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default TributeDetails;
