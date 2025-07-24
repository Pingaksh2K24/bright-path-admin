import React from 'react';

interface HeaderProps {
  onHamburgerClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onHamburgerClick }) => (
  <div className="dashboard-header">
    <button
      className="header-hamburger-btn"
      aria-label="Open sidebar"
      onClick={onHamburgerClick}
      style={{ marginRight: 16 }}
    >
      <span style={{ fontSize: 28, lineHeight: 1 }}>&#9776;</span>
    </button>
    <h1 className="dashboard-title">Dashboard</h1>
    <div className="dashboard-user">Admin</div>
  </div>
);

export default Header; 