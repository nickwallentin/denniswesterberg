import React from "react"
import styled from "styled-components"
import useBookData from "../../static_queries/useBookData"
import Img from "gatsby-image"

const BookDisplay = ({ title }) => {
  const books = useBookData()
  const bookNode = books.filter(node => {
    if (
      node.node.frontmatter.title.toLowerCase().replace(/\s+/g, "") ===
      title.toLowerCase().replace(/\s+/g, "")
    ) {
      return node.node
    }
  })

  return (
    <StyledBook>
      <Img
        fluid={bookNode[0].node.frontmatter.image.small.fluid}
        alt={bookNode[0].node.frontmatter.title}
      />
      <span className="content">
        <strong>
          {bookNode[0].node.frontmatter.title}
          {bookNode[0].node.frontmatter.subtitle && (
            <span>{bookNode[0].node.frontmatter.subtitle}</span>
          )}
        </strong>

        {bookNode[0].node.frontmatter.buy_url && (
          <a target="_blank" href={bookNode[0].node.frontmatter.buy_url}>
            Köp boken
          </a>
        )}
      </span>
    </StyledBook>
  )
}

export default BookDisplay

const StyledBook = styled.span`
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-gap: 1rem;
  padding: 15px;
  background: var(--c-bg-sec);

  border-radius: 4px;
  color: var(--c-heading);

  .gatsby-image-wrapper {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    p {
      font-size: 1rem;
      margin-bottom: 0px;
    }
    a {
      display: inline-block;
      margin-top: 0.2rem;
      font-size: 1.2rem;
      line-height: 1.2rem;
      padding: 5px;
      border: 1px solid var(--c-accent);
      width: 90px;
      border-radius: 4px;
      text-align: center;
      margin-top: 10px;
      text-decoration: none;
    }
    strong {
      font-weight: 500;
      line-height: 1.8rem;
      font-size: 1.6rem;
      display: block;

      span {
        display: block;
        font-weight: 300;
        font-size: 1.2rem;
        line-height: 1.2rem;
      }
    }
  }
`
