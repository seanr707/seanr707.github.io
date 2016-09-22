import { actionTypes } from '../actions/index.jsx';

const initialState = {
  viewing: 'about'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.CHANGE_VIEW:
    return Object.assign({}, state, {
      viewing: action.viewTitle
    });

  default:
    return state;
  }
};

export default reducer;
