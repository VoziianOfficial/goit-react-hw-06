import React from "react";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import s from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div assName={s.searchContainer}>
      <label className={s.text}>Find contacts by name</label>
      <input className={s.input} type="text" onChange={handleChange} />
    </div>
  );
};

export default SearchBox;
