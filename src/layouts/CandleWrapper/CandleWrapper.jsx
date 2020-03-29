import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import CandleForm from "../../components/CandleForm/CandleForm";
import CandleButton from "../../components/CandleButton/CandleButton";

const Wrapper = styled.div``;

function CandleWrapper({ addNotification }) {
  const [showModal, setShowModal] = useState(false);
  function closeModal() {
    setShowModal(false);
  }

  return (
    <Wrapper>
      {showModal ? (
        <CandleForm handleClose={closeModal} handleSubmit={addNotification} />
      ) : (
        <CandleButton handleClick={setShowModal} />
      )}
    </Wrapper>
  );
}

CandleWrapper.propTypes = {
  addNotification: PropTypes.func.isRequired,
};

CandleWrapper.defaultTypes = {};

export default CandleWrapper;
