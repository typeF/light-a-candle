import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import * as colors from "../../fixtures/colors";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Icon = styled.img`
  height: ${(props) => props.size};
  width: ${(props) => props.size};
  background-color: #667d7c;
  border-radius: 50%;
  border: 0px;
`;

const Text = styled.p`
  margin: 1rem 0 0;
  color: ${colors.white};
`;

function FooterButton({ icon, handleClick, children }) {
  return (
    <Container>
      <Icon size="50px" src={icon} onClick={handleClick} />
      <Text onClick={handleClick}>{children}</Text>
    </Container>
  );
}

FooterButton.propTypes = {
  icon: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

FooterButton.defaultProps = {
  icon: "default.svg",
};

export default FooterButton;
