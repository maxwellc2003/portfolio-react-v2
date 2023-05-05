import React from "react";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer class="w-100 py-4 flex-shrink-0">
        <div class="container py-4">
            <div class="row gy-4 gx-5">
                <div class="col-lg-4 col-md-6">
                    <h5 class="text-white mb-3">Quick Links</h5>
                    <ul class="list-unstyled text-muted">
                        <li><a href="#" class="text-muted footer-link">About</a></li>
                        <li><a href="#" class="text-muted footer-link">Blog</a></li>
                        <li><a href="#" class="text-muted footer-link">Projects</a></li>
                        <li><a href="#" class="text-muted footer-link">Contact</a></li>
                    </ul>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h5 class="text-white mb-3">Reach Out</h5>
                    <ul class="list-unstyled">
                        <li><a href="#"class="footer-link"><h4 class="text-muted"><FaLinkedin/></h4></a></li>
                        <li><a href="#"class="footer-link"><h4 class="text-muted"><FaEnvelope/></h4></a></li>
                        <li><a href="#"class="footer-link"><h4 class="text-muted"><FaGithub/></h4></a></li>
                    </ul>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h5 class="text-white mb-3">Maxwell Colby</h5>
                    <p class="text-muted small">Thanks for visiting my page,<br></br>Have a bright day 🌞</p>
                    <p class="small text-muted mb-0">&copy; Built and designed by <a class="text-muted footer-link" href="#">Maxwell Colby</a></p>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
