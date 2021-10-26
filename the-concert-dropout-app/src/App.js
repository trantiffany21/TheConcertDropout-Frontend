import React from 'react'
import { Route } from 'react-router-dom'
import HomePage from './HomePage'
import LoginPage from './LoginPage'
import SignupPage from './SignupPage'
import Navigation from './Navigation'
import UserPage from './UserPage'
import './style.css'

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/login' component={LoginPage} />
      <Route exact path='/signup' component={SignupPage} />
      <Route exact path='/user' component={UserPage} />
    </div>
  )
}

export default App;