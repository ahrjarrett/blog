module.exports = {
  siteMetadata: {
    title: 'Andrew Jarrett’s blog',
    description: 'Here’s where I write stuff. Mostly about functional programming.',
  },
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
        omitGoogleFont: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    }
  ]
}
