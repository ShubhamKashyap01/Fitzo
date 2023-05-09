import React, { useEffect, useMemo, useState } from "react";
import "./Header.scss";
import Container from "react-bootstrap/Container";
import { Nav, Navbar, Form, ListGroup, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import useApi from "../../hooks/useApi";
import { useAuth } from "../../hooks/useAuth";
import LocationInput from "../../common/LocationInput";

const Header = ({ city }: { city?: string }) => {
  const { user, signout } = useAuth();
  const navigate = (loc: string) => {
    window.location.href = `/webapp/${loc}`;
  };
  return (
    <Navbar
      bg="light"
      expand="lg"
      className="header p-sm-4"
      style={{ position: "sticky", top: "0", zIndex: 1000 }}
    >
      <Container>
        <Navbar.Brand href="/webapp">
          <h3 className="logo">FitZo</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            {city && <LocationInput city={city} onChange={(loc) => navigate(loc)} />}
            <Nav.Link href="/webapp/membership">Membership</Nav.Link>
            {user ? (
              <Nav.Link onClick={signout}>Sign Out</Nav.Link>
            ) : (
              <Nav.Link href="/webapp/auth">Sign In</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
