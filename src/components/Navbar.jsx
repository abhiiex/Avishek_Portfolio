import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

// import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "bg-[#1b1a2ea9] transition-[all 0.3s ease-out 0s] shadow-[0px 1px 1px 0px rgba(9, 5, 29, 0.171)] backdrop-blur-[7px]"  : "fixed transition-[all 0.3s ease-out 0s]"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo h-[1.4em] w-[2.5em]" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          className="relative bg-transparent border-transparent"
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span className="block bg-[#be50f4] h-1 w-[27px] mt-[5px] mb-[5px] rotate-0 left-0 opacity-[1]"></span>
          <span className="block bg-[#be50f4] h-1 w-[27px] mt-[5px] mb-[5px] rotate-0 left-0 opacity-[1]"></span>
          <span className="block bg-[#be50f4] h-1 w-[27px] mt-[5px] mb-[5px] rotate-0 left-0 opacity-[1]"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} 
              className={({isActive})=> ` ${isActive ? "text-purple-950" : "text-white"}`}
              to="/" onClick={() => updateExpanded(false)}>
            { /* <AiOutlineHome className="mb-[2px]"/> */ } Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                 About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
              
              Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                 Resume
              </Nav.Link>
            </Nav.Item>


            <Nav.Item className="fork-btn">
              <Button
                href="#"
                target="_blank"
                className="fork-btn-inner"
              >
                {" "}
                <AiFillStar className="text-[1.1em]"
                 />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;