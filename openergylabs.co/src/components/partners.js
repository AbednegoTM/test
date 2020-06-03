import React from "react";
import common from "../styles/styles";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Partners({ logos }) {
  return (
    <Row
      style={{
        width: "100%",
        marginTop: "3rem",
        justifyContent: "space-between",
      }}
    >
      {logos &&
        logos.map((logo) => {
          return (
            <Col
              sm
              style={{
                marginBottom: 20,
                width: "100%",
                flexGrow: 0,
                justifyContent: "center",
                alignItems: "center",

                display:'flex'
              }}
            >
              <img height={40} src={logo} />
            </Col>
          );
        })}
    </Row>
  );
}

export default Partners;
