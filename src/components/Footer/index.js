import React from "react";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-100 py-4 flex-shrink-0">
      <div className="container py-4">
        <div className="row gy-4 gx-5">
          <div className="col-lg-4 col-md-6">
            <h5 className="text-white mb-3">Quick Links</h5>
            <ul className="list-unstyled text-muted">
              <li>
                <a href="/about" className="text-muted footer-link">
                  About
                </a>
              </li>
              <li>
                <a href="/blog" className="text-muted footer-link">
                  Blog
                </a>
              </li>
              <li>
                <a href="#projects-section" className="text-muted footer-link">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact-section" className="text-muted footer-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6">
            <h5 className="text-white mb-3">Reach Out</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://www.linkedin.com/in/maxwell-colby-b70484241/"
                  className="footer-link"
                >
                  <h4 className="text-muted">
                    <FaLinkedin />
                  </h4>
                </a>
              </li>
              <li>
                <a href="mailto:maxwellc2003@gmail.com" className="footer-link">
                  <h4 className="text-muted">
                    <FaEnvelope />
                  </h4>
                </a>
              </li>
              <li>
                <a href="https://github.com/maxwellc2003" className="footer-link">
                  <h4 className="text-muted">
                    <FaGithub />
                  </h4>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6">
            <h5 className="text-white mb-3">Maxwell Colby</h5>
            <p className="text-muted small">
              Thanks for visiting my page,<br></br>Have a bright day 🌞
            </p>
            <p className="small text-muted mb-0">
              &copy; Built and designed by{" "}
              <a className="text-muted footer-link" href="/about">
                Maxwell Colby
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
