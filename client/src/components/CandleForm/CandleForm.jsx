import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { TextField, IconButton } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ClearIcon from "@material-ui/icons/Clear";
import CandleIcon from "../CandleIcon/CandleIcon";
import colors from "../../fixtures/colors";

const Overlay = styled.div`
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(255, 255, 255, 0.2);
  animation: fadeIn 0.1s;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.2;
    }
  }
`;

const Form = styled.div`
  background-image: url("/rectangle.svg");
  background-position-y: bottom;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  width: 85%;
  height: 25%;
  margin: 0 auto;
  position: absolute;
  bottom: 9.75%;
`;

const CancelButton = withStyles({
  root: {
    position: "absolute",
    top: "-5%",
    right: "-2.5%",
    backgroundColor: colors.lilac,
    color: colors.white,
  },
})(IconButton);

const SubmitButton = withStyles({
  root: {
    backgroundColor: (props) => (!props.disabled ? colors.sageGreen : "transparent"),
    height: "50px",
    width: "50px",
    borderRadius: "50%",
    position: "absolute",
    bottom: "5px",
    paddingTop: "0%",
    transition: "background-color 1s ease-in",
  },
})(IconButton);

const CustomTextField = withStyles({
  root: {
    top: "-15%",
    width: "80%",
    "& label.MuiFormLabel-root": {
      color: colors.lilac,
      fontSize: "1.6rem",
    },
    "& input.MuiInputBase-input": {
      color: colors.lilac,
      fontSize: "1.6rem",
    },
    "& label.Mui-focused": {
      color: colors.lilac,
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: colors.lilac,
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: colors.lilac,
    },
  },
})(TextField);

function CandleForm({ handleClose, handleSubmit }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  // const [nameError, setNameError] = useState("");
  // const [messageError, setMessageError] = useState("");

  const isValid = (textfield, messagefield) => {
    // if (textfield.length <= 0) {
    //   setNameError("Name cannot be empty!");
    // }
    // if (messagefield.length <= 0) {
    //   setMessageError("Message cannot be empty!");
    // }
    return textfield.length && messagefield.length;
  };

  const submitMessage = () => {
    if (!isValid(name, message)) {
      return;
    }
    handleSubmit({ user: name, message });
    handleClose();
  };

  return (
    <>
      <Overlay />
      <Form>
        <CancelButton data-testid="close-form-button" size="small" onClick={handleClose}>
          <ClearIcon />
        </CancelButton>
        <CustomTextField
          id="name"
          label="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          // error={nameError}
          // helperText={nameError}
        />
        <CustomTextField
          id="Message"
          label="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          // error={messageError}
          // helperText={messageError}
        />
        <SubmitButton
          data-testid="candle-form-submit-button"
          size="small"
          disabled={!name || !message}
          onClick={submitMessage}
        >
          <CandleIcon />
        </SubmitButton>
      </Form>
    </>
  );
}

CandleForm.propTypes = {
  handleClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

CandleForm.defaultProps = {};

export default CandleForm;
