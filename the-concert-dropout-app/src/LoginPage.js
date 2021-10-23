import React, { Component } from 'react'

class LoginPage extends Component {
    render() {
        return (
            <div id="login">
            <div class="container login-container">
                <div class="main-login-area">
                    <div class="login-view">
                        <div class="texts">
                            <a href="index.html" class="back-text"><i class="fa fa-arrow-left"></i>&nbsp; back to home</a>
                            <h1>Login</h1>
                            <p>Please login to access your music library...</p>
                        </div>
                        <form action="">
                            <div class="input-group">
                                <label for="username">Username</label>
                                <input type="text" name="username" id="username" placeholder="Enter username"></input>
                            </div>
                            <div class="input-group">
                                <label for="email">Email</label>
                                <input type="email" name="email" id="email" placeholder="Enter email"></input>
                            </div>
                            <div class="input-group">
                                <label for="password">Password</label>
                                <input type="password" name="password" id="password" placeholder="Enter password"></input>
                            </div>
                            <div class="input-group">
                                <input type="submit" value="Login"></input>
                            </div>
                            <div class="input-group">
                                <p>Don't have an account ? <a href="signup.html" class="signup-text">&nbsp;Sign up</a> here...</p>
                            </div>
                        </form>
                    </div>
                    <div class="image-view"></div>
                </div>
            </div>
        </div>
        )
    }
}

export default LoginPage