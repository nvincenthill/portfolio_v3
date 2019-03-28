import React from 'react';
import Helmet from 'react-helmet';

import ContactForm from '../components/ContactForm';
import Layout from '../components/layout';

class ContactPage extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const siteTitle = 'Contact me';
    const siteDescription = 'Contact Nicholas Vincent-Hill';

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="main">
          <section id="one">
            <header className="major">
              <h2>Connect with me</h2>
            </header>
            <p>Want to chat? Shoot me an email - I'd love to hear from you!</p>
            <div className="row">
              <ContactForm />
              <div className="4u 12u$(small)">
                <ul className="labeled-icons">
                  <li>
                    <h3 className="icon fa-home">
                      <span className="label">Address</span>
                    </h3>
                    44 Tehama St,
                    <br />
                    San Francisco, CA 94105
                    <br />
                    United States
                  </li>
                  <li>
                    <h3 className="icon fa-mobile">
                      <span className="label">Phone</span>
                    </h3>
                    (541) 602-1878
                  </li>
                  <li>
                    <h3 className="icon fa-envelope-o">
                      <span className="label">Email</span>
                    </h3>
                    <p>nvincenthill@gmail.com</p>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}

export default ContactPage;
