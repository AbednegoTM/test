import React from "react";
import Button from "react-bootstrap/Button";

function OelButton({ name, color }) {
  return (
    <a
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textDecoration: "none",
      }}
      href="#whatwedo"
    >
      <div
        style={{
          display: "flex",
          width: 50,
          justifyContent: "space-between",
        }}
      >
        <span
          className="oel-btn-antena"
          style={{ ...buttonStyles.oelAntena, borderColor: color }}
        ></span>
        <span
          className="oel-btn-antena"
          style={{ ...buttonStyles.oelAntena, borderColor: color }}
        ></span>
        <span
          className="oel-btn-antena"
          style={{ ...buttonStyles.oelAntena, borderColor: color }}
        ></span>
      </div>
      <Button
        className="oelbtn"
        variant={"outline-primary"}
        style={{
          borderRadius: 20,
          margin: 0,
          color: color,
          borderColor: color,
        }}
      >
        {name}
      </Button>
    </a>
  );
}

const buttonStyles = {
  oelAntena: {
    display: "inline-block",
    height: 10,
    border: "1px solid",
    lineHeight: 0,
    position: "relative",
    bottom: -1,
  },
};

OelButton.defaultProps = {};
export default OelButton;
