import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ isSidebarOpen, isStudent, role, onLogout }) => {
  const [isManageOpen, setIsManageOpen] = useState(false);

  const toggleManageDropdown = () => {
    setIsManageOpen(!isManageOpen);
  };

  const handleLogout = () => {
    // Toggle between Admin and Student
    onLogout(role === 'Admin' ? 'Student' : 'Admin');
  };

  return (
    <div
      className={`bg-white dark:bg-gray-800 w-30 shadow-lg fixed left-30 z-30 transform transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
      style={{
        top: '6rem',
        left: '1rem',
        bottom: '1rem', // Ensure the sidebar stretches to the bottom
        overflowY: 'auto',
        padding: '1rem', // Padding for box-like appearance
        borderRadius: '0.5rem', // Rounded corners for the box
      }}
    >
      {/* Sidebar Navigation */}
      <nav>
        <ul className="space-y-4 p-4 bg-white dark:bg-gray-800 ">
          {/* Dashboard */}
          <li className="mb-4">
            <a href="#" className="flex items-center text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 text-base">
              <i className="fas fa-tachometer-alt mr-2 text-base"></i>
              <span className="font-medium">Dashboard</span>
            </a>
          </li>

          {/* Conditional Rendering for Student vs. Admin */}
          {isStudent ? (
            <>
              <li className="mb-4">
                <a href="#" className="flex items-center text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 text-base">
                  <i className="fas fa-edit mr-2 text-base"></i>
                  <span className="font-medium">Evaluate</span>
                </a>
              </li>

              <li className="mb-4">
                <a href="#" className="flex items-center text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 text-base">
                  <i className="fas fa-history mr-2 text-base"></i>
                  <span className="font-medium">Evaluation History</span>
                </a>
              </li>

              <li className="mb-4">
                <a href="#" className="flex items-center text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 text-base">
                  <i className="fas fa-user mr-2 text-base"></i>
                  <span className="font-medium">Profile</span>
                </a>
              </li>

              {/* Logout button */}
              <li className="mb-4">
                <button
                  onClick={handleLogout}
                  className="flex items-center text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 text-base"
                >
                  <FontAwesomeIcon icon={faSignOutAlt} className="mr-2 text-base" />
                  <span className="font-medium">Logout</span>
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="mb-4">
                <a
                  href="#"
                  className="flex items-center justify-between text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 text-base"
                  onClick={toggleManageDropdown}
                >
                  <span className="flex items-center">
                    <i className="fas fa-cogs mr-2 text-base"></i>
                    <span className="font-medium">Manage</span>
                  </span>
                  <i className={`fas ${isManageOpen ? 'fa-chevron-up' : 'fa-chevron-down'} text-base`}></i>
                </a>
                {isManageOpen && (
                  <ul className="ml-6 mt-2 space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                    <li>
                      <a href="#" className="hover:text-gray-500 dark:hover:text-gray-300 flex items-center">
                        <i className="fas fa-building mr-2 text-sm"></i>
                        Department
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-gray-500 dark:hover:text-gray-300 flex items-center">
                        <i className="fas fa-user-plus mr-2 text-sm"></i>
                        Student
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-gray-500 dark:hover:text-gray-300 flex items-center">
                        <i className="fas fa-chalkboard-teacher mr-2 text-sm"></i>
                        Subject & Instructor
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-gray-500 dark:hover:text-gray-300 flex items-center">
                        <i className="fas fa-tasks mr-2 text-sm"></i>
                        Evaluation
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-gray-500 dark:hover:text-gray-300 flex items-center">
                        <i className="fas fa-calendar-alt mr-2 text-sm"></i>
                        Academic Year
                      </a>
                    </li>
                  </ul>
                )}
              </li>

              <li className="mb-4">
                <a href="#" className="flex items-center text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 text-base">
                  <i className="fas fa-file-alt mr-2 text-base"></i>
                  <span className="font-medium">Logs</span>
                </a>
              </li>

              <li className="mb-4">
                <a href="#" className="flex items-center text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 text-base">
                  <i className="fas fa-chart-bar mr-2 text-base"></i>
                  <span className="font-medium">Evaluation Report</span>
                </a>
              </li>

              <li className="mb-4">
                <a href="#" className="flex items-center text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 text-base">
                  <i className="fas fa-user mr-2 text-base"></i>
                  <span className="font-medium">Profile</span>
                </a>
              </li>

              {/* Logout button */}
              <li className="mb-4">
                <button
                  onClick={handleLogout}
                  className="flex items-center text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 text-base"
                >
                  <FontAwesomeIcon icon={faSignOutAlt} className="mr-2 text-base" />
                  <span className="font-medium">Logout</span>
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
