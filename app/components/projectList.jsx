import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actions } from '../actions/index.jsx';
import Project from './project.jsx';

class ProjectListContainer extends React.Component {
  render() {
    const { projects, dispatch } = this.props;

    const boundActions = bindActionCreators(actions, dispatch);

    return (
      <div className="project-list-container">
        {projects.map(project => {
          return (
            <Project
              expanded={project.expanded}
              key={project.id}
              project={project}
              clickProject={boundActions.toggleProject}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projectState.projects
  };
};

export default connect(mapStateToProps)(ProjectListContainer);
