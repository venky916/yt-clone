import React from 'react'
import VideoContainer from './VideoContainer'
import ButtonList from './ButtonList'

const MainContainer = () => {
  return (
    <div className='w-[100%]'>
        <ButtonList />
        <VideoContainer />
    </div>
  )
}

export default MainContainer