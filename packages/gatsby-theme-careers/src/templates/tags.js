import React from 'react'
import { graphql } from 'gatsby'
import Jobs from '../components/Jobs'

export default ({ data }) => <Jobs jobs={data.jobs.edges} />

export const query = graphql`
  query TagsQuery($slug: String!) {
    jobs: allContentfulJob(filter: {tags: {elemMatch: {slug: {eq: $slug }}}}) {
      edges {
        node {
          slug
          title
          tags {
            name,
            slug
          }
        }
      }
    }
  }
`
