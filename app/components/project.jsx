import React from 'react';

class Project extends React.Component {
  render() {
    const { expanded, clickProject, project } = this.props;
    let projectStyle;
    let descStyle;

    if (expanded) {
      projectStyle = {
        height: '200px'
      };
      descStyle = {
        transition: 'opacity 0.25s ease 1s',
        visibility: 'visible',
        opacity: 1
      };
    } else {
      projectStyle = {};
      descStyle = {
        visibility: 'hidden',
        opacity: 0
      };
    }
    return (
      <div className="project" style={projectStyle} onClick={() => clickProject(project.id)}>
        <div className="project-title">
          {project.title}
        </div>
        <div className="hidden-description" style={descStyle}>
          <div className="img-container">
            <a target="_blank" href={project.url}>
              <img src={'public/img/projects/' + project.imageTitle} alt="project" className="project-img" />
            </a>
          </div>
          <div className="project-description">
            {project.description}
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
