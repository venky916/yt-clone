import React from 'react'
import VideoContainer from './VideoContainer'
import ButtonList from './ButtonList'

const MainContainer = () => {
  return (
    <div className='w-screen ml-3 overflow-hidden'>
        <ButtonList />
        <VideoContainer />
    </div>
  )
}

export default MainContainer