import React from "react";
import "./favorite.css";
import favLogo from "./img/favorite.png";

const Favorite = () => {
  return (
    <div className="favorite">
      <img src={favLogo} alt="heart" />
    </div>
  );
};

export default Favorite;
