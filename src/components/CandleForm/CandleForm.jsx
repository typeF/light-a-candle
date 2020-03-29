import React from "react";
import PropTypes from "prop-types";
import { TextField, Modal } from "@material-ui/core";

function CandleForm({ modalState, handleClose }) {
  return (
    <Modal open={modalState} onClose={handleClose}>
      <form>
        <TextField id="name" label="Your Name" />
        <TextField id="Message" label="Message" />
      </form>
    </Modal>
  );
}

CandleForm.propTypes = {
  modalState: PropTypes.bool,
  handleClose: PropTypes.func.isRequired,
};

CandleForm.defaultProps = {
  modalState: false,
};

export default CandleForm;
