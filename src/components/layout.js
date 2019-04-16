import React from 'react';
import PropTypes from 'prop-types';

import '../assets/scss/main.scss';
import Header from './Header';

const Template = (props) => {
  const { children } = props;
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

Template.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Template;
