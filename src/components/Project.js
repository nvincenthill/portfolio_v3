import React from 'react';
import PropTypes from 'prop-types';

import Image from './Image';

const Project = (props) => {
  const { project } = props;
  return (
    <a
      href={project.github}
      className="project-container"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="project-image-container">
        <Image src={project.imageSource} />
      </div>
      <h2 className="project-title">{project.name}</h2>
      <h3 className="project-description">{project.description}</h3>
    </a>
  );
};

Project.propTypes = {
  project: PropTypes.shape({
    imageSource: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Project;
