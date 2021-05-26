import React from "react";
import "../style2.css";

const MobileSearchBar = ({
  inputText,
  setInputText,
  setCategory,
  articles,
  setFilteredArticles,
}) => {
  // event handlers
  const navBarHandler = () => {
    console.log("working");
    const navBar = document.getElementsByClassName("nav-links")[0];
    console.log(navBar);
    navBar.classList.toggle("open");
  };
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
  const toggleSearchBarHandler = () => {
    const mobileSearchBar = document.getElementsByClassName(
      "mobile-searchbar-container"
    )[0];
    mobileSearchBar.style.display === "flex"
      ? (mobileSearchBar.style.display = "none")
      : (mobileSearchBar.style.display = "flex");
  };
  return (
    <div id="top-of-page" className="search-section">
      <div class="mobile-searchbar-container">
        <form className="mobile-searchbar">
          <input
            id="searchbar"
            type="text"
            placeholder="SEARCH..."
            onChange={inputHandler}
          />
          <button id="search-btn" type="submit" onClick={submitHandler}>
            <i className="fa fa-search fa-lg"></i>
          </button>
          <button id="close-btn" onClick={toggleSearchBarHandler}>
            <i class="fas fa-times fa-lg"></i>
          </button>
        </form>
      </div>
      <div className="hamburger" onClick={navBarHandler}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="logo">
        <h4 onClick={logoHandler}>IT Blog</h4>
        <p>by Christina Punla</p>
      </div>
      <button id="mobile-search-btn" onClick={toggleSearchBarHandler}>
        <i class="fa fa-search fa-2x"></i>
      </button>
    </div>
  );
};

export default MobileSearchBar;
