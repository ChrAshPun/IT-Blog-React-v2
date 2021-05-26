import React from "react";
import "../style2.css";

const NavBar = ({ setCategory }) => {
  const categoryHandler = (e) => {
    setCategory(e.target.dataset.category);
  };

  return (
    <div className="navbar-container">
      <ul className="nav-links">
        <li data-category="operating systems" onClick={categoryHandler}>
          OPERATING SYSTEMS
        </li>
        <li data-category="printers" onClick={categoryHandler}>
          PRINTERS
        </li>
        <li data-category="outlook" onClick={categoryHandler}>
          OUTLOOK
        </li>
        <li data-category="powerpoint" onClick={categoryHandler}>
          POWERPOINT
        </li>
        <li data-category="active directory" onClick={categoryHandler}>
          ACTIVE DIRECTORY
        </li>
        <li data-category="exchange" onClick={categoryHandler}>
          EXCHANGE
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
