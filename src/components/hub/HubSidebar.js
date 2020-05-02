import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"
import usePopularPosts from "../../static_queries/usePopularPosts"
import useBookData from "../../static_queries/useBookData"
import { Heading } from "../../styles/elements"

const HubSidebar = () => {
  const popular = usePopularPosts()
  const books = useBookData()
  return (
    <Sidebar>
      <Widget>
        <Heading
          as="h4"
          fontWeight="var(--f-weight-subheading) !important"
          fontSize={["1.5rem"]}
          variant="sub"
          mb="3"
        >
          Populära artiklar
        </Heading>
        <ul className="post-list">
          {popular.map((node, index) => (
            <li key={node.node.id}>
              <Link
                style={{ color: "var(--c-heading)" }}
                to={node.node.fields.slug}
              >
                {node.node.frontmatter.title}
                <span>{node.node.frontmatter.subtitle}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Widget>
      <Widget>
        <Heading
          as="h4"
          fontWeight="var(--f-weight-subheading) !important"
          fontSize={["1.5rem"]}
          variant="sub"
          mb="4"
        >
          Böcker
        </Heading>
        <ul className="book-list">
          {books.map(({ node: book }) => (
            <li key={book.id}>
              <Link to={"/bocker/" + book.fields.slug}>
                <Img fluid={book.frontmatter.image.small.fluid} />
                <h4>
                  {book.frontmatter.title}{" "}
                  {book.frontmatter.subtitle && (
                    <span>{book.frontmatter.subtitle}</span>
                  )}
                </h4>
              </Link>
            </li>
          ))}
        </ul>
      </Widget>
      <Widget>
        <Heading
          as="h4"
          fontWeight="var(--f-weight-subheading) !important"
          fontSize={["1.5rem"]}
          variant="sub"
          mb="4"
        >
          Senaste podcasten
        </Heading>
        <iframe
          src="https://open.spotify.com/embed-podcast/show/6WcO5GvgWXhUxmpz9ET2Kt"
          width="100%"
          height="232"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      </Widget>
    </Sidebar>
  )
}

export default HubSidebar

const Sidebar = styled.div``

const Widget = styled.div`
  margin-bottom: 4rem;

  .post-list {
    li {
      padding: 1.5rem 0;
      border-bottom: 1px solid var(--c-bg-pop);
      &:last-of-type {
        border-bottom: 0px;
      }
      a {
      }
    }
    a {
      font-size: 1.4rem;
      font-weight: 500;
    }
    span {
      display: block;
      font-size: 1.2rem;
      color: var(--c-accent);
      font-weight: 300;
    }
  }
  .book-list {
    li {
      padding: 1rem;
      background: var(--c-bg-sec);
      border-radius: 4px;
      margin-bottom: 1rem;
      a {
        color: var(--c-heading);
        display: flex;
        h4 {
          display: flex;
          flex-direction: column;
          justify-content: center;
          font-weight: 500;
          font-size: 1.2rem;
          span {
            color: var(--c-accent);
            font-weight: 300;
            font-size: 1rem;
          }
        }
        .gatsby-image-wrapper {
          width: 75px;
          margin-right: 1rem;
        }
      }
    }
  }
`
