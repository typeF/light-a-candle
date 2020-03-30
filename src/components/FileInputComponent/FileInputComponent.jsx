import React, { useMemo } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div(() => ({
  "background-color": "black",
  display: "flex",
}));

const FileInput = styled.input`
  position: absolute;
  visibility: hidden;
`;

const Label = styled.label(({ customLabelStyle }) => ({
  "background-color": "inherit",
  "border-radius": "8px",
  border: "1px solid #fff",
  color: "inherit",
  cursor: "pointer",
  display: "flex",
  "justify-content": "center",
  "align-items": "center",
  flex: 1,
  "font-size": "2.5rem",
  padding: "4px 0",
  ...customLabelStyle,
}));

const FileInputComponent = ({ accept, children, customLabelStyle, fileId, handleFileUpload, multiple }) => {
  /*
    INFO: This is a work in progress.
    Feel free to adjust as needs arise.

    accept: array of file types (ie. ['.png', '.jpg', ...])
  */
  const acceptedFileTypes = useMemo(() => accept.join(","), [accept]);

  return (
    <Container>
      <FileInput type="file" id={fileId} accept={acceptedFileTypes} multiple={multiple} onChange={handleFileUpload} />
      <Label htmlFor={fileId} customLabelStyle={customLabelStyle}>
        {children}
      </Label>
    </Container>
  );
};

FileInputComponent.propTypes = {
  accept: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  children: PropTypes.string,
  customLabelStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  fileId: PropTypes.string.isRequired,
  handleFileUpload: PropTypes.func.isRequired,
  multiple: PropTypes.bool,
};

FileInputComponent.defaultProps = {
  children: "+",
  customLabelStyle: {},
  multiple: false,
};

export default FileInputComponent;
