import React, { useState } from 'react';
import './RefundsAdjustments.css';

interface RefundTransaction {
  id: string;
  studentName: string;
  class: string;
  batch: string;
  transactionType: 'refund' | 'adjustment';
  amount: number;
  reason: string;
  requestDate: string;
  processedDate?: string;
  status: 'pending' | 'approved' | 'processed' | 'rejected';
  approvedBy?: string;
  processedBy?: string;
  originalAmount: number;
  refundMethod: 'bank-transfer' | 'cash' | 'cheque' | 'adjustment';
  referenceNumber?: string;
  auditFlag: boolean;
  notes?: string;
}

interface MonthlyTrend {
  month: string;
  refunds: number;
  adjustments: number;
  totalAmount: number;
}

const RefundsAdjustments: React.FC = () => {
  const [selectedDateRange, setSelectedDateRange] = useState<string>('current-year');
  const [selectedClass, setSelectedClass] = useState<string>('all');
  const [selectedBatch, setSelectedBatch] = useState<string>('all');
  const [selectedRefundReason, setSelectedRefundReason] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  // Mock data
  const mockTransactions: RefundTransaction[] = [
    {
      id: '1',
      studentName: 'Rahul Kumar',
      class: 'Class 12',
      batch: 'Batch A-2024',
      transactionType: 'refund',
      amount: 25000,
      reason: 'Course Withdrawal',
      requestDate: '2024-01-15',
      processedDate: '2024-01-20',
      status: 'processed',
      approvedBy: 'Principal',
      processedBy: 'Finance Manager',
      originalAmount: 120000,
      refundMethod: 'bank-transfer',
      referenceNumber: 'REF001234',
      auditFlag: false,
      notes: 'Student withdrew due to family relocation'
    },
    {
      id: '2',
      studentName: 'Priya Singh',
      class: 'Class 11',
      batch: 'Batch C-2024',
      transactionType: 'adjustment',
      amount: 15000,
      reason: 'Fee Correction',
      requestDate: '2024-02-10',
      processedDate: '2024-02-12',
      status: 'processed',
      approvedBy: 'Academic Head',
      processedBy: 'Accounts Officer',
      originalAmount: 100000,
      refundMethod: 'adjustment',
      auditFlag: false,
      notes: 'Correction for duplicate payment'
    },
    {
      id: '3',
      studentName: 'Amit Patel',
      class: 'Class 12',
      batch: 'Batch B-2024',
      transactionType: 'refund',
      amount: 50000,
      reason: 'Medical Emergency',
      requestDate: '2024-03-05',
      status: 'pending',
      originalAmount: 120000,
      refundMethod: 'bank-transfer',
      auditFlag: true,
      notes: 'High amount refund - requires additional approval'
    },
    {
      id: '4',
      studentName: 'Sneha Gupta',
      class: 'Class 10',
      batch: 'Batch D-2024',
      transactionType: 'refund',
      amount: 8000,
      reason: 'Overpayment',
      requestDate: '2024-03-20',
      processedDate: '2024-03-22',
      status: 'processed',
      approvedBy: 'Finance Manager',
      processedBy: 'Accounts Officer',
      originalAmount: 88000,
      refundMethod: 'cheque',
      referenceNumber: 'CHQ005678',
      auditFlag: false
    },
    {
      id: '5',
      studentName: 'Vikash Yadav',
      class: 'Class 11',
      batch: 'Batch C-2024',
      transactionType: 'adjustment',
      amount: 30000,
      reason: 'Scholarship Adjustment',
      requestDate: '2024-04-01',
      status: 'approved',
      approvedBy: 'Director',
      originalAmount: 100000,
      refundMethod: 'adjustment',
      auditFlag: true,
      notes: 'Merit scholarship retroactive adjustment'
    }
  ];

  const mockMonthlyTrend: MonthlyTrend[] = [
    { month: 'Jan 2024', refunds: 3, adjustments: 1, totalAmount: 45000 },
    { month: 'Feb 2024', refunds: 2, adjustments: 2, totalAmount: 32000 },
    { month: 'Mar 2024', refunds: 4, adjustments: 1, totalAmount: 68000 },
    { month: 'Apr 2024', refunds: 1, adjustments: 3, totalAmount: 55000 },
    { month: 'May 2024', refunds: 2, adjustments: 2, totalAmount: 38000 },
    { month: 'Jun 2024', refunds: 3, adjustments: 1, totalAmount: 42000 }
  ];

  const filteredTransactions = mockTransactions.filter(transaction => {
    return (selectedClass === 'all' || transaction.class === selectedClass) &&
           (selectedBatch === 'all' || transaction.batch === selectedBatch) &&
           (selectedRefundReason === 'all' || transaction.reason === selectedRefundReason) &&
           (selectedStatus === 'all' || transaction.status === selectedStatus);
  });

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'pending';
      case 'approved': return 'approved';
      case 'processed': return 'processed';
      case 'rejected': return 'rejected';
      default: return '';
    }
  };

  const getTransactionTypeColor = (type: string) => {
    return type === 'refund' ? 'refund' : 'adjustment';
  };

  const calculateTotalRefunds = () => {
    return filteredTransactions
      .filter(t => t.transactionType === 'refund')
      .reduce((sum, t) => sum + t.amount, 0);
  };

  const calculateTotalAdjustments = () => {
    return filteredTransactions
      .filter(t => t.transactionType === 'adjustment')
      .reduce((sum, t) => sum + t.amount, 0);
  };

  const calculateRefundPercentage = () => {
    const totalOriginal = filteredTransactions.reduce((sum, t) => sum + t.originalAmount, 0);
    const totalRefunds = calculateTotalRefunds();
    return totalOriginal > 0 ? (totalRefunds / totalOriginal) * 100 : 0;
  };

  const calculateAuditFlags = () => {
    return filteredTransactions.filter(t => t.auditFlag).length;
  };

  const totalRefunds = calculateTotalRefunds();
  const totalAdjustments = calculateTotalAdjustments();
  const refundPercentage = calculateRefundPercentage();
  const auditFlags = calculateAuditFlags();

  return (
    <div className="refunds-adjustments">
      <div className="page-header">
        <h1>💸 Refunds & Adjustments Report</h1>
        <p>Track refund requests and fee adjustments</p>
      </div>

      {/* Filters */}
      <div className="filters-section">
        <div className="filters-grid">
          <div className="filter-group">
            <label>Date Range</label>
            <select value={selectedDateRange} onChange={(e) => setSelectedDateRange(e.target.value)}>
              <option value="current-month">Current Month</option>
              <option value="current-quarter">Current Quarter</option>
              <option value="current-year">Current Year</option>
              <option value="last-year">Last Year</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Class</label>
            <select value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)}>
              <option value="all">All Classes</option>
              <option value="Class 10">Class 10</option>
              <option value="Class 11">Class 11</option>
              <option value="Class 12">Class 12</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Batch</label>
            <select value={selectedBatch} onChange={(e) => setSelectedBatch(e.target.value)}>
              <option value="all">All Batches</option>
              <option value="Batch A-2024">Batch A-2024</option>
              <option value="Batch B-2024">Batch B-2024</option>
              <option value="Batch C-2024">Batch C-2024</option>
              <option value="Batch D-2024">Batch D-2024</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Refund Reason</label>
            <select value={selectedRefundReason} onChange={(e) => setSelectedRefundReason(e.target.value)}>
              <option value="all">All Reasons</option>
              <option value="Course Withdrawal">Course Withdrawal</option>
              <option value="Medical Emergency">Medical Emergency</option>
              <option value="Fee Correction">Fee Correction</option>
              <option value="Overpayment">Overpayment</option>
              <option value="Scholarship Adjustment">Scholarship Adjustment</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Status</label>
            <select value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)}>
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="processed">Processed</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>
      </div>

      {/* KPI Overview */}
      <div className="kpi-section">
        <div className="kpi-grid">
          <div className="kpi-card total-refunds">
            <div className="kpi-icon">💰</div>
            <div className="kpi-content">
              <div className="kpi-value">{formatCurrency(totalRefunds)}</div>
              <div className="kpi-label">Total Refunds</div>
            </div>
          </div>
          <div className="kpi-card total-adjustments">
            <div className="kpi-icon">⚖️</div>
            <div className="kpi-content">
              <div className="kpi-value">{formatCurrency(totalAdjustments)}</div>
              <div className="kpi-label">Total Adjustments</div>
            </div>
          </div>
          <div className="kpi-card refund-percentage">
            <div className="kpi-icon">📊</div>
            <div className="kpi-content">
              <div className="kpi-value">{refundPercentage.toFixed(1)}%</div>
              <div className="kpi-label">Refund Percentage</div>
            </div>
          </div>
          <div className="kpi-card audit-flags">
            <div className="kpi-icon">🚩</div>
            <div className="kpi-content">
              <div className="kpi-value">{auditFlags}</div>
              <div className="kpi-label">Audit Flags</div>
            </div>
          </div>
        </div>
      </div>

      {/* Monthly Trend Chart */}
      <div className="section">
        <h2>📈 Monthly Refund & Adjustment Trends</h2>
        <div className="trend-chart">
          <div className="chart-container">
            {mockMonthlyTrend.map((month, index) => (
              <div key={index} className="chart-bar">
                <div className="bar-container">
                  <div 
                    className="bar refund-bar" 
                    style={{ height: `${(month.refunds / 5) * 100}%` }}
                    title={`${month.refunds} refunds`}
                  ></div>
                  <div 
                    className="bar adjustment-bar" 
                    style={{ height: `${(month.adjustments / 5) * 100}%` }}
                    title={`${month.adjustments} adjustments`}
                  ></div>
                </div>
                <div className="bar-label">{month.month}</div>
                <div className="bar-value">{formatCurrency(month.totalAmount)}</div>
              </div>
            ))}
          </div>
          <div className="chart-legend">
            <div className="legend-item">
              <div className="legend-color refund"></div>
              <span>Refunds</span>
            </div>
            <div className="legend-item">
              <div className="legend-color adjustment"></div>
              <span>Adjustments</span>
            </div>
          </div>
        </div>
      </div>

      {/* Transactions List */}
      <div className="section">
        <h2>💸 Refund & Adjustment Transactions</h2>
        <div className="transactions-table">
          <div className="table-header">
            <div className="header-cell">Student Details</div>
            <div className="header-cell">Transaction Info</div>
            <div className="header-cell">Amount Details</div>
            <div className="header-cell">Processing Info</div>
            <div className="header-cell">Status</div>
          </div>
          {filteredTransactions.map(transaction => (
            <div key={transaction.id} className={`table-row ${transaction.auditFlag ? 'audit-flag' : ''}`}>
              <div className="table-cell student-details">
                <div className="student-name">
                  {transaction.studentName}
                  {transaction.auditFlag && <span className="audit-flag-icon">🚩</span>}
                </div>
                <div className="student-meta">
                  {transaction.class} - {transaction.batch}
                </div>
                <div className="request-date">
                  Requested: {new Date(transaction.requestDate).toLocaleDateString()}
                </div>
              </div>
              <div className="table-cell transaction-info">
                <div className={`transaction-type-badge ${getTransactionTypeColor(transaction.transactionType)}`}>
                  {transaction.transactionType === 'refund' ? '💰 Refund' : '⚖️ Adjustment'}
                </div>
                <div className="transaction-reason">
                  {transaction.reason}
                </div>
                <div className="refund-method">
                  Method: {transaction.refundMethod.replace('-', ' ').toUpperCase()}
                </div>
                {transaction.referenceNumber && (
                  <div className="reference-number">
                    Ref: {transaction.referenceNumber}
                  </div>
                )}
              </div>
              <div className="table-cell amount-details">
                <div className="original-amount">
                  Original: {formatCurrency(transaction.originalAmount)}
                </div>
                <div className="transaction-amount">
                  {transaction.transactionType === 'refund' ? 'Refund' : 'Adjustment'}: {formatCurrency(transaction.amount)}
                </div>
                <div className="final-amount">
                  Final: {formatCurrency(transaction.originalAmount - transaction.amount)}
                </div>
              </div>
              <div className="table-cell processing-info">
                {transaction.approvedBy && (
                  <div className="approved-by">
                    Approved by: {transaction.approvedBy}
                  </div>
                )}
                {transaction.processedBy && (
                  <div className="processed-by">
                    Processed by: {transaction.processedBy}
                  </div>
                )}
                {transaction.processedDate && (
                  <div className="processed-date">
                    Processed: {new Date(transaction.processedDate).toLocaleDateString()}
                  </div>
                )}
              </div>
              <div className="table-cell status">
                <div className={`status-badge ${getStatusColor(transaction.status)}`}>
                  {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                </div>
                {transaction.notes && (
                  <div className="transaction-notes">
                    📝 {transaction.notes}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Summary by Reason */}
      <div className="section">
        <h2>📋 Summary by Reason</h2>
        <div className="reason-summary-grid">
          {Array.from(new Set(filteredTransactions.map(t => t.reason))).map(reason => {
            const reasonTransactions = filteredTransactions.filter(t => t.reason === reason);
            const totalAmount = reasonTransactions.reduce((sum, t) => sum + t.amount, 0);
            const refundCount = reasonTransactions.filter(t => t.transactionType === 'refund').length;
            const adjustmentCount = reasonTransactions.filter(t => t.transactionType === 'adjustment').length;
            
            return (
              <div key={reason} className="reason-summary-card">
                <div className="reason-header">
                  <h3>{reason}</h3>
                  <span className="reason-count">{reasonTransactions.length}</span>
                </div>
                <div className="reason-stats">
                  <div className="stat-item">
                    <span className="stat-label">Total Amount:</span>
                    <span className="stat-value">{formatCurrency(totalAmount)}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Refunds:</span>
                    <span className="stat-value refund">{refundCount}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Adjustments:</span>
                    <span className="stat-value adjustment">{adjustmentCount}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {filteredTransactions.length === 0 && (
        <div className="no-data">
          <p>No refund/adjustment transactions found matching the selected filters.</p>
        </div>
      )}

      {/* Export Button */}
      <div className="export-section">
        <button className="export-btn">
          📊 Export Refunds & Adjustments Report
        </button>
      </div>
    </div>
  );
};

export default RefundsAdjustments;
