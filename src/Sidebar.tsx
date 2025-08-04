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

  const isReportsActive = location.pathname.startsWith('/dashboard/reports');
  const [reportsOpen, setReportsOpen] = useState(isReportsActive);
  const [studentReportsOpen, setStudentReportsOpen] = useState(false);
  const [academicReportsOpen, setAcademicReportsOpen] = useState(false);
  const [financialReportsOpen, setFinancialReportsOpen] = useState(false);
  const [facultyReportsOpen, setFacultyReportsOpen] = useState(false);
  const [enquiryReportsOpen, setEnquiryReportsOpen] = useState(false);
  const [communicationReportsOpen, setCommunicationReportsOpen] = useState(false);
  const [customReportsOpen, setCustomReportsOpen] = useState(false);
  const [complianceReportsOpen, setComplianceReportsOpen] = useState(false);
  const [feedbackReportsOpen, setFeedbackReportsOpen] = useState(false);
  const [certificatesReportsOpen, setCertificatesReportsOpen] = useState(false);

  const isResultsActive = location.pathname.startsWith('/dashboard/results');
  const [resultsOpen, setResultsOpen] = useState(isResultsActive);

  const isSettingsActive = location.pathname.startsWith('/dashboard/settings');
  const [settingsOpen, setSettingsOpen] = useState(isSettingsActive);
  const [accessSettingsOpen, setAccessSettingsOpen] = useState(false);
  const [systemSettingsOpen, setSystemSettingsOpen] = useState(false);
  const [resultsPromotionSettingsOpen, setResultsPromotionSettingsOpen] = useState(false);
  const [communicationSettingsOpen, setCommunicationSettingsOpen] = useState(false);
  const [integrationsSettingsOpen, setIntegrationsSettingsOpen] = useState(false);
  const [reportsExportSettingsOpen, setReportsExportSettingsOpen] = useState(false);
  const [securityAuditSettingsOpen, setSecurityAuditSettingsOpen] = useState(false);
  const [dataManagementSettingsOpen, setDataManagementSettingsOpen] = useState(false);
  const [customizationSettingsOpen, setCustomizationSettingsOpen] = useState(false);

  React.useEffect(() => {
    if (isAccountActive) setAccountOpen(true);
    if (isEnquiryActive) setEnquiryOpen(true);
    if (isFinancialActive) setFinancialOpen(true);
    if (isFacultyActive) setFacultyOpen(true);
    if (isCourseActive) setCourseOpen(true);
    if (isReportsActive) setReportsOpen(true);
    if (isResultsActive) setResultsOpen(true);
    if (isSettingsActive) setSettingsOpen(true);
  }, [isAccountActive, isEnquiryActive, isFinancialActive, isFacultyActive, isCourseActive, isReportsActive, isResultsActive, isSettingsActive]);

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
        <div
          className={isReportsActive ? 'sidebar-link active' : 'sidebar-link'}
          style={{ fontWeight: 600, margin: '8px 0 0 0', paddingLeft: 2, fontSize: '0.97rem', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
          onClick={() => setReportsOpen((open) => !open)}
        >
          <span className="sidebar-icon">📑</span> Reports
        </div>
        {reportsOpen && (
          <>
            <NavLink to="/dashboard/reports/dashboard" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 28, fontWeight: 400 }}>
              Dashboard
            </NavLink>

            <div
              className="sidebar-link"
              style={{ fontWeight: 500, paddingLeft: 28, fontSize: '0.95rem', cursor: 'pointer', display: 'flex', alignItems: 'center', marginTop: '4px' }}
              onClick={() => setStudentReportsOpen((open) => !open)}
            >
              Student Reports
            </div>
            {studentReportsOpen && (
              <>
                <NavLink to="/dashboard/reports/student/enrollment-trends" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 48, fontWeight: 400, fontSize: '0.9rem' }}>
                  Enrollment Trends
                </NavLink>
                <NavLink to="/dashboard/reports/student/attendance-summary" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 48, fontWeight: 400, fontSize: '0.9rem' }}>
                  Attendance Summary
                </NavLink>
                <NavLink to="/dashboard/reports/student/progress-snapshot" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 48, fontWeight: 400, fontSize: '0.9rem' }}>
                  Progress Snapshot
                </NavLink>
                <NavLink to="/dashboard/reports/student/engagement" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 48, fontWeight: 400, fontSize: '0.9rem' }}>
                  Student Engagement
                </NavLink>
                <NavLink to="/dashboard/reports/student/at-risk" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 48, fontWeight: 400, fontSize: '0.9rem' }}>
                  At-Risk Students
                </NavLink>
              </>
            )}

            <div
              className="sidebar-link"
              style={{ fontWeight: 500, paddingLeft: 28, fontSize: '0.95rem', cursor: 'pointer', display: 'flex', alignItems: 'center', marginTop: '4px' }}
              onClick={() => setAcademicReportsOpen((open) => !open)}
            >
              Academic Reports
            </div>
            {academicReportsOpen && (
              <>
                <NavLink to="/dashboard/reports/academic/course-effectiveness" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 48, fontWeight: 400, fontSize: '0.9rem' }}>
                  Course Effectiveness
                </NavLink>
                <NavLink to="/dashboard/reports/academic/batch-comparison" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 48, fontWeight: 400, fontSize: '0.9rem' }}>
                  Batch Comparison
                </NavLink>
                <NavLink to="/dashboard/reports/academic/test-results" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 48, fontWeight: 400, fontSize: '0.9rem' }}>
                  Test & Results Summary
                </NavLink>
                <NavLink to="/dashboard/reports/academic/assignment-compliance" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 48, fontWeight: 400, fontSize: '0.9rem' }}>
                  Assignment Compliance
                </NavLink>
              </>
            )}

            <div
              className="sidebar-link"
              style={{ fontWeight: 500, paddingLeft: 28, fontSize: '0.95rem', cursor: 'pointer', display: 'flex', alignItems: 'center', marginTop: '4px' }}
              onClick={() => setFinancialReportsOpen((open) => !open)}
            >
              Finance Reports
            </div>
            {financialReportsOpen && (
              <>
                <NavLink to="/dashboard/reports/financial/fee-collection" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 48, fontWeight: 400, fontSize: '0.9rem' }}>
                  Fee Collection Summary
                </NavLink>
                <NavLink to="/dashboard/reports/financial/outstanding-dues" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 48, fontWeight: 400, fontSize: '0.9rem' }}>
                  Outstanding Dues
                </NavLink>
                <NavLink to="/dashboard/reports/financial/discounts-scholarships" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 48, fontWeight: 400, fontSize: '0.9rem' }}>
                  Discounts & Scholarships
                </NavLink>
                <NavLink to="/dashboard/reports/financial/refunds-adjustments" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 48, fontWeight: 400, fontSize: '0.9rem' }}>
                  Refunds & Adjustments
                </NavLink>
                <NavLink to="/dashboard/reports/financial/revenue-analysis" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 48, fontWeight: 400, fontSize: '0.9rem' }}>
                  Revenue by Course / Batch
                </NavLink>
              </>
            )}

            <div
              className="sidebar-link"
              style={{ fontWeight: 500, paddingLeft: 28, fontSize: '0.95rem', cursor: 'pointer', display: 'flex', alignItems: 'center', marginTop: '4px' }}
              onClick={() => setFacultyReportsOpen((open) => !open)}
            >
              Faculty Reports
            </div>
            {facultyReportsOpen && (
              <>
                <NavLink to="/dashboard/reports/faculty/teaching-load" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 48, fontWeight: 400, fontSize: '0.9rem' }}>
                  Teaching Load
                </NavLink>
                <NavLink to="/dashboard/reports/faculty/performance-correlation" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 48, fontWeight: 400, fontSize: '0.9rem' }}>
                  Performance Correlation
                </NavLink>
                <NavLink to="/dashboard/reports/faculty/feedback-summary" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 48, fontWeight: 400, fontSize: '0.9rem' }}>
                  Faculty Feedback Summary
                </NavLink>
                <NavLink to="/dashboard/reports/faculty/activity-log" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 48, fontWeight: 400, fontSize: '0.9rem' }}>
                  Activity Log
                </NavLink>
              </>
            )}

            <div
              className="sidebar-link"
              style={{ fontWeight: 500, paddingLeft: 28, fontSize: '0.95rem', cursor: 'pointer', display: 'flex', alignItems: 'center', marginTop: '4px' }}
              onClick={() => setEnquiryReportsOpen((open) => !open)}
            >
              Enquiry Reports
            </div>
            {enquiryReportsOpen && (
              <>
                <NavLink to="/dashboard/reports/enquiry/lead-funnel" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 48, fontWeight: 400, fontSize: '0.9rem' }}>
                  Lead Funnel Report
                </NavLink>
                <NavLink to="/dashboard/reports/enquiry/source-analysis" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 48, fontWeight: 400, fontSize: '0.9rem' }}>
                  Source Analysis
                </NavLink>
                <NavLink to="/dashboard/reports/enquiry/follow-up-effectiveness" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 48, fontWeight: 400, fontSize: '0.9rem' }}>
                  Follow-up Effectiveness
                </NavLink>
              </>
            )}

            <div
              className="sidebar-link"
              style={{ fontWeight: 500, paddingLeft: 28, fontSize: '0.95rem', cursor: 'pointer', display: 'flex', alignItems: 'center', marginTop: '4px' }}
              onClick={() => setCommunicationReportsOpen((open) => !open)}
            >
              Communication Logs
            </div>
            {communicationReportsOpen && (
              <>
                <NavLink to="/dashboard/reports/communication/message-delivery" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 48, fontWeight: 400, fontSize: '0.9rem' }}>
                  Message Delivery & Read Rates
                </NavLink>
                <NavLink to="/dashboard/reports/communication/notification-engagement" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 48, fontWeight: 400, fontSize: '0.9rem' }}>
                  Notification Engagement
                </NavLink>
              </>
            )}

            <div
              className="sidebar-link"
              style={{ fontWeight: 500, paddingLeft: 28, fontSize: '0.95rem', cursor: 'pointer', display: 'flex', alignItems: 'center', marginTop: '4px' }}
              onClick={() => setCustomReportsOpen((open) => !open)}
            >
              Custom Reports
            </div>
            {customReportsOpen && (
              <>
                <NavLink to="/dashboard/reports/custom/report-builder" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 48, fontWeight: 400, fontSize: '0.9rem' }}>
                  Report Builder
                </NavLink>
                <NavLink to="/dashboard/reports/custom/saved-reports" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 48, fontWeight: 400, fontSize: '0.9rem' }}>
                  Saved Reports
                </NavLink>
              </>
            )}

            <div
              className="sidebar-link"
              style={{ fontWeight: 500, paddingLeft: 28, fontSize: '0.95rem', cursor: 'pointer', display: 'flex', alignItems: 'center', marginTop: '4px' }}
              onClick={() => setComplianceReportsOpen((open) => !open)}
            >
              Audit Reports
            </div>
            {complianceReportsOpen && (
              <>
                <NavLink to="/dashboard/reports/compliance/audit-trail" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 48, fontWeight: 400, fontSize: '0.9rem' }}>
                  Audit Trail Summary
                </NavLink>
                <NavLink to="/dashboard/reports/compliance/document-verification" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 48, fontWeight: 400, fontSize: '0.9rem' }}>
                  Document Verification Status
                </NavLink>
              </>
            )}

            <div
              className="sidebar-link"
              style={{ fontWeight: 500, paddingLeft: 28, fontSize: '0.95rem', cursor: 'pointer', display: 'flex', alignItems: 'center', marginTop: '4px' }}
              onClick={() => setFeedbackReportsOpen((open) => !open)}
            >
              Feedback
            </div>
            {feedbackReportsOpen && (
              <>
                <NavLink to="/dashboard/reports/feedback/course-feedback" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 48, fontWeight: 400, fontSize: '0.9rem' }}>
                  Course Feedback Report
                </NavLink>
                <NavLink to="/dashboard/reports/feedback/satisfaction-nps" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 48, fontWeight: 400, fontSize: '0.9rem' }}>
                  Satisfaction / NPS Report
                </NavLink>
              </>
            )}

            <div
              className="sidebar-link"
              style={{ fontWeight: 500, paddingLeft: 28, fontSize: '0.95rem', cursor: 'pointer', display: 'flex', alignItems: 'center', marginTop: '4px' }}
              onClick={() => setCertificatesReportsOpen((open) => !open)}
            >
              Certificates
            </div>
            {certificatesReportsOpen && (
              <>
                <NavLink to="/dashboard/reports/certificates/issued-summary" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 48, fontWeight: 400, fontSize: '0.9rem' }}>
                  Issued Certificates Summary
                </NavLink>
                <NavLink to="/dashboard/reports/certificates/completion-rates" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 48, fontWeight: 400, fontSize: '0.9rem' }}>
                  Pending & Completion Rates
                </NavLink>
              </>
            )}
          </>
        )}
        <div
          className={isResultsActive ? 'sidebar-link active' : 'sidebar-link'}
          style={{ fontWeight: 600, margin: '8px 0 0 0', paddingLeft: 2, fontSize: '0.97rem', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
          onClick={() => setResultsOpen((open) => !open)}
        >
          <span className="sidebar-icon">📊</span> Results
        </div>
        {resultsOpen && (
          <>
            <NavLink to="/dashboard/results/manage-exams" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 28, fontWeight: 400 }}>
              Manage Exams
            </NavLink>
            <NavLink to="/dashboard/results/create-exam" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 28, fontWeight: 400 }}>
              Create Exam
            </NavLink>
            <NavLink to="/dashboard/results/enter-upload-marks" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 28, fontWeight: 400 }}>
              Enter / Upload Marks
            </NavLink>
            <NavLink to="/dashboard/results/publish-results" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 28, fontWeight: 400 }}>
              Publish Results
            </NavLink>
            <NavLink to="/dashboard/results/view-results" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 28, fontWeight: 400 }}>
              View Results
            </NavLink>
            <NavLink to="/dashboard/results/merit-rank-list" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 28, fontWeight: 400 }}>
              Merit & Rank List
            </NavLink>
            <NavLink to="/dashboard/results/subject-wise-analysis" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 28, fontWeight: 400 }}>
              Subject-wise Analysis
            </NavLink>
            <NavLink to="/dashboard/results/student-report-card" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 28, fontWeight: 400 }}>
              Student Report Card
            </NavLink>
            <NavLink to="/dashboard/results/batch-result-summary" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 28, fontWeight: 400 }}>
              Batch Result Summary
            </NavLink>
            <NavLink to="/dashboard/results/certificates" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 28, fontWeight: 400 }}>
              Certificates
            </NavLink>
          </>
        )}
        <a className="sidebar-link"><span className="sidebar-icon">🛠️</span> Field Maintenance</a>
        <div
          className={isSettingsActive ? 'sidebar-link active' : 'sidebar-link'}
          style={{ fontWeight: 600, margin: '8px 0 0 0', paddingLeft: 2, fontSize: '0.97rem', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
          onClick={() => setSettingsOpen((open) => !open)}
        >
          <span className="sidebar-icon">⚙️</span> Settings
        </div>
        {settingsOpen && (
          <>
            <div
              className="sidebar-link"
              style={{ fontWeight: 500, paddingLeft: 28, fontSize: '0.95rem', cursor: 'pointer', display: 'flex', alignItems: 'center', marginTop: '4px' }}
              onClick={() => setAccessSettingsOpen((open) => !open)}
            >
              Access
            </div>
            {accessSettingsOpen && (
              <>
                <NavLink to="/dashboard/settings/access/users" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 48, fontWeight: 400, fontSize: '0.9rem' }}>
                  Users
                </NavLink>
                <NavLink to="/dashboard/settings/access/roles-permissions" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 48, fontWeight: 400, fontSize: '0.9rem' }}>
                  Roles & Permissions
                </NavLink>
                <NavLink to="/dashboard/settings/access/authentication" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 48, fontWeight: 400, fontSize: '0.9rem' }}>
                  Authentication (OTP / SSO / Password policies)
                </NavLink>
              </>
            )}

            <div
              className="sidebar-link"
              style={{ fontWeight: 500, paddingLeft: 28, fontSize: '0.95rem', cursor: 'pointer', display: 'flex', alignItems: 'center', marginTop: '4px' }}
              onClick={() => setSystemSettingsOpen((open) => !open)}
            >
              System
            </div>
            {systemSettingsOpen && (
              <>
                <NavLink to="/dashboard/settings/system/general" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 48, fontWeight: 400, fontSize: '0.9rem' }}>
                  General (institute info, timezone, session/year)
                </NavLink>
                <NavLink to="/dashboard/settings/system/branding" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 48, fontWeight: 400, fontSize: '0.9rem' }}>
                  Branding (logo, favicon, themes, custom CSS)
                </NavLink>
                <NavLink to="/dashboard/settings/system/localization" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 48, fontWeight: 400, fontSize: '0.9rem' }}>
                  Localization (language, date/number formats)
                </NavLink>
                <NavLink to="/dashboard/settings/system/academic-calendar" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 48, fontWeight: 400, fontSize: '0.9rem' }}>
                  Academic Calendar
                </NavLink>
              </>
            )}

            <div
              className="sidebar-link"
              style={{ fontWeight: 500, paddingLeft: 28, fontSize: '0.95rem', cursor: 'pointer', display: 'flex', alignItems: 'center', marginTop: '4px' }}
              onClick={() => setResultsPromotionSettingsOpen((open) => !open)}
            >
              Results & Promotion
            </div>
            {resultsPromotionSettingsOpen && (
              <>
                <NavLink to="/dashboard/settings/results-promotion/grading-scheme" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 48, fontWeight: 400, fontSize: '0.9rem' }}>
                  Grading Scheme
                </NavLink>
                <NavLink to="/dashboard/settings/results-promotion/weightages" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 48, fontWeight: 400, fontSize: '0.9rem' }}>
                  Weightages (internal / exam / assignment split)
                </NavLink>
                <NavLink to="/dashboard/settings/results-promotion/promotion-rules" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 48, fontWeight: 400, fontSize: '0.9rem' }}>
                  Promotion Rules
                </NavLink>
              </>
            )}

            <div
              className="sidebar-link"
              style={{ fontWeight: 500, paddingLeft: 28, fontSize: '0.95rem', cursor: 'pointer', display: 'flex', alignItems: 'center', marginTop: '4px' }}
              onClick={() => setCommunicationSettingsOpen((open) => !open)}
            >
              Communication
            </div>
            {communicationSettingsOpen && (
              <>
                <NavLink to="/dashboard/settings/communication/email-templates" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 48, fontWeight: 400, fontSize: '0.9rem' }}>
                  Email Templates
                </NavLink>
                <NavLink to="/dashboard/settings/communication/sms-templates" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 48, fontWeight: 400, fontSize: '0.9rem' }}>
                  SMS Templates
                </NavLink>
                <NavLink to="/dashboard/settings/communication/notification-rules" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 48, fontWeight: 400, fontSize: '0.9rem' }}>
                  Notification Rules
                </NavLink>
              </>
            )}

            <div
              className="sidebar-link"
              style={{ fontWeight: 500, paddingLeft: 28, fontSize: '0.95rem', cursor: 'pointer', display: 'flex', alignItems: 'center', marginTop: '4px' }}
              onClick={() => setIntegrationsSettingsOpen((open) => !open)}
            >
              Integrations
            </div>
            {integrationsSettingsOpen && (
              <>
                <NavLink to="/dashboard/settings/integrations/payment-gateway" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 48, fontWeight: 400, fontSize: '0.9rem' }}>
                  Payment Gateway
                </NavLink>
                <NavLink to="/dashboard/settings/integrations/api-webhooks" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 48, fontWeight: 400, fontSize: '0.9rem' }}>
                  API & Webhooks (third-party services: SMS, email, analytics, etc.)
                </NavLink>
                <NavLink to="/dashboard/settings/integrations/lms-sync" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 48, fontWeight: 400, fontSize: '0.9rem' }}>
                  LMS Sync (agar applicable ho)
                </NavLink>
              </>
            )}


            {reportsExportSettingsOpen && (
              <>
                <NavLink to="/dashboard/settings/reports-export/report-scheduler" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 48, fontWeight: 400, fontSize: '0.9rem' }}>
                  Report Scheduler
                </NavLink>
                <NavLink to="/dashboard/settings/reports-export/export-defaults" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 48, fontWeight: 400, fontSize: '0.9rem' }}>
                  Export Defaults
                </NavLink>
              </>
            )}

            <div
              className="sidebar-link"
              style={{ fontWeight: 500, paddingLeft: 28, fontSize: '0.95rem', cursor: 'pointer', display: 'flex', alignItems: 'center', marginTop: '4px' }}
              onClick={() => setSecurityAuditSettingsOpen((open) => !open)}
            >
              Security & Audit
            </div>
            {securityAuditSettingsOpen && (
              <>
                <NavLink to="/dashboard/settings/security/audit-log" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 48, fontWeight: 400, fontSize: '0.9rem' }}>
                  Audit Log
                </NavLink>
                <NavLink to="/dashboard/settings/security/password-policy" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 48, fontWeight: 400, fontSize: '0.9rem' }}>
                  Password Policy
                </NavLink>
                <NavLink to="/dashboard/settings/security/sessions" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 48, fontWeight: 400, fontSize: '0.9rem' }}>
                  Sessions (active sessions / forced logout / IP management)
                </NavLink>
              </>
            )}

            <div
              className="sidebar-link"
              style={{ fontWeight: 500, paddingLeft: 28, fontSize: '0.95rem', cursor: 'pointer', display: 'flex', alignItems: 'center', marginTop: '4px' }}
              onClick={() => setDataManagementSettingsOpen((open) => !open)}
            >
              Data Management
            </div>
            {dataManagementSettingsOpen && (
              <>
                <NavLink to="/dashboard/settings/data-management/backups" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 48, fontWeight: 400, fontSize: '0.9rem' }}>
                  Backups
                </NavLink>
                <NavLink to="/dashboard/settings/data-management/archive-cleanup" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 48, fontWeight: 400, fontSize: '0.9rem' }}>
                  Data Archive
                </NavLink>
              </>
            )}

            <div
              className="sidebar-link"
              style={{ fontWeight: 500, paddingLeft: 28, fontSize: '0.95rem', cursor: 'pointer', display: 'flex', alignItems: 'center', marginTop: '4px' }}
              onClick={() => setCustomizationSettingsOpen((open) => !open)}
            >
              Customization
            </div>
            {customizationSettingsOpen && (
              <>
                <NavLink to="/dashboard/settings/customization/custom-fields" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 48, fontWeight: 400, fontSize: '0.9rem' }}>
                  Custom Fields
                </NavLink>
                <NavLink to="/dashboard/settings/customization/tags-labels" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} style={{ paddingLeft: 48, fontWeight: 400, fontSize: '0.9rem' }}>
                  Tags & Labels
                </NavLink>
              </>
            )}
          </>
        )}
      </nav>
    </aside>
  );
};

export default Sidebar; 