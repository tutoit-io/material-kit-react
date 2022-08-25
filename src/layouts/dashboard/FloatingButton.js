import React from 'react'
import config from '../../config/config'
import { Mixpanel } from '../../config/mixPanel'
import Iconify from '../../components/Iconify'

const FloatingButton = () => {
  return (
    <a onClick={() => Mixpanel.track('clicked on dashboard floating button')} className='floating-btn' href={`${config.dashboard}?playground=true`}>
      <Iconify sx={{ fontSize: '2rem', marginRight: '.5rem' }} icon="mdi:view-dashboard" />
      <span>Back To Dashboard</span>
    </a>
  )
}

export default FloatingButton