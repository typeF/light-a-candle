import React, { useState } from "react";
import PropTypes from "prop-types";
import CandleForm from "../../components/CandleForm/CandleForm";
import CandleButton from "../../components/CandleButton/CandleButton";

function CandleWrapper({ addNotification }) {
  const [showModal, setShowModal] = useState(true);
  function closeModal() {
    setShowModal(false);
  }

  return (
    <div>
      {showModal ? (
        <CandleForm modalState={showModal} handleClose={closeModal} />
      ) : (
        <CandleButton handleClick={setShowModal}>+</CandleButton>
      )}
    </div>
  );
}

CandleWrapper.propTypes = {
  addNotification: PropTypes.func.isRequired,
};

CandleWrapper.defaultTypes = {};

export default CandleWrapper;
