module.exports = {
  siteMetadata: {
    title: 'Devon Bellizio',
    description: `Devon Bellizio's personal website`,
    twitterUsername: `@bellizio`,
    siteUrl: `https://www.belliz.io`,
    siteImage: 'site-icon.png',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `belliz.io`,
        short_name: `belliz.io`,
        start_url: `/`,
        background_color: `#f4f4f4`,
        theme_color: `#f4f4f4`,
        lang: `en`,
        display: `minimal-ui`,
        icon: `src/images/site-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-google-analytics`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-45640649-1`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
};
