import React from "react"
import { graphql } from 'gatsby'
const IndexPage = ({data}) => {
  return <div>{data.story.content}!</div>
}

export const query = graphql`
  {
    story: storyblokEntry(full_slug: { eq: "home" }) {
      name
      content
      full_slug
      uuid
    }
  }
`
export default IndexPage