import React from 'react';

import Footer from './Footer';
import NavBar from './NavBar';
import avatar from '../assets/images/avatar.jpg';
import Particles from 'react-particles-js';
import particleConfig from '../assets/data/particlesjs-config.json';
import particleConfigSpace from '../assets/data/particlesjs-config-space.json';

import { Link } from 'gatsby';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header id="header">
        <div className="inner">
          <div className="outer-particle-container">
            <div className="inner-particle-container">
              <Link to="/">
                <img className="image avatar" src={avatar} alt="" />
              </Link>

              {typeof window !== 'undefined' && (
                <Particles
                  height={200}
                  params={
                    window.location.pathname === '/contact/'
                      ? particleConfig
                      : particleConfigSpace
                  }
                />
              )}
            </div>
          </div>
          <h1>
            <strong>Nicholas Vincent-Hill</strong>
          </h1>
          <NavBar />
        </div>
        <Footer />
      </header>
    );
  }
}

export default Header;
