import React, { Fragment } from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import StoryHeroSection from "../components/special/StoryHeroSection"

import { Container, Heading, Text, Box, Flex } from "../styles/elements"

const StoryPage = () => {
  return (
    <Fragment>
      <SEO />
      <StoryHeroSection />
      <Box py="5">
        <Container>
          <Box mb="5" maxWidth="700px !important" mr="auto" ml="auto">
            <Text
              color="var(--c-heading)"
              fontSize="2rem !important"
              lineHeight="2.6rem !important"
              mb="4"
            >
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </Text>
            <Text mb="3">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </Text>

            <Text mb="3">
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic life One day however a small
              line of blind text by the name of Lorem Ipsum decided to leave for
              the far World of Grammar.
            </Text>
            <Text mb="3">
              The Big Oxmox advised her not to do so, because there were
              thousands of bad Commas, wild Question Marks and devious Semikoli,
              but the Little Blind Text didn’t listen. She packed her seven
              versalia, put her initial into the belt and made herself on the
              way. When she reached the first hills of the Italic Mountains, she
              had a last view back on the skyline of her hometown
              Bookmarksgrove, the headline of Alphabet Village and the subline
              of her own road, the Line Lane. Pityful a rethoric question ran
              over her cheek, then
            </Text>
          </Box>
          <Box mb="5" maxWidth="700px !important" mr="auto" ml="auto">
            <Heading mb="5" fontSize="3rem" color="var(--c-accent)">
              19XX
            </Heading>
            <Text
              color="var(--c-heading)"
              fontSize="2rem !important"
              lineHeight="2.6rem !important"
            >
              Året var XXXX, far far away, behind the word mountains, far from
              the countries Vokalia and Consonantia, there live the blind texts.
              Separated they live in Bookmarksgrove right at the coast of the
              Semantics, a large language ocean..
            </Text>
          </Box>
        </Container>
      </Box>
      <Box py="5">
        <Container></Container>
      </Box>
    </Fragment>
  )
}

export default StoryPage
