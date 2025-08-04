import React from 'react';

const Users: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Users Management</h1>
        <p>Manage system users, create new accounts, and control user access</p>
      </div>
      
      <div className="content-section">
        <div className="section-card">
          <h2>User Management</h2>
          <p>Add, edit, and manage user accounts in the system.</p>
          
          <div className="action-buttons">
            <button className="btn btn-primary">Add New User</button>
            <button className="btn btn-secondary">Import Users</button>
            <button className="btn btn-secondary">Export Users</button>
          </div>
          
          <div className="users-table">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Last Login</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={6} className="text-center">
                    No users found. Click "Add New User" to get started.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
