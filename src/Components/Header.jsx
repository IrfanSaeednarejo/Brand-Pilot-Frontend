import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLogout } from '../hooks/useLogout.js'
import { useAuthContext } from '../hooks/useAuthContext.js'
import { User } from "../../../Brand-Pilot-Backend/Brand-Pilot-Backend/models/userModel.js";


const Header = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()



  const handleLogout = () => {
    logout()
  }

  return (
    <header className="bg-gray-900 border-b border-gray-800 shadow-lg">
      <nav className="px-4 lg:px-6 py-3">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
          <Link to="/" className="flex items-center">
            <span className="self-center text-2xl font-bold whitespace-nowrap text-white">
              <span className="text-blue-400">Brand</span>Pilot
            </span>
          </Link>

         
          <div className="hidden lg:flex items-center space-x-8">
            <div className="hidden lg:flex items-center space-x-6">
              <Link
                to="/"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium"
              >
                Contact
              </Link>
            </div>


            {user && (
              <div className="flex items-center space-x-4"> 
                <Link
                  to="/generate"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  Generate Content  
                </Link>
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-gray-300 hover:text-white transition-colors duration-300 font-medium" onClick={handleLogout}>Log out</button>
              </div>
            )}

            {!user && (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300 font-medium"
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  Sign up
                </Link>
              </div>
              )}
            
          </div>
         </div>
          
      </nav>
    </header>
  );
};

export default Header;