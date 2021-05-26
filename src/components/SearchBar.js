import React from "react";
import "../style2.css";

const SearchBar = ({
  inputText,
  setInputText,
  setCategory,
  articles,
  setFilteredArticles,
}) => {
  // event handlers
  const logoHandler = () => {
    setCategory("all");
  };
  const inputHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setFilteredArticles(
      articles.filter((article) => {
        return article.title.toLowerCase().includes(inputText.toLowerCase());
      })
    );
  };
  return (
    <div id="top-of-page" className="search-section">
      <div className="logo">
        <h4 onClick={logoHandler}>IT Blog</h4>
        <p>by Christina Punla</p>
      </div>
      <form className="searchbar-container">
        <input
          id="searchbar"
          type="text"
          placeholder="SEARCH..."
          onChange={inputHandler}
        />
        <button id="search-btn" type="submit" onClick={submitHandler}>
          <i className="fa fa-search fa-lg"></i>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
