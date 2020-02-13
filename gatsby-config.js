/* eslint-disable */

module.exports = {
  siteMetadata: {
    title: `Juristrove 2.0`,
    author: `Daniel Akuoko Jnr`,
    description: `This is a gatsby minimal starter to quickly scalfold a project`,
    siteUrl: `localhost:8000`,
    social: {
      twitter: `_akuokojnr`,
    },
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/images`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Juristrove 2.0`,
        short_name: `Juristrove`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        // icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-svgr`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-typescript`,
  ],
};
