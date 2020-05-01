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
    query getMainSpeakerImager {
      file(name: { eq: "forelasare-dennis-westerberg-main" }) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Föreläsare" />
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
                  Boka föreläsning
                </Heading>
                <Text
                  fontSize={["2.8rem", "2.8rem"]}
                  lineHeight={["2.5rem", "3.1rem"]}
                  fontWeight="300 !important"
                  color="var(--c-accent)"
                  mb="2"
                >
                  "Jag har lyssnat till de allra främsta föreläsarna i Sverige.
                  Dennis är bättre.""
                </Text>
                <Text>- Thomas Svefelt, Mazars SET</Text>
                <Text mt="3">
                  Förbered dig på en föreläsning som leder till omedelbar
                  förändring. Dennis nöjer sig inte med att skapa en trevlig
                  stund tillsammans. Han rör om, inspirerar, samt väcker
                  välmåendet till liv.
                </Text>
                <CallToAction>
                  <input autoFocus type="text" placeholder="Ditt namn" />
                  <button>Kom igång</button>
                </CallToAction>
                <Text mt="2" fontSize="1rem !important">
                  Du kan även ringa på 070-518 18 18
                </Text>
              </Flex>

              <Img loading fluid={data.file.childImageSharp.fluid} />
            </Grid>
            <Text mt="3" textAlign="center">
              Dennis har bland annat föreläst för:
            </Text>
            <Grid
              maxWidth="800px"
              m="0 auto"
              mt="4"
              id="clients"
              gridTemplateColumns={["1fr 1fr", "1fr 1fr 1fr 1fr"]}
              gridGap="2rem"
            >
              <div>
                <IcaLogo />
              </div>
              <div>
                <SkaneLogo />
              </div>
              <div>
                <RiksbyggenLogo />
              </div>
              <div>
                <SydkraftLogo />
              </div>
            </Grid>
          </Container>
        </Box>
        <Box
          py="5"
          style={{
            background:
              "linear-gradient(0deg, var(--c-bg) 0%, var(--c-bg-sec) 100%)",
          }}
        >
          <Container></Container>
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
  padding: 10px;
  background: var(--c-bg-pop);
  border-radius: 3px;
  max-width: 400px;
  width: 100%;
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;

  input {
    background: transparent;
    flex: 1;
    border: none;
    padding: 10px;
    color: var(--c-heading);
    &::placeholder,
    &::-webkit-input-placeholder {
      color: var(--c-sub);
    }
  }
  button {
    background: var(--c-cta);
    color: white;
    border: none;
    font-family: var(--font);
    font-weight: 700;
    text-transform: uppercase;
    padding: 10px;
    border-radius: 4px;
    animation: Glow 4s infinite;
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
