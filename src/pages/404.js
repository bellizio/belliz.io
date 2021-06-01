import React from 'react';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <>
    <SEO title="404: Not Found" />
    <div className="vh-100 lh-copy ph3 flex flex-column items-center justify-center">
      <h1 className="f1 f-headline-l code mb3 mt0 fw9 tracked-tight near-black">
        404
      </h1>
      <h2 className="f1-l fw1 tc near-black">
        Sorry, we can't find the page you are looking for.
      </h2>
      <p className="fw4 fw3-ns mt4 mt5-l mb0 f4 f3-l near-black lh-copy">
        Head{' '}
        <a className="blue underline-animate-down" href="/">
          home
        </a>
      </p>
    </div>
  </>
);

export default NotFoundPage;
