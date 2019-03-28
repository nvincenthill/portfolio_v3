import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/layout';

class AboutPage extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const siteTitle = 'About me';
    const siteDescription = 'About Nicholas Vincent-Hill';

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="main">
          <section id="one">
            <header className="major">
              <h2>About me</h2>
            </header>
            <p>
              I'm a full-stack software engineer who enjoys building scalable,
              responsive, mobile-first web applications.
            </p>
            <p>
              In a prior life as a trader, I hedged interest rate risk for
              mortgage originators with mortgage-backed securities. I've also
              traded commodities, equities, and derivatives.
            </p>
            <p>
              When I’m not on the job, I enjoy traveling the world and urban
              gardening with my girlfriend Melody.
            </p>
            <p>
              I have experience working with: React, MongoDB, Express, Node.js,
              Git, Docker, Webpack, SQL, HTML5/CSS/JS, AWS (S3, EC2, Route 53,
              CloudFront), Jest/Enzyme, Mocha/Chai, Redux, jQuery, Heroku,
              CircleCI, p5.js, SQLite, MySQL, PostgreSQL, Grunt, Python, and
              Linux.
            </p>
          </section>
        </div>
      </Layout>
    );
  }
}

export default AboutPage;
