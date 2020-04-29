import React from "react"
import Helmet from "react-helmet"
import useSiteMetadata from "../static_queries/useSiteMetadata"

const SEO = ({ title, description }) => {
  const site = useSiteMetadata()
  console.log(site)
  return (
    <Helmet>
      <title>{title ? `${title} | Dennis Westerberg` : `${site.title}`}</title>
      <meta
        name="description"
        content={description ? description : site.description}
      />
      <html lang="sv" />
    </Helmet>
  )
}

export default SEO
