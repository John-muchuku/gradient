import React from 'react'

export default function Gr() {
  return (
    <div className='h-screen w-full relative'>
      <video
        src="/gradient.mp4"
        loop
        autoPlay
        muted
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover reounded-2xl "
      />
    </div>
  )
}
