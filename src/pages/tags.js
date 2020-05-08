import React from 'react'
import { Link, graphql } from 'gatsby'
import kebabCase from "lodash/kebabCase"

import Layout from '../components/layout'
import SEO from '../components/seo'

const tagsPage = ({ data }) => {
  const { group } = data.allMdx

  return (
    <Layout>
      <SEO title="All tags"/>
      <h1>All tags</h1>
      <ul>
        { group.map(tag => (
          <li key={ tag.fieldValue }>
            <Link to={ `/tags/${kebabCase(tag.fieldValue)}/` }>
              { tag.fieldValue } ({ tag.totalCount })
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`

export default tagsPage