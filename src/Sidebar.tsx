import React, { useState } from 'react';
import type { ReactNode } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

interface SidebarProps {
  className?: string;
  children?: ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ className = '', children }) => {
  const location = useLocation();
  const isAccountActive = location.pathname.startsWith('/dashboard/account-management');
  const [accountOpen, setAccountOpen] = useState(isAccountActive);

  React.useEffect(() => {
    if (isAccountActive) setAccountOpen(true);
  }, [isAccountActive]);

  return (
    <aside className={`dashboard-sidebar ${className}`}>
      {children}
      <div className="sidebar-logo-section">
        <div className="sidebar-logo" style={{ marginBottom: 0, paddingBottom: 0 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <img src="/logo.png" alt="Bright Path Logo" style={{ width: 54, height: 40, objectFit: 'contain', marginBottom: -6 }} />
            <span style={{ fontWeight: 700, fontSize: 28, verticalAlign: 'middle', letterSpacing: 1, marginBottom: 0, paddingBottom: 0 }}>
              <span style={{ color: '#fff' }}>BRIGHT</span> <span style={{ color: '#FFD600' }}>PATH</span>
            </span>
          </div>
        </div>
      </div>
      <nav className="sidebar-menu">
        <NavLink to="/dashboard" end className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}><span className="sidebar-icon">🏠</span> Dashboard</NavLink>
        <div
          className={isAccountActive ? 'sidebar-link active' : 'sidebar-link'}
          style={{ fontWeight: 600, color: '#FFD600', margin: '8px 0 0 0', paddingLeft: 2, fontSize: '0.97rem', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
          onClick={() => setAccountOpen((open) => !open)}
        >
          <span className="sidebar-icon">👤</span> Account Management
        </div>
        {accountOpen && (
          <>
            <NavLink to="/dashboard/account-management/create" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 28, fontWeight: 400 }}>
              Create Account
            </NavLink>
            <NavLink to="/dashboard/account-management/view" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 28, fontWeight: 400 }}>
              View Account
            </NavLink>
          </>
        )}
        <a className="sidebar-link"><span className="sidebar-icon">👨‍🎓</span> Students</a>
        <a className="sidebar-link"><span className="sidebar-icon">📚</span> Courses</a>
        <a className="sidebar-link"><span className="sidebar-icon">📊</span> Results</a>
        <a className="sidebar-link"><span className="sidebar-icon">⚙️</span> Settings</a>
        <a className="sidebar-link"><span className="sidebar-icon">💰</span> Financial</a>
        <a className="sidebar-link"><span className="sidebar-icon">🛠️</span> Field Maintenance</a>
      </nav>
    </aside>
  );
};

export default Sidebar; 