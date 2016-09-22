import React from 'react';

const About = () => {
  const indent = {
    textIndent: '25px'
  };

  return (
    <div className="about">
      <div className="headshot-container">
        <img className="headshot" alt="headshot" src="public/img/headshot.jpg" />
      </div>
      <div className="about-text">
        <p style={indent}>
              Hello, I am Sean R. No last name or other deep personal
          details here since the profile is so public.
          I am currently working a part-time/full-time job and completing courses
          on <a href="https://freecodecamp.com">FreeCodeCamp</a> in my spare time. When I am not
          working or learning, I enjoy cooking, football, watching or talking about Game of Thrones,
          and spending time with friends or family.
        </p>
        <p style={indent}>
              My main programming language of choice and knowledge is JavaScript (ES6/Babel).
          Along with JavaScript, I utilize HTML5 and CSS3 (SASS) for front end development. I am also familiar
          enough with Python that I can write scripts for my PC and read others' Python code. Languages
          I hope to learn in the future are Elm, C, Rust, and Go.
        </p>
        <p>
          Libraries, frameworks, and supersets of JavaScript I am familiar with are:
        </p>
        <ul>
          <li>ES6</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Redux</li>
          <li>Immutable</li>
          <li>Angular 1.x</li>
          <li>jQuery</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
