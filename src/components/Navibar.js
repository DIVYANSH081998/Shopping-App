import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "../styles/Navbar.css";
const Navibar = ({ setShow }) => {
  return (
    <nav>
      <div className="nav_box">
        <sapn className="my_shop" onClick={() => setShow(true)}>
          My Shopping
        </sapn>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <FaShoppingCart />
          </span>
          <span>0</span>
        </div>
      </div>
    </nav>
  );
};

export default Navibar;
