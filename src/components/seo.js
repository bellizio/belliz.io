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
  const { description, lang, meta, title } = props;
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            twitterUsername
            siteUrl
            siteImage
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const metaTitle = title || site.siteMetadata.title;
  const metaImage = `${site.siteMetadata.siteUrl}/${site.siteMetadata.siteImage}`;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      defaultTitle={site.siteMetadata.title}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: metaTitle,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:url',
          content: site.siteMetadata.siteUrl,
        },
        {
          property: 'og:image',
          content: metaImage,
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.twitterUsername,
        },
        {
          name: 'twitter:image',
          content: metaImage,
        },
        {
          name: 'twitter:title',
          content: metaTitle,
        },
      ].concat(meta)}
      bodyAttributes={{ class: 'sans-serif' }}
    />
  );
};

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  description: '',
  title: '',
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
};

export default SEO;
