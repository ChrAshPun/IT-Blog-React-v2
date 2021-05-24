import React from "react";
import "./style.css";
// Components
import SearchBar from "./components/SearchBar"
import NavBar from "./components/NavBar"
import Header from "./components/Header"
import Footer from "./components/Footer"

const App = () => {
    return (
      <div>
        <SearchBar />
        <NavBar />
        <Header />
        <Footer />
      </div>
    )
}

export default App;
