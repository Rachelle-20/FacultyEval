import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSignInAlt } from 'react-icons/fa';
import Header from './Header';
import Footer from './Footer';

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard'); 
  };

  return (
    <div className="flex flex-col min-h-screen flex items-center text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 text-base">
      {/* Header for Login */}
      <Header isLoginPage={true} />

      <main className="flex-grow flex items-center justify-center">
        <div className="bg-white dark:bg-gray-800 shadow-md p-10 rounded-lg shadow-lg max-w-md w-full flex flex-col items-center">
          <img
            src="https://lms.laverdad.edu.ph/pluginfile.php/1/core_admin/logo/0x200/1723859913/lvcc_logo.png"
            alt="LVCC Logo"
            className="w-24 h-24 mb-4"
          />
          <p className="text-md mb-4 text-center text-gray-700 dark:text-gray-100">
            Please use your Laverdad Email and correct Password to access the system!
          </p>
          <form className="space-y-6 w-full" onSubmit={handleLogin}>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border  dark:text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-300"
              >
                Login
                <FaSignInAlt className="ml-2" />
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Login;
