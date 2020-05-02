import React from "react"

const PodcastEpisode = ({ src }) => {
  if (!src) {
    return null
  }
  const podId = src.split(":")[2]

  return (
    <iframe
      src={
        src
          ? `https://open.spotify.com/embed-podcast/episode/${podId}`
          : "https://open.spotify.com/embed-podcast/show/6WcO5GvgWXhUxmpz9ET2Kt"
      }
      width="100%"
      height="232"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    ></iframe>
  )
}

export default PodcastEpisode
