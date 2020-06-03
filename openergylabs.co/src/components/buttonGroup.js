import React from "react";
import OelButton from "./button";

function ButtonGroup({ leftBtnOptions, rightBtnOptions }) {
  return (
    <div
      className="buttonGrp"
      style={{ marginTop: "1rem", marginBottom: "1rem" }}
    >
      <OelButton {...leftBtnOptions}></OelButton>
      <OelButton {...rightBtnOptions}></OelButton>
    </div>
  );
}

export default ButtonGroup;
