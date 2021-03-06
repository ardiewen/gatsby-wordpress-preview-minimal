export const siteMetadata = {
  title: `Gatsby Default Starter`,
  description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
  author: `@gatsbyjs`,
}

export const plugins = [
  // `gatsby-plugin-typegen`,
  `gatsby-plugin-react-helmet`,
  // {
  //   resolve: `gatsby-source-filesystem`,
  //   options: {
  //     name: `images`,
  //     path: `${__dirname}/src/images`,
  //   },
  // },
  {
    resolve: "gatsby-source-wordpress-experimental",
    options: {
      url: process.env.GATSBY_GRAPHQL_URL,
      verbose: true,
      // schema: {
      //   requestConcurrency: 5,
      //   previewRequestConcurrency: 2,
      // },
      debug: {
        preview: true,
      },
    },
  },
  `gatsby-plugin-styled-components`,
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  // {
  //   resolve: `gatsby-plugin-manifest`,
  //   options: {
  //     name: `gatsby-starter-default`,
  //     short_name: `starter`,
  //     start_url: `/`,
  //     background_color: `#663399`,
  //     theme_color: `#663399`,
  //     display: `minimal-ui`,
  //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
  //   },
  // },
]
