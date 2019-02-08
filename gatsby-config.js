module.exports = {
  siteMetadata: {
    title: "Globally Search Regex & Print",
    subtitle: "A Log",
    description:
      "Here’s where I write stuff. Mostly about functional programming. But also sometimes about a book that a friend has recommended, or a dumb thought that my brain had."
  },
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              aliases: {
                js: "javascript"
              },
              classPrefix: "language-",
              inlineCodeMarker: null,
              noInlineHighlight: false,
              showLineNumbers: true
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    }
  ]
}
