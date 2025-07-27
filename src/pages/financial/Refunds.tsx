import React, { useState } from 'react';
import './Refunds.css';

const Refunds: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedReason, setSelectedReason] = useState('');

  const refundsData = [
    {
      id: 1,
      studentName: 'Ramesh Kumar',
      rollNo: 'SVM250001',
      mobileNo: '98765xxxxx',
      course: 'NEET',
      class: '12th Standard',
      refundAmount: 5000,
      reason: 'Dropout',
      refundDate: '2025-01-10',
      paymentMode: 'Bank Transfer',
      status: 'Processed',
      remarks: 'Student dropped out after 1 month'
    },
    {
      id: 2,
      studentName: 'Priya Singh',
      rollNo: 'SVM250002',
      mobileNo: '98230xxxxx',
      course: 'JEE',
      class: '11th Standard',
      refundAmount: 3000,
      reason: 'Class Cancellation',
      refundDate: '2025-01-08',
      paymentMode: 'Cash',
      status: 'Completed',
      remarks: 'Class cancelled due to faculty unavailability'
    },
    {
      id: 3,
      studentName: 'Amit Sharma',
      rollNo: 'SVM250003',
      mobileNo: '98111xxxxx',
      course: 'NEET',
      class: '12th Standard',
      refundAmount: 2000,
      reason: 'Fee Adjustment',
      refundDate: '2025-01-05',
      paymentMode: 'UPI',
      status: 'Completed',
      remarks: 'Adjustment for extra charges'
    },
    {
      id: 4,
      studentName: 'Sneha Patel',
      rollNo: 'SVM250004',
      mobileNo: '98712xxxxx',
      course: 'JEE',
      class: '11th Standard',
      refundAmount: 15000,
      reason: 'Course Change',
      refundDate: '2025-01-03',
      paymentMode: 'Cheque',
      status: 'Pending',
      remarks: 'Student changed to different course'
    },
    {
      id: 5,
      studentName: 'Vikas Gupta',
      rollNo: 'SVM250005',
      mobileNo: '98222xxxxx',
      course: 'NEET',
      class: '12th Standard',
      refundAmount: 8000,
      reason: 'Medical Issue',
      refundDate: '2025-01-01',
      paymentMode: 'Bank Transfer',
      status: 'Processed',
      remarks: 'Student has medical condition'
    }
  ];

  const reasons = ['Dropout', 'Class Cancellation', 'Fee Adjustment', 'Course Change', 'Medical Issue', 'Other'];
  const statuses = ['Pending', 'Processed', 'Completed', 'Rejected'];

  const totalRefundAmount = refundsData.reduce((sum, record) => sum + record.refundAmount, 0);
  const pendingRefunds = refundsData.filter(record => record.status === 'Pending').length;
  const completedRefunds = refundsData.filter(record => record.status === 'Completed').length;

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'status-badge completed';
      case 'Pending':
        return 'status-badge pending';
      case 'Processed':
        return 'status-badge processed';
      default:
        return 'status-badge rejected';
    }
  };

  return (
    <div className="refunds-container">
      <div className="refunds-header">
        <h1 className="refunds-title">Refunds & Adjustments</h1>
        <p className="refunds-subtitle">Manage student refunds and fee adjustments</p>
      </div>

      {/* Summary Cards */}
      <div className="summary-cards">
        <div className="summary-card">
          <div className="summary-label">Total Refund Amount</div>
          <div className="summary-value red">₹{totalRefundAmount.toLocaleString()}</div>
        </div>
        <div className="summary-card">
          <div className="summary-label">Total Refunds</div>
          <div className="summary-value gray">{refundsData.length}</div>
        </div>
        <div className="summary-card">
          <div className="summary-label">Pending Refunds</div>
          <div className="summary-value orange">{pendingRefunds}</div>
        </div>
        <div className="summary-card">
          <div className="summary-label">Completed Refunds</div>
          <div className="summary-value green">{completedRefunds}</div>
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
            <label className="search-label">Refund Reason</label>
            <select
              value={selectedReason}
              onChange={(e) => setSelectedReason(e.target.value)}
              className="filter-select"
            >
              <option value="">All Reasons</option>
              {reasons.map(reason => (
                <option key={reason} value={reason}>{reason}</option>
              ))}
            </select>
          </div>
          <div className="search-group">
            <label className="search-label">Status</label>
            <select className="filter-select">
              <option value="">All Status</option>
              {statuses.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </div>
          <div className="search-group">
            <button className="new-refund-button">
              New Refund Request
            </button>
          </div>
        </div>
      </div>

      {/* Refunds Table */}
      <div className="table-container">
        <div className="table-header">
          <h2 className="table-title">Refund Records</h2>
        </div>
        <div className="table-wrapper">
          <table className="refunds-table">
            <thead>
              <tr>
                <th>Student Details</th>
                <th>Course/Class</th>
                <th>Refund Details</th>
                <th>Payment Info</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {refundsData.map((record) => (
                <tr key={record.id}>
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
                    <div className="refund-details">
                      <div className="refund-amount">₹{record.refundAmount.toLocaleString()}</div>
                      <div className="refund-reason">{record.reason}</div>
                      <div className="refund-date">{record.refundDate}</div>
                    </div>
                  </td>
                  <td>
                    <div className="payment-mode">{record.paymentMode}</div>
                  </td>
                  <td>
                    <div>
                      <span className={getStatusClass(record.status)}>
                        {record.status}
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="actions-cell">
                      <button className="action-button view-button">View</button>
                      <button className="action-button process-button">Process</button>
                      <button className="action-button edit-button">Edit</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="recent-activity">
        <h3 className="activity-title">Recent Refund Activity</h3>
        <div className="activity-list">
          <div className="activity-item">
            <div className="activity-content">
              <div className="activity-text">Refund processed for Ramesh Kumar</div>
              <div className="activity-details">₹5,000 - Bank Transfer</div>
            </div>
            <div className="activity-time">2 hours ago</div>
          </div>
          <div className="activity-item">
            <div className="activity-content">
              <div className="activity-text">New refund request from Sneha Patel</div>
              <div className="activity-details">₹15,000 - Course Change</div>
            </div>
            <div className="activity-time">1 day ago</div>
          </div>
          <div className="activity-item">
            <div className="activity-content">
              <div className="activity-text">Refund completed for Amit Sharma</div>
              <div className="activity-details">₹2,000 - UPI</div>
            </div>
            <div className="activity-time">2 days ago</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Refunds; 