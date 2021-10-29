import React, { Component } from "react"
import "./style.css";
import Footer from "./Footer"
import Header from "./Header"

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apiUrl:'https://api.kanye.rest',
      kanyeQuote: ""
    }
  }

  getQuote = async () =>{
    try{
      const response = await fetch(this.state.apiUrl)
      const data = await response.json()
      if(response.status ===200){
        if(!data.quote.includes('might') && !data.quote.includes('laser') && !data.quote.includes('marry') && !data.quote.includes('lying')&& !data.quote.includes('I care')){
          this.setState({
            kanyeQuote: data.quote
          })
        }else{
          this.setState({
            kanyeQuote: "We're going to move the entire music industry into the 21st Century"
          })
        }
      }
    
    }catch(err){
      console.log('Error => ', err)
    }
  }

  componentDidMount(){
    this.getQuote()
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
              <div className="texts quote">
                <p className="secondary-text text-right">
                "{this.state.kanyeQuote}"
                </p>
                <p className="text-right">
                  - Kanye West (Ye)
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
