import React from "react";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <main>
      {/* Hero */}
      <div class="hero-section">
        <div class="hero-intro">
          <h1>Hello! I'm Maxwell</h1>
          <h1>Jr. Software Engineer</h1>
          <h2><FaLinkedin/> <FaEnvelope/> <FaGithub/></h2>
          <p>I'm always up for an adventure and getting creative<br></br>
          🎨 Learning new things is my jam 🍓<br></br>
          And I have a soft spot for sushi 🍣</p>
        </div>
      </div>
      {/* Skills Section */}
      <div class="skills-section">
      <h2>My Skills</h2>
      </div>
      {/* Blog Featured Section */}
      <div class="blog-section">
      <h2>Featured Blog Posts</h2>
      </div>
      {/* Projects Section */}
      <div class="projects-section">
      <h2>Projects</h2>
      </div>
      {/* Contact */}
      <div class="contact-section">
      <h2>Contact</h2>
      </div>
    </main>
  );
};

export default Home;
