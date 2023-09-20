import React from 'react'
import {Link} from 'react-router-dom'
import './VideoStyles.css'

import mainVideo from '../assets/videoyellow.mp4'

const Video = () => {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
            <source src={mainVideo} type='video/mp4' />
        </video>
        <div className='content'>
            <h1>Certification Challenge</h1>
            <p>There's rewards ahead!</p>
            <div>
                <Link to='/LoginPage' className='btn'>Sign In</Link>
                <Link to='/contact' className='btn'>View Leaderboard</Link>
            </div>
        </div>
    </div>
  )
}

export default Video