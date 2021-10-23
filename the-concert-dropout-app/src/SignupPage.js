import React, { Component } from 'react'

class SignupPage extends Component {
    render() {
        return (
            <div id="register">
            <div class="container register-container">
                <div class="main-register-area">
                    <div class="image-view"></div>
                    <div class="register-view">
                        <div class="texts">
                            <a href="index.html" class="back-text"><i class="fa fa-arrow-left"></i>&nbsp; back to home</a>
                            <h1>Register</h1>
                            <p>Create an account to browse into the largest evergreen songs library !</p>
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
                                <input type="password" name="password" id="password" placeholder="Enter pass"></input>
                            </div>
                            <div class="input-group">
                                <input type="submit" value="Register"></input>
                            </div>
                            <div class="input-group">
                                <p>Already have an account ? Wanna<a href="login.html" class="login-text">&nbsp;Login ?</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default SignupPage