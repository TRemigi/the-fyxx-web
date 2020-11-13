import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Nav } from "react-bootstrap";

import GoldBar from "../GoldBar";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <>
      <Navbar
        className="navbar"
        collapseOnSelect
        expand="md"
        bg="dark"
        variant="dark"
      >
        <Navbar.Brand as={Link} to="/">
          <img
            alt="fyxx scissor logo"
            src={require("../../assets/images/svg/colorlogo-nobackground.svg")}
            className="nav-img"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto mr-5">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              Gallery
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <GoldBar />
    </>
  );
};

export default Header;
