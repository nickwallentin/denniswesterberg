import React from "react"

const YoutubeEmbed = ({ id }) => {
  return (
    <iframe
      width="100%"
      height="400px"
      src={"https://www.youtube.com/embed/" + id}
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen="true"
    ></iframe>
  )
}

export default YoutubeEmbed
