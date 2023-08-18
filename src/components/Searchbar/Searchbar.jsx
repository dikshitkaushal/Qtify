import React from "react";
import { ReactComponent as Searchicon } from "../../assets/Search-icon.svg";
import "./Searchbar.css";

const Searchbar = () => {
  let handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      className="search"
    >
      <input
        className="input"
        type="search"
        placeholder="Search a album of your choice"
        required
      />
      <button className="searchicon" type="submit">
        <Searchicon />
      </button>
    </form>
  );
};

export default Searchbar;
