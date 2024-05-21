import Nav from "react-bootstrap/Nav"; // Import the Nav component from react-bootstrap
import { Link } from "react-router-dom"; // Import the Link component from react-router-dom

function Footer() {
  return (
    <div className="footer">
      {/* Footer section */}
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 px-4 border-top">
        {/* Copyright text */}
        <p className="col-md-4 mb-0 text-body-secondary">
          &copy; {new Date().getFullYear()} LuxuriaMart
        </p>

        {/* Logo */}
        <a
          href="/"
          className="col-md-4 d-flex align-items-center justify-content-center link-body-emphasis text-decoration-none"
        >
          <img
            src={require("../assets/images/logo.png")}
            alt="luxuriamart logo"
            width="40"
            height="32"
          />
        </a>

        {/* Navigation links */}
        <div className="footer-nav-link">
          <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item">
              {/* Link to the Home page */}
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
            </li>
            <li className="nav-item">
              {/* Link to the Products page */}
              <Nav.Link as={Link} to="/products">
                Products
              </Nav.Link>
            </li>
            <li className="nav-item">
              {/* Link to the About page */}
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
