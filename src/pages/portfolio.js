import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/layout';
import Project from '../components/Project';

import projects from '../assets/data/projects.json';

class PortfolioPage extends React.Component {
  render() {
    const siteTitle = 'Portfolio';
    const siteDescription = "A collection of Nicholas Vincent-Hill's work";

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="main">
          <section id="one">
            <header className="major">
              <h2>Here's some of my recent work</h2>
            </header>
            {projects.map(project => {
              return <Project project={project} key={project.name} />;
            })}
          </section>
        </div>
      </Layout>
    );
  }
}

export default PortfolioPage;
