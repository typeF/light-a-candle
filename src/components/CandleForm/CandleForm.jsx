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

  const sumbitMessage = () => {
    handleSubmit({ user: name, message, date_created: Date.now() });
    handleClose();
  };

  return (
    <Form>
      <CancelButton onClick={handleClose}>
        <CancelIcon />
      </CancelButton>
      <TextField id="name" label="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
      <TextField id="Message" label="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
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
