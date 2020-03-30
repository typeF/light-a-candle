import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { TextField, IconButton } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ClearIcon from "@material-ui/icons/Clear";
import CandleIcon from "../CandleIcon/CandleIcon";

const Form = styled.div`
  background: #636c76;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding-bottom: 30px;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 10%;
  position: relative;
`;

const CancelButton = withStyles({
  root: {
    position: "absolute",
    top: "-15px",
    right: "-15px",
    backgroundColor: "#c2b3df",
    color: "#fff",
  },
})(IconButton);

const SubmitButton = withStyles({
  root: {
    display: "inline-block",
    backgroundColor: "#636c76",
    borderRadius: "25px",
    position: "absolute",
    bottom: "-25px",
  },
})(IconButton);

// TODO: Style TextField
const CustomTextField = withStyles({
  root: {
    // color: "#c2b3df",
  },
  input: {
    color: "#c2b3df",
  },
})(TextField);

function CandleForm({ handleClose, handleSubmit }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState("");
  const [messageError, setMessageError] = useState("");

  const isValid = (textfield, messagefield) => {
    if (textfield.length <= 0) {
      setNameError("Name cannot be empty!");
    }
    if (messagefield.length <= 0) {
      setMessageError("Message cannot be empty!");
    }
    return textfield.length && messagefield.length;
  };

  const sumbitMessage = () => {
    if (!isValid(name, message)) {
      return;
    }
    handleSubmit({ user: name, message, date_created: Date.now() });
    handleClose();
  };

  return (
    <Form>
      <CancelButton size="small" onClick={handleClose}>
        <ClearIcon />
      </CancelButton>
      <CustomTextField
        id="name"
        label="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        error={nameError}
        helperText={nameError}
      />
      <CustomTextField
        error={messageError}
        id="Message"
        label="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        helperText={messageError}
      />
      <SubmitButton size="small" onClick={sumbitMessage}>
        <CandleIcon />
      </SubmitButton>
    </Form>
  );
}

CandleForm.propTypes = {
  handleClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

CandleForm.defaultProps = {};

export default CandleForm;
