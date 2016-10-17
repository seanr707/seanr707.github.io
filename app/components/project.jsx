import React from 'react';

class Project extends React.Component {
  render() {
    const { expanded, clickProject, project } = this.props;
    let projectStyle;
    let descStyle;

    if (expanded) {
      projectStyle = {
        height: '250px'
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
      <div className="project" style={projectStyle}>
        <div className="project-title" onClick={() => clickProject(project.id)}>
          {project.title}
        </div>
        <div className="hidden-description" style={descStyle}>
          <div className="img-container">
            <a target="_blank" href={project.urls.githubIo}>
              <img src={'public/img/projects/' + project.imageTitle} alt="project" className="project-img" />
            </a>
          </div>
          <div className="project-description-container">
            <div className="project-description">
              {project.description}
            </div>
          </div>
          <div className="button-container">
            <a target="_blank" href={project.urls.githubSrc}>
              <button type="button" className="btn btn-low">
                Source
              </button>
            </a>
            <a target="_blank" href={project.urls.githubIo}>
              <button type="button" className="btn btn-low">
                Page
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
