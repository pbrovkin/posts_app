import React from "react";
// import Menu from "./Menu";

import "./banner.scss";
// import InputPanel from "../form/FormContainer";
// import Weather from "../weather/Weather";

const Banner = () => {
  return (
    <div className="banner">
      <h1 className="banner__title">{"Write you blog "}</h1>
      <div className="total-country">
        <h2 className="banner__title--subtitle">
          {"Here is a list of most common array methods"}
        </h2>
      </div>
      {/* <Menu /> */}
      {/* <Weather /> */}
    </div>
  );
};
export default Banner;
