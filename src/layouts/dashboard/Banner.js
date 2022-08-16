import React from 'react'
import './banner.css'
import config from '../../config/config'
import { Mixpanel } from '../../config/mixPanel'
import Iconify from '../../components/Iconify'

const Banner = () => {
  return (
    <div className='banner'>
      <div>
       <span>Notice:</span>  this environment is not a real environment
      </div>
      <a onClick={() => Mixpanel.track('clicked on Signup/login from banner')} className='banner-btn' href={`${config.dashboard}`}>
      <Iconify sx={{ fontSize: '1.5rem', marginRight: '.8rem' }} icon="mdi:exit-to-app" />
        Signup / Login
      </a>
    </div>
  )
}

export default Banner