import React from 'react';
import Particles from 'react-particles-js';

import particleConfig from '../assets/data/particlesjs-config.json';
import particleConfigSpace from '../assets/data/particlesjs-config-space.json';

const ParticleContainer = () => (
  <Particles
    height={200}
    params={window.location.pathname === '/contact/' ? particleConfig : particleConfigSpace}
  />
);

export default ParticleContainer;
