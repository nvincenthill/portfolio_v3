import React from 'react';

import PropTypes from 'prop-types';

const Article = (props) => {
  const { article } = props;
  return (
    <div>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        <h2>{article.title}</h2>
      </a>
      <p>{article.description}</p>
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Article;
