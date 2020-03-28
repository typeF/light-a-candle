import React from "react";
import { TextField, Modal } from "@material-ui/core";

function CandleForm() {
  return (
    <Modal>
      <form>
        <TextField id="name" label="Your Name" />
        <TextField id="Message" label="Message" />
      </form>
    </Modal>
  );
}

export default CandleForm;
