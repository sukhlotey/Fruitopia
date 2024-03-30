import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const cartItems = useSelector((state) => state.counter.history);
  return (
    <div>
      <ul className="nav-ul">
        <li className="nav-li">
          <NavLink to="/">Fruitopia</NavLink>
        </li>
        <li className="nav-li">
          <NavLink to="cart" className="logo-container">
          <i className="bi bi-cart3"></i>
            {/* {cartItems.length > 0 && ( */}
              <span className="cart-count">{cartItems.length}</span>
            {/* )} */}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
