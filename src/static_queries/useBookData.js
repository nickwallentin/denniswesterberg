import { graphql, useStaticQuery } from "gatsby"

export default function useBookData() {
  const data = useStaticQuery(graphql`
    query getBookData {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/books/" } }) {
        edges {
          node {
            id
            frontmatter {
              title
              subtitle
              intro
              buy_url
              image {
                small: childImageSharp {
                  fluid(maxWidth: 200) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
                large: childImageSharp {
                  fluid(maxWidth: 200) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  return data.allMarkdownRemark.edges
}
