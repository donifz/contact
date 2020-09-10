import React from "react";
import "./header.css";
import logo from "./img/Vector.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="logo">
          <div>
            <Link to={`/`}>
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="title">MyContacts</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
