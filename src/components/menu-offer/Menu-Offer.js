import React from "react";
import "./Menu-Offer.css";

const MenuOfferComponent = (props) => {
  const {
    data: { heading, content, isMenuComponent },
  } = props;
  return (
    <div className="menu-offer-container">
      <h3>{heading}</h3>
      <p>{content}</p>
      {isMenuComponent && <button>SEE MENU</button>}
      {isMenuComponent && <img src="/images/menuItems.png" alt="" />}
      {!isMenuComponent && (
        <div className="input-wrapper">
          <input />
          <button>SUBSCRIBE</button>
        </div>
      )}
    </div>
  );
};

export default MenuOfferComponent;
