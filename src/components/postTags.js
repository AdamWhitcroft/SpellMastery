import React from 'react'
import kebabCase from "lodash/kebabCase"
import { Link } from 'gatsby'

const PostTags = ({ tags }) => {

  return (
    <ul className="post-tags">
      { tags.map(tag => (
        <li key={ tag }>
          <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
            { tag }
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default PostTags

