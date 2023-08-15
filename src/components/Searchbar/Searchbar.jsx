import React from "react";
import { ReactComponent as Searchicon } from "../../assets/Search-icon.svg";
import "./Searchbar.css";

const Searchbar = () => {
  return (
    <div className="search">
      <input
        className="input"
        type="search"
        placeholder="Search a album of your choice"
      />
      <button className="searchicon">
        <Searchicon />
      </button>
    </div>
  );
};

export default Searchbar;
