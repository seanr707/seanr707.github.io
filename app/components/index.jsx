import React from 'react';

import Navbar from './navbar.jsx';
import Body from './body.jsx';

const ProfileButtons = () => {
  const profiles = {
    Github: 'https://github.com/seanr707',
    Codepen: 'https://codepen.io/seanr707/pens/public/'
  };

  return (
    <div className="button-container">
    {Object.keys(profiles).map(key => {
      return (
        <a key={key} target="_blank" href={profiles[key]}>
          <button className="btn">{key}</button>
        </a>
      );
    })}
    </div>
  );
};

const Header = () => {
  return (
    <div className="heading">
      <div className="name">Sean R.</div>
      <ProfileButtons />
    </div>
  );
};

const Footer = () => {
  return (
    <div className="foot">
      <p><em>Author, Sean R. (seanr707)</em></p>
      <p><em>Copyright 2016</em></p>
    </div>
  );
};

const App = () => {
  return (
    <div id="react-container">
      <Header />
      <Body />
      <Footer />
      <Navbar />
    </div>
  );
};

export default App;
