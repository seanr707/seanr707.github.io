import { combineReducers } from 'redux';

import Projects from './projectReducer.jsx';
import Views from './viewReducer.jsx';

export default combineReducers({
  projectState: Projects,
  viewState: Views
});
