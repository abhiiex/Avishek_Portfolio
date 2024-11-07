import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row className='justify-center pb-[50px]'>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos className="forced-color-adjust-auto" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman className="text-right"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel className="" />
      </Col>
    </Row>
  );
}

export default Toolstack;