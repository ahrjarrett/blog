module.exports = {
  siteMetadata: {
    title: 'Andrew Jarrett\'s blog',
    description: 'This is where I write, mostly about programming-related things but sometimes books stuff also.',
  },
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
	name: `pages`,
	path: `${__dirname}/src/pages`,
      },
    }
  ]
}
