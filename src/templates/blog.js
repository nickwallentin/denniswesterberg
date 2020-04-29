import React, { useEffect } from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import { motion } from "framer-motion"
import { graphql, Link } from "gatsby"
import useBlogData from "../static_queries/useBlogData"
import useAuthorData from "../static_queries/useAuthorData"
import scrollTo from "gatsby-plugin-smoothscroll"
import Sticky from "react-sticky-el"
import Media from "react-media"
import SEO from "../components/seo"
import rehypeReact from "rehype-react"

//this component handles the blur img & fade-ins
import Img from "gatsby-image"
import {
  Box,
  Heading,
  ImageContainer,
  Container,
  Text,
  Grid,
  Flex,
} from "../styles/elements"

const container = {
  initial: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const fadeIn = {
  initial: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
}

export default function Blog(props) {
  const data = props.data.markdownRemark
  const allBlogData = useBlogData()
  const allAuthorData = useAuthorData()
  const nextSlug = getNextSlug(data.fields.slug)

  function getNextSlug(slug) {
    const allSlugs = allBlogData.map(blog => {
      return blog.node.fields.slug
    })
    const nextSlug = allSlugs[allSlugs.indexOf(slug) + 1]
    if (nextSlug !== undefined && nextSlug !== "") {
      return nextSlug
    } else {
      return allSlugs[0]
    }
  }

  const imgSrc = [
    data.frontmatter.mobile.childImageSharp.fluid,
    {
      ...data.frontmatter.desktop.childImageSharp.fluid,
      media: `(min-width: 500px)`,
    },
  ]

  useEffect(() => {
    const headings = []
    const allHeadings = document.querySelectorAll("h2, h3")

    allHeadings.forEach((heading, index) => {
      heading.setAttribute("id", "heading-" + (index + 1))
    })
  }, [])

  return (
    <Layout>
      <SEO title={data.frontmatter.title} />
      <Article variants={container} initial="initial" animate="visible">
        <Box bg="var(--c-bg-sec)">
          <Container>
            <Box variants={fadeIn} width={["1", 2 / 3]} pt={["5", "5"]}>
              <Flex mb="4">
                {data.frontmatter.categories.length > 0 &&
                  data.frontmatter.categories.map(cat => (
                    <Category key={cat}>{cat}</Category>
                  ))}
              </Flex>
              <Heading mb="2" fontSize={["2rem", "3.5rem"]} as="h1">
                {data.frontmatter.title}
              </Heading>
              <Heading
                fontSize={["1.5rem", "2rem"]}
                as="h4"
                color="var(--c-accent)"
                mb={["4"]}
              >
                {data.frontmatter.subtitle}
              </Heading>
              <Text>{data.frontmatter.intro}</Text>
            </Box>
            <Flex py={["4", "5"]}>
              <Flex>
                <Avatar>
                  <Img fluid={allAuthorData.file.childImageSharp.fluid} />
                </Avatar>
                <Box ml="3">
                  <Text color="var(--c-heading)">Dennis Westerberg</Text>
                  <Text className="published">{data.frontmatter.date}</Text>
                </Box>
              </Flex>
            </Flex>
          </Container>
        </Box>
        <Box
          style={{
            background:
              "linear-gradient(0deg,var(--c-bg) 50%,var(--c-bg-sec) 50%)",
          }}
        >
          <ImageContainer>
            <Grid variants={fadeIn} width={[1, 2 / 3]}>
              <figure>
                <Img fluid={imgSrc} alt={data.frontmatter.title} />
              </figure>
            </Grid>
          </ImageContainer>
        </Box>
        <Container>
          <Grid my={["5", "5"]} gridTemplateColumns={["1fr", "2fr 1fr"]}>
            <PostContent
              variants={fadeIn}
              dangerouslySetInnerHTML={{ __html: data.html }}
            />
            <Media
              query="(min-width: 901px)"
              render={() => (
                <Sidebar>
                  <Sticky stickyStyle={{ top: "80px" }} topOffset={-80}>
                    <Heading color="var(--c-accent)" fontSize="3" as="h4">
                      Innehåll
                    </Heading>
                    <ul>
                      {data.headings.map((heading, index) => (
                        <li
                          onClick={() => scrollTo(`#heading-${index + 1}`)}
                          className={"heading-" + heading.depth}
                        >
                          {heading.value}
                        </li>
                      ))}
                    </ul>
                  </Sticky>
                </Sidebar>
              )}
            />
          </Grid>
        </Container>
      </Article>
    </Layout>
  )
}

const Sidebar = styled.div`
  padding-left: 4rem;
  ul {
    li {
      cursor: pointer;
      color: var(--c-sub);
      &:hover {
        text-decoration: underline;
      }
    }
    li.heading-2 {
      margin-top: 20px;
    }
    li.heading-3 {
      margin-top: 10px;
      margin-bottom: 5px;
      margin-left: 10px;
    }
  }
`

const Avatar = styled.figure`
  width: 50px;
  height: 50px;
  border-radius: 99px;
  overflow: hidden;
`

const Category = styled.div`
  text-transform: capitalize;
  margin-right: 5px;
  font-size: 1.5rem;
  &:after {
    content: ",";
  }
  &:last-of-type:after {
    content: "";
  }
`
const Article = styled(motion.article)`
  .published {
    font-size: 1rem;
    line-height: 1rem;
  }
`

const PostContent = styled(motion.div)`
  .gatsby-resp-image-wrapper {
    margin: 4rem 0px;
  }
  p {
    font-size: 1.5rem;
    line-height: 2.3rem;
    font-family: var(--font-secondary);
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
  }
`

//dynamic page query, must occur within each post context
//$slug is made available by context from createPages call in gatsby-node.js
export const getPostData = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        subtitle
        intro
        categories
        date(formatString: "D MMMM, YYYY", locale: "sv")
        desktop: hero_image {
          childImageSharp {
            fluid(maxWidth: 1500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mobile: hero_image {
          childImageSharp {
            fluid(maxWidth: 400, maxHeight: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
      htmlAst
      headings {
        value
        depth
      }
      timeToRead
    }
  }
`
