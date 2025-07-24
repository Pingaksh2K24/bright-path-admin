import React, { useState } from 'react';
import './Dashboard.css';
import Sidebar from './Sidebar';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dashboard-root">
      <div className={sidebarOpen ? 'sidebar-overlay open' : 'sidebar-overlay'} onClick={() => setSidebarOpen(false)} />
      <Sidebar className={sidebarOpen ? 'open' : ''} />
      <main className="dashboard-main">
        <Header onHamburgerClick={() => setSidebarOpen((o) => !o)} />
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard; 