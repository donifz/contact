import React, { useState, useEffect, useRef } from "react";
import "./search.css";
import { useSelector, useDispatch } from "react-redux";
import { filt } from "../../redux/actions";

const SearchInput = (props) => {
  // console.log(props.data);
  const [filter, setFilter] = useState("");
  useEffect(() => {
    setFilter(all);
    console.log(filter);
  });

  const dispatch = useDispatch();
  const all = useSelector((item) => item.filter);
  const filterHand = () => {
    text.current.focus();
    dispatch(filt(text.current.value));
  };
  let text = useRef(null);

  return (
    <div className="search">
      <input
        ref={text}
        onChange={filterHand}
        className="search__input"
        placeholder="type to search..."
      />
    </div>
  );
};

export default SearchInput;
