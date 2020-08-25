import React from "react";
import "./header.css";
import logo from "./img/Vector.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="logo">
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
          <div className="title">MyContacts</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
