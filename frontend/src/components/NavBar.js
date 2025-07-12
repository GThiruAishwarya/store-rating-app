// components/NavBar.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';

const NavBar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      {user ? (
        <>
          <span>{user.email} ({user.role})</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
};

export default NavBar;
