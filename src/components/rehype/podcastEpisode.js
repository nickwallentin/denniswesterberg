import React from "react"

const PodcastEpisode = ({ src }) => {
  if (!src) {
    return null
  }
  const podId = src.split(":")[2]
  console.log("Podcast is active")
  return (
    <iframe
      src={`https://open.spotify.com/embed-podcast/episode/${podId}`}
      width="100%"
      height="232"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    ></iframe>
  )
}

export default PodcastEpisode
