import React from "react";
import { Link, useParams } from "react-router-dom";
import Auth from "../../utils/auth";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_ME } from "../../utils/queries";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import GoldBar from "../GoldBar";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const { _id: userParam } = useParams();

  let { loading, data } = useQuery(QUERY_ME, {
    variables: { _id: userParam },
  });

  const me = data?.me || {};

  let userLinkText = me.firstName;

  console.log(data);

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
          <Nav className="ml-auto mr-3">
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/gallery">
              Gallery
            </Nav.Link>
            <Nav.Link as={Link} to="/artists">
              Artists
            </Nav.Link>
            {!Auth.loggedIn() ? (
              <Nav.Link as={Link} to="/login">
                Log In
              </Nav.Link>
            ) : (
              <NavDropdown title={userLinkText || ""} id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/profile">
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/login" onClick={logout}>
                  Log Out
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <GoldBar />
    </>
  );
};

export default Header;
