import React from 'react'
import './banner.css'
import config from '../../config/config'
import { Mixpanel } from '../../config/mixPanel'

const Banner = () => {
  return (
    <div className='banner'>
      <div>
       <sapn>Notice:</sapn>  this environment is not a real environment
      </div>
      <a onClick={() => Mixpanel.track('clicked on Signup/login from banner')} className='banner-btn' href={`${config.dashboard}?plaground=true`}>
        Signup / Login
      </a>
    </div>
  )
}

export default Banner