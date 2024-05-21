import React, { useState } from "react";
import Container from "react-bootstrap/Container"; // Import the Container component from react-bootstrap
import Nav from "react-bootstrap/Nav"; // Import the Nav component from react-bootstrap
import Navbar from "react-bootstrap/Navbar"; // Import the Navbar component from react-bootstrap
import { Link } from "react-router-dom"; // Import the Link component from react-router-dom

function Header() {
  // State to manage the expanded state of the navbar
  const [expanded, setExpanded] = useState(false);

  // Toggle the expanded state
  const handleToggle = () => setExpanded(!expanded);

  // Collapse the navbar when a link is selected
  const handleSelect = () => setExpanded(false);

  return (
    <header>
      {/* Navbar component from react-bootstrap */}
      <Navbar bg="dark" variant="dark" expand="sm" expanded={expanded}>
        <Container>
          {/* Navbar brand with logo and text */}
          <Navbar.Brand as={Link} to="/" className="fs-4 fw-bold">
            <img
              src={require("../assets/images/logo.png")}
              width="30"
              height="30"
              className="mx-1"
              alt="LuxuriaMart Logo"
            />
            LuxuriaMart
          </Navbar.Brand>

          {/* Navbar toggle button for mobile view */}
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={handleToggle}
          >
            <i className="fa-solid fa-bars nav-bar"></i>
          </Navbar.Toggle>

          {/* Collapsible navbar content */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" onSelect={handleSelect}>
              {/* Link to the Home page */}
              <Nav.Link as={Link} to="/" onClick={handleSelect}>
                Home
              </Nav.Link>
              {/* Link to the Products page */}
              <Nav.Link as={Link} to="/products" onClick={handleSelect}>
                Products
              </Nav.Link>
              {/* Link to the About page */}
              <Nav.Link as={Link} to="/about" onClick={handleSelect}>
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
