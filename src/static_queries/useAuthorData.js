import { graphql, useStaticQuery } from "gatsby"

export default function useSiteMetadata() {
  const data = useStaticQuery(graphql`
    query getAuthorData {
      file(name: { eq: "dennis-westerberg-profile" }) {
        childImageSharp {
          fluid(maxWidth: 200, maxHeight: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return data
}
