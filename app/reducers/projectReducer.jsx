import { actionTypes } from '../actions/index.jsx';

import initialState from '../projects.js';

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.TOGGLE_PROJECT:
    return Object.assign({}, state, {
      projects: state.projects.map(project => {
        if (project.id === action.id) project.expanded = !project.expanded;
        return project;
      })
    });

  default:
    return state;
  }
};

export default projectReducer;
