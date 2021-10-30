import React, { Component } from "react";
import "./header.css";
import { Link } from "react-router-dom";


class Header extends Component {
  constructor(props) {
    super(props)
    this.state ={

    }
  }
  render() {
    return (
      <nav className="navContainer">
        <Link to="/">
          <div className="brand">
            <span className="brandOne">The Concert</span>
            <span className="brandTwo">Dropout</span>
          </div>
        </Link>
        <ul className="navUl">
          <li className="parent">
            <Link hidden={!this.props.loggedIn} to="/editUser" className="navigate">
              Edit account
            </Link>
            <Link hidden={!this.props.loggedIn} to='/' className="navigate" onClick={() => {
              fetch(`${process.env.REACT_APP_BASEURL}/users/logout`)
                .then(res => res.json())
                .then(data => console.log(data))
            }}>
              Log Out
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
};
export default Header;