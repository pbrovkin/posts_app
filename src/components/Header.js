import React from "react";
import "./header.scss";
import "../scss/common.scss";
import Banner from "./Banner";

const Header = () => {
  return (
    <header className="banner-section">
      <div className="container">
        <Banner />
      </div>
    </header>
  );
};
export default Header;
