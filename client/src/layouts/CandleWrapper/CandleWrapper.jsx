import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import CandleForm from "../../components/CandleForm/CandleForm";
import CandleButton from "../../components/CandleButton/CandleButton";

const CandleText = styled.p`
  font-size: 1rem;
  position: fixed;
  bottom: 5.125%;
  color: white;
`;

function CandleWrapper({ addNotification, setOnlyShowIcon }) {
  const [showModal, setShowModal] = useState(false); // TODO: This is unnecessary with onlyShowIcon; Refactor later

  const handleShow = () => {
    setOnlyShowIcon("lightCandle");
    setShowModal(true);
  };

  function closeModal() {
    setOnlyShowIcon("");
    setShowModal(false);
  }

  return (
    <>
      {showModal ? (
        // Convert Form to Dialog?
        <CandleForm handleClose={closeModal} handleSubmit={addNotification} />
      ) : (
        <CandleButton handleClick={handleShow} />
      )}
      <CandleText>Light a Candle</CandleText>
    </>
  );
}

CandleWrapper.propTypes = {
  addNotification: PropTypes.func.isRequired,
  setOnlyShowIcon: PropTypes.func.isRequired,
};

CandleWrapper.defaultTypes = {};

export default CandleWrapper;
