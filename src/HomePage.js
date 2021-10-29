import React, { Component } from "react"
import "./style.css";
import Footer from "./Footer"
import Header from "./Header"

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  render() {
    console.log(this.props.loggedIn)
    return (
      <>
        <Header loggedIn={this.props.loggedIn} />
        <div>
          {/* <!-- Section: top-hero-text --> */}
          <section id="top-hero-text">
            <div className="top-hero-text-container">
              <h1 className="top-heading">
                <span className="headingOne">THE CONCERT </span>
                <span className="headingTwo">DROPOUT</span>
              </h1>
              <div class="texts">
                <h1 class="main-heading">
                  The place to get your favorite events, concerts, and more.
                </h1>
                <p class="primary-text">
                Something that the kids is goin love when they hear it.
                <br></br>Thats goin' make them start jumping up and down and sharing candy an' stuff.
                </p>
                <p class="secondary-text">
                  - Kanye West (Ye) The College Dropout.
                </p>
              </div>
              <div className="buttons">
                <a href="login" className="btn-primary">
                  Login
                </a>
                <a href="signup" className="btn-secondary">
                  Register
                </a>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </>
    )
  }
}

export default HomePage;
