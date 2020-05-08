const path = require('path')
const _ = require("lodash")
const { createFilePath } = require(`gatsby-source-filesystem`)

// Create and expose a slug field
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === "Mdx") {
      const value = createFilePath({ node, getNode })
      createNodeField({
          name: "slug",
          node,
          value: `${value}`,
      })
  }
}

// Create pages from MDX files
exports.createPages = async function({ actions, graphql, reporter }) {
  const { createPage } = actions

  const pagesTemplate = path.resolve(`./src/pages/post.js`)
  const tagTemplate = path.resolve(`./src/pages/tag.js`)

  const result = await graphql(`
    {
      postsMdx: allMdx (
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
            }
          }
        }
      }
      tagsGroup: allMdx {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic('Failed to create posts: ', result.errors)
  }

  // Create posts pages
  const posts = result.data.postsMdx.edges
  posts.forEach( edge => {
    const slug = edge.node.fields.slug
    createPage({
      path: slug,
      component: pagesTemplate,
      context: { 
        slug: slug 
      },
    })
  })

  // Create tags pages
  const tags = result.data.tagsGroup.group
  tags.forEach( tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue
      },
    })
  })
}