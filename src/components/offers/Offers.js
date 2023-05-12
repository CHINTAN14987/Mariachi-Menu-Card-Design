import React from "react";
import "./Offers.css";
import MenuOfferComponent from "../menu-offer/Menu-Offer";
import Footer from "../footer/Footer";
const offerData = {
  heading: "Get our Latest Offers!",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  isMenuComponent: false,
};
const Offers = () => {
  return (
    <>
      <div className="offers-container">
        <div className="content">
          <h3>See our Offers</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur
          </p>
          <button>SEE OFFERS</button>
        </div>
        <img src="/images/offersImg.png" alt="" />
      </div>

      <div className="offer-banner-wrapper">
        <div
          style={{
            backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(/images/offersBgImg.png)`,
          }}
          className="offers-banner-background"
        ></div>
        <div className="offers-banner-content">
          <img src="/images/logo.png" alt="" />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur
          </p>
          <h3>Pedro Luis</h3>
        </div>
      </div>
      <MenuOfferComponent data={offerData} />
      <Footer />
    </>
  );
};

export default Offers;
