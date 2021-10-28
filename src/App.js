import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import HomePage from './HomePage'
import LoginPage from './LoginPage'
import SignupPage from './SignupPage'
import UserPage from './UserPage'
import EdituserPage from './EdituserPage'

import './style.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      id: '',
      email: '',
      loggedIn: false
    }
  }

  setUserInfo = (user) => {
    this.setState({
      username: user.username,
      id: user._id,
      email: user._email,
      performers: user.performers,
      loggedIn: true
    })
  }

  render() {
    return (
      <div>
        <Route exact path='/' component={HomePage} />

        <Route exact path='/login' render={() => {
          return <LoginPage setUser={this.setUserInfo} />
        }} />

        <Route exact path='/signup' render={() => {
          return <SignupPage setUser={this.setUserInfo} />
        }} />

        <Route exact path='/user' render={() => {
          if (this.state.loggedIn) {
            return <UserPage username={this.state.username} id={this.state.id} performers={this.state.performers} />
          } else {
            return <Redirect to='/' />
          }
        }} />

        <Route exact path='/editUser' render={() => {
          return <EdituserPage username={this.state.username} id={this.state.id} performers={this.state.performers} setUser={this.setUserInfo} />
        }} />
      </div>
    )
  }

}

export default App;