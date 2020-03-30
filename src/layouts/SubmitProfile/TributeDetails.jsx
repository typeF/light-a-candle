import React, { useState } from "react";
import styled from "styled-components";
import InputComponent from "../../components/InputComponent/InputComponent";
import FileInputComponent from "../../components/FileInputComponent/FileInputComponent";

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

const PhotoInstruction = styled.p`
  color: inherit;
  display: flex;
  margin: 0;
  margin-bottom: 1rem;
`;

const DeceasedImage = styled.img`
  max-width: 100%;
  margin-bottom: 1rem;
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

const LocationDetails = () => {
  // TODO: These states will likely need to be passed from parent in order to share with page 2 & 3
  const [tributeMessage, setTributeMessage] = useState("");
  const [picture, setPicture] = useState("");

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
      <CloseButton onClick={() => console.log("Close this form and go back to main page")} />
      <main>
        <FormHeader>Report a death 3/3</FormHeader>
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
      <AddButton type="button" onClick={() => console.log("Next button clicked, go to page 2")}>
        Submit
      </AddButton>
    </Container>
  );
};

export default LocationDetails;
