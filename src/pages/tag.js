import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const TagPage = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMdx
  const tagHeader = `${ totalCount } post${
    totalCount === 1 ? "" : "s"
  } tagged with "${ tag }"`

  return (
    <Layout>
      <SEO title="Tagged with"/>
      <h1>{ tagHeader }</h1>
      <ul>
        { edges.map(({ node }) => {
          const { slug } = node.fields
          const { title } = node.frontmatter
          return (
            <li key={ slug }>
              <Link to={ slug }>{ title }</Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query($tag: String) {
    allMdx (
      filter: { frontmatter: { tags: { in: [ $tag ] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default TagPage