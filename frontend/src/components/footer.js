import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub, FaGem, FaHome, FaEnvelope, FaPhone, FaPrint } from 'react-icons/fa';

const linkStyle = {
  textDecoration: 'none',
  color: 'inherit',
};

const linkHoverStyle = {
  textDecoration: 'underline',
};

function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href="https://www.facebook.com" className="me-4 text-reset" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://www.twitter.com" className="me-4 text-reset" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.google.com" className="me-4 text-reset" target="_blank" rel="noopener noreferrer">
            <FaGoogle />
          </a>
          <a href="https://www.instagram.com" className="me-4 text-reset" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com" className="me-4 text-reset" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.github.com" className="me-4 text-reset" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </section>

      <section>
        <Container className="text-center text-md-start mt-5">
          <Row className="mt-3">
            <Col md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <FaGem className="me-3" />
                CricNation
              </h6>
              <p>
                One place to enjoy each and every moment of match.
              </p>
            </Col>

            <Col md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Merchandise</h6>
              <p>
                <a href="#!" style={linkStyle} onMouseEnter={(e) => e.target.style.textDecoration = linkHoverStyle.textDecoration} onMouseLeave={(e) => e.target.style.textDecoration = linkStyle.textDecoration}>
                  Jersey
                </a>
              </p>
              <p>
                <a href="#!" style={linkStyle} onMouseEnter={(e) => e.target.style.textDecoration = linkHoverStyle.textDecoration} onMouseLeave={(e) => e.target.style.textDecoration = linkStyle.textDecoration}>
                  Mugs
                </a>
              </p>
              <p>
                <a href="#!" style={linkStyle} onMouseEnter={(e) => e.target.style.textDecoration = linkHoverStyle.textDecoration} onMouseLeave={(e) => e.target.style.textDecoration = linkStyle.textDecoration}>
                  KeyChain
                </a>
              </p>
              <p>
                <a href="#!" style={linkStyle} onMouseEnter={(e) => e.target.style.textDecoration = linkHoverStyle.textDecoration} onMouseLeave={(e) => e.target.style.textDecoration = linkStyle.textDecoration}>
                  Stickers
                </a>
              </p>
            </Col>

            <Col md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" style={linkStyle} onMouseEnter={(e) => e.target.style.textDecoration = linkHoverStyle.textDecoration} onMouseLeave={(e) => e.target.style.textDecoration = linkStyle.textDecoration}>
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" style={linkStyle} onMouseEnter={(e) => e.target.style.textDecoration = linkHoverStyle.textDecoration} onMouseLeave={(e) => e.target.style.textDecoration = linkStyle.textDecoration}>
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" style={linkStyle} onMouseEnter={(e) => e.target.style.textDecoration = linkHoverStyle.textDecoration} onMouseLeave={(e) => e.target.style.textDecoration = linkStyle.textDecoration}>
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" style={linkStyle} onMouseEnter={(e) => e.target.style.textDecoration = linkHoverStyle.textDecoration} onMouseLeave={(e) => e.target.style.textDecoration = linkStyle.textDecoration}>
                  Help
                </a>
              </p>
            </Col>

            <Col md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <FaHome className="me-2" />
                Pune-37,India
              </p>
              <p>
                <FaEnvelope className="me-3" />
                info@cricnation.com
              </p>
              <p>
                <FaPhone className="me-3" /> 020-4257896
              </p>
              <p>
                <FaPrint className="me-3" /> 020-85424562
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            CricNation
        </a>
      </div>
    </footer>
  );
}

export default Footer;
