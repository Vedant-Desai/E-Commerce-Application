import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo_img" />
        <p>SHOPPERS STOP</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <NavLink to="/">Shop{menu === "shop" && <hr />}</NavLink>
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          <NavLink to="/mens">Men{menu === "men" && <hr />}</NavLink>
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <NavLink to="/womens">Women{menu === "women" && <hr />}</NavLink>
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <NavLink to="/kids">Kids{menu === "kids" && <hr />}</NavLink>
        </li>
      </ul>
      <div className="nav-login-cart">
        <NavLink
          to="/login"
          onClick={() => {
            setMenu("");
          }}
        >
          <button>Login</button>
        </NavLink>
        <NavLink
          to="/cart"
          onClick={() => {
            setMenu("");
          }}
        >
          <img src={cart_icon} alt="cart_icon" />
        </NavLink>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
