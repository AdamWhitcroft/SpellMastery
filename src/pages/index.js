import React from 'react'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import SEO from '../components/seo'

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMdx

  return (
    <Layout>
      <SEO title="Home"/>
      <h1>All posts</h1>
      <p>This is the index page. Edit it in <code>src/pages/index.js</code>.</p>
      {posts.map(({ node: post }) => (
        <div key={ post.id }>
          <h3>{ post.frontmatter.title }</h3>
          <p>{ post.frontmatter.date }</p>
          <Link to={ post.fields.slug }>Keep reading&hellip;</Link>
        </div>
      ))}
    </Layout>
  )

}

export const query = graphql`
  query {
    allMdx (
      sort: { order: DESC, fields: [frontmatter___date]}
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM Do, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default IndexPage