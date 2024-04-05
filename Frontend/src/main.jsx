import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Auth0Provider
    domain="dev-ll0sgznjvlor1e2t.us.auth0.com"
    clientId="5aYYX3JHbjK584lNi1elbVyfAFLUUKB1"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >

      <App />
  </Auth0Provider>
)
