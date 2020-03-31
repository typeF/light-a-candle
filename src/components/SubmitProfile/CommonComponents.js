import styled from "styled-components";

export const Container = styled.div`
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

export const CloseButton = styled.div`
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

export const FormHeader = styled.h1`
  display: flex;
  font-size: 1.2rem;
  font-weight: 300;
  margin: 0;
  margin-bottom: 1.5rem;
`;

export const FormTheme = styled.h2`
  display: flex;
  font-size: 1.2rem;
  font-weight: 300;
  margin: 0;
  margin-bottom: 1.5rem;
`;

export const NextButton = styled.button`
  align-self: flex-end;
  background-color: inherit;
  border: 0;
  color: inherit;
  font-size: 1.5rem;
  outline: 0;
  user-select: none;

  &:active {
    /* INFO: Below can be deleted, just wanted a way to show users that button is clicked */
    background-color: rgba(75, 75, 75, 0.9);
    transform: scale(1.1);
  }
`;
