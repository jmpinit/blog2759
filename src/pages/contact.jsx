import React from 'react';
import Helmet from 'react-helmet';
import Header from '../components/Header/Header';
import Container from '../components/Container/Container';
import Footer from '../components/Footer/Footer';
import config from '../../config/SiteConfig';

const Contact = () => (
  <div className="container contact-container">
    <Helmet title={`Contact | ${config.siteTitle}`} />
    <Header>
      Send me an email at <a href="mailto:hi@owentrueblood.com">hi@owentrueblood.com</a>
    </Header>
    <Container text>
      <h1>Or contact me:</h1>
      <ul>
        <li>
          On Twitter: <a href="https://twitter.com/jmptable">@jmptable</a>
        </li>
        <li>
          On Instagram: <a href="https://www.instagram.com/jmptable">@jmptable</a>
        </li>
        <li>
          On Hackaday.io: <a href="https://hackaday.io/owen">/owen</a>
        </li>
        <li>
          On Keybase: <a href="https://keybase.io/jmptable">/jmptable</a>
        </li>
      </ul>
    </Container>
    <Footer />
  </div>
);

export default Contact;
