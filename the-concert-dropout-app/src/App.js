import React from 'react'
import { Route } from 'react-router-dom'
import HomePage from './HomePage'
import LoginPage from './LoginPage'
import SignupPage from './SignupPage'
import './style.css'

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/login' component={LoginPage} />
      <Route exact path='/signup' component={SignupPage} />
    </div>
  )
}

export default App;