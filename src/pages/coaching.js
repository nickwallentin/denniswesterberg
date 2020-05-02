import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import AchievementsImage from "../components/special/AchievementsImage"
import {
  Box,
  Container,
  Heading,
  Grid,
  Text,
  Button,
  Flex,
} from "../styles/elements"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import IcaLogo from "../assets/svg/clients/ica.svg"
import SkaneLogo from "../assets/svg/clients/region-skane.svg"
import RiksbyggenLogo from "../assets/svg/clients/riksbyggen.svg"
import SydkraftLogo from "../assets/svg/clients/sydkraft.svg"

const SpeakerPage = () => {
  const data = useStaticQuery(graphql`
    query getCoachingImages {
      allFile(
        filter: { relativeDirectory: { eq: "images/forelasare" } }
        sort: { fields: name }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 600, maxHeight: 600) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Coaching" />
      <PageContainer>
        <Box pt={["5", "0"]} bg="var(--c-bg-sec)" className="header">
          <Container>
            <Grid gridTemplateColumns={["1fr", "1fr 1fr"]} gridGap="5">
              <Flex
                className="content"
                textAlign="center"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Heading
                  style={{ textTransform: "uppercase" }}
                  mb="3"
                  as="h1"
                  fontSize="1.5rem"
                >
                  Boka coaching
                </Heading>
                <Text
                  fontSize={["2rem !important", "2.8rem !important"]}
                  lineHeight={["2.4rem !important", "3.1rem !important"]}
                  fontWeight="300 !important"
                  color="var(--c-accent)"
                  mb="2"
                >
                  "Jag har nog aldrig tidigare känt ett sådant lugn som jag gör
                  just nu. Tack."
                </Text>
                <Text>- Christian R-H</Text>
                <Text mt="3">
                  Förbered dig på en föreläsning som leder till omedelbar
                  förändring. Dennis nöjer sig inte med att skapa en trevlig
                  stund tillsammans. Han rör om, inspirerar, samt väcker
                  välmåendet till liv.
                </Text>
                <CallToAction>
                  <a
                    className="main"
                    href="mailto:dennis@denniswesterberg.com?subject=Boka coaching&body=Hej Dennis, jag är intresserad av att boka coaching. Kan du berätta lite mer om hur det fungerar och vad det kostar?"
                  >
                    Maila Dennis
                  </a>
                  <a href="tel:0701181818">Ring Dennis</a>
                </CallToAction>
              </Flex>

              <Img
                loading
                fluid={data.allFile.edges[0].node.childImageSharp.fluid}
              />
            </Grid>
          </Container>
        </Box>
        <Box
          py="6"
          style={{
            background:
              "linear-gradient(0deg, var(--c-bg) 0%, var(--c-bg-sec) 100%)",
          }}
        >
          <Container>
            <Heading
              textAlign={["center"]}
              as="p"
              fontSize={["2rem"]}
              lineHeight={["2.5rem"]}
            >
              De senaste åren har Dennis Westerberg coachat, föreläst och
              uppträtt för tusentals människor, i olika sammanhang. Han har
              dessutom utsetts till ”Årets föreläsare”, av förmedlingsbyrån SAJ,
              som i över 20 år, arbetat med de allra främsta.
            </Heading>
          </Container>
        </Box>
        <Box>
          <Container>
            <Grid mb="5" gridTemplateColumns={["1fr 1fr"]} gridGap="5">
              <Box>
                <Img
                  loading
                  fluid={data.allFile.edges[1].node.childImageSharp.fluid}
                />
              </Box>
              <Flex flexDirection="column" justifyContent="center">
                <Heading
                  fontSize={["2rem !important", "2.4rem !important"]}
                  lineHeight={["2.4rem !important", "2.8rem !important"]}
                >
                  En föreläsning om villkorslöst välmående.
                </Heading>
                <Heading
                  as="h4"
                  fontSize={["1.2rem !important", "2rem !important"]}
                  lineHeight={["2.4rem !important", "2.8rem !important"]}
                  color="var(--c-accent)"
                >
                  Ett villkorslöst välmående
                </Heading>
                <Text mt="4">
                  De senaste åren har Dennis Westerberg coachat, föreläst och
                  uppträtt för tusentals människor, i olika sammanhang. Han har
                  dessutom utsetts till ”Årets föreläsare”, av förmedlingsbyrån
                  SAJ, som i över 20 år, arbetat med de allra främsta.
                </Text>
              </Flex>
            </Grid>
            <Box maxWidth="700px" m="0 auto" mb="5">
              <Text
                fontSize={["2rem !important", "2.4rem !important"]}
                lineHeight={["2.4rem !important", "2.8rem !important"]}
                fontWeight="300 !important"
                color="var(--c-accent)"
                mb="2"
              >
                ”Dennis ger uttrycket ’att leva i nuet’ en helt ny innebörd, som
                gör det fullt möjligt att leva ett liv utan stress och oro.”
              </Text>
              <Text color="var(--c-sub)">
                - Peter Schön, fd. VD, Granuldisk
              </Text>
            </Box>
            <Grid mb="5" gridTemplateColumns={["1fr 1fr"]} gridGap="5">
              <Flex flexDirection="column" justifyContent="center">
                <Heading
                  fontSize={["2rem !important", "2.4rem !important"]}
                  lineHeight={["2.4rem !important", "2.8rem !important"]}
                >
                  En föreläsning som skapar insikter.
                </Heading>
                <Heading
                  as="h4"
                  fontSize={["1.2rem !important", "2rem !important"]}
                  lineHeight={["2.4rem !important", "2.8rem !important"]}
                  color="var(--c-accent)"
                >
                  Bli den bästa versionen av dig själv
                </Heading>
                <Text mt="4">
                  De senaste åren har Dennis Westerberg coachat, föreläst och
                  uppträtt för tusentals människor, i olika sammanhang. Han har
                  dessutom utsetts till ”Årets föreläsare”, av förmedlingsbyrån
                  SAJ, som i över 20 år, arbetat med de allra främsta.
                </Text>
              </Flex>
              <Box>
                <Img
                  loading
                  fluid={data.allFile.edges[2].node.childImageSharp.fluid}
                />
              </Box>
            </Grid>
          </Container>
        </Box>
        <Box
          py="5"
          style={{
            background:
              "linear-gradient(180deg, var(--c-bg) 0%, var(--c-bg-sec) 100%)",
          }}
        >
          <Container maxWidth="800px !important" textAlign="center">
            <Flex flexDirection="column" alignItems="center">
              <Heading
                as="h2"
                fontSize="2rem"
                style={{ textTransform: "uppercase" }}
              >
                Boka coachning
              </Heading>
              <Heading
                mt="2"
                as="h4"
                fontSize="3rem"
                lineHeight="3.8rem;"
                color="var(--c-accent)"
              >
                Coachning för dig som tar välmåendet på arbetsplatsen på allvar.
              </Heading>
              <CallToAction>
                <a
                  className="main"
                  href="mailto:dennis@denniswesterberg.com?subject=Boka coaching&body=Hej Dennis, jag är intresserad av att boka coaching. Kan du berätta lite mer om hur det fungerar och vad det kostar?"
                >
                  Maila Dennis
                </a>
                <a href="tel:0701181818">Ring Dennis</a>
              </CallToAction>
            </Flex>
          </Container>
        </Box>
      </PageContainer>
    </Layout>
  )
}

export default SpeakerPage

const PageContainer = styled.div`
  .header {
    .content {
      .gatsby-image-wrapper {
        margin: 20px auto;
        width: 200px !important;
      }
    }
    #clients {
      div {
        text-align: center;
      }
      svg {
        width: 150px;
        height: 50px;
        path,
        rect {
          fill: var(--c-body) !important;
        }
      }
    }
  }
`

const CallToAction = styled.div`
  max-width: 310px;
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;

  a {
    width: 100%;
    font-family: var(--font);
    font-weight: 700;
    font-size: 0.8rem;
    text-transform: uppercase;
    padding: 20px;
    border-radius: 4px;
    color: var(--c-heading);
    border: none;
    background: var(--c-bg-pop);
    margin-bottom: 10px;
    &.main {
      color: white;
      background: var(--c-cta);
      animation: Glow 4s infinite;
    }
  }

  @keyframes Glow {
    0% {
      box-shadow: 0px 0px 10px var(--c-cta);
    }
    50% {
      box-shadow: 0px 0px 30px var(--c-cta);
    }
    100% {
      box-shadow: 0px 0px 10px var(--c-cta);
    }
  }
`
