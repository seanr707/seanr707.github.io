const actionTypes = {
  TOGGLE_PROJECT: 'TOGGLE_PROJECT',
  CHANGE_VIEW: 'CHANGE_VIEW'
};

const actions = {
  toggleProject: (id) => {
    return {
      type: actionTypes.TOGGLE_PROJECT,
      id
    };
  },
  changeView: (viewTitle, component) => {
    return {
      type: actionTypes.CHANGE_VIEW,
      viewTitle,
      component
    };
  }
};

module.exports = {
  actionTypes,
  actions
};
