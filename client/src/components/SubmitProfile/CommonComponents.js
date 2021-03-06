import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import x from "../../assets/x.svg";

export const Container = styled.div`
  background-color: #1e2a32;
  box-sizing: border-box; /* TODO: This should be global for all elements */
  color: white;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 1.5rem;
  position: relative;
  justify-content: space-between;
`;

const StyledCloseButton = styled.img`
  /* TODO: This needs to be refactored to look like a real close button */
  cursor: pointer;
  position: absolute;
  top: 3%;
  right: 8%;
`;

export const CloseButton = ({ onClick }) => <StyledCloseButton onClick={onClick} src={x} alt="Close Button" />;
CloseButton.propTypes = {
  onClick: PropTypes.func,
};
CloseButton.defaultProps = {
  onClick: () => {},
};

export const FormContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const FormHeader = styled.h1`
  display: flex;
  font-size: 3rem;
  font-weight: 300;
  margin: 1rem 1.5rem 1.5rem 1.5rem;
  font-family: "Crimson Pro", serif;
`;

export const FormTheme = styled.h2`
  display: flex;
  color: #d9cdf0;
  font-size: 1.4rem;
  font-weight: 300;
  margin: 1rem 1.5rem 3rem 1.5rem;
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
