import React from 'react';

class Article extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { article } = this.props;
    return (
      <div>
        <a href={article.url} target="_blank">
          <h2>{article.title}</h2>
        </a>
        <p>{article.description}</p>
      </div>
    );
  }
}

export default Article;
