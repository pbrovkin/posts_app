import React from "react";
import { Link } from "react-router-dom";
import "./banner.scss";

const Menu = () => {
  const padding = { padding: 10 };
  return (
    <div className = "container">
      <Link style={padding} to="/">
        <div className="button">Posts</div>
      </Link>
      <Link style={padding} to="/addPost">
        <div className="button">New post</div>
      </Link>
    </div>
  );
};

export default Menu;
