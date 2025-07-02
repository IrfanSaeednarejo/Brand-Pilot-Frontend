import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLogout } from '../hooks/useLogout.js'
import { useAuthContext } from '../hooks/useAuthContext.js'


const Header = () => {
  const [loggedInUser, setLoggedInUser] = useState(false);
  const [user, setUser] = useState({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setLoggedInUser(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setLoggedInUser(false);
    setUser({});
    navigate("/");
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

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

            {loggedInUser ? (
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => navigate("/generate")}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  Generate Content
                </button>
                <div className="relative group">
                  <div className="w-10 h-10 rounded-full overflow-hidden cursor-pointer">
                    <img
                      src={`https://api.dicebear.com/9.x/initials/svg?seed=${user.username || 'User'}`}
                      alt={`${user.username || 'User'}'s avatar`}
                      className="w-full h-full object-cover"
                      onClick={() => navigate("/profile")}
                    />
                  </div>
                  <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-50 hidden group-hover:block border border-gray-700">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                    >
                      Your Profile
                    </Link>
                    <Link
                      to="/settings"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                    >
                      Settings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              </div>
            ) : (
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

          
          <div className="flex lg:hidden items-center">
            {loggedInUser && (
              <button
                onClick={() => navigate("/generate")}
                className="mr-3 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm transition-all duration-300"
              >
                Generate
              </button>
            )}
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pb-3 border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/features"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                to="/pricing"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                to="/dashboard"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                Dashboard
              </Link>

              {loggedInUser ? (
                <>
                  <Link
                    to="/profile"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Your Profile
                  </Link>
                  <Link
                    to="/settings"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Settings
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setMobileMenuOpen(false);
                    }}
                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                  >
                    Sign out
                  </button>
                </>
              ) : (
                <div className="pt-4 border-t border-gray-800">
                  <Link
                    to="/login"
                    className="block w-full px-4 py-2 mb-2 text-center rounded-md text-white bg-gray-800 hover:bg-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Log in
                  </Link>
                  <Link
                    to="/signup"
                    className="block w-full px-4 py-2 text-center rounded-md text-white bg-blue-600 hover:bg-blue-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Start Free Trial
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;