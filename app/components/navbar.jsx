import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actions } from '../actions/index.jsx';

const Navbar = ({ currentView, dispatch }) => {

  const boundActions = bindActionCreators(actions, dispatch);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div
          id="go-about"
          className={'nav-item' + (currentView === 'about' ? ' highlighted' : '')}
          onClick={() => boundActions.changeView('about')}
        >
          About
        </div>
        <div
          id="go-projects"
          className={'nav-item' + (currentView === 'projects' ? ' highlighted' : '')}
          onClick={() => boundActions.changeView('projects')}
        >
          Projects
        </div>
        <div
          id="go-contact"
          className={'nav-item' + (currentView === 'contact' ? ' highlighted' : '')} 
          onClick={() => boundActions.changeView('contact')}
        >
          Contact
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    currentView: state.viewState.viewing
  };
};

export default connect(mapStateToProps)(Navbar);
