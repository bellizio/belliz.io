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
  const { title, description, image } = props;
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle: title
            defaultDescription: description
            defaultImage: image
            siteUrl: url
            titleTemplate
            twitterUsername
          }
        }
      }
    `
  );

  const {
    defaultTitle,
    defaultDescription,
    defaultImage,
    siteUrl,
    titleTemplate,
    twitterUsername,
  } = site.siteMetadata;

  const seo = {
    title: title ? titleTemplate.replace('%s', title) : defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}/${image || defaultImage}`,
    url: siteUrl,
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
      <meta name="og:image" content={seo.image} />
      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
};

export default SEO;
