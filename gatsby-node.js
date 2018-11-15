const path = require('path')

const query = `
query {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          path
        }
      }
    }
  }
}`

exports.createPages = (({ graphql, actions }) => {
  const { createPage } = actions

  // createPage returns a promise bc file creation is asynchronous
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('src/templates/blogPost.js')

    resolve(
      graphql(query).then(result => {
	result.data.allMarkdownRemark.edges.forEach(({ node }) => {
	  const { path } = node.frontmatter
	  createPage({
	    path,
	    component: blogPostTemplate,
	    // "context" available in component props as "pageContext"
	    context: {
	      // using "pathSlug" bc path is a reserved keyword
	      pathSlug: path
	    }
	  })
	  
	  resolve()
	})
      })
    )
  })
})

