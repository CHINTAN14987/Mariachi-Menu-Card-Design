import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="container">
      <div
        style={{ backgroundImage: `url(/images/bannerBg.png)` }}
        className="banner-background"
      ></div>
      <div className="banner-content">
        <img src="/images/logo.png" alt="" />
        <h1>Mariachi</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur
        </p>
        <button>ORDER NOW</button>
      </div>
    </div>
  );
};

export default Banner;
