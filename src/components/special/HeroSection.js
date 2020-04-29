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

const HeroSection = () => {
  const data = useStaticQuery(graphql`
    query getMainImage {
      file(name: { eq: "dennis-westerberg-index-header-lg" }) {
        desktop: childImageSharp {
          fluid(maxWidth: 3000, maxHeight: 2000, cropFocus: NORTH) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
        mobile: childImageSharp {
          fluid(maxWidth: 375, maxHeight: 812, cropFocus: ENTROPY) {
            ...GatsbyImageSharpFluid_withWebp
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
        display={["flex", "block"]}
        alignContent={["flex-end"]}
      >
        <Flex
          flexDirection="column"
          justifyContent={["flex-end", "center"]}
          width={[1, 2 / 3]}
          height={["calc(90vh - 110px)", "inherit"]}
        >
          <Heading
            as={motion.h1}
            fontSize={["2rem", "46px"]}
            textAlign={["center", "left"]}
            fontWeight="var(--f-weight-subheading) !important"
            mb={["2", "3"]}
            mt="4"
            color="var(--c-heading-dark)"
            variants={fadeIn}
          >
            Dennis Westerberg
          </Heading>
          <Heading
            variants={fadeIn}
            fontSize={["2.5rem", "4rem", "5rem"]}
            textAlign={["center", "left"]}
            fontStyle="uppcercase"
            style={{ textTransform: "uppercase" }}
            mb={["3", "5"]}
            color="var(--c-heading-dark)"
          >
            Din guide till villkorslöst välmående.
          </Heading>
          <motion.div variants={fadeIn} whileHover="hover">
            <TextLink
              textAlign={["center", "left"]}
              fontSize={["1.2rem", "2.5rem"]}
              to="/"
              display={["flex", "inline-flex"]}
              width={["100%", "500px"]}
              justifyContent={["center", "left"]}
              mb={["3", "0"]}
              color="var(--c-accent) !important"
              iconSize="40px"
            >
              Läs Dennis story{" "}
              <motion.span style={{ display: "flex" }} variants={animateIcon}>
                <ForwardIconBig />
              </motion.span>
            </TextLink>
          </motion.div>
          <Flex mb={["2rem"]} justifyContent={["center", "flex-start"]}>
            <Flex
              justifyContent={["center", "flex-start"]}
              width={["200px", "100%"]}
            >
              <AchievementsImage />
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </StyledHeroSection>
  )
}

export default HeroSection

const StyledHeroSection = styled(Box)`
  background-color: var(--bg);
  height: 90vh;
  & > .gatsby-image-wrapper {
    position: absolute !important;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
    height: 90vh;
    &::before {
      display: block;
      content: " ";
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: linear-gradient(
        90deg,
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
          var(--bg-dark-alpha) 100%
        );
      }
    }
  }
  ${Container} {
    .gatsby-image-wrapper {
      max-width: 300px;
      margin-top: 5rem;

      @media (max-width: 800px) {
        margin-top: 2rem;
      }
    }
  }
`

const StyledLink = styled(Link)`
  font-size: 2rem;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: var(--f-weight-heading);
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
