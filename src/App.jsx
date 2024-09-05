import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Login from './components/Login';
import Dashboard from './components/Admin/Dashboard';
import { ThemeProvider, useTheme } from './contexts/ThemeContext'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

function AppContent() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const [role, setRole] = React.useState('Admin'); 
  const { toggleTheme } = useTheme(); 

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const handleLogout = () => setRole(role === 'Admin' ? 'Student' : 'Admin');

  return (
    <div className="flex flex-col min-h-screen">
      <Header toggleSidebar={toggleSidebar} role={role} onToggleDarkMode={toggleTheme} />
      <div className="flex flex-grow relative">
        <Sidebar isSidebarOpen={isSidebarOpen} isStudent={role === 'Student'} onLogout={handleLogout} />
        <main className="">
          <Routes>
            <Route path="/login" element={<Login />} />
            {/* Add other admin routes here */}
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<AppContent />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
