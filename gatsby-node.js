const path = require('path')

exports.createPages = (({ graphql, actions }) => {
  const { createPage } = actions

  // createPage returns a promise bc file creation is asynchronous
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('src/templates/blogPost.js')

    resolve(
      graphql(`
        {
          allOrga {
            edges {
              node {
                fields {
                  slug
                }
              }
            }
          }
        }
      `
      ).then(result => {
        // createTagPages(createPage, posts)

        result.data.allOrga.edges.forEach(edge => {
          const { slug } = edge.node.fields
          createPage({
            path: slug,
            component: blogPostTemplate,
            context: {
              slug,
              // prev: index === 0 ? null : posts[index - 1].node,
              // next: index === (posts.length - 1) ? null : posts[index + 1].node,
            }
          })

          resolve()
        })
      })
    )
  })
})

// Add custom url pathname for blog posts
exports.onCreateNode = ({
  node,
  actions,
  getNode
}) => {
  const { createNodeField } = actions

  if (node.internal.type === `File`) {
    const folder = node.relativeDirectory
    // why do we need to parse here?
    const fileName = path.parse(node.absolutePath).name
    const slug = `/${path.join(folder, fileName)}/`
    createNodeField({ node, name: `slug`, value: slug })
  } else if (
    node.internal.type === `Orga` && typeof node.slug === `undefined`
  ) {
    const fileNode = getNode(node.parent)
    createNodeField({
      node,
      name: `slug`,
      value: fileNode.fields.slug,
    })
  }
}

