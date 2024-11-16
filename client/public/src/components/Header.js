import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Header = () => {
  const { authToken, logout } = useAuth();

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Real-Time Chat Application</h1>
      {authToken ? (
        <div>
          <span className="mr-4">Welcome, User</span>
          <button onClick={logout} className="bg-red-500 px-4 py-2 rounded-lg">
            Logout
          </button>
        </div>
      ) : (
        <Link to="/login" className="bg-green-500 px-4 py-2 rounded-lg">
          Login
        </Link>
      )}
    </header>
  );
};

export default Header;
