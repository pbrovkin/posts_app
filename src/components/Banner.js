import React from "react";
// import Menu from "./Menu";

import "./banner.scss";
// import InputPanel from "../form/FormContainer";
// import Weather from "../weather/Weather";

const Banner = () => {
  return (
    <div className="banner">
      <h1 className="banner__title">{"Write Your Thoughts "}</h1>
      <div className="total-country">
        <h2 className="banner__title--subtitle">
          {"A smart place to express yourself"}
        </h2>
      </div>
    </div>
  );
};
export default Banner;
