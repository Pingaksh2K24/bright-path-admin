import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import AccountManagement from './AccountManagement';
import DashboardHome from './DashboardHome';
import ViewAccount from './ViewAccount';

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
