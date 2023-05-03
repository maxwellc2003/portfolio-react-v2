import React from "react";

const Footer = () => {
  return (
    <footer>
      <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
      </section>

      <section class="">
        <div class="container text-center text-md-start mt-5">
          <div class="row mt-3">
            <div class="col-sm footer-col">
              <h6 class="text-uppercase fw-bold mb-4">Links</h6>
              <p>
                <a href="#!" class="text-reset">
                  About
                </a>{" "}
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Blog
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Projects
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Contact
                </a>
              </p>
            </div>

            <div class="col-sm footer-col">
              <h6 class="text-uppercase fw-bold mb-4">Reach Out</h6>
              <p>Github</p>
              <p>LinkedIn</p>
              <p>Email</p>
            </div>

            <div class="col-sm footer-col">
              <h6 class="text-uppercase fw-bold mb-4">Maxwell Colby</h6>
              <p>
                Thanks for visiting my page, <br></br> Have a bright day🌞
              </p>
              <p>
                © 2023 Built by:<br></br>{" "}
                <a class="text-reset" href="https://github.com/maxwellc2003">
                  Maxwell Colby
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
