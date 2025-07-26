import React, { useState } from 'react';
import './Expenses.css';

const Expenses: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');

  const expensesData = [
    {
      id: 1,
      date: '2025-01-15',
      category: 'Rent',
      description: 'Monthly office rent',
      amount: 25000,
      paidBy: 'Bank Transfer',
      billNumber: 'RENT001',
      attachment: 'rent_receipt.pdf',
      notes: 'Office rent for January 2025'
    },
    {
      id: 2,
      date: '2025-01-14',
      category: 'Salaries',
      description: 'Faculty salary payment',
      amount: 45000,
      paidBy: 'Bank Transfer',
      billNumber: 'SAL001',
      attachment: 'salary_slip.pdf',
      notes: 'Salary for 3 faculty members'
    },
    {
      id: 3,
      date: '2025-01-13',
      category: 'Utilities',
      description: 'Electricity bill',
      amount: 8500,
      paidBy: 'UPI',
      billNumber: 'UTIL001',
      attachment: 'electricity_bill.pdf',
      notes: 'Monthly electricity bill'
    },
    {
      id: 4,
      date: '2025-01-12',
      category: 'Marketing',
      description: 'Social media advertising',
      amount: 12000,
      paidBy: 'Online',
      billNumber: 'MKT001',
      attachment: 'ad_receipt.pdf',
      notes: 'Facebook and Google ads'
    },
    {
      id: 5,
      date: '2025-01-11',
      category: 'Maintenance',
      description: 'AC servicing',
      amount: 3000,
      paidBy: 'Cash',
      billNumber: 'MAINT001',
      attachment: 'ac_service.pdf',
      notes: 'AC maintenance and cleaning'
    },
    {
      id: 6,
      date: '2025-01-10',
      category: 'Office Supplies',
      description: 'Stationery and books',
      amount: 5000,
      paidBy: 'UPI',
      billNumber: 'SUP001',
      attachment: 'stationery_bill.pdf',
      notes: 'Study materials and stationery'
    },
    {
      id: 7,
      date: '2025-01-09',
      category: 'Internet',
      description: 'Monthly internet bill',
      amount: 2000,
      paidBy: 'Bank Transfer',
      billNumber: 'NET001',
      attachment: 'internet_bill.pdf',
      notes: 'High-speed internet connection'
    },
    {
      id: 8,
      date: '2025-01-08',
      category: 'Cleaning',
      description: 'Office cleaning service',
      amount: 4000,
      paidBy: 'Cash',
      billNumber: 'CLEAN001',
      attachment: 'cleaning_receipt.pdf',
      notes: 'Monthly cleaning service'
    }
  ];

  const categories = ['Rent', 'Salaries', 'Utilities', 'Marketing', 'Maintenance', 'Office Supplies', 'Internet', 'Cleaning', 'Other'];
  const paymentMethods = ['Cash', 'UPI', 'Bank Transfer', 'Online', 'Cheque'];
  const months = ['January 2025', 'December 2024', 'November 2024', 'October 2024'];

  const totalExpenses = expensesData.reduce((sum, record) => sum + record.amount, 0);
  const thisMonthExpenses = expensesData.filter(record => record.date.startsWith('2025-01')).reduce((sum, record) => sum + record.amount, 0);
  const totalRecords = expensesData.length;

  const getCategoryClass = (category: string) => {
    switch (category) {
      case 'Rent':
        return 'category-badge rent';
      case 'Salaries':
        return 'category-badge salaries';
      case 'Utilities':
        return 'category-badge utilities';
      case 'Marketing':
        return 'category-badge marketing';
      case 'Maintenance':
        return 'category-badge maintenance';
      default:
        return 'category-badge other';
    }
  };

  const getCategoryColorClass = (category: string) => {
    switch (category) {
      case 'Rent':
        return 'category-color rent';
      case 'Salaries':
        return 'category-color salaries';
      case 'Utilities':
        return 'category-color utilities';
      case 'Marketing':
        return 'category-color marketing';
      case 'Maintenance':
        return 'category-color maintenance';
      default:
        return 'category-color other';
    }
  };

  return (
    <div className="expenses-container">
      <div className="expenses-header">
        <h1 className="expenses-title">Expenses Tracker</h1>
        <p className="expenses-subtitle">Track and manage all institutional expenses</p>
      </div>

      {/* Summary Cards */}
      <div className="summary-cards">
        <div className="summary-card">
          <div className="summary-label">Total Expenses</div>
          <div className="summary-value red">₹{totalExpenses.toLocaleString()}</div>
        </div>
        <div className="summary-card">
          <div className="summary-label">This Month</div>
          <div className="summary-value blue">₹{thisMonthExpenses.toLocaleString()}</div>
        </div>
        <div className="summary-card">
          <div className="summary-label">Total Records</div>
          <div className="summary-value gray">{totalRecords}</div>
        </div>
        <div className="summary-card">
          <div className="summary-label">Average per Month</div>
          <div className="summary-value green">₹{(totalExpenses / 12).toLocaleString()}</div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="search-filters-section">
        <div className="search-filters-grid">
          <div className="search-group">
            <label className="search-label">Search Description</label>
            <input
              type="text"
              placeholder="Search expenses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="search-group">
            <label className="search-label">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="filter-select"
            >
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          <div className="search-group">
            <label className="search-label">Month</label>
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="filter-select"
            >
              <option value="">All Months</option>
              {months.map(month => (
                <option key={month} value={month}>{month}</option>
              ))}
            </select>
          </div>
          <div className="search-group">
            <button className="add-expense-button">
              Add Expense
            </button>
          </div>
        </div>
      </div>

      {/* Expenses Table */}
      <div className="table-container">
        <div className="table-header">
          <h2 className="table-title">Expense Records</h2>
        </div>
        <div className="table-wrapper">
          <table className="expenses-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Category</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Payment Method</th>
                <th>Bill/Receipt</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {expensesData.map((record) => (
                <tr key={record.id}>
                  <td>
                    <div className="expense-date">{record.date}</div>
                  </td>
                  <td>
                    <span className={getCategoryClass(record.category)}>
                      {record.category}
                    </span>
                  </td>
                  <td>
                    <div className="expense-description">
                      <div className="description-text">{record.description}</div>
                      <div className="description-notes">{record.notes}</div>
                    </div>
                  </td>
                  <td>
                    <div className="expense-amount">₹{record.amount.toLocaleString()}</div>
                  </td>
                  <td>
                    <div className="payment-method">{record.paidBy}</div>
                  </td>
                  <td>
                    <div className="bill-info">
                      <div className="bill-number">{record.billNumber}</div>
                      <div className="bill-attachment">{record.attachment}</div>
                    </div>
                  </td>
                  <td>
                    <div className="actions-cell">
                      <button className="action-button view-button">View</button>
                      <button className="action-button download-button">Download</button>
                      <button className="action-button edit-button">Edit</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Category-wise Summary */}
      <div className="summary-section">
        <div className="summary-card-large">
          <h3 className="summary-card-title">Expenses by Category</h3>
          <div className="category-list">
            {categories.slice(0, 6).map(category => {
              const categoryTotal = expensesData
                .filter(record => record.category === category)
                .reduce((sum, record) => sum + record.amount, 0);
              const percentage = ((categoryTotal / totalExpenses) * 100).toFixed(1);
              
              return (
                <div key={category} className="category-item">
                  <div className="category-info">
                    <div className={getCategoryColorClass(category)}></div>
                    <span className="category-name">{category}</span>
                  </div>
                  <div className="category-amount">
                    <div className="category-total">₹{categoryTotal.toLocaleString()}</div>
                    <div className="category-percentage">{percentage}%</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="summary-card-large">
          <h3 className="summary-card-title">Recent Expenses</h3>
          <div className="recent-expenses-list">
            {expensesData.slice(0, 5).map(record => (
              <div key={record.id} className="recent-expense-item">
                <div className="recent-expense-info">
                  <div className="recent-expense-description">{record.description}</div>
                  <div className="recent-expense-meta">{record.category} • {record.date}</div>
                </div>
                <div className="recent-expense-amount">₹{record.amount.toLocaleString()}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expenses; 