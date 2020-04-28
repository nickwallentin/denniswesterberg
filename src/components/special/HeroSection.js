import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Header from "../Header"
import { Heading, Box, Container } from "../../styles/elements"

const HeroSection = () => {
  const data = useStaticQuery(graphql`
    query getMainImage {
      file(name: { eq: "dennis-westerberg-index-header" }) {
        desktop: childImageSharp {
          fluid(maxWidth: 1440, maxHeight: 900) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
        mobile: childImageSharp {
          fluid(maxWidth: 375, maxHeight: 812) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const imgDesktopData = data.file.desktop.fluid
  const imgMobileData = data.file.mobile.fluid
  return (
    <StyledHeroSection>
      <Img fluid={imgDesktopData} alt="Dennis Westerberg" />
      <Header />
      <Container>
        <Box width={[1, 2 / 3]}>
          <Heading
            as="h1"
            fontSize={["46px"]}
            fontWeight="var(--f-weight-subheading) !important"
            mb="3"
          >
            Dennis Westerberg
          </Heading>
          <Heading
            fontSize={["6rem"]}
            fontStyle="uppcercase"
            style={{ textTransform: "uppercase" }}
          >
            Din guide till villkorslöst välmående.
          </Heading>
        </Box>
      </Container>
    </StyledHeroSection>
  )
}

export default HeroSection

const StyledHeroSection = styled.div`
  .gatsby-image-wrapper {
    position: absolute !important;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
    height: 100vh;
  }
`
const HeroContent = styled(Box)
