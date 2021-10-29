import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

class EdituserPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            oldUsername: this.props.username,
            redirect: false
        }
    }

    onSubmit = (event) => {
        console.log('hit')
        event.preventDefault()
        fetch(`${process.env.REACT_APP_BASEURL}/users/editUser`, {
            method: 'PUT',
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
                email: this.state.email,
                id: this.props.id
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res.json()
        })
            .then(data => {
                console.log("Data: " + data)
                this.setState({ redirect: true })
                this.props.setUser(data)
            })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state)
    }

    deleteAcc = () => {
        console.log(this.props.id)
        fetch(`${process.env.REACT_APP_BASEURL}/users/delete`, {
            method: 'DELETE',
            body: JSON.stringify({
                id: this.props.id
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res.json()
        })
            .then(data => {
                console.log("Data: " + data)
                this.setState({ redirect: true })
            })

        // fetch(`${process.env.REACT_APP_BASEURL}/users/delete`, {
        //     method: 'DELETE',
        //     body: JSON.stringify({
        //         username: this.state.oldUsername
        //     })
        // }).then(res => {
        //     return res.json()
        // })
        //     .then(data => {
        //         console.log('ye')
        //         console.log(data)
        //         this.setState({ redirect: true })
        //     })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to='/' />
        } else {
            return (
                <>
                    <Header loggedIn={this.props.loggedIn} />
                    <div id="register">
                        <div className="container register-container">
                            <div className="main-register-area">
                                <div className="image-view"></div>
                                <div className="register-view">
                                    <div className="texts">
                                        <a href="/" className="back-text"><i className="fa fa-arrow-left"></i>&nbsp; back to home</a>
                                        <h1>Enter your new information</h1>
                                        <p>This information will change permanently, be cautious.</p>
                                    </div>
                                    <form onSubmit={this.onSubmit}>
                                        <div className="input-group">
                                            <label htmlFor="username">Username</label>
                                            <input type="text" name="username" id="username" placeholder={this.props.username} onChange={this.handleChange} />
                                        </div>
                                        <div className="input-group">
                                            <label htmlFor="email">Email</label>
                                            <input type="email" name="email" id="email" placeholder={this.props.email} onChange={this.handleChange} />
                                        </div>
                                        <div className="input-group">
                                            <label htmlFor="password">Password</label>
                                            <input type="password" name="password" id="password" placeholder="Enter pass" onChange={this.handleChange} />
                                        </div>
                                        <div className="input-group">
                                            <input type="submit" value="Edit Account" />
                                        </div>
                                        <div className="input-group btn-secondary">
                                            <input onClick={this.deleteAcc}type="button" value="Delete Account" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </>
            )
        }
    }
}

export default EdituserPage