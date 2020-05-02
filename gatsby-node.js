const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  // Transform the new node here and create a new node or
  // create a new node field.
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = path
      .basename(node.fileAbsolutePath, ".md")
      .replace(/[aä]+/g, "a")
      .replace(/[ö]+/g, "o")
    createNodeField({
      //same as node: node
      node,
      name: "slug",
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  //dynamically create pages here
  //get path to template
  const blogTemplate = path.resolve("./src/templates/blog.js")
  const bookTemplate = path.resolve("./src/templates/book.js")
  //get slugs
  const blogData = await graphql(`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/posts/" } }) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  //create new pages with unique slug
  blogData.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })

  const bookData = await graphql(`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/books/" } }) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  //create new pages with unique slug
  bookData.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: bookTemplate,
      path: `/bocker/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })
}
