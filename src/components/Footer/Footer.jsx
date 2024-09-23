import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer bg-[#0A0416] bottom-0 pt-[10px] pb-[8px]">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3 className="text-[1em] text-white mt-[0.5em] mb-[0.5em]">Designed and Developed by Avishek Kr Pandit</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3 className="text-[1em] text-white mt-[8px] mb-[8px]">Copyright © {year} AP</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <Link
                to="https://github.com/abhiiex"
                className="text-white"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </Link>
            </li>
            <li className="social-icons">
              <Link
                to="https://twitter.com/Abhi6291"
                className="text-white"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </Link>
            </li>
            <li className="social-icons">
              <Link
                to="https://www.linkedin.com/in/avishek-kr-pandit-00834725a/"
                className="text-white"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </Link>
            </li>
            <li className="social-icons">
              <Link
                to="https://www.instagram.com/abhiii.ex"
                className="text-white"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </Link>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
