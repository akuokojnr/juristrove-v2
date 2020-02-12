module.exports = {
  siteMetadata: {
    title: `Gatsby Minimal Starter`,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby minimal starter`,
        short_name: `GMS`,
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
  ],
}
