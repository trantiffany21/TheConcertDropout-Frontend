import React, { Component } from 'react'

class LoginPage extends Component {

    onSubmit = (event) => {
        console.log('hit')
        event.preventDefault()
        fetch('http://localhost:3003/users/login', {
            method: 'POST',
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            }),
            headers: {
              'Content-Type': 'application/json'
            }
        }).then(res => console.log(res.json()))
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    } 

    render() {
        return (
            <div id="login">
            <div className="container login-container">
                <div className="main-login-area">
                    <div className="login-view">
                        <div className="texts">
                            <a href="/" className="back-text"><i className="fa fa-arrow-left"></i>&nbsp; back to home</a>
                            <h1>Login</h1>
                            <p>Please login to access your music library...</p>
                        </div>
                        <form onSubmit={this.onSubmit}>
                            <div className="input-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" name="username" id="username" placeholder="Enter username"onChange={this.handleChange} />
                            </div>
                            <div className="input-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" id="password" placeholder="Enter password" onChange={this.handleChange} />
                            </div>
                            <div className="input-group">
                                <input type="submit" value="Login"></input>
                            </div>
                            <div className="input-group">
                                <p>Don't have an account ? <a href="signup" className="signup-text">&nbsp;Sign up</a> here...</p>
                            </div>
                        </form>
                    </div>
                    <div className="image-view"></div>
                </div>
            </div>
        </div>
        )
    }
}

export default LoginPage