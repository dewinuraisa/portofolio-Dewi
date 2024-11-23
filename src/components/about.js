import React from "react";

function About() {
  return (
    <section id="about" className="container mt-5">
      <h2>About Me</h2>
      <p>
        Hello! I'm a web developer passionate about building interactive and
        engaging websites. I love learning new technologies and creating
        innovative solutions.
      </p>
      <a href="/cv-ats.pdf" download className="btn btn-primary">
        Download CV
      </a>
    </section>
  );
}

export default About;
