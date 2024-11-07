import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

function Home2() {
  return (
    <Container fluid className="home-about-section relative pb-[70px] pt-[70px]">
      <Container>
        <Row>
          <Col md={8} className="home-about-description text-white pt-[100px] pb-20px text-center">
            <h1 className="text-[2.6em]"> 
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body pt-[50px] text-left text-[1.2em]">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> React.js, MongoDB, Node.js, Python, Javascript. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  MERN.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
           <Col md={4} className="myAvtar flex justify-center pt-[9em]">
            <Tilt className="">
              <img src={myImg} className="max-w-[100%] h-auto" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social text-white pt-[43px] text-center">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links justify-center pt-[15px] inline-block ps-0 relative">
              <li className="social-icons">
                <Link
                  to="https://github.com/abhiiex"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub className="ml-2.5 mt-2.5"/>
                </Link>
              </li>
              <li className="social-icons">
                <Link
                  to="https://twitter.com/Abhi6291"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter className="ml-2.5 mt-2.5"/>
                </Link>
              </li>
              <li className="social-icons">
                <Link
                  to="https://www.linkedin.com/in/avishek-kr-pandit-00834725a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn className="ml-2.5 mt-2.5"/>
                </Link>
              </li>
              <li className="social-icons">
                <Link
                  to="https://www.instagram.com/abhiii.ex"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram className="ml-2.5 mt-2.5"/>
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;