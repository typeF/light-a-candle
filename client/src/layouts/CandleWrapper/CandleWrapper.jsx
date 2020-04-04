import React, { useState } from "react";
import PropTypes from "prop-types";
import FooterButton from "components/FooterButton/FooterButton";
import CandleForm from "../../components/CandleForm/CandleForm";

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
        <CandleForm handleClose={closeModal} handleSubmit={addNotification}>
          Light a candle
        </CandleForm>
      ) : (
        <FooterButton icon="/candle-icon.svg" handleClick={() => handleShow()}>
          Light a candle
        </FooterButton>
      )}
    </>
  );
}

CandleWrapper.propTypes = {
  addNotification: PropTypes.func.isRequired,
  setOnlyShowIcon: PropTypes.func.isRequired,
};

CandleWrapper.defaultTypes = {};

export default CandleWrapper;
