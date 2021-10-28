import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav class="navContainer">
      <Link to="/">
        <div className="brand">
          <span className="brandOne">The Concert</span>
          <span className="brandTwo">Dropout</span>
        </div>
      </Link>
      <ul class="navUl">
        <li class="parent">
          <Link to="/editUser" className="navigate">
            Edit account
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;