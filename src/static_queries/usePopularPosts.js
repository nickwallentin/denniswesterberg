import { graphql, useStaticQuery } from "gatsby"

export default function usePopularPosts() {
  const data = useStaticQuery(graphql`
    query getPopularPosts {
      allMarkdownRemark(
        limit: 2
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            fields {
              slug
            }
            id
            frontmatter {
              title
              subtitle
              intro
            }
          }
        }
      }
    }
  `)

  return data.allMarkdownRemark.edges
}
