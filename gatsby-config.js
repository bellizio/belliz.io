module.exports = {
  siteMetadata: {
    title: 'Devon Bellizio',
    description: `Devon Bellizio's personal website`,
    image: 'site-icon.png',
    url: 'https://belliz.io',
    titleTemplate: '%s | Devon Bellizio',
    twitterUsername: '@bellizio',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
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
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [`G-92YG5F10TV`],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
};
