import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import AccountManagement from './AccountManagement';
import DashboardHome from './DashboardHome';
import ViewAccount from './ViewAccount';
import Student from './pages/student/Student';
import AddCourse from './pages/course/AddCourse';
import CourseList from './pages/course/CourseList';
import SubjectMapping from './pages/course/SubjectMapping';
import SyllabusManagement from './pages/course/SyllabusManagement';
import FacultyAssignment from './pages/course/FacultyAssignment';
import CourseMaterials from './pages/course/CourseMaterials';
import NewEnquiry from './pages/enquiry/NewEnquiry';
import FollowupTracker from './pages/enquiry/FollowupTracker';
import FeeStructure from './pages/financial/FeeStructure';
import FeeCollection from './pages/financial/FeeCollection';
import PendingDues from './pages/financial/PendingDues';
import Refunds from './pages/financial/Refunds';
import Expenses from './pages/financial/Expenses';
import AddFaculty from './pages/faculty/AddFaculty';
import FacultyList from './pages/faculty/FacultyList';
import Timetable from './pages/faculty/Timetable';
import SubjectAssignment from './pages/faculty/SubjectAssignment';
import Attendance from './pages/faculty/Attendance';
import Performance from './pages/faculty/Performance';
import Payments from './pages/faculty/Payments';

// Reports Components
import ReportsDashboard from './pages/reports/ReportsDashboard';
import EnrollmentTrends from './pages/reports/student/EnrollmentTrends';
import AttendanceSummary from './pages/reports/student/AttendanceSummary';
import ProgressSnapshot from './pages/reports/student/ProgressSnapshot';
import StudentEngagement from './pages/reports/student/StudentEngagement';
import AtRiskStudents from './pages/reports/student/AtRiskStudents';
import CourseEffectiveness from './pages/reports/academic/CourseEffectiveness';
import BatchComparison from './pages/reports/academic/BatchComparison';
import TestResultsSummary from './pages/reports/academic/TestResultsSummary';
import AssignmentCompliance from './pages/reports/academic/AssignmentCompliance';
import FeeCollectionSummary from './pages/reports/financial/FeeCollectionSummary';
import OutstandingDues from './pages/reports/financial/OutstandingDues';
import DiscountsScholarships from './pages/reports/financial/DiscountsScholarships';
import RefundsAdjustments from './pages/reports/financial/RefundsAdjustments';
import RevenueByCourseBatch from './pages/reports/financial/RevenueByCourseBatch';
import ErrorBoundary from './components/ErrorBoundary';

// Settings System Components
import General from './pages/settings/system/General';
import Branding from './pages/settings/system/Branding';
import Localization from './pages/settings/system/Localization';
import AcademicCalendar from './pages/settings/system/AcademicCalendar';
import EmailTemplates from './pages/settings/communication/EmailTemplates';
import SmsTemplates from './pages/settings/communication/SmsTemplates';
import NotificationRules from './pages/settings/communication/NotificationRules';
import AuditLog from './pages/settings/security/AuditLog';
import PasswordPolicy from './pages/settings/security/PasswordPolicy';
import Sessions from './pages/settings/security/Sessions';
import Backups from './pages/settings/data-management/Backups';
import DataArchive from './pages/settings/data-management/DataArchive';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path="account-management" element={<Navigate to="account-management/create" replace />} />
          <Route path="account-management/create" element={<AccountManagement />} />
          <Route path="account-management/view" element={<ViewAccount />} />
          <Route path="student" element={<Student />} />
          <Route path="course" element={<Navigate to="course/list" replace />} />
          <Route path="course/add" element={<AddCourse />} />
          <Route path="course/list" element={<CourseList />} />
          <Route path="course/subject-mapping" element={<SubjectMapping />} />
          <Route path="course/syllabus" element={<SyllabusManagement />} />
          <Route path="course/faculty-assignment" element={<FacultyAssignment />} />
          <Route path="course/materials" element={<CourseMaterials />} />
          <Route path="enquiry/new" element={<NewEnquiry />} />
          <Route path="enquiry/followup" element={<FollowupTracker />} />
          <Route path="financial/fee-structure" element={<FeeStructure />} />
          <Route path="financial/fee-collection" element={<FeeCollection />} />
          <Route path="financial/pending-dues" element={<PendingDues />} />
          <Route path="financial/refunds" element={<Refunds />} />
          <Route path="financial/expenses" element={<Expenses />} />
          <Route path="faculty/add" element={<AddFaculty />} />
          <Route path="faculty/list" element={<FacultyList />} />
          <Route path="faculty/timetable" element={<Timetable />} />
          <Route path="faculty/subject-assignment" element={<SubjectAssignment />} />
          <Route path="faculty/attendance" element={<Attendance />} />
          <Route path="faculty/performance" element={<Performance />} />
          <Route path="faculty/payments" element={<Payments />} />
          
          {/* Reports Routes */}
          <Route path="reports/dashboard" element={<ReportsDashboard />} />
          <Route path="reports/student/enrollment-trends" element={<EnrollmentTrends />} />
          <Route path="reports/student/attendance-summary" element={<AttendanceSummary />} />
          <Route path="reports/student/progress-snapshot" element={<ProgressSnapshot />} />
          <Route path="reports/student/engagement" element={<StudentEngagement />} />
          <Route path="reports/student/at-risk" element={<AtRiskStudents />} />
          <Route path="reports/academic/course-effectiveness" element={<CourseEffectiveness />} />
          <Route path="reports/academic/batch-comparison" element={<BatchComparison />} />
          <Route path="reports/academic/test-results" element={<TestResultsSummary />} />
          <Route path="reports/academic/assignment-compliance" element={<AssignmentCompliance />} />
          <Route path="reports/financial/fee-collection" element={<FeeCollectionSummary />} />
          <Route path="reports/financial/outstanding-dues" element={<ErrorBoundary><OutstandingDues /></ErrorBoundary>} />
          <Route path="reports/financial/discounts-scholarships" element={<ErrorBoundary><DiscountsScholarships /></ErrorBoundary>} />
          <Route path="reports/financial/refunds-adjustments" element={<ErrorBoundary><RefundsAdjustments /></ErrorBoundary>} />
          <Route path="reports/financial/revenue-analysis" element={<ErrorBoundary><RevenueByCourseBatch /></ErrorBoundary>} />
          
          {/* Settings System Routes */}
          <Route path="settings/system/general" element={<General />} />
          <Route path="settings/system/branding" element={<Branding />} />
          <Route path="settings/system/localization" element={<Localization />} />
          <Route path="settings/system/academic-calendar" element={<AcademicCalendar />} />
          <Route path="settings/communication/email-templates" element={<EmailTemplates />} />
          <Route path="settings/communication/sms-templates" element={<SmsTemplates />} />
          <Route path="settings/communication/notification-rules" element={<NotificationRules />} />
          <Route path="settings/security/audit-log" element={<AuditLog />} />
          <Route path="settings/security/password-policy" element={<PasswordPolicy />} />
          <Route path="settings/security/sessions" element={<Sessions />} />
          <Route path="settings/data-management/backups" element={<Backups />} />
          <Route path="settings/data-management/data-archive" element={<DataArchive />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
