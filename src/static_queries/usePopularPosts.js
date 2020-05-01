import { graphql, useStaticQuery } from "gatsby"

export default function usePopularPosts() {
  const data = useStaticQuery(graphql`
    query getPopularPosts {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/posts/" }
          frontmatter: { featured: { eq: true } }
        }
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
              categories
            }
          }
        }
      }
    }
  `)

  return data.allMarkdownRemark.edges
}
