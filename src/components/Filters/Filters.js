import React, { useState, useEffect } from "react";
import SearchInput from "../Search/searchInput";
import Favorite from "../Favorite/favorite";
import Sort from "../Sort/sort";

const Filters = (props) => {
  let data = props.data;
  return (
    <div className="filters">
      <SearchInput data={data} />
      <div className="fav-sort">
        <Favorite />
        <Sort />
      </div>
    </div>
  );
};

export default Filters;
