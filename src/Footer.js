import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer class="section" style={{ backgroundColor: "#fff" }}>
        <hr />
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div>
              <h2 className="head"><span className="headOne">The Concert </span><span className="headTwo">Dropout</span></h2>
              <p>
                The place to get your favorite events, concerts, and more. 
              </p>
              <p>
                © 2021 The Concert Droupout. All Rights Reserved.
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <h5>Contacts</h5>
            <dl>
              <dt>Email:</dt>
              <dd>support@support.com</dd>
            </dl>
            <dl>
              <dt>Phones:</dt>
              <dd>+123456789</dd>
            </dl>
          </div>
          <div className="col">
            <h5>Links</h5>
            <ul class="nav-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Log-in</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
