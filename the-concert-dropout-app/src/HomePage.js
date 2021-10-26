import React, { Component } from 'react'
import './style.css'
class HomePage extends Component {
    render() {
        return (
            <div>
    <section id="top-hero-text">
        <div className="top-hero-text-container">
            <div className="texts">
                <h1 className="main-heading">Get peaceful state of mind from the music</h1>
                <p className="primary-text">With over 10's of original evergreen songs on the go...</p>
                <p className="secondary-text">Search your favorite music with the best ever music-based search engine.</p>
            </div>
            <div className="buttons">
                <a href="login" className="btn-primary">Login</a>
                <a href="signup" className="btn-secondary">Register</a>
            </div>
        </div>
    </section>

            </div>
        )
    }
}

export default HomePage