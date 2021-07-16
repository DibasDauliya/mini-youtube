import React, { useState } from 'react'
import SearchBar from './component/SearchBar'
import youtube from './api/api'
import VideoList from './component/VideoList'
import VideoDetails from './component/VideoDetails'
import Footer from './component/Footer'

export default function App() {
  const [videos, setVideo] = useState([])
  const [videoSelected, setSelected] = useState(null)

  async function formSubmit(value) {
    const res = await youtube.get('/search', {
      params: {
        q: value
      }
    })

    setVideo(res.data.items)
    // setSelected(res.data.items[0])
  }

  function selectedVideo(video) {
    setSelected(video)
    // console.log(video)
  }

  return (
    <>
      <style jsx>
        {`
          .container {
            max-width: 1300px;
          }
        `}
      </style>
      <div className='container'>
        <SearchBar onFormSubmit={formSubmit} />
        <div className='row mb-3'>
          <div className='col-md-8'>
            <VideoDetails video={videoSelected} />
          </div>
          <div className='col-md-4'>
            <VideoList videos={videos} selectedVideo={selectedVideo} />
          </div>
        </div>
        {videoSelected && <Footer />}
      </div>
    </>
  )
}
