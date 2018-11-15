// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-all-tags-index-js": preferDefault(require("/Users/aj/Desktop/stuff/projects/thegrepper/blog/src/templates/allTagsIndex.js")),
  "component---src-templates-single-tag-index-js": preferDefault(require("/Users/aj/Desktop/stuff/projects/thegrepper/blog/src/templates/singleTagIndex.js")),
  "component---src-templates-blog-post-js": preferDefault(require("/Users/aj/Desktop/stuff/projects/thegrepper/blog/src/templates/blogPost.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/aj/Desktop/stuff/projects/thegrepper/blog/src/pages/index.js"))
}

