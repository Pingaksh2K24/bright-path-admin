import React, { useState } from 'react';
import './Payments.css';

interface PaymentRecord {
  id: number;
  facultyName: string;
  month: string;
  basicSalary: number;
  allowances: number;
  bonus: number;
  deductions: number;
  netSalary: number;
  paymentStatus: string;
  paymentDate: string;
  paymentMode: string;
  remarks: string;
}

const Payments: React.FC = () => {
  const [selectedFaculty, setSelectedFaculty] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [showAddPayment, setShowAddPayment] = useState(false);

  const faculties = ['All Faculty', 'Dr. Rajesh Kumar', 'Prof. Priya Sharma', 'Dr. Amit Patel', 'Ms. Sneha Verma', 'Mr. Deepak Sharma', 'Dr. Meena Joshi'];
  const months = ['All Months', 'July 2024', 'June 2024', 'May 2024', 'April 2024', 'March 2024'];
  const statuses = ['All Status', 'Paid', 'Pending', 'Processing'];

  const paymentRecords: PaymentRecord[] = [
    { id: 1, facultyName: 'Dr. Rajesh Kumar', month: 'July 2024', basicSalary: 45000, allowances: 8000, bonus: 5000, deductions: 2000, netSalary: 56000, paymentStatus: 'Paid', paymentDate: '25-Jul-2024', paymentMode: 'Bank Transfer', remarks: 'Regular payment' },
    { id: 2, facultyName: 'Prof. Priya Sharma', month: 'July 2024', basicSalary: 42000, allowances: 7500, bonus: 3000, deductions: 1500, netSalary: 51000, paymentStatus: 'Paid', paymentDate: '25-Jul-2024', paymentMode: 'Bank Transfer', remarks: 'Regular payment' },
    { id: 3, facultyName: 'Dr. Amit Patel', month: 'July 2024', basicSalary: 40000, allowances: 7000, bonus: 2000, deductions: 1000, netSalary: 48000, paymentStatus: 'Pending', paymentDate: '-', paymentMode: '-', remarks: 'Awaiting approval' },
    { id: 4, facultyName: 'Ms. Sneha Verma', month: 'July 2024', basicSalary: 38000, allowances: 6500, bonus: 2500, deductions: 1200, netSalary: 45800, paymentStatus: 'Processing', paymentDate: '-', paymentMode: '-', remarks: 'Processing payment' },
    { id: 5, facultyName: 'Mr. Deepak Sharma', month: 'July 2024', basicSalary: 35000, allowances: 6000, bonus: 1500, deductions: 800, netSalary: 41700, paymentStatus: 'Paid', paymentDate: '24-Jul-2024', paymentMode: 'Bank Transfer', remarks: 'Regular payment' },
    { id: 6, facultyName: 'Dr. Meena Joshi', month: 'July 2024', basicSalary: 43000, allowances: 7800, bonus: 4000, deductions: 1800, netSalary: 53000, paymentStatus: 'Paid', paymentDate: '25-Jul-2024', paymentMode: 'Bank Transfer', remarks: 'Regular payment' },
    { id: 7, facultyName: 'Dr. Rajesh Kumar', month: 'June 2024', basicSalary: 45000, allowances: 8000, bonus: 4000, deductions: 2000, netSalary: 55000, paymentStatus: 'Paid', paymentDate: '25-Jun-2024', paymentMode: 'Bank Transfer', remarks: 'Regular payment' },
    { id: 8, facultyName: 'Prof. Priya Sharma', month: 'June 2024', basicSalary: 42000, allowances: 7500, bonus: 2500, deductions: 1500, netSalary: 50500, paymentStatus: 'Paid', paymentDate: '25-Jun-2024', paymentMode: 'Bank Transfer', remarks: 'Regular payment' },
    { id: 9, facultyName: 'Dr. Amit Patel', month: 'June 2024', basicSalary: 40000, allowances: 7000, bonus: 1500, deductions: 1000, netSalary: 47000, paymentStatus: 'Paid', paymentDate: '25-Jun-2024', paymentMode: 'Bank Transfer', remarks: 'Regular payment' },
    { id: 10, facultyName: 'Ms. Sneha Verma', month: 'June 2024', basicSalary: 38000, allowances: 6500, bonus: 2000, deductions: 1200, netSalary: 45300, paymentStatus: 'Paid', paymentDate: '25-Jun-2024', paymentMode: 'Bank Transfer', remarks: 'Regular payment' },
  ];

  const filteredRecords = paymentRecords.filter(record => {
    const matchesFaculty = selectedFaculty === '' || selectedFaculty === 'All Faculty' || record.facultyName === selectedFaculty;
    const matchesMonth = selectedMonth === '' || selectedMonth === 'All Months' || record.month === selectedMonth;
    const matchesStatus = selectedStatus === '' || selectedStatus === 'All Status' || record.paymentStatus === selectedStatus;
    return matchesFaculty && matchesMonth && matchesStatus;
  });

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Paid':
        return 'status-paid';
      case 'Pending':
        return 'status-pending';
      case 'Processing':
        return 'status-processing';
      default:
        return '';
    }
  };

  const getPaymentStats = () => {
    const totalRecords = paymentRecords.length;
    const totalPaid = paymentRecords.filter(r => r.paymentStatus === 'Paid').length;
    const totalPending = paymentRecords.filter(r => r.paymentStatus === 'Pending').length;
    const totalAmount = paymentRecords.reduce((sum, r) => sum + r.netSalary, 0);
    const paidAmount = paymentRecords.filter(r => r.paymentStatus === 'Paid').reduce((sum, r) => sum + r.netSalary, 0);

    return { totalRecords, totalPaid, totalPending, totalAmount, paidAmount };
  };

  const stats = getPaymentStats();

  const handleAddPayment = () => {
    setShowAddPayment(true);
  };

  const handleExportReport = () => {
    // Here you would implement export functionality
    alert('Payment report exported successfully!');
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="payments-container">
      <div className="payments-header">
        <h1 className="payments-title">Payments / Salary</h1>
        <p className="payments-subtitle">Manage faculty salary payments and generate reports</p>
      </div>

      {/* Summary Cards */}
      <div className="summary-cards">
        <div className="summary-card">
          <div className="summary-label">Total Records</div>
          <div className="summary-value blue">{stats.totalRecords}</div>
        </div>
        <div className="summary-card">
          <div className="summary-label">Total Paid</div>
          <div className="summary-value green">{stats.totalPaid}</div>
        </div>
        <div className="summary-card">
          <div className="summary-label">Total Amount</div>
          <div className="summary-value orange">{formatCurrency(stats.totalAmount)}</div>
        </div>
        <div className="summary-card">
          <div className="summary-label">Paid Amount</div>
          <div className="summary-value purple">{formatCurrency(stats.paidAmount)}</div>
        </div>
      </div>

      {/* Controls */}
      <div className="controls-section">
        <div className="controls-grid">
          <div className="control-group">
            <label className="control-label">Filter by Faculty</label>
            <select
              value={selectedFaculty}
              onChange={(e) => setSelectedFaculty(e.target.value)}
              className="control-select"
            >
              {faculties.map(faculty => (
                <option key={faculty} value={faculty}>{faculty}</option>
              ))}
            </select>
          </div>
          <div className="control-group">
            <label className="control-label">Filter by Month</label>
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="control-select"
            >
              {months.map(month => (
                <option key={month} value={month}>{month}</option>
              ))}
            </select>
          </div>
          <div className="control-group">
            <label className="control-label">Filter by Status</label>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="control-select"
            >
              {statuses.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </div>
          <div className="control-group">
            <button className="add-payment-button" onClick={handleAddPayment}>
              ➕ Add Payment
            </button>
          </div>
          <div className="control-group">
            <button className="export-report-button" onClick={handleExportReport}>
              📊 Export Report
            </button>
          </div>
        </div>
      </div>

      {/* Payments Table */}
      <div className="table-container">
        <div className="table-header">
          <h2 className="table-title">Payment Records</h2>
          <div className="table-count">Total Records: {filteredRecords.length}</div>
        </div>
        <div className="table-wrapper">
          <table className="payments-table">
            <thead>
              <tr>
                <th>Faculty Name</th>
                <th>Month</th>
                <th>Basic Salary</th>
                <th>Allowances</th>
                <th>Bonus</th>
                <th>Deductions</th>
                <th>Net Salary</th>
                <th>Status</th>
                <th>Payment Details</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredRecords.map(record => (
                <tr key={record.id}>
                  <td className="faculty-name-cell">{record.facultyName}</td>
                  <td className="month-cell">{record.month}</td>
                  <td className="salary-cell">{formatCurrency(record.basicSalary)}</td>
                  <td className="allowance-cell">{formatCurrency(record.allowances)}</td>
                  <td className="bonus-cell">{formatCurrency(record.bonus)}</td>
                  <td className="deduction-cell">{formatCurrency(record.deductions)}</td>
                  <td className="net-salary-cell">{formatCurrency(record.netSalary)}</td>
                  <td>
                    <span className={`status-badge ${getStatusClass(record.paymentStatus)}`}>
                      {record.paymentStatus}
                    </span>
                  </td>
                  <td className="payment-details-cell">
                    <div className="payment-info">
                      <div className="payment-date">Date: {record.paymentDate}</div>
                      <div className="payment-mode">Mode: {record.paymentMode}</div>
                      <div className="payment-remarks">{record.remarks}</div>
                    </div>
                  </td>
                  <td className="actions-cell">
                    <button className="action-button view-button">View</button>
                    <button className="action-button edit-button">Edit</button>
                    <button className="action-button download-button">Download</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Payment Modal */}
      {showAddPayment && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Add Payment Record</h3>
              <button 
                className="modal-close"
                onClick={() => setShowAddPayment(false)}
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label className="form-label">Select Faculty</label>
                <select className="form-select">
                  {faculties.slice(1).map(faculty => (
                    <option key={faculty} value={faculty}>{faculty}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Month</label>
                <select className="form-select">
                  {months.slice(1).map(month => (
                    <option key={month} value={month}>{month}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Basic Salary</label>
                <input type="number" className="form-input" placeholder="Enter basic salary" />
              </div>
              <div className="form-group">
                <label className="form-label">Allowances</label>
                <input type="number" className="form-input" placeholder="Enter allowances" />
              </div>
              <div className="form-group">
                <label className="form-label">Bonus</label>
                <input type="number" className="form-input" placeholder="Enter bonus" />
              </div>
              <div className="form-group">
                <label className="form-label">Deductions</label>
                <input type="number" className="form-input" placeholder="Enter deductions" />
              </div>
              <div className="form-group">
                <label className="form-label">Payment Status</label>
                <select className="form-select">
                  <option value="Paid">Paid</option>
                  <option value="Pending">Pending</option>
                  <option value="Processing">Processing</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Payment Mode</label>
                <select className="form-select">
                  <option value="Bank Transfer">Bank Transfer</option>
                  <option value="Cash">Cash</option>
                  <option value="Cheque">Cheque</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Remarks</label>
                <textarea className="form-textarea" rows={3} placeholder="Enter remarks..."></textarea>
              </div>
            </div>
            <div className="modal-footer">
              <button className="modal-button cancel-button" onClick={() => setShowAddPayment(false)}>
                Cancel
              </button>
              <button className="modal-button save-button">
                Add Payment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payments; 