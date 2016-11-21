import React from 'react';
import Libraries from './libraries.jsx';

const About = () => {
  const indent = {
    textIndent: '20px'
  };

  return (
    <div className="about">
      <div className="headshot-container">
        <img className="headshot" alt="headshot" src="public/img/headshot.jpg" />
      </div>
      <div className="about-text">
        <h4 style={{ textAlign: 'center' }}>
          Hello, I am Sean R. Full Stack, JavaScript Web Developer
        </h4>
        <p style={indent}>
              No last name or other deep personal details here since the profile is so public.
          I am currently working a part-time/full-time job and completing courses
          on <a href="https://freecodecamp.com">FreeCodeCamp</a> in my spare time. When I am not
          working or learning, I enjoy cooking nutritious meals, attending football games,
          and spending time with friends or family. Exercise and sleep are also in there somewhere!
        </p>
        <p style={indent}>
              My main programming language of choice and knowledge is JavaScript (ES6/Babel).
          Along with JavaScript, I utilize HTML5 and CSS3 (SASS) for front end development. I am also familiar
          enough with Python that I can write scripts for my PC and read others' Python code. Languages
          I hope to learn in the future are C, Rust, and Elixir.
        </p>
        <p>
          Libraries, frameworks, and supersets of JavaScript I am familiar with are:
        </p>
        <Libraries />
      </div>
    </div>
  );
};

export default About;
