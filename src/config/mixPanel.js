import mixpanel, { Dict } from 'mixpanel-browser'

const mixPanelToken = process.env.REACT_APP_MIXPANEL_TOKEN
mixpanel.init(mixPanelToken || '', {ignore_dnt: true})

const env_check = true // process.env.REACT_APP_STAGE === 'development'

const actions = {
  identify: (id) => {
    try {
      if (env_check) mixpanel.identify(id)
    } catch (err) {
      
    }
  },
  alias: (id) => {
    try {
      if (env_check) mixpanel.alias(id)
    } catch (err) { }
  },
  track: (name, props) => {
    try {
      if (env_check) mixpanel.track(name, props)
    } catch (err) { }
  },
  register: (props) => {
    try {
      if (env_check) mixpanel.register(props)
    } catch (err) { }
  },
  reset: () => {
    try {
      if (env_check) mixpanel.reset()
    } catch (err) { }
  },
  // addGroup: (cust_id) => {
  //   try {
  //     if (env_check) mixpanel.add_group('Customers', cust_id)
  //   } catch (err) { }
  // },
  // setGroup: (cust_id) => {
  //   try {
  //     if (env_check) mixpanel.set_group('Customers', [cust_id])
  //   } catch (err) { }
  // },
  people: {
    set: (props) => {
      try {
        if (env_check) mixpanel.people.set(props)
      } catch (err) { }
    }
  }
}

export const Mixpanel = actions
