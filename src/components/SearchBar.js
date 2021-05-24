import React from "react";
import "../style2.css"

const SearchBar = () => {
  return(
    <div className="search-section">
      <div className="logo">
        <a href="#">IT Blog</a>
        <p>by Christina Punla</p>
      </div>
      <div className="searchbar-container">
        <input id="searchbar" type="text"/>
        <button id="serach-btn"><i className="fa fa-search fa-lg"></i></button>
      </div>
    </div>
  )
};

export default SearchBar;
