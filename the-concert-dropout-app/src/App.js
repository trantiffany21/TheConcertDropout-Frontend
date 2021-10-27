import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import HomePage from './HomePage'
import LoginPage from './LoginPage'
import SignupPage from './SignupPage'
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
            //<User />
          } else {
            return <Redirect to='/' />
          }
        }} />
      </div>
    )
  }

}

export default App;