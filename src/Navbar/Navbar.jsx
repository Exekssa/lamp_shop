import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../Navbar/Navbar.css";
import Cart from "../Cart/Cart";
import logo from "../Images/logo.svg";
import basket from "../Images/basket_line.svg";
import { useCart } from "../cartContext";

const Navbar = () => {
  const { cartItems } = useCart();

  const [isCartOpen, setCartOpen] = useState(false);

  const openCart = () => {
    if (cartItems && cartItems.length > 0) {
      setCartOpen(true);
    }
  };

  const closeCart = () => {
    setCartOpen(false);
  };

  return (
    <div className="nav">
      <div className="navElements">
        <NavLink to="/" exact activeClassName="activeLink">
          <img src={logo} alt="logo" className="logo" />
        </NavLink>

        <NavLink to="/products" exact activeClassName="activeLink">
          All lamps
        </NavLink>

        <div className="cartLocation">
          <div className="basketNavContainer">
            <img
              src={basket}
              alt="cart"
              className="basketNav"
              onClick={openCart}
            />
            <div className="totalPrice">
              {" "}
              {cartItems.reduce(
                (sum, item) =>
                  sum + parseInt(item.price) * parseInt(item.amount),
                0
              )}{" "}
              lei
            </div>
          </div>

          {isCartOpen && (
            <Cart onClose={closeCart} className="productsOnCart" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
