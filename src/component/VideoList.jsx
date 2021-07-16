import React from 'react'
import VideoItem from './VideoItem'

export default function VideoList(props) {
  const renderedList = props.videos.map((video, idx) => (
    <VideoItem key={idx} video={video} selectedVideo={props.selectedVideo} />
  ))

  return renderedList
}
