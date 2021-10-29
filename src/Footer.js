import React from "react";
import "./footer.css";
import sgLogo from './images/SeatGeek_Primary.png'

const Footer = () => {
  return (
    <footer className="section" style={{ backgroundColor: "#fff" }}>
        <hr />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div>
              <h2 className="head"><span className="headOne">The Concert </span><span className="headTwo">Dropout</span></h2>
              <p>
                The place to get your mind at peace. Listen to the music and go
                with the flow.
              </p>
              <p>
                © 2021 The Concert Droupout. All Rights Reserved.
              </p>
            </div>
          </div>
          <div className="col-md-4">
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
            <ul className="nav-list">
              <li><a href='https://www.seatgeek.com'>Seat Geak</a><img id='sgLogo' src={sgLogo} alt='seat geek logo'></img></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;