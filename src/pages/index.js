import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Intro from '../components/intro';
import About from '../components/about';
import Work from '../components/work';
import Contact from '../components/contact';

let SmoothScroll;
let Gumshoe;

if (typeof window !== 'undefined') {
  SmoothScroll = require('smooth-scroll');
  Gumshoe = require('gumshoejs');
}

class IndexPage extends React.Component {
  componentDidMount() {
    const header = document.getElementById('header-component');
    // eslint-disable-next-line
    const smoothScroll = new SmoothScroll('a[href*="#"]', {
      header: '[data-scroll-header]',
      updateURL: false,
    });
    // eslint-disable-next-line
    const gumshoe = new Gumshoe('#nav-list a', {
      offset: () => header.getBoundingClientRect().height,
    });
  }

  render() {
    return (
      <Layout>
        <SEO title="Devon Bellizio" />
        <Intro />
        <About />
        <Work />
        <Contact />
      </Layout>
    );
  }
}

export default IndexPage;
