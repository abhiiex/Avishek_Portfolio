import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
// import Type from "./Type";
import Typewriter from "typewriter-effect";
 function Home() {
  return (
    <section>
      <Container fluid className="home-section relative z-[-1] bg-[center_top] bg-no-repeat pb-[30px] pt-[30px]" id="home">
        <Particle />
        <Container className="home-content pt-36 pb-8 px-0 text-[whitesmoke] text-left">
          <Row>
            <Col md={7} className="home-header pt-[80px]">
              <h1 className="heading pb-[15px] text-[2.4em] pl-[50px]">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name text-[2.5em] pl-[45px]">
                I'M
                <strong className="main-name text-[#cd5ff8]"> Avishek Kr Pandit</strong>
              </h1>

              <div className="p-12 text-left">
              <Typewriter
                  options={{
                  strings: [
                   "Software Developer",
                   "Freelancer",
                   "MERN Stack Developer",
                   "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
              </div>
            </Col>

         


            <Col md={5} className="pb-5">
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid max-h-96"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2/>
    </section>
  );
};
export default Home;