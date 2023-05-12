import React from "react";

import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-container">
      <div>
        <h3>Mariachi</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        </p>
        <img src="/images/icons.png" />
      </div>
      <div>
        <h3>About</h3>
        <span>History</span>
        <span>our Team</span>
        <span>Brand Guidlines</span>
        <span>Terms & Condition</span>
        <span>Privacy Policy</span>
      </div>
      <div>
        <h3>Services</h3>
        <span>How to order</span>
        <span>Our Product</span>
        <span>Offers </span>
        <span>Promos</span>
        <span>Payment Method</span>
      </div>
      <div>
        <h3>Other</h3>
        <span>Contact Us</span>
        <span>Help</span>
      </div>
    </div>
  );
};

export default Footer;
