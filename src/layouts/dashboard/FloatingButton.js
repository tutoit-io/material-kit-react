import React from 'react'
import config from '../../config/config'
import { Mixpanel } from '../../config/mixPanel'

const FloatingButton = () => {
  return (
    <a onClick={() => Mixpanel.track('clicked on dashboard floating button')} className='floating-btn' href={`${config.dashboard}`}>FloatingButton</a>
  )
}

export default FloatingButton