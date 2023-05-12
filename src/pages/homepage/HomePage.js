import React from "react";
import Banner from "../../components/banner/Banner";
import MenuOfferComponent from "../../components/menu-offer/Menu-Offer";
import TellMore from "../../components/tell-more/TellMore";

const HomePage = () => {
  const menuData = {
    heading: "Don't Miss our Menu!",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    isMenuComponent: true,
  };
  return (
    <>
      <Banner />
      <MenuOfferComponent data={menuData} />
      <TellMore />
    </>
  );
};

export default HomePage;
