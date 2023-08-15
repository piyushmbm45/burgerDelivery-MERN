import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../services/auth.service';

const Navigation = () => {
  const cartStyle = {
    display: 'flex',
    borderRadius: '50px',
    padding: '6px 12px',
  };
  const [currentUser, setCurrentUser] = useState(undefined);
  console.log(
    'file: Navigation.jsx:12 ~ Navigation ~ currentUser:',
    currentUser
  );

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4">
        <div className="ml-12">
          <Link className="flex items-center justify-between ml-6" to="/">
            <img
              src="/images/logo.png"
              alt="logo"
              style={{ width: 45, height: 45 }}
            />
            <p className="px-2 font-bold">Just Burger</p>
          </Link>
        </div>
        <ul className="flex items-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="ml-6">
            <Link to="/products">Products</Link>
          </li>
          {currentUser ? (
            <li className="ml-6">
              <Link to="/logout">Logout</Link>
            </li>
          ) : (
            <li className="ml-6">
              <Link to="/login">Login</Link>
            </li>
          )}
          <li className="ml-6 mr-6">
            <Link to="/cart">
              <div
                style={cartStyle}
                className="items-center justify-between bg-yellow-400 hover:bg-yellow-600"
              >
                <span>10</span>
                <img
                  className="ml-2"
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
