import React from 'react';
import Helmet from 'react-helmet';
import Header from '../components/Header/Header';
import Container from '../components/Container/Container';
import Footer from '../components/Footer/Footer';
import config from '../../config/SiteConfig';

const About = () => (
  <div className="container about-container">
    <Helmet title={`About | ${config.siteTitle}`} />
    <Header>About</Header>
    <Container text>
      <img
        src="/images/At-La-Triennale-di-Milano.jpg"
        alt="Squatting on the steps of a museum typing on a laptop as a man looks on confused"
      />
      <p>
        My name is Owen Trueblood - I'm a programmer, hardware hacker, artist, and entrepreneur who can usually be found in New York City or Boston.
      </p>
      <p>
        Contact me at <a href="mailto:hi@owentrueblood.com">hi@owentrueblood.com</a>.
      </p>
    </Container>
    <Footer />
  </div>
);

export default About;
