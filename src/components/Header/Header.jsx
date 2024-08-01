import React, { useState } from "react";
import "./Header.scss";
import Cart from "../Cart/Cart";
function Header() {
  const [mobileNav, setMobileNav] = useState(false);

  function handleOpenNav() {
    setMobileNav(true);
  }
  function handleCloseNav() {
    setMobileNav(false);
  }

  const handleOpenCart = () => {
    document.querySelector(".cart_container").style.opacity = "1";
    document.querySelector(".cart_container").style.display = "block";
  };
  const handleCloseCart = () => {
    document.querySelector(".cart_container").style.opacity = "0";
    document.querySelector(".cart_container").style.display = "none";
  };
  return (
    <header>
      <div className="container">
        <a className="logo">
          Flower <span>.</span>
        </a>

        <ul className={`navbar ${mobileNav ? "opened" : "closed"}`}>
          <li onClick={handleCloseNav}>
            <a href="#home">home</a>
          </li>
          <li onClick={handleCloseNav}>
            <a href="#about">about</a>
          </li>
          <li onClick={handleCloseNav}>
            <a href="#products">products</a>
          </li>
          <li onClick={handleCloseNav}>
            <a href="#reviews">review</a>
          </li>
          <li onClick={handleCloseNav}>
            <a href="#contact">contact</a>
          </li>
        </ul>

        <ul className="icons">
          <li>
            <a>
              <i className="fa-solid fa-heart"></i>
            </a>
          </li>
          <li className="Cart" onClick={handleOpenCart}>
            <a>
              <i className="fa-solid fa-cart-shopping"></i>
            </a>
          </li>
          <li>
            <a>
              <i className="fa-solid fa-magnifying-glass"></i>
            </a>
          </li>
        </ul>

        <div className="cart_container">
          <div className="close_cart"></div>
          <Cart handleCloseCart={handleCloseCart} />
        </div>
        <div className="bars">
          <i className="fa-solid fa-bars" onClick={handleOpenNav}></i>
        </div>
      </div>
    </header>
  );
}

export default Header;
