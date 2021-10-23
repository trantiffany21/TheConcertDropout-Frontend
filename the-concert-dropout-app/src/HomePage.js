import React, { Component } from 'react'
import './style.css'
class HomePage extends Component {
    render() {
        return (
            <div>
                {/* <!-- Section: top-hero-text --> */}
    <section id="top-hero-text">
        <div class="top-hero-text-container">
            <div class="texts">
                <h1 class="main-heading">Get peaceful state of mind from the music</h1>
                <p class="primary-text">With over 10's of original evergreen songs on the go...</p>
                <p class="secondary-text">Search your favorite music with the best ever music-based search engine.</p>
            </div>
            <div class="buttons">
                <a href="login" class="btn-primary">Login</a>
                <a href="signup" class="btn-secondary">Register</a>
            </div>
        </div>
    </section>

            </div>
        )
    }
}

export default HomePage