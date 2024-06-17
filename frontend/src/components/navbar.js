import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaHome, FaTv, FaHistory, FaTable, FaSignOutAlt, FaUsers } from 'react-icons/fa';

function ColorSchemesExample() {
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);

  useEffect(() => {
    const contentBelowNavbar = document.getElementById('content-below-navbar');
    if (isNavbarExpanded) {
      contentBelowNavbar.style.marginTop = '80px'; // Adjust this value based on your Navbar's height
    } else {
      contentBelowNavbar.style.marginTop = '0';
    }
  }, [isNavbarExpanded]);

  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        style={{ height: '80px', zIndex: 1000, backgroundColor: isNavbarExpanded ? '#343a40' : 'transparent' }}
        expanded={isNavbarExpanded}
        onToggle={() => setIsNavbarExpanded(!isNavbarExpanded)}
      >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home" className="fs-5 me-3 d-flex align-items-center">
                <FaHome className="me-2" /> Home
              </Nav.Link>
              <Nav.Link href="/live" className="fs-5 me-3 d-flex align-items-center">
                <FaTv className="me-2" /> Live
              </Nav.Link>
              <Nav.Link href="/history" className="fs-5 me-3 d-flex align-items-center">
                <FaHistory className="me-2" /> History
              </Nav.Link>
              <Nav.Link href="/table" className="fs-5 me-3 d-flex align-items-center">
                <FaTable className="me-2" /> Table
              </Nav.Link>
              <Nav.Link href="/community" className="fs-5 me-3 d-flex align-items-center">
                <FaUsers className="me-2" /> Community
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/" className="fs-5 d-flex align-items-center">
                <FaSignOutAlt className="me-2" /> Logout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div id="content-below-navbar" style={{ marginTop: '0', padding: '0' }}>
        {/* Your content goes here */}
      </div>
    </>
  );
}

export default ColorSchemesExample;
