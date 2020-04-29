import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const AchievementsImage = () => {
  const data = useStaticQuery(graphql`
    query getBadgeImage {
      file(name: { eq: "achievements" }) {
        desktop: childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  const badgeData = data.file.desktop.fluid
  return <Img style={{ width: "100%" }} id="badges" fluid={badgeData} />
}

export default AchievementsImage
