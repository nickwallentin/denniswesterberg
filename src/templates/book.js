import React, { useEffect } from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import { motion } from "framer-motion"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import { Container, Box, Grid, Heading, Text, Flex } from "../styles/elements"
import rehypeReact from "rehype-react"

import PodcastEpisode from "../components/rehype/podcastEpisode"
import BookDisplay from "../components/rehype/bookDisplay"
import YoutubeEmbed from "../components/rehype/youtubeEmbed"
import QuoteElement from "../components/rehype/quote"

const BookTemplate = props => {
  const data = props.data.markdownRemark
  const imgSrc = [
    data.frontmatter.image.mobile.fluid,
    {
      ...data.frontmatter.image.desktop.fluid,
      media: `(min-width: 500px)`,
    },
  ]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: {
      "podcast-episode": PodcastEpisode,
      "book-display": BookDisplay,
      "youtube-embed": YoutubeEmbed,
      "quote-element": QuoteElement,
    },
  }).Compiler
  return (
    <Layout>
      <SEO />
      <Box py="5" bg="var(--c-bg-sec)">
        <Container>
          <Grid gridTemplateColumns={["1fr", "1fr 2fr"]} gridGap="4">
            <Box>
              <Img
                style={{
                  maxWidth: "300px",
                  boxShadow: "0px 0px 30px rgba(0,0,0,0.2)",
                  margin: "0 auto",
                }}
                fluid={imgSrc}
              />
            </Box>
            <Flex flexDirection="column" justifyContent="center">
              <Heading as="h1" fontSize="2.5rem">
                {data.frontmatter.title}
                <Heading
                  style={{ display: "block", fontWeight: "300" }}
                  mt="2"
                  as="span"
                  color="var(--c-accent)"
                  fontSize="1.5rem"
                >
                  {data.frontmatter.subtitle}
                </Heading>
              </Heading>

              <Text
                fontSize="1.5rem !important"
                lineHeight="2.3rem !important"
                mt="4"
              >
                {data.frontmatter.intro}
              </Text>
              <BookLinks>
                <a
                  target="_blank"
                  className="main"
                  href={data.frontmatter.buy_url}
                >
                  Köp boken
                </a>
                <a href="#">Lyssna på boken</a>
              </BookLinks>
            </Flex>
          </Grid>
        </Container>
      </Box>
      <Box py="5">
        <Container>
          <Grid gridTemplateColumns="2fr 1fr" gridGap="4">
            <PostContent>{renderAst(data.htmlAst)}</PostContent>
          </Grid>
        </Container>
      </Box>
    </Layout>
  )
}

export default BookTemplate

const Reviews = styled.ul``
const Review = styled.li`
  line-height: 1.4rem;
  color: var(--c-accent);
  span {
    display: block;
    color: var(--c-heading);
    margin-top: 1rem;
  }
`

const BookLinks = styled.div`
  display: flex;
  margin-top: 3rem;
  a {
    margin-right: 10px;
    padding: 15px 20px;
    background: var(--c-bg-pop);
    border-radius: 3px;
    font-weight: 500;
    cursor: pointer;
    &.main {
      background: var(--c-accent);
      color: var(--c-bg);
    }
  }
`

const PostContent = styled(motion.div)`
  .gatsby-resp-image-wrapper {
    margin: 4rem 0px;
  }
  p {
    font-size: 1.5rem;
    line-height: 2.3rem;
    font-weight: 300;
    margin-bottom: 2rem;
  }

  h2 {
    font-size: 2.5rem;
    margin-top: 4rem;
    margin-bottom: 2.5rem;
  }
  h3 {
    font-size: 2rem;
    margin-top: 3.5rem;
    margin-bottom: 2rem;
  }
  ul,
  ol {
    margin-bottom: 2rem;
    li {
      font-size: 1.5rem;
      line-height: 2.3rem;
    }
  }

  @media (max-width: 500px) {
    p {
      font-size: 1.2rem;
      line-height: 2rem;
    }
    h2 {
      font-size: 2rem;
      line-height: 2.5rem;
      margin-top: 3rem;
      margin-bottom: 1.5rem;
    }
    h3 {
      font-size: 1.5rem;
      line-height: 2rem;
      margin-top: 2.8rem;
      margin-bottom: 1.8rem;
    }
    ul {
      margin-bottom: 2rem;
      li {
        font-size: 1.2rem;
        line-height: 2rem;
      }
    }
  }
`

export const getBookData = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        subtitle
        intro
        buy_url
        image {
          desktop: childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
          mobile: childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      htmlAst
    }
  }
`
