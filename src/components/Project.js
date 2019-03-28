import React from 'react';

import Image from './Image';

class Project extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { project } = this.props;
    return (
      <a href={project.github} className="project-container" target="_blank">
        <div className="project-image-container">
          <Image src={project.imageSource} />
        </div>
        <h2 className="project-title">{project.name}</h2>
        <h3 className="project-description">{project.description}</h3>
      </a>
    );
  }
}

export default Project;
