module.exports = {
  siteMetadata: {
    title: "the grepper",
    subtitle: "Globally Search Regex & Print: A Log",
    description:
      "Here’s where I write stuff. Mostly about functional programming. But also sometimes about a book that a friend has recommended, or a dumb thought that my brain had.",
    canonicalUrl: "https://blog.thegrepper.com",
    image: "https://blog.thegrepper.com/images/headshot.jpeg",
    author: {
      name: "Andrew Jarrett",
      minibio: `
      <strong>Andrew Jarrett</strong> is a React contractor and functional programming advocate who lives in Austin, Texas with his pomeranian Ash Nabisco.
      `
    }
  },
  plugins: [
    `gatsby-mdx`,
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
