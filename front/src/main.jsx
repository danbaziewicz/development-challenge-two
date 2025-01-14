import React from 'react'
import ReactDOM from 'react-dom/client'
import UserProvider from './context/UserProvider'
import Routes from './Routes/Routes'
import './Styles/reset.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <Routes/>
    </UserProvider>
  </React.StrictMode>
)