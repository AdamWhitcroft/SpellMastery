import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import SEO from '../components/seo'
import PostTags from '../components/postTags'

const PostPage = ({ data }) => {
  const post = data.mdx
  return (
    <Layout>
      <SEO title={ post.frontmatter.title }/>
      <h1>{ post.frontmatter.title }</h1>
      <PostTags tags={ post.frontmatter.tags } />
      <p>This is the post template. Edit it in <code>src/pages/post.js</code>.</p>
      <MDXRenderer>{ post.body }</MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String) {
    mdx(
      fields: { slug: { eq: $slug } }
      ) {
      body
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        tags
      }
    }
  }
`

export default PostPage