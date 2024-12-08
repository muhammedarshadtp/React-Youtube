import React from 'react'
import { useSearchParams } from 'react-router-dom'

const WatchPage = () => {

    const [searchParams]= useSearchParams()
  return (
    <div className='px-4'>
      <iframe width="900" height="500" src={"https://www.youtube.com/embed/" + searchParams.get("v")} 
      title="YouTube video player"
       frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
      gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}

export default WatchPage