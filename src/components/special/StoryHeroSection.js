import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { motion } from "framer-motion"
import { graphql, useStaticQuery, Link } from "gatsby"
import Header from "../Header"
import { Heading, Box, Flex, Container, TextLink } from "../../styles/elements"
import ForwardIconBig from "../../assets/svg/forward-big.svg"
import AchievementsImage from "./AchievementsImage"

const container = {
  start: { opacity: 1 },
  end: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
}

const fadeIn = {
  start: {
    opacity: 0,
    y: 30,
  },
  end: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
}

const animateIcon = {
  rest: { x: 0 },
  hover: { x: 20 },
}

const StoryHeroSection = () => {
  const data = useStaticQuery(graphql`
    query getMainStoryImage {
      file(name: { eq: "dennis-westerberg-story-main" }) {
        desktop: childImageSharp {
          fluid(
            maxWidth: 2000
            cropFocus: WEST
            traceSVG: { background: "#0C0C0C", color: "#17181a", threshold: 40 }
          ) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
        mobile: childImageSharp {
          fluid(maxWidth: 375, maxHeight: 812, cropFocus: ENTROPY) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)
  const imgDesktopData = data.file.desktop.fluid
  const imgMobileData = data.file.mobile.fluid

  const imgSrc = [
    imgMobileData,
    {
      ...imgDesktopData,
      media: `(min-width: 500px)`,
    },
  ]
  return (
    <StyledHeroSection variants={container} initial="start" animate="end">
      <Img fluid={imgSrc} alt="Dennis Westerberg" id="header-image" />
      <Header overrideColor={true} />
      <Container
        height={["calc(100vh - 205px)"]}
        display={["flex", "flex"]}
        alignContent={["flex-start"]}
      >
        <Flex
          flexDirection="column"
          justifyContent={["flex-end", "flex-end"]}
          width={[1]}
          textAlign="center"
          height={["calc(100vh - 110px)", "inherit"]}
          pb="4"
        >
          <Heading
            as={motion.h1}
            fontSize={["1.5rem", "36px"]}
            textAlign={["center"]}
            mb={["2", "3"]}
            mt="4"
            color="var(--c-heading-dark)"
            variants={fadeIn}
          >
            Dennis berättelse
          </Heading>
          <Heading
            variants={fadeIn}
            fontSize={["2.2rem", "4rem", "5.5rem"]}
            textAlign={["center"]}
            fontWeight="700 !important"
            mb={["3", "5"]}
            color="var(--c-accent)"
            style={{ textTransform: "uppercase" }}
          >
            "...redo att hoppa framför tåget..."
          </Heading>
        </Flex>
      </Container>
    </StyledHeroSection>
  )
}

export default StoryHeroSection

const StyledHeroSection = styled(Box)`
  background-color: var(--bg);
  height: 100vh;
  & > .gatsby-image-wrapper {
    position: absolute !important;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
    height: 100vh;
    &::before {
      display: block;
      content: " ";
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: linear-gradient(
        0deg,
        var(--bg-dark) 0%,
        var(--bg-dark-alpha) 60%
      );
      z-index: 1;
    }

    @media (max-width: 500px) {
      &::before {
        background: linear-gradient(
          0deg,
          var(--bg-dark) 0%,
          var(--bg-dark-alpha) 50%
        );
      }
    }
  }
  ${Container} {
    .gatsby-image-wrapper {
      max-width: 300px;
      margin-top: 5rem;

      @media (max-width: 900px) {
        margin-top: 2rem;
      }
    }
  }
`

const StyledLink = styled(Link)`
  font-size: 2rem;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: var(--f-weight-fat);
  color: var(--c-accent);
  display: inline-flex;
  align-items: center;

  svg {
    width: 40px;
    height: 40px;
    margin-left: 1rem;
    path {
      fill: var(--c-accent);
    }
  }
`
