import React from 'react'
import './videoitem.css'

export default function VideoItem(props) {
  //   console.log(props.video)
  let title = props.video.snippet.title
  const item = (
    <div
      className='mx-auto flex'
      onClick={() => props.selectedVideo(props.video)}
    >
      <img
        src={props.video.snippet.thumbnails.default.url}
        alt={props.video.snippet.title}
        className='rounded'
      />
      <div className='flex2'>
        <div>
          <p className='h5 mb-0' dangerouslySetInnerHTML={{ __html: title }} />
          <hr />
        </div>
        <strong className='thin'>{props.video.snippet.channelTitle}</strong>
      </div>
    </div>
  )
  return item
}
