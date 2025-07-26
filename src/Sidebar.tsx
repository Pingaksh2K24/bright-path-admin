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

  const isEnquiryActive = location.pathname.startsWith('/dashboard/enquiry');
  const [enquiryOpen, setEnquiryOpen] = useState(isEnquiryActive);

  const isFinancialActive = location.pathname.startsWith('/dashboard/financial');
  const [financialOpen, setFinancialOpen] = useState(isFinancialActive);

  const isFacultyActive = location.pathname.startsWith('/dashboard/faculty');
  const [facultyOpen, setFacultyOpen] = useState(isFacultyActive);

  const isCourseActive = location.pathname.startsWith('/dashboard/course');
  const [courseOpen, setCourseOpen] = useState(isCourseActive);

  React.useEffect(() => {
    if (isAccountActive) setAccountOpen(true);
    if (isEnquiryActive) setEnquiryOpen(true);
    if (isFinancialActive) setFinancialOpen(true);
    if (isFacultyActive) setFacultyOpen(true);
    if (isCourseActive) setCourseOpen(true);
  }, [isAccountActive, isEnquiryActive, isFinancialActive, isFacultyActive, isCourseActive]);

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
          style={{ fontWeight: 600, margin: '8px 0 0 0', paddingLeft: 2, fontSize: '0.97rem', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
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
        <div
          className={isEnquiryActive ? 'sidebar-link active' : 'sidebar-link'}
          style={{ fontWeight: 600, margin: '8px 0 0 0', paddingLeft: 2, fontSize: '0.97rem', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
          onClick={() => setEnquiryOpen((open) => !open)}
        >
          <span className="sidebar-icon">📞</span> Enquiry Desk
        </div>
        {enquiryOpen && (
          <>
            <NavLink to="/dashboard/enquiry/new" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 28, fontWeight: 400 }}>
              New Enquiry
            </NavLink>
            <NavLink to="/dashboard/enquiry/followup" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 28, fontWeight: 400 }}>
              Follow-up Tracker
            </NavLink>
          </>
        )}
        <div
          className={isFinancialActive ? 'sidebar-link active' : 'sidebar-link'}
          style={{ fontWeight: 600, margin: '8px 0 0 0', paddingLeft: 2, fontSize: '0.97rem', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
          onClick={() => setFinancialOpen((open) => !open)}
        >
          <span className="sidebar-icon">💰</span> Financial
        </div>
        {financialOpen && (
          <>
            <NavLink to="/dashboard/financial/fee-structure" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 28, fontWeight: 400 }}>
              Fee Structure
            </NavLink>
            <NavLink to="/dashboard/financial/fee-collection" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 28, fontWeight: 400 }}>
              Student Fee Collection
            </NavLink>
            <NavLink to="/dashboard/financial/pending-dues" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 28, fontWeight: 400 }}>
              Pending Dues
            </NavLink>
            <NavLink to="/dashboard/financial/refunds" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 28, fontWeight: 400 }}>
              Refunds & Adjustments
            </NavLink>
            <NavLink to="/dashboard/financial/expenses" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 28, fontWeight: 400 }}>
              Expenses Tracker
            </NavLink>
          </>
        )}
        <NavLink to="/dashboard/student" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
          <span className="sidebar-icon">👨‍🎓</span> Students
        </NavLink>
        <div
          className={isFacultyActive ? 'sidebar-link active' : 'sidebar-link'}
          style={{ fontWeight: 600, margin: '8px 0 0 0', paddingLeft: 2, fontSize: '0.97rem', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
          onClick={() => setFacultyOpen((open) => !open)}
        >
          <span className="sidebar-icon">👨‍🏫</span> Faculty
        </div>
        {facultyOpen && (
          <>
            <NavLink to="/dashboard/faculty/add" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 28, fontWeight: 400 }}>
              Add Faculty
            </NavLink>
            <NavLink to="/dashboard/faculty/list" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 28, fontWeight: 400 }}>
              Faculty List / Directory
            </NavLink>
            <NavLink to="/dashboard/faculty/timetable" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 28, fontWeight: 400 }}>
              Timetable / Class Schedule
            </NavLink>
            <NavLink to="/dashboard/faculty/subject-assignment" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 28, fontWeight: 400 }}>
              Subject Assignment
            </NavLink>
            <NavLink to="/dashboard/faculty/attendance" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 28, fontWeight: 400 }}>
              Attendance
            </NavLink>
            <NavLink to="/dashboard/faculty/performance" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 28, fontWeight: 400 }}>
              Performance Feedback
            </NavLink>
            <NavLink to="/dashboard/faculty/payments" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 28, fontWeight: 400 }}>
              Payments / Salary
            </NavLink>
          </>
        )}
        <div
          className={isCourseActive ? 'sidebar-link active' : 'sidebar-link'}
          style={{ fontWeight: 600, margin: '8px 0 0 0', paddingLeft: 2, fontSize: '0.97rem', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
          onClick={() => setCourseOpen((open) => !open)}
        >
          <span className="sidebar-icon">📚</span> Courses
        </div>
        {courseOpen && (
          <>
            <NavLink to="/dashboard/course/add" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 28, fontWeight: 400 }}>
              Add Course
            </NavLink>
            <NavLink to="/dashboard/course/list" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 28, fontWeight: 400 }}>
              Course List / Manage Courses
            </NavLink>
            <NavLink to="/dashboard/course/subject-mapping" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 28, fontWeight: 400 }}>
              Subject Mapping
            </NavLink>
            <NavLink to="/dashboard/course/syllabus" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 28, fontWeight: 400 }}>
              Syllabus Upload / Management
            </NavLink>
            <NavLink to="/dashboard/course/faculty-assignment" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 28, fontWeight: 400 }}>
              Assign Faculty to Course
            </NavLink>
            <NavLink to="/dashboard/course/materials" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 28, fontWeight: 400 }}>
              Course Materials
            </NavLink>
          </>
        )}
        <a className="sidebar-link"><span className="sidebar-icon">📑</span> Reports</a>
        <a className="sidebar-link"><span className="sidebar-icon">📊</span> Results</a>
        <a className="sidebar-link"><span className="sidebar-icon">🛠️</span> Field Maintenance</a>
        <a className="sidebar-link"><span className="sidebar-icon">⚙️</span> Settings</a>
      </nav>
    </aside>
  );
};

export default Sidebar; 