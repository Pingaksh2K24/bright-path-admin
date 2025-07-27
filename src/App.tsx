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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
