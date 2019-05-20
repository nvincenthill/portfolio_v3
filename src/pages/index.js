import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/layout';
import PhysicsEngine from '../components/PhysicsEngine';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const siteTitle = 'Nicholas Vincent-Hill';
    const siteDescription = 'A simple portfolio site for Nicholas Vincent-Hill';

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="main">
          <section id="one">
            <header className="major">
              <h1>Hi, I&#39;m Nick Vincent-Hill</h1>
              <h3>I&#39;m a software engineering instructor @ Hack Reactor at Galvanize</h3>
            </header>
          </section>
        </div>
        {/* <PhysicsEngine /> */}
      </Layout>
    );
  }
}

export default Home;
