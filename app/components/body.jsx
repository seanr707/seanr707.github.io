import React from 'react';
import { connect } from 'react-redux';

import About from './about.jsx';
import ProjectList from './projectList.jsx';
import Contact from './contact.jsx';

const Body = ({ currentView }) => {

  let bodyHTML;

  switch (currentView) {
  case 'about':
    bodyHTML = <About />;
    break;
  case 'projects':
    bodyHTML = <ProjectList />;
    break;
  case 'contact':
    bodyHTML = <Contact />;
    break;
  default:
    bodyHTML = <div className="error">ERROR: Contact administrator</div>;
    break;
  }

  return (
    <div className="body-container">
      <h2 style={{ textAlign: 'center', color: '#555555' }}>
        {currentView[0].toUpperCase() + currentView.substr(1)}
      </h2>
      {bodyHTML}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentView: state.viewState.viewing
  };
};

export default connect(mapStateToProps)(Body);
