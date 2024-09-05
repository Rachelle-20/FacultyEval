import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMoon } from '@fortawesome/free-solid-svg-icons';

const Header = ({ toggleSidebar, role, onToggleDarkMode, isLoginPage }) => {
  const handleToggleDarkMode = () => {
    onToggleDarkMode(); 
  };

  return (
    <>
      <header className="bg-white dark:bg-gray-800 shadow-md py-4 px-10 flex justify-between items-center fixed top-0 left-0 w-full z-50">
        <div className="flex items-center">
          <img
            src="https://lms.laverdad.edu.ph/pluginfile.php/1/core_admin/logo/0x200/1723859913/lvcc_logo.png"
            alt="LVCC Logo"
            className="w-12 h-12 mr-7"
          />
          {!isLoginPage && (
            <button onClick={toggleSidebar} className="text-1xl">
              <FontAwesomeIcon icon={faBars} />
            </button>
          )}
        </div>

        {!isLoginPage && (
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
              <img
                src="https://th.bing.com/th/id/OIP.voVmH_P-WhYnjVZYb-WUhwHaHa?rs=1&pid=ImgDetMain"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="mr-4 hidden md:block">{role}</span>
            <button className="ml-4" onClick={handleToggleDarkMode}>
              <FontAwesomeIcon icon={faMoon} className="text-1xl" />
            </button>
          </div>
        )}
      </header>
      <div className="pt-16" />
    </>
  );
};

export default Header;
