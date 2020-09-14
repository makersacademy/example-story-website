const path = require(`path`)

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
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

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const field = node.fields.slug
    const component = path.resolve(`./src/templates/chapter.tsx`)
    const indexPage = require.resolve(`./src/templates/index.tsx`)
    if (field === "/") {
      createPage({
        path: field,
        component: indexPage,
        context: {
          slug: field,
        },
      })
    } else {
      createPage({
        path: field,
        component: component,
        context: {
          slug: field,
        },
      })
    }
  })
}
