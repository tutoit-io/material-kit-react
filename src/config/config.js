const development = {
  api: 'http://localhost:3001',
  scriptSource: 'https://sandbox-cdn.torecord.it/recordLoader.js',
  dashboard: 'http://localhost:3000/',
  auth: 'https://sandbox-auth.torecord.it/'
}

const staging = {
  api: 'https://staging-api.torecord.it',
  scriptSource: 'https://staging-cdn.torecord.it/recordLoader.js',
  dashboard: 'https://staging-app.torecord.it/',
  auth: 'https://auth.torecord.it/'
}

const sandbox = {
  api: 'https://sandbox-api.torecord.it',
  scriptSource: 'https://sandbox-cdn.torecord.it/recordLoader.js',
  dashboard: 'https://sandbox-app.torecord.it/',
  auth: 'https://sandbox-auth.torecord.it/'
}

const production = {
  api: 'https://api.torecord.it',
  scriptSource: 'https://cdn.torecord.it/recordLoader.js',
  dashboard: 'https://app.torecord.it/',
  auth: 'https://auth.torecord.it/'
}

const config =
  process.env.REACT_APP_STAGE === 'production'
    ? production
    : process.env.REACT_APP_STAGE === 'staging'
    ? staging
    : process.env.REACT_APP_STAGE === 'sandbox'
    ? sandbox
    : process.env.REACT_APP_STAGE === 'development'
    ? development
    : ''

export default {
  ...config
}