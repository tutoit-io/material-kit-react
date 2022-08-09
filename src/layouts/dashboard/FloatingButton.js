import React from 'react'
import config from '../../config/config'
import { Mixpanel } from '../../config/mixPanel'
import Iconify from '../../components/Iconify'

const FloatingButton = () => {
  return (
    <a onClick={() => Mixpanel.track('clicked on dashboard floating button')} className='floating-btn' href={`${config.dashboard}`}><Iconify icon="mdi:view-dashboard" /></a>
  )
}

export default FloatingButton