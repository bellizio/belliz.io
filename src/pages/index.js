import React, { useEffect } from 'react';
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

const IndexPage = () => {
  useEffect(() => {
    const header = document.getElementById('header-component');

    new SmoothScroll('a[href*="#"]', {
      header: '[data-scroll-header]',
      updateURL: false,
    });
    new Gumshoe('#nav-list a', {
      offset: () => header.getBoundingClientRect().height,
    });
  }, []);

  return (
    <>
      <Layout>
        <Intro />
        <About />
        <Work />
        <Contact />
      </Layout>
    </>
  );
};

// https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
export const Head = () => <SEO />;

export default IndexPage;
