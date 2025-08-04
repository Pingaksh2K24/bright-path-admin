import React, { useState } from 'react';
import './DiscountsScholarships.css';

interface DiscountStudent {
  id: string;
  name: string;
  class: string;
  batch: string;
  discountType: 'sibling' | 'merit' | 'staff' | 'special-case';
  discountPercentage: number;
  discountAmount: number;
  originalFee: number;
  approvedBy: string;
  approvalDate: string;
  isScholarship: boolean;
  scholarshipCriteria?: string;
  expiryDate?: string;
  isHighDiscount: boolean;
}

interface DiscountSummary {
  type: string;
  count: number;
  totalValue: number;
  averagePercentage: number;
}

interface BatchDiscountStats {
  class: string;
  batch: string;
  totalStudents: number;
  discountedStudents: number;
  totalDiscountValue: number;
  discountPercentage: number;
}

const DiscountsScholarships: React.FC = () => {
  const [selectedDateRange, setSelectedDateRange] = useState<string>('current-year');
  const [selectedClass, setSelectedClass] = useState<string>('all');
  const [selectedBatch, setSelectedBatch] = useState<string>('all');
  const [selectedDiscountType, setSelectedDiscountType] = useState<string>('all');

  // Mock data
  const mockDiscountStudents: DiscountStudent[] = [
    {
      id: '1',
      name: 'Rahul Kumar',
      class: 'Class 12',
      batch: 'Batch A-2024',
      discountType: 'sibling',
      discountPercentage: 15,
      discountAmount: 18000,
      originalFee: 120000,
      approvedBy: 'Principal',
      approvalDate: '2024-06-15',
      isScholarship: false,
      isHighDiscount: false
    },
    {
      id: '2',
      name: 'Priya Singh',
      class: 'Class 11',
      batch: 'Batch C-2024',
      discountType: 'merit',
      discountPercentage: 25,
      discountAmount: 25000,
      originalFee: 100000,
      approvedBy: 'Academic Head',
      approvalDate: '2024-05-20',
      isScholarship: true,
      scholarshipCriteria: 'Academic Excellence (95%+)',
      expiryDate: '2025-05-20',
      isHighDiscount: false
    },
    {
      id: '3',
      name: 'Amit Patel',
      class: 'Class 12',
      batch: 'Batch B-2024',
      discountType: 'staff',
      discountPercentage: 50,
      discountAmount: 60000,
      originalFee: 120000,
      approvedBy: 'HR Manager',
      approvalDate: '2024-04-10',
      isScholarship: false,
      isHighDiscount: true
    },
    {
      id: '4',
      name: 'Sneha Gupta',
      class: 'Class 10',
      batch: 'Batch D-2024',
      discountType: 'special-case',
      discountPercentage: 40,
      discountAmount: 32000,
      originalFee: 80000,
      approvedBy: 'Director',
      approvalDate: '2024-07-01',
      isScholarship: false,
      isHighDiscount: true
    },
    {
      id: '5',
      name: 'Vikash Yadav',
      class: 'Class 11',
      batch: 'Batch C-2024',
      discountType: 'merit',
      discountPercentage: 30,
      discountAmount: 30000,
      originalFee: 100000,
      approvedBy: 'Academic Head',
      approvalDate: '2024-06-25',
      isScholarship: true,
      scholarshipCriteria: 'Sports Excellence',
      expiryDate: '2025-06-25',
      isHighDiscount: false
    }
  ];

  const mockBatchStats: BatchDiscountStats[] = [
    {
      class: 'Class 12',
      batch: 'Batch A-2024',
      totalStudents: 45,
      discountedStudents: 8,
      totalDiscountValue: 180000,
      discountPercentage: 17.8
    },
    {
      class: 'Class 12',
      batch: 'Batch B-2024',
      totalStudents: 42,
      discountedStudents: 6,
      totalDiscountValue: 150000,
      discountPercentage: 14.3
    },
    {
      class: 'Class 11',
      batch: 'Batch C-2024',
      totalStudents: 38,
      discountedStudents: 9,
      totalDiscountValue: 220000,
      discountPercentage: 23.7
    },
    {
      class: 'Class 10',
      batch: 'Batch D-2024',
      totalStudents: 50,
      discountedStudents: 7,
      totalDiscountValue: 160000,
      discountPercentage: 14.0
    }
  ];

  const filteredStudents = mockDiscountStudents.filter(student => {
    return (selectedClass === 'all' || student.class === selectedClass) &&
           (selectedBatch === 'all' || student.batch === selectedBatch) &&
           (selectedDiscountType === 'all' || student.discountType === selectedDiscountType);
  });

  const filteredBatchStats = mockBatchStats.filter(batch => {
    return (selectedClass === 'all' || batch.class === selectedClass) &&
           (selectedBatch === 'all' || batch.batch === selectedBatch);
  });

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const getDiscountTypeColor = (type: string) => {
    switch (type) {
      case 'sibling': return 'sibling';
      case 'merit': return 'merit';
      case 'staff': return 'staff';
      case 'special-case': return 'special-case';
      default: return '';
    }
  };

  const getDiscountTypeLabel = (type: string) => {
    switch (type) {
      case 'sibling': return 'Sibling Discount';
      case 'merit': return 'Merit Scholarship';
      case 'staff': return 'Staff Discount';
      case 'special-case': return 'Special Case';
      default: return type;
    }
  };

  const calculateDiscountSummary = (): DiscountSummary[] => {
    const summary: { [key: string]: DiscountSummary } = {};
    
    filteredStudents.forEach(student => {
      if (!summary[student.discountType]) {
        summary[student.discountType] = {
          type: student.discountType,
          count: 0,
          totalValue: 0,
          averagePercentage: 0
        };
      }
      summary[student.discountType].count++;
      summary[student.discountType].totalValue += student.discountAmount;
    });

    Object.keys(summary).forEach(type => {
      const students = filteredStudents.filter(s => s.discountType === type);
      summary[type].averagePercentage = students.reduce((sum, s) => sum + s.discountPercentage, 0) / students.length;
    });

    return Object.values(summary);
  };

  const calculateTotalDiscountValue = () => {
    return filteredStudents.reduce((sum, student) => sum + student.discountAmount, 0);
  };

  const calculateScholarshipCount = () => {
    return filteredStudents.filter(student => student.isScholarship).length;
  };

  const calculateHighDiscountCount = () => {
    return filteredStudents.filter(student => student.isHighDiscount).length;
  };

  const discountSummary = calculateDiscountSummary();
  const totalDiscountValue = calculateTotalDiscountValue();
  const scholarshipCount = calculateScholarshipCount();
  const highDiscountCount = calculateHighDiscountCount();

  return (
    <div className="discounts-scholarships">
      <div className="page-header">
        <h1>🎁 Discounts & Scholarships Report</h1>
        <p>Track concessions and special approvals</p>
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
            <label>Discount Type</label>
            <select value={selectedDiscountType} onChange={(e) => setSelectedDiscountType(e.target.value)}>
              <option value="all">All Types</option>
              <option value="sibling">Sibling Discount</option>
              <option value="merit">Merit Scholarship</option>
              <option value="staff">Staff Discount</option>
              <option value="special-case">Special Case</option>
            </select>
          </div>
        </div>
      </div>

      {/* KPI Overview */}
      <div className="kpi-section">
        <div className="kpi-grid">
          <div className="kpi-card total-discount">
            <div className="kpi-icon">💰</div>
            <div className="kpi-content">
              <div className="kpi-value">{formatCurrency(totalDiscountValue)}</div>
              <div className="kpi-label">Total Discount Value</div>
            </div>
          </div>
          <div className="kpi-card students-count">
            <div className="kpi-icon">👥</div>
            <div className="kpi-content">
              <div className="kpi-value">{filteredStudents.length}</div>
              <div className="kpi-label">Students with Discounts</div>
            </div>
          </div>
          <div className="kpi-card scholarship-count">
            <div className="kpi-icon">🎓</div>
            <div className="kpi-content">
              <div className="kpi-value">{scholarshipCount}</div>
              <div className="kpi-label">Scholarship Recipients</div>
            </div>
          </div>
          <div className="kpi-card high-discount">
            <div className="kpi-icon">🚩</div>
            <div className="kpi-content">
              <div className="kpi-value">{highDiscountCount}</div>
              <div className="kpi-label">High Discount Cases</div>
            </div>
          </div>
        </div>
      </div>

      {/* Discount Type Summary */}
      <div className="section">
        <h2>📊 Discount Type Breakdown</h2>
        <div className="discount-summary-grid">
          {discountSummary.map((summary, index) => (
            <div key={index} className={`discount-summary-card ${getDiscountTypeColor(summary.type)}`}>
              <div className="summary-header">
                <h3>{getDiscountTypeLabel(summary.type)}</h3>
                <span className="summary-count">{summary.count}</span>
              </div>
              <div className="summary-stats">
                <div className="stat-item">
                  <span className="stat-label">Total Value:</span>
                  <span className="stat-value">{formatCurrency(summary.totalValue)}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Avg Percentage:</span>
                  <span className="stat-value">{summary.averagePercentage.toFixed(1)}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Students List */}
      <div className="section">
        <h2>🎁 Discounted Students List</h2>
        <div className="students-table">
          <div className="table-header">
            <div className="header-cell">Student Details</div>
            <div className="header-cell">Discount Info</div>
            <div className="header-cell">Amount Details</div>
            <div className="header-cell">Approval Info</div>
            <div className="header-cell">Status</div>
          </div>
          {filteredStudents.map(student => (
            <div key={student.id} className={`table-row ${student.isHighDiscount ? 'high-discount' : ''}`}>
              <div className="table-cell student-details">
                <div className="student-name">
                  {student.name}
                  {student.isHighDiscount && <span className="high-discount-flag">🚩</span>}
                </div>
                <div className="student-meta">
                  {student.class} - {student.batch}
                </div>
                {student.isScholarship && (
                  <div className="scholarship-badge">🎓 Scholarship</div>
                )}
              </div>
              <div className="table-cell discount-info">
                <div className={`discount-type-badge ${getDiscountTypeColor(student.discountType)}`}>
                  {getDiscountTypeLabel(student.discountType)}
                </div>
                <div className="discount-percentage">
                  {student.discountPercentage}% discount
                </div>
                {student.scholarshipCriteria && (
                  <div className="scholarship-criteria">
                    {student.scholarshipCriteria}
                  </div>
                )}
              </div>
              <div className="table-cell amount-details">
                <div className="original-fee">
                  Original: {formatCurrency(student.originalFee)}
                </div>
                <div className="discount-amount">
                  Discount: {formatCurrency(student.discountAmount)}
                </div>
                <div className="final-fee">
                  Final: {formatCurrency(student.originalFee - student.discountAmount)}
                </div>
              </div>
              <div className="table-cell approval-info">
                <div className="approved-by">
                  Approved by: {student.approvedBy}
                </div>
                <div className="approval-date">
                  Date: {new Date(student.approvalDate).toLocaleDateString()}
                </div>
              </div>
              <div className="table-cell status">
                <div className="status-badge active">Active</div>
                {student.expiryDate && (
                  <div className="expiry-date">
                    Expires: {new Date(student.expiryDate).toLocaleDateString()}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Batch-wise Discount Statistics */}
      <div className="section">
        <h2>🏫 Batch-wise Discount Statistics</h2>
        <div className="batch-stats-grid">
          {filteredBatchStats.map((batch, index) => (
            <div key={index} className="batch-stats-card">
              <div className="batch-stats-header">
                <h3>{batch.class}</h3>
                <span className="batch-tag">{batch.batch}</span>
              </div>
              <div className="batch-stats-content">
                <div className="stats-row">
                  <span className="stats-label">Total Students:</span>
                  <span className="stats-value">{batch.totalStudents}</span>
                </div>
                <div className="stats-row">
                  <span className="stats-label">Discounted Students:</span>
                  <span className="stats-value discounted">{batch.discountedStudents}</span>
                </div>
                <div className="stats-row">
                  <span className="stats-label">Total Discount Value:</span>
                  <span className="stats-value amount">{formatCurrency(batch.totalDiscountValue)}</span>
                </div>
                <div className="discount-rate">
                  <span>Discount Rate: </span>
                  <span className="rate-percentage">
                    {batch.discountPercentage.toFixed(1)}%
                  </span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${(batch.discountedStudents / batch.totalStudents) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {filteredStudents.length === 0 && (
        <div className="no-data">
          <p>No discount/scholarship data found matching the selected filters.</p>
        </div>
      )}

      {/* Export Button */}
      <div className="export-section">
        <button className="export-btn">
          📊 Export Discounts & Scholarships Report
        </button>
      </div>
    </div>
  );
};

export default DiscountsScholarships;
