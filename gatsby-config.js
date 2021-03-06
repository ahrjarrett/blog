module.exports = {
  siteMetadata: {
    title: `the logfile`,
    shortTitle: `log💾`,
    subtitle: `Global Search Regex + Print`,
    description: `Here’s where I write stuff. Mostly about functional programming. But also sometimes about a book that a friend has recommended, or a dumb thought that my brain had.`,
    canonicalUrl: `https://ahrjarrett.com`,
    image: `the-grepper-monkey-see-monkey-flew.jpg`,
    altImage: `the-grepper-goldfish-brain.jpg`,
    author: {
      name: `Andrew Jarrett`,
      minibio: `Andrew Jarrett is a React contractor and functional programming advocate who lives in Austin, Texas with his pomeranian Ash Nabisco.`,
      image: `headshot.jpeg`,
      social: {
        linkedin: `https://www.linkedin.com/in/andrewhjarrett/`,
        github: `https://github.com/ahrjarrett`,
        twitter: `https://twitter.com/ahrjarrett`,
      },
    },
  },
  //pathPrefix: `/test`,
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
      },
    },
  ],
}
