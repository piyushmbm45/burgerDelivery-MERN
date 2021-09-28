import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const cartStyle = {
    background: "#F59E0D",
    display: "flex",
    borderRadius: "50px",
    padding: "6px 12px",
  };
  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4">
        <div >
          <Link className="flex items-center justify-between" to="/">
            <img
              src="/images/logo.png"
              alt="logo"
              style={{ width: 45, height: 45 }}
            />
          <p className="px-2">Just Burger</p>
          </Link>
        </div>
        <ul className="flex items-center">
          <li className="ml-6">
            <Link to="/">Home</Link>
          </li>
          <li className="ml-6">
            <Link to="/products">Products</Link>
          </li>
          <li className="ml-6">
            <Link to="/cart">
              <div className="items-center justify-between" style={cartStyle}>
                <span>10</span>
                <img className="ml-2"
                  src="/images/shopping-cart.png"
                  alt="cart-icon"
                  style={{ width: 35, height: 35 }}
                />
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
