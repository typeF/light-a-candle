import React, { useState } from "react";
import PropTypes from "prop-types";
import CandleForm from "../../components/CandleForm/CandleForm";
import CandleButton from "../../components/CandleButton/CandleButton";

function CandleWrapper({ addNotification }) {
  const [showModal, setShowModal] = useState(false);
  function closeModal() {
    setShowModal(false);
  }

  return (
    <>
      {showModal ? (
        // Convert Form to Dialog?
        <CandleForm handleClose={closeModal} handleSubmit={addNotification} />
      ) : (
        <CandleButton handleClick={setShowModal} />
      )}
    </>
  );
}

CandleWrapper.propTypes = {
  addNotification: PropTypes.func.isRequired,
};

CandleWrapper.defaultTypes = {};

export default CandleWrapper;
