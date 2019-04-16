import React from 'react';
import { Link } from 'gatsby';

class NavBar extends React.Component {
  render() {
    return (
      typeof window !== 'undefined' && (
        <div>
          <h1 className={window.location.pathname === '/about/' ? 'bold' : ''}>
            <Link to="/about/">About</Link>
          </h1>
          <h1 className={window.location.pathname === '/portfolio/' ? 'bold' : ''}>
            <Link to="/portfolio/">Portfolio</Link>
          </h1>
          <h1 className={window.location.pathname === '/articles/' ? 'bold' : ''}>
            <Link to="/articles/">Articles</Link>
          </h1>
          <h1 className={window.location.pathname === '/contact/' ? 'bold' : ''}>
            <Link to="/contact/">Contact me</Link>
          </h1>
        </div>
      )
    );
  }
}

export default NavBar;
