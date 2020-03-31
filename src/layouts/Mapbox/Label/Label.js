import React, { useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import labelImgLight from "./map-label-light.svg";
import labelImgDark from "./map-label-dark.svg";
import "./label.css";

const labelSize = "50px";

const LabelDiv = styled.div`
  background-image: ${(props) => (props.background === "dark" ? `url(${labelImgDark})` : `url(${labelImgLight})`)};
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
  height: ${labelSize};
  width: ${labelSize};
  padding-top: 20px;
  position: relative;
  bottom: 20px;
`;

const LabelCount = styled.p`
  color: ${(props) => (props.background === "dark" ? "#FFFFFF" : "#1e2a32")};
  font-family: Noto Sans;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  position: relative;
  bottom: 14px;
`;

const Label = ({ clickHandler, count }) => {
  const labelRef = useRef();

  const unSelectPrevDarkLabels = () => {
    const visibleDarkLabels = document.querySelectorAll(".label-dark:not(.hidden)");
    Array.prototype.forEach.call(visibleDarkLabels, (darkLabel) => {
      darkLabel.previousSibling.classList.remove("hidden");
      darkLabel.classList.add("hidden");
    });
  };

  const setToBlack = () => {
    unSelectPrevDarkLabels();
    /* eslint-disable no-param-reassign */
    Array.prototype.forEach.call(labelRef.current.children, (label, i) => {
      if (i === 0) {
        label.classList.add("hidden");
        return;
      }
      label.classList.remove("hidden");
    });
  };

  return (
    <div ref={labelRef}>
      <LabelDiv
        background="light"
        count={count}
        className="label label-light hidden"
        onClick={(e) => {
          setToBlack();
          clickHandler(e);
        }}
      >
        <LabelCount background="light">{count}</LabelCount>
      </LabelDiv>
      <LabelDiv
        background="dark"
        count={count}
        className="label label-dark hidden"
        onClick={(e) => {
          setToBlack();
          clickHandler(e);
        }}
      >
        <LabelCount background="dark">{count}</LabelCount>
      </LabelDiv>
    </div>
  );
};

Label.propTypes = {
  clickHandler: PropTypes.func,
  count: PropTypes.number,
};

Label.defaultProps = {
  clickHandler: () => {},
  count: 0,
};

export default Label;
