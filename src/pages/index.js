import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/layout';

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
              <h2>
                Hi, I'm Nick!
                <br />
                I'm a software engineering instructor at Galvanize.
              </h2>
            </header>
            <div className="poem">
              <p>I met a traveller from an antique land,</p>
              <p>Who said—“Two vast and trunkless legs of stone</p>
              <p>Stand in the desert. . . . Near them, on the sand,</p>
              <p>Half sunk a shattered visage lies, whose frown,</p>
              <p>And wrinkled lip, and sneer of cold command,</p>
              <p>Tell that its sculptor well those passions read</p>
              <p>Which yet survive, stamped on these lifeless things,</p>
              <p>The hand that mocked them, and the heart that fed;</p>
              <p>And on the pedestal, these words appear:</p>
              <p className="poem-hightlight">
                My name is Ozymandias, King of Kings;
              </p>
              <p className="poem-hightlight">
                Look on my Works, ye Mighty, and despair!
              </p>
              <p>Nothing beside remains. Round the decay</p>
              <p>Of that colossal Wreck, boundless and bare</p>
              <p>The lone and level sands stretch far away.</p>
              <br />
              <p>
                <strong>Percy B. Shelley</strong>
              </p>
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}

export default Home;
