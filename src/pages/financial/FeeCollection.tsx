import React, { useState } from 'react';
import './FeeCollection.css';

const FeeCollection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');

  const feeCollectionData = [
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
      paymentMode: 'UPI',
      paymentDate: '2025-01-15',
      receiptNo: 'RCP001',
      remarks: 'Partial payment - 2nd installment'
    },
    {
      id: 2,
      studentName: 'Priya Singh',
      rollNo: 'SVM250002',
      mobileNo: '98230xxxxx',
      course: 'JEE',
      class: '11th Standard',
      totalFee: 21000,
      paidAmount: 21000,
      dueAmount: 0,
      paymentMode: 'Cash',
      paymentDate: '2025-01-14',
      receiptNo: 'RCP002',
      remarks: 'Full payment received'
    },
    {
      id: 3,
      studentName: 'Amit Sharma',
      rollNo: 'SVM250003',
      mobileNo: '98111xxxxx',
      course: 'NEET',
      class: '12th Standard',
      totalFee: 20000,
      paidAmount: 10000,
      dueAmount: 10000,
      paymentMode: 'Bank Transfer',
      paymentDate: '2025-01-13',
      receiptNo: 'RCP003',
      remarks: '1st installment paid'
    },
    {
      id: 4,
      studentName: 'Sneha Patel',
      rollNo: 'SVM250004',
      mobileNo: '98712xxxxx',
      course: 'JEE',
      class: '11th Standard',
      totalFee: 21000,
      paidAmount: 21000,
      dueAmount: 0,
      paymentMode: 'Cheque',
      paymentDate: '2025-01-12',
      receiptNo: 'RCP004',
      remarks: 'Full payment by cheque'
    },
    {
      id: 5,
      studentName: 'Vikas Gupta',
      rollNo: 'SVM250005',
      mobileNo: '98222xxxxx',
      course: 'NEET',
      class: '12th Standard',
      totalFee: 20000,
      paidAmount: 0,
      dueAmount: 20000,
      paymentMode: '-',
      paymentDate: '-',
      receiptNo: '-',
      remarks: 'Payment pending'
    }
  ];

  const paymentModes = ['Cash', 'UPI', 'Bank Transfer', 'Cheque', 'Online'];

  return (
    <div className="fee-collection-container">
      <div className="fee-collection-header">
        <h1 className="fee-collection-title">Student Fee Collection</h1>
        <p className="fee-collection-subtitle">Manage student fee payments and receipts</p>
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
            <label className="search-label">Payment Status</label>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="filter-select"
            >
              <option value="">All Status</option>
              <option value="paid">Fully Paid</option>
              <option value="partial">Partially Paid</option>
              <option value="pending">Payment Pending</option>
            </select>
          </div>
          <div className="search-group">
            <label className="search-label">Payment Mode</label>
            <select className="filter-select">
              <option value="">All Modes</option>
              {paymentModes.map(mode => (
                <option key={mode} value={mode}>{mode}</option>
              ))}
            </select>
          </div>
          <div className="search-group">
            <button className="collect-fee-button">
              Collect Fee
            </button>
          </div>
        </div>
      </div>

      {/* Fee Collection Table */}
      <div className="table-container">
        <div className="table-header">
          <h2 className="table-title">Fee Collection Records</h2>
          <div className="table-count">
            Total Records: {feeCollectionData.length}
          </div>
        </div>
        <div className="table-wrapper">
          <table className="fee-collection-table">
            <thead>
              <tr>
                <th>Student Details</th>
                <th>Course/Class</th>
                <th>Fee Details</th>
                <th>Payment Info</th>
                <th>Receipt</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {feeCollectionData.map((record) => (
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
                    <div className="fee-details">
                      <div className="fee-total">Total: ₹{record.totalFee.toLocaleString()}</div>
                      <div className="fee-paid">Paid: ₹{record.paidAmount.toLocaleString()}</div>
                      <div className="fee-due">Due: ₹{record.dueAmount.toLocaleString()}</div>
                    </div>
                  </td>
                  <td>
                    <div className="payment-info">
                      <div className="payment-mode">{record.paymentMode}</div>
                      <div className="payment-date">{record.paymentDate}</div>
                    </div>
                  </td>
                  <td>
                    <div className="receipt-number">{record.receiptNo}</div>
                  </td>
                  <td>
                    <div className="actions-cell">
                      <button className="action-button download-button">Download</button>
                      <button className="action-button print-button">Print</button>
                      <button className="action-button edit-button">Edit</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="summary-cards">
        <div className="summary-card">
          <div className="summary-label">Total Fee Collected</div>
          <div className="summary-value green">₹67,000</div>
        </div>
        <div className="summary-card">
          <div className="summary-label">Pending Amount</div>
          <div className="summary-value red">₹35,000</div>
        </div>
        <div className="summary-card">
          <div className="summary-label">Today's Collection</div>
          <div className="summary-value blue">₹15,000</div>
        </div>
        <div className="summary-card">
          <div className="summary-label">Total Students</div>
          <div className="summary-value gray">5</div>
        </div>
      </div>
    </div>
  );
};

export default FeeCollection; 