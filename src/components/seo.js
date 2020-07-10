/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = (props) => {
  const { title, description } = props;
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteImage
            siteUrl
            titleTemplate
            twitterUsername
          }
        }
      }
    `
  );
  const defaults = site.siteMetadata;

  if (!defaults.siteUrl && typeof window !== 'undefined') {
    defaults.siteUrl = window.location.origin;
  }

  const seo = {
    title: title ? defaults.titleTemplate.replace('%s', title) : defaults.title,
    description: description || defaults.description,
    imageUrl: `${defaults.siteUrl}/${defaults.siteImage}`,
    url: defaults.siteUrl,
    twitterUsername: defaults.twitterUsername,
  };

  return (
    <Helmet>
      <html lang="en" />
      <body className="sans-serif" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {/* Open Graph */}
      <meta name="og:type" content="website" />
      <meta name="og:url" content={seo.url} />
      <meta name="og:title" content={seo.title} />
      <meta name="og:description" content={seo.description} />
      <meta name="og:image" content={seo.imageUrl} />
      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.imageUrl} />
      {seo.twitterUsername && (
        <meta name="twitter:creator" content={seo.twitterUsername} />
      )}
    </Helmet>
  );
};

SEO.defaultProps = {
  title: null,
  description: null,
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default SEO;
