import React from "react";
import OelButton from "./button";
import ButtonGroup from "./buttonGroup";

function Hero() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#FDE3CA",
        justifyContent: "center",
        position: "relative",
        padding: 20,
      }}
    >
      <h1 className={"hdr-text font-glyph"}>Open Energy Labs</h1>
      <h5 className="sub-hdr-text font-glyph">
        Statement about company vision{" "}
      </h5>
      {/* <div style={{ margin: "5%", position: "absolute", bottom: "15%" }}>
        <OelButton name="What we do"></OelButton>
        <OelButton name="What we do"></OelButton>
      </div> */}
      <ButtonGroup
        leftBtnOptions={{ path: "/", color: "#5D4DC4", name: "what we do" }}
        rightBtnOptions={{
          path: "/",
          color: "#5D4DC4",
          name: "Invest Now ",
        }}
      />
      <div
        style={{
          borderBottom: "1px #5D4DC4 solid",
          width: "95%",
          position: "absolute",
          bottom: "5%",
        }}
      ></div>
    </div>
  );
}
export default Hero;
