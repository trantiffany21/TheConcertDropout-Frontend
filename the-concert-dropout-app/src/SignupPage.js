import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class SignupPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            redirect: false
        }
    }

    onSubmit = (event) => {
        event.preventDefault()
        fetch('http://localhost:3003/users/signup', {
            method: 'POST',
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
                email: this.state.email
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res.json()
        })
            .then(data => {
                this.setState({ redirect: true })
                this.props.setUser(data)
            })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to='/' />
        } else {
            return (
                <div id="register">
                    <div className="container register-container">
                        <div className="main-register-area">
                            <div className="image-view"></div>
                            <div className="register-view">
                                <div className="texts">
                                    <a href="/" className="back-text"><i className="fa fa-arrow-left"></i>&nbsp; back to home</a>
                                    <h1>Register</h1>
                                    <p>Create an account to browse into the largest evergreen songs library !</p>
                                </div>
                                <form onSubmit={this.onSubmit}>
                                    <div className="input-group">
                                        <label htmlFor="username">Username</label>
                                        <input type="text" name="username" id="username" placeholder="Enter username" onChange={this.handleChange} />
                                    </div>
                                    <div className="input-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" name="email" id="email" placeholder="Enter email" onChange={this.handleChange} />
                                    </div>
                                    <div className="input-group">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" name="password" id="password" placeholder="Enter pass" onChange={this.handleChange} />
                                    </div>
                                    <div className="input-group">
                                        <input type="submit" value="Register" />
                                    </div>
                                    <div className="input-group">
                                        <p>Already have an account ? Wanna<a href="login" className="login-text">&nbsp;Login ?</a></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default SignupPage