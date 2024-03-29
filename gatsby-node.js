const path = require("path")

exports.onCreateWebpackConfig = ({ actions, plugins }) => {
  actions.setWebpackConfig({
    plugins: [
      // Inject environment variables for the client here:
      plugins.define({
        MAPS_KEY: process.env.MAPS_KEY,
        GOOGLE_ANALYTICS_TRACKING_ID: process.env.GOOGLE_ANALYTICS_TRACKING_ID
      })
    ]
  })
}

const createTagPages = (createPage, posts) => {
  const allTagsIndexTemplate = path.resolve("src/templates/AllTagsIndex.js")
  const singleTagIndexTemplate = path.resolve("src/templates/SingleTagIndex.js")

  const postsByTag = {}

  posts.forEach(({ node }) => {
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach(tag => {
        if (!postsByTag[tag]) postsByTag[tag] = []
        postsByTag[tag].push(node)
      })
    }
  })

  const tags = Object.keys(postsByTag)

  createPage({
    path: "/tags",
    component: allTagsIndexTemplate,
    context: {
      tags: tags.sort()
    }
  })

  tags.forEach(tagName => {
    const posts = postsByTag[tagName]
    createPage({
      path: `/tags/${tagName}`,
      component: singleTagIndexTemplate,
      context: {
        posts,
        tagName
      }
    })
  })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  // createPage returns a promise bc file creation is asynchronous
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve("src/templates/BlogPost.tsx")

    resolve(
      graphql(`
        query {
          allMdx(sort: { order: ASC, fields: [frontmatter___date] }) {
            edges {
              node {
                frontmatter {
                  title
                  date
                  path
                  tags
                  published
                  image
                }
              }
            }
          }
        }
      `).then(result => {
        const { edges: posts } = result.data.allMdx

        createTagPages(createPage, posts)

        posts.forEach(({ node }, index) => {
          const { path, published, image } = node.frontmatter
          // bail if post is not published yet
          if (!published) return

          createPage({
            path: `/posts${path}`,
            component: blogPostTemplate,
            context: {
              // using "pathSlug" bc "path" is a reserved keyword
              pathSlug: path,
              prev: index === 0 ? null : posts[index - 1].node,
              next: index === posts.length - 1 ? null : posts[index + 1].node,
              image
            }
          })

          resolve()
        })
      })
    )
  })
}
