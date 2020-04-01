import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { TextField, IconButton } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ClearIcon from "@material-ui/icons/Clear";
import CandleIcon from "../CandleIcon/CandleIcon";

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
    backgroundColor: "#c2b3df",
    color: "#fff",
  },
})(IconButton);

const SubmitButton = withStyles({
  root: {
    backgroundColor: (props) => (props.isValid ? "#636c76" : "transparent"),
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
      color: "#d9cdf0",
      fontSize: "1.6rem",
    },
    "& input.MuiInputBase-input": {
      color: "#d9cdf0",
      fontSize: "1.6rem",
    },
    "& label.Mui-focused": {
      color: "#d9cdf0",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#d9cdf0",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "#d9cdf0",
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
    handleSubmit({ user: name, message, date_created: Date.now() });
    handleClose();
  };

  return (
    <>
      <Overlay />
      <Form>
        <CancelButton size="small" onClick={handleClose}>
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
        <SubmitButton size="small" isValid={name.length && message.length} onClick={submitMessage}>
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
