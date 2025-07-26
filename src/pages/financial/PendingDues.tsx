import React, { useState } from 'react';
import './PendingDues.css';

const PendingDues: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedClass] = useState('');
  const [reminderEnabled, setReminderEnabled] = useState(true);

  const pendingDuesData = [
    {
      id: 1,
      studentName: 'Ramesh Kumar',
      rollNo: 'SVM250001',
      mobileNo: '98765xxxxx',
      course: 'NEET',
      class: '12th Standard',
      totalFee: 20000,
      paidAmount: 15000,
      dueAmount: 5000,
      lastPaidDate: '2025-01-15',
      dueDate: '2025-02-15',
      daysOverdue: 0,
      reminderSent: 2
    },
    {
      id: 2,
      studentName: 'Amit Sharma',
      rollNo: 'SVM250003',
      mobileNo: '98111xxxxx',
      course: 'NEET',
      class: '12th Standard',
      totalFee: 20000,
      paidAmount: 10000,
      dueAmount: 10000,
      lastPaidDate: '2025-01-13',
      dueDate: '2025-02-13',
      daysOverdue: 2,
      reminderSent: 3
    },
    {
      id: 3,
      studentName: 'Vikas Gupta',
      rollNo: 'SVM250005',
      mobileNo: '98222xxxxx',
      course: 'NEET',
      class: '12th Standard',
      totalFee: 20000,
      paidAmount: 0,
      dueAmount: 20000,
      lastPaidDate: '-',
      dueDate: '2025-01-30',
      daysOverdue: 15,
      reminderSent: 5
    },
    {
      id: 4,
      studentName: 'Deepak Singh',
      rollNo: 'SVM250006',
      mobileNo: '98333xxxxx',
      course: 'JEE',
      class: '11th Standard',
      totalFee: 21000,
      paidAmount: 5000,
      dueAmount: 16000,
      lastPaidDate: '2025-01-10',
      dueDate: '2025-02-10',
      daysOverdue: 5,
      reminderSent: 4
    },
    {
      id: 5,
      studentName: 'Kiran Mehta',
      rollNo: 'SVM250007',
      mobileNo: '98444xxxxx',
      course: 'JEE',
      class: '11th Standard',
      totalFee: 21000,
      paidAmount: 0,
      dueAmount: 21000,
      lastPaidDate: '-',
      dueDate: '2025-01-25',
      daysOverdue: 20,
      reminderSent: 6
    },
    {
      id: 6,
      studentName: 'Sunil Patel',
      rollNo: 'SVM250008',
      mobileNo: '98555xxxxx',
      course: 'NEET',
      class: '11th Standard',
      totalFee: 20000,
      paidAmount: 8000,
      dueAmount: 12000,
      lastPaidDate: '2025-01-08',
      dueDate: '2025-02-08',
      daysOverdue: 7,
      reminderSent: 3
    }
  ];

  const courses = ['NEET', 'JEE', 'Foundation', 'Competitive'];

  const totalDueAmount = pendingDuesData.reduce((sum, record) => sum + record.dueAmount, 0);
  const totalStudents = pendingDuesData.length;
  const overdueStudents = pendingDuesData.filter(record => record.daysOverdue > 0).length;

  return (
    <div className="pending-dues-container">
      <div className="pending-dues-header">
        <h1 className="pending-dues-title">Pending Dues</h1>
        <p className="pending-dues-subtitle">List of Students with Outstanding Fees</p>
      </div>

      {/* Summary Cards */}
      <div className="summary-cards">
        <div className="summary-card">
          <div className="summary-label">Total Due Amount</div>
          <div className="summary-value red">₹{totalDueAmount.toLocaleString()}</div>
        </div>
        <div className="summary-card">
          <div className="summary-label">Total Students</div>
          <div className="summary-value gray">{totalStudents}</div>
        </div>
        <div className="summary-card">
          <div className="summary-label">Overdue Students</div>
          <div className="summary-value orange">{overdueStudents}</div>
        </div>
        <div className="summary-card">
          <div className="summary-label">Auto Reminder</div>
          <div className="reminder-toggle">
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={reminderEnabled}
                onChange={(e) => setReminderEnabled(e.target.checked)}
                className="toggle-input"
              />
              <div className="toggle-slider"></div>
            </label>
            <span className="toggle-label">{reminderEnabled ? 'Enabled' : 'Disabled'}</span>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="search-filters-section">
        <div className="search-filters-grid">
          <div className="search-group">
            <label className="search-label">Search Student</label>
            <input
              type="text"
              placeholder="Name / Roll No / Mobile"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="search-group">
            <label className="search-label">Course</label>
            <select
              value={selectedCourse}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="filter-select"
            >
              <option value="">All Courses</option>
              {courses.map(course => (
                <option key={course} value={course}>{course}</option>
              ))}
            </select>
          </div>
          <div className="search-group">
            <label className="search-label">Due Status</label>
            <select className="filter-select">
              <option value="">All Status</option>
              <option value="overdue">Overdue</option>
              <option value="due-soon">Due Soon</option>
              <option value="not-due">Not Due</option>
            </select>
          </div>
          <div className="action-buttons">
            <button className="reminder-button">
              Send Reminder
            </button>
            <button className="collect-button">
              Collect Payment
            </button>
          </div>
        </div>
      </div>

      {/* Pending Dues Table */}
      <div className="table-container">
        <div className="table-header">
          <h2 className="table-title">Outstanding Fee Details</h2>
        </div>
        <div className="table-wrapper">
          <table className="pending-dues-table">
            <thead>
              <tr>
                <th>Student Details</th>
                <th>Course/Class</th>
                <th>Fee Details</th>
                <th>Due Information</th>
                <th>Reminder Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {pendingDuesData.map((record) => (
                <tr key={record.id} className={record.daysOverdue > 0 ? 'overdue' : ''}>
                  <td>
                    <div className="student-details">
                      <div className="student-name">{record.studentName}</div>
                      <div className="student-info">Roll No: {record.rollNo}</div>
                      <div className="student-info">{record.mobileNo}</div>
                    </div>
                  </td>
                  <td>
                    <div className="course-info">
                      <div className="course-name">{record.course}</div>
                      <div className="class-name">{record.class}</div>
                    </div>
                  </td>
                  <td>
                    <div className="fee-details">
                      <div className="fee-total">Total: ₹{record.totalFee.toLocaleString()}</div>
                      <div className="fee-paid">Paid: ₹{record.paidAmount.toLocaleString()}</div>
                      <div className="fee-due">Due: ₹{record.dueAmount.toLocaleString()}</div>
                    </div>
                  </td>
                  <td>
                    <div className="due-info">
                      <div className="due-date">Due Date: {record.dueDate}</div>
                      <div className="last-paid">Last Paid: {record.lastPaidDate}</div>
                      {record.daysOverdue > 0 && (
                        <div className="days-overdue">
                          {record.daysOverdue} days overdue
                        </div>
                      )}
                    </div>
                  </td>
                  <td>
                    <div className="reminder-status">
                      <div className="reminder-count">Sent: {record.reminderSent} times</div>
                      <div className="reminder-last">Last: Today</div>
                    </div>
                  </td>
                  <td>
                    <div className="actions-cell">
                      <button className="action-button sms-button">Send SMS</button>
                      <button className="action-button email-button">Send Email</button>
                      <button className="action-button call-button">Call</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PendingDues; 