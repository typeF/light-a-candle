import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import addHeroIcon from "../../assets/add-hero-icon.svg";
import * as colors from "../../fixtures/colors";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Icon = styled.img`
  height: ${(props) => props.size};
  width: ${(props) => props.size};
`;

const Text = styled.p`
  margin: 1rem 0 0;
  color: ${colors.white};
`;

function AddHeroButton({ handleClick }) {
  return (
    <Container>
      <Icon
        data-testid="icon"
        size="50px"
        src={addHeroIcon}
        onClick={() => {
          handleClick("addHero");
        }}
      />
      <Text
        onClick={() => {
          handleClick("addHero");
        }}
      >
        Add a hero
      </Text>
    </Container>
  );
}

AddHeroButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default AddHeroButton;
