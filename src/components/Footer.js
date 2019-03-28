import React from 'react';
import { Link } from 'gatsby';
class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <div className="inner">
          <ul className="icons">
            <li>
              <a
                href="https://www.linkedin.com/in/nvincenthill"
                className="icon fa-linkedin"
                target="_blank"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/nvincenthill"
                className="icon fa-github"
                target="_blank"
              >
                <span className="label">Github</span>
              </a>
            </li>
            <li>
              <Link to="/contact/" className="icon fa-envelope-o">
                <span className="label">Contact</span>
              </Link>
            </li>
          </ul>
          <ul className="copyright">
            <li>&copy; {new Date().getFullYear()} Nicholas Vincent-Hill</li>
            <li>
              Design: <a href="http://html5up.net">HTML5 UP</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
