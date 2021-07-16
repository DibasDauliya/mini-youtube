import React from 'react'
import './videodetails.css'

export default function VideoDetails({ video }) {
  if (!video) {
    return (
      <div className='card p-2'>
        Its Lonely Here 😟
        <p>Search some videos and tap to view. 📽</p>
      </div>
    )
  } else {
    let ttl = video.snippet.title
    return (
      <>
        <div className='embed-responsive embed-responsive-16by9'>
          <iframe
            className='custom-card2 embed-responsive-item'
            src={`https://www.youtube.com/embed/${video.id.videoId}?autoplay=1`}
            allowFullScreen
            title='Video Player'
          ></iframe>
        </div>
        <div className='custom-card p-2 mb-3'>
          <h4 dangerouslySetInnerHTML={{ __html: ttl }} />
          <h5>By {video.snippet.channelTitle}</h5>
          <p className='lead'>{video.snippet.description}</p>
        </div>
      </>
    )
  }
}
