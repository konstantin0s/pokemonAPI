import React from "react";
import { Link } from "react-router-dom";
import './css/header.css';

const Header =() => {
  return (
    <div>
      <header id="masthead" className="header" style={headerStyle}>
       <img src="https://images.pexels.com/photos/1267703/pexels-photo-1267703.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="img" alt="" />
        <Link className="link" style={linkStyle} to="/">
        {" "} Home {" "}
        </Link>
        <Link className="link" style={linkStyle} to="/pokemons">
        {" "}    Pokemons
        </Link>{" "}
        
        <Link style={linkStyle} className="link" to="/randomPokemons">
        {" "}    randomPokemons {" "}
        </Link>
      </header>


    </div>
  );
}

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  marginRight: "20px",
  marginLeft: "20px"
};

const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px"
};

export default Header;