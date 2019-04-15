import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/layout';
import Article from '../components/Article';
import articles from '../assets/data/blog-posts.json';

class ArticlesPage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const siteTitle = 'Articles';
    const siteDescription =
      "A collection of Nicholas Vincent-Hill's written work";

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="main">
          <section id="one">
            <header className="major">
              <h2>Here are some articles I've written</h2>
            </header>
            {articles.map(article => {
              return <Article key={article.title} article={article} />;
            })}
          </section>
        </div>
      </Layout>
    );
  }
}

export default ArticlesPage;
