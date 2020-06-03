import React from "react";
import Layout from "./components/layout";
import "./App.css";
import Hero from "./components/hero";
import mVideo from "./media/Down_by_the_River.mp4";
import OelButton from "./components/button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import common from "./styles/styles";
import ButtonGroup from "./components/buttonGroup";
// image imports
import logo from "./media/logo192.png";
import map from "./media/map.png";
import learningIcon from "./media/Learning.png";
import energyIcon from "./media/Energy.png";
import captureIcon from "./media/Capture.png";
import le1 from "./media/Le1.png";
// partners logos
import bcv from "./media/bcv.png";
import eps from "./media/eps.png";
import fik from "./media/fik.png";
import uik from "./media/uik.png";
import Partners from "./components/partners";

// TODO: change favicon OEL

function App() {
  return (
    <Layout>
      <div className="App">
        <header className={"section "}>
          <Hero />
        </header>
        {/* Campaign video */}
        <section
          className={"section"}
          style={{
            backgroundColor: "#5D4DC4",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Container
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              width: "100%",
              position: "relative",
              padding: "5%",
            }}
          >
            <p style={{ alignSelf: "flex-end", color: "#fff" }}>
              Crowd investment campaign video caption
            </p>
            <video
              className="crowd-vd"
              width={"80%"}
              src={mVideo}
              controls={true}
            ></video>
            <ButtonGroup
              leftBtnOptions={{ path: "/", color: "#fff", name: "what we do" }}
              rightBtnOptions={{
                path: "/",
                color: "#fff",
                name: "Invest Now ",
              }}
            />
          </Container>
          <div
            style={{
              borderBottom: "1px #fff solid",
              width: "95%",
              position: "absolute",
              bottom: "5%",
            }}
          ></div>
        </section>

        {/* What we do  */}

        <section
          id="whatwedo"
          className="section"
          style={{
            ...common.centerItemsVt,
            backgroundColor: "#FEA90E",
            paddingTop: "10%",
            paddingBottom: "10%",
          }}
        >
          <h3 className="section-title">What We Do</h3>
          <Row className={"services"}>
            <Col sm className="service-item">
              <img src={learningIcon} alt="image" />
              <p className="service-title">Educational programmes</p>
              <p className="service-sub">
                Paragraph of text all about stuff related to how cool we are
                Paragraph of text all about stuff related to how cool we are
              </p>
            </Col>
            <Col sm className="service-item">
              <img src={captureIcon} alt="image" />
              <p className="service-title">Energy development</p>
              <p className="service-sub">
                {" "}
                Paragraph of text all about stuff related to how cool we are
                Paragraph of text all about stuff related to how cool we are
              </p>
            </Col>
            <Col sm className="service-item">
              <img src={energyIcon} alt="image" />
              <p className="service-title">Innovation at our core</p>
              <p className="service-sub">
                Paragraph of text all about stuff related to how cool we are
                Paragraph of text all about stuff related to how cool we are
              </p>
            </Col>
          </Row>
          <ButtonGroup
            leftBtnOptions={{ path: "/", color: "#5D4DC4", name: "what we do" }}
            rightBtnOptions={{
              path: "/",
              color: "#5D4DC4",
              name: "Invest Now ",
            }}
          />
        </section>

        {/* Introducing our first product */}
        <section
          className={"section"}
          style={{
            backgroundColor: "#0600FF",
            color: "#6CCDF2",
          }}
        >
          <Container
            style={{
              height: "100%",
              ...common.centerItemsVt,
            }}
          >
            <h3 style={{ margin: "10%" }}>
              The world’s first learnable charge controller
            </h3>
            <Row>
              <Col sm>
                <img style={{ maxWidth: "100%" }} src={le1} />
              </Col>
              <Col
                id="le1-intro-col2"
                sm
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    textAlign: "center",
                    width: "60%",
                  }}
                >
                  <p>Introducing our first product</p>
                  <h2>Le1</h2>
                  <p>
                    A short introductory paragraph about the Le1 – its origins
                    and its impact, as well as future plans
                  </p>
                </div>
                <button
                  style={{
                    borderStyle: "none",
                    borderRadius: 70,
                    width: 120,
                    height: 120,
                    border: "1px solid #6CCDF2",
                    background: "none",
                    color: "#6CCDF2",
                    margin: 30,
                  }}
                >
                  Shop here
                </button>
              </Col>
            </Row>
          </Container>
        </section>

        {/* partners */}
        <section
          className={"section"}
          style={{
            backgroundColor: "#FF7F48",
            display: "flex",
            alignItems: "center",
            // justifyContent: "center",
          }}
        >
          <Container
            fluid
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "3%",
            }}
          >
            <h3
              style={{
                textAlign: "center",
                padding: "2%",
                color: "#5D4DC4",
                fontSize: "2.5em",
              }}
            >
              Collaborators & partners
            </h3>
            <Partners logos={[eps, fik, uik, bcv, eps]} />
            <Partners logos={[eps, uik, fik, bcv, eps]} />
            <Partners logos={[fik, uik, eps, bcv, eps]} />
            <div style={{ marginTop: 25 }}>
              <ButtonGroup
                leftBtnOptions={{
                  path: "/",
                  color: "#5D4DC4",
                  name: "what we do",
                }}
                rightBtnOptions={{
                  path: "/",
                  color: "#5D4DC4",
                  name: "Invest Now ",
                }}
              />
            </div>
          </Container>
        </section>

        <footer
          className={"section"}
          style={{ backgroundColor: "#5D4DC4", width: "100%" }}
        >
          <Container fluid>
            <Row>
              <Col
                className="footer-lft"
                lg={7}
                md={7}
                sm
                style={{ width: "100%", position: "relative", padding: "1%" }}
              >
                <div
                  id="ft-links"
                  style={{
                    width: "40%",
                    color: "#fff",
                  }}
                >
                  <p style={{ marginBottom: "1rem" }}>Useful links</p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <div id="usef-links">
                      <a href="#">
                        {" "}
                        <p>&#8599; Facebook</p>
                      </a>
                      <a href="#">
                        {" "}
                        <p>&#8599; Twitter</p>
                      </a>
                      <a href="#">
                        {" "}
                        <p>&#8599; LinkedIn</p>
                      </a>
                      <a href="#">
                        {" "}
                        <p>&#8599; Youtube</p>
                      </a>
                    </div>

                    <div style={{}}>
                      <p>Contact Us </p>
                      <p>Colophone</p>
                    </div>
                  </div>{" "}
                </div>

                <div
                  id="ft-copyright"
                  style={{
                    position: "absolute",
                    bottom: "1%",
                    color: "#fff",
                  }}
                >
                  <p style={{ marginBottom: "1rem" }}>
                    &#169; Copyright {new Date().getFullYear()}, Open Energy
                    Labs
                  </p>
                  <p>32/6 Joseph Mwila Rd, Lusaka Zambia</p>
                </div>
              </Col>
              <Col>
                <img width={"100%"} src={map} />
              </Col>
            </Row>
          </Container>
        </footer>
      </div>
    </Layout>
  );
}

export default App;
