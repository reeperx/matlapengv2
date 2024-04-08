import React from 'react'

function FullVideoPlayer({activeChapter}) {
  return (
    <div className='p-5'>
      <video
        key={activeChapter?.video?.url}
        width="1500"
        height="250"
        controls
        controlsList="nodownload"
      >
        <source src={activeChapter?.video?.url} type="video/mp4" />
      </video>
    </div>
  )
}

export default FullVideoPlayer