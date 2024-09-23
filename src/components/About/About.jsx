import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Skillset from "./Skillset";
import Aboutcard from "./Aboutcard";
import AboutLogo from "../../Assets/about.png"

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row className="justify-center p-[10px]">
          <Col
            md={7} className="justify-center pt-[30px] pb-[50px]"
          >
            <h1 className="pb-[20px] text-[2.1em]">
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
        md={5}
        className="about-img pt-[120px] pb-[50px]"
        
      >
        <img src={AboutLogo} alt="about" className="img-fluid" />
        </Col>
          
        </Row>
         <Skillset/>
      </Container>
    </Container>
  );
}

export default About;