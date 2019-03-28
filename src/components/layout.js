import React from 'react';
import '../assets/scss/main.scss';

import Header from './Header';

class Template extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { children } = this.props;
    return (
      <div>
        <Header />
        {children}
      </div>
    );
  }
}

export default Template;
