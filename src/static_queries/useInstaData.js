import { graphql, useStaticQuery } from "gatsby"

export default function useInstaData() {
  const data = useStaticQuery(graphql`
    query getInstaData {
      allInstaNode(sort: { fields: timestamp, order: DESC }) {
        edges {
          node {
            id
            caption
            localFile {
              childImageSharp {
                fluid(maxWidth: 200, maxHeight: 200) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  `)
  return data.allInstaNode.edges
}
