import React from "react";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
// import Headshot from '../assets/images/headshot.jpeg';

const Home = () => {
  return (
    <main>
      {/* Hero */}
      <div className="hero-section">
        <div class="bubble-1"></div>
        <div class="bubble-2"></div>
        <div class="bubble-3"></div>
        <div class="bubble-4"></div>
        <div class="bubble-5"></div>
        <div class="bubble-6"></div>
        <div class="bubble-7"></div>
        <div class="bubble-8"></div>
        <div class="bubble-9"></div>
        <div class="bubble-10"></div>
        <div className="hero-intro">
          <h1 className="display-2">Hello! I'm Maxwell</h1>
          <h1 className="display-5">Software Engineer</h1>
          <h2>
            <FaLinkedin /> <FaEnvelope /> <FaGithub />
          </h2>
          <p>
            I'm always up for an adventure and getting creative<br></br>
            🎨 Learning new things is my jam 🍓<br></br>
            And I have a soft spot for sushi 🍣
          </p>
        </div>
      </div>
      {/* Skills Section */}
      <div className="skills-section">
        <h2>My Skills</h2>
        <br></br>
      </div>
      {/* Blog Featured Section */}
      <div className="blog-section">
        <h2>Featured Blog Posts</h2>
      </div>
      {/* Projects Section */}
      <div id="projects-section" className="projects-section">
        <h2>Projects</h2>
      </div>
      {/* Contact */}
      <div id="contact-section" className="contact-section">
        <section className="mb-4">
          <h2 className="h1-responsive text-center my-4">Reach Out</h2>
          <p className="text-center w-responsive mx-auto mb-5">
            Looking forward to hearing from you 🌥️
          </p>

          <div className="row">
            <div className="col-md-12 mb-md-0 mb-5">
              <form
                id="contact-form"
                name="contact-form"
                action="mail.php"
                method="POST"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                      ></input>
                      <label for="name" className="">
                        Your name
                      </label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        id="email"
                        name="email"
                        className="form-control"
                      ></input>
                      <label for="email" className="">
                        Your email
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="form-control"
                      ></input>
                      <label for="subject" className="">
                        Subject
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form">
                      <textarea
                        type="text"
                        id="message"
                        name="message"
                        rows="2"
                        className="form-control md-textarea"
                      ></textarea>
                      <label for="message">Your message</label>
                    </div>
                  </div>
                </div>
              </form>

              <div className="text-center text-md-left">
                <a
                  className="btn btn-primary"
                  onclick="document.getElementById('contact-form').submit();"
                >
                  Send
                </a>
              </div>
              <div className="status"></div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
