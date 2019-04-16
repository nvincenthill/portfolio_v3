import React from 'react';
import posed from 'react-pose';
import { Link } from 'gatsby';

import Footer from './Footer';
import ParticleContainer from './ParticleContainer';
import NavBar from './NavBar';
import avatar from '../assets/images/avatar_black.jpg';

const Logo = posed.img({
  pressable: true,
  init: { scale: 1, opacity: 1 },
  press: { scale: 0.8, opacity: 0.8 },
});

const Header = () => (
  <header id="header">
    <div className="inner">
      <div className="outer-particle-container">
        <div className="inner-particle-container">
          <Link to="/">
            <Logo className="image avatar" src={avatar} alt="" />
          </Link>
          {typeof window !== 'undefined' && <ParticleContainer />}
        </div>
      </div>
      <h1 id="header-name">Nicholas Vincent-Hill</h1>
      <NavBar />
    </div>
    <Footer />
  </header>
);

export default Header;
