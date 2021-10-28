import React, { Component } from "react";
import "./style.css";
import Footer from "./Footer";
import Header from "./Header";
class HomePage extends Component {
  render() {
    return (
      <>
        <Header />
        <div>
          {/* <!-- Section: top-hero-text --> */}
          <section id="top-hero-text">
            <div class="top-hero-text-container">
              <h1 className="top-heading">
                <span className="headingOne">THE CONCERT </span>
                <span className="headingTwo">DROPOUT</span>
              </h1>
              <div class="texts">
                <h1 class="main-heading">
                  Get peaceful state of mind from the music
                </h1>
                <p class="primary-text">
                  With over 10's of original evergreen songs on the go...
                </p>
                <p class="secondary-text">
                  Search your favorite music with the best ever music-based
                  search engine.
                </p>
              </div>
              <div class="buttons">
                <a href="login" class="btn-primary">
                  Login
                </a>
                <a href="signup" class="btn-secondary">
                  Register
                </a>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </>
    );
  }
}

export default HomePage;
