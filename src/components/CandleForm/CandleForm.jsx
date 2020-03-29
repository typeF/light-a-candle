import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { TextField, IconButton } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import CancelIcon from "@material-ui/icons/Cancel";
import WhatshotIcon from "@material-ui/icons/Whatshot";

const Form = styled.div`
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 10%;
  position: relative;
`;

const CancelButton = withStyles({
  root: {
    position: "absolute",
    top: "0",
    right: "0",
  },
})(IconButton);

const SubmitButton = withStyles({
  root: {
    display: "block",
    backgroundColor: "grey",
    borderRadius: "25px",
    position: "absolute",
    bottom: "-20px",
  },
})(IconButton);

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
      <CancelButton onClick={handleClose}>
        <CancelIcon />
      </CancelButton>
      <TextField
        error={nameError}
        id="name"
        label="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        helperText={nameError}
      />
      <TextField
        error={messageError}
        id="Message"
        label="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        helperText={messageError}
      />
      <SubmitButton onClick={sumbitMessage}>
        <WhatshotIcon />
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
