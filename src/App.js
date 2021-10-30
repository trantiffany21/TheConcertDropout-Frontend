import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import HomePage from './HomePage'
import LoginPage from './LoginPage'
import SignupPage from './SignupPage'
import UserPage from './UserPage'
import EditUserPage from './EditUserPage'

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
      email: user.email,
      performers: user.performers,
      loggedIn: true
    })
  }
  clearUser = () => {
    this.setState({
      username: '',
      id: '',
      email: '',
      performers: [],
      loggedIn: false
    })
  }

  render() {
    return (
      <div>
        <Route exact path='/' loggedIn={this.state.loggedIn} component={HomePage} />

        <Route exact path='/login' render={() => {
          return <LoginPage loggedIn={this.state.loggedIn} setUser={this.setUserInfo} />
        }} />

        <Route exact path='/signup' render={() => {
          return <SignupPage loggedIn={this.state.loggedIn} setUser={this.setUserInfo} />
        }} />

        <Route exact path='/user' render={() => {
          if (this.state.loggedIn) {
            return <UserPage loggedIn={this.state.loggedIn} username={this.state.username} id={this.state.id} performers={this.state.performers} />
          } else {
            return <Redirect to='/' />
          }
        }} />

        <Route exact path='/editUser' render={() => {
          return <EditUserPage loggedIn={this.state.loggedIn} username={this.state.username} id={this.state.id} email={this.state.email} setUser={this.setUserInfo} clearUser={this.clearUser} />
        }} />
      </div>
    )
  }

}

export default App;