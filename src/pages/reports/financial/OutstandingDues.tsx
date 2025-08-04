import React, { useState } from 'react';
import './OutstandingDues.css';

interface OutstandingStudent {
  id: string;
  name: string;
  class: string;
  batch: string;
  amountDue: number;
  dueDate: string;
  daysPastDue: number;
  agingBucket: 'current' | 'overdue-15' | 'overdue-30' | 'overdue-60';
  followUpStatus: 'not-contacted' | 'sms-sent' | 'email-sent' | 'call-made' | 'parent-meeting';
  lastFollowUp: string;
  isHighRisk: boolean;
}

interface ClassWiseOutstanding {
  class: string;
  batch: string;
  totalStudents: number;
  studentsWithDues: number;
  totalOutstanding: number;
  averageDue: number;
}

const OutstandingDues: React.FC = () => {
  const [selectedDateRange, setSelectedDateRange] = useState<string>('all');
  const [selectedClass, setSelectedClass] = useState<string>('all');
  const [selectedBatch, setSelectedBatch] = useState<string>('all');
  const [selectedAmountRange, setSelectedAmountRange] = useState<string>('all');

  // Mock data
  const mockOutstandingStudents: OutstandingStudent[] = [
    {
      id: '1',
      name: 'Rahul Kumar',
      class: 'Class 12',
      batch: 'Batch A-2024',
      amountDue: 25000,
      dueDate: '2024-06-15',
      daysPastDue: 45,
      agingBucket: 'overdue-30',
      followUpStatus: 'email-sent',
      lastFollowUp: '2024-07-20',
      isHighRisk: true
    },
    {
      id: '2',
      name: 'Priya Singh',
      class: 'Class 11',
      batch: 'Batch C-2024',
      amountDue: 15000,
      dueDate: '2024-07-10',
      daysPastDue: 20,
      agingBucket: 'overdue-15',
      followUpStatus: 'sms-sent',
      lastFollowUp: '2024-07-25',
      isHighRisk: false
    },
    {
      id: '3',
      name: 'Amit Patel',
      class: 'Class 12',
      batch: 'Batch B-2024',
      amountDue: 35000,
      dueDate: '2024-05-20',
      daysPastDue: 70,
      agingBucket: 'overdue-60',
      followUpStatus: 'parent-meeting',
      lastFollowUp: '2024-07-28',
      isHighRisk: true
    },
    {
      id: '4',
      name: 'Sneha Gupta',
      class: 'Class 10',
      batch: 'Batch D-2024',
      amountDue: 12000,
      dueDate: '2024-07-25',
      daysPastDue: 5,
      agingBucket: 'current',
      followUpStatus: 'not-contacted',
      lastFollowUp: '',
      isHighRisk: false
    },
    {
      id: '5',
      name: 'Vikash Yadav',
      class: 'Class 11',
      batch: 'Batch C-2024',
      amountDue: 18000,
      dueDate: '2024-07-05',
      daysPastDue: 25,
      agingBucket: 'overdue-15',
      followUpStatus: 'call-made',
      lastFollowUp: '2024-07-26',
      isHighRisk: false
    }
  ];

  const mockClassWiseData: ClassWiseOutstanding[] = [
    {
      class: 'Class 12',
      batch: 'Batch A-2024',
      totalStudents: 45,
      studentsWithDues: 8,
      totalOutstanding: 180000,
      averageDue: 22500
    },
    {
      class: 'Class 12',
      batch: 'Batch B-2024',
      totalStudents: 42,
      studentsWithDues: 6,
      totalOutstanding: 150000,
      averageDue: 25000
    },
    {
      class: 'Class 11',
      batch: 'Batch C-2024',
      totalStudents: 38,
      studentsWithDues: 7,
      totalOutstanding: 140000,
      averageDue: 20000
    },
    {
      class: 'Class 10',
      batch: 'Batch D-2024',
      totalStudents: 50,
      studentsWithDues: 9,
      totalOutstanding: 200000,
      averageDue: 22222
    }
  ];

  const filteredStudents = mockOutstandingStudents.filter(student => {
    const amountFilter = selectedAmountRange === 'all' || 
      (selectedAmountRange === 'low' && student.amountDue < 15000) ||
      (selectedAmountRange === 'medium' && student.amountDue >= 15000 && student.amountDue < 25000) ||
      (selectedAmountRange === 'high' && student.amountDue >= 25000);

    return (selectedClass === 'all' || student.class === selectedClass) &&
           (selectedBatch === 'all' || student.batch === selectedBatch) &&
           amountFilter;
  });

  const filteredClassData = mockClassWiseData.filter(item => {
    return (selectedClass === 'all' || item.class === selectedClass) &&
           (selectedBatch === 'all' || item.batch === selectedBatch);
  });

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const getAgingBucketColor = (bucket: string) => {
    switch (bucket) {
      case 'current': return 'current';
      case 'overdue-15': return 'overdue-mild';
      case 'overdue-30': return 'overdue-moderate';
      case 'overdue-60': return 'overdue-severe';
      default: return '';
    }
  };

  const getFollowUpStatusIcon = (status: string) => {
    switch (status) {
      case 'not-contacted': return '❌';
      case 'sms-sent': return '📱';
      case 'email-sent': return '📧';
      case 'call-made': return '📞';
      case 'parent-meeting': return '👥';
      default: return '❓';
    }
  };

  const calculateAgingBuckets = () => {
    const buckets = {
      current: filteredStudents.filter(s => s.agingBucket === 'current').length,
      overdue15: filteredStudents.filter(s => s.agingBucket === 'overdue-15').length,
      overdue30: filteredStudents.filter(s => s.agingBucket === 'overdue-30').length,
      overdue60: filteredStudents.filter(s => s.agingBucket === 'overdue-60').length
    };
    return buckets;
  };

  const calculateTotalOutstanding = () => {
    return filteredStudents.reduce((sum, student) => sum + student.amountDue, 0);
  };

  const agingBuckets = calculateAgingBuckets();
  const totalOutstanding = calculateTotalOutstanding();

  return (
    <div className="outstanding-dues">
      <div className="page-header">
        <h1>🔴 Outstanding Dues Report</h1>
        <p>Track pending payments and follow-up communications</p>
      </div>

      {/* Filters */}
      <div className="filters-section">
        <div className="filters-grid">
          <div className="filter-group">
            <label>Date Range</label>
            <select value={selectedDateRange} onChange={(e) => setSelectedDateRange(e.target.value)}>
              <option value="all">All Time</option>
              <option value="current-month">Current Month</option>
              <option value="last-month">Last Month</option>
              <option value="current-quarter">Current Quarter</option>
              <option value="overdue-only">Overdue Only</option>
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
            <label>Amount Range</label>
            <select value={selectedAmountRange} onChange={(e) => setSelectedAmountRange(e.target.value)}>
              <option value="all">All Amounts</option>
              <option value="low">Below ₹15,000</option>
              <option value="medium">₹15,000 - ₹25,000</option>
              <option value="high">Above ₹25,000</option>
            </select>
          </div>
        </div>
      </div>

      {/* KPI Overview */}
      <div className="kpi-section">
        <div className="kpi-grid">
          <div className="kpi-card total-outstanding">
            <div className="kpi-icon">💰</div>
            <div className="kpi-content">
              <div className="kpi-value">{formatCurrency(totalOutstanding)}</div>
              <div className="kpi-label">Total Outstanding</div>
            </div>
          </div>
          <div className="kpi-card students-count">
            <div className="kpi-icon">👥</div>
            <div className="kpi-content">
              <div className="kpi-value">{filteredStudents.length}</div>
              <div className="kpi-label">Students with Dues</div>
            </div>
          </div>
          <div className="kpi-card high-risk">
            <div className="kpi-icon">🚨</div>
            <div className="kpi-content">
              <div className="kpi-value">{filteredStudents.filter(s => s.isHighRisk).length}</div>
              <div className="kpi-label">High Risk Cases</div>
            </div>
          </div>
          <div className="kpi-card avg-due">
            <div className="kpi-icon">📊</div>
            <div className="kpi-content">
              <div className="kpi-value">
                {filteredStudents.length > 0 ? formatCurrency(totalOutstanding / filteredStudents.length) : '₹0'}
              </div>
              <div className="kpi-label">Average Due</div>
            </div>
          </div>
        </div>
      </div>

      {/* Aging Buckets */}
      <div className="section">
        <h2>📊 Overdue Aging Buckets</h2>
        <div className="aging-buckets">
          <div className="bucket-card current">
            <div className="bucket-header">
              <span className="bucket-title">Current (&lt; 15 days)</span>
              <span className="bucket-count">{agingBuckets.current}</span>
            </div>
            <div className="bucket-bar">
              <div 
                className="bucket-fill current" 
                style={{ width: `${(agingBuckets.current / filteredStudents.length) * 100}%` }}
              ></div>
            </div>
          </div>
          <div className="bucket-card overdue-mild">
            <div className="bucket-header">
              <span className="bucket-title">15-30 days overdue</span>
              <span className="bucket-count">{agingBuckets.overdue15}</span>
            </div>
            <div className="bucket-bar">
              <div 
                className="bucket-fill overdue-mild" 
                style={{ width: `${(agingBuckets.overdue15 / filteredStudents.length) * 100}%` }}
              ></div>
            </div>
          </div>
          <div className="bucket-card overdue-moderate">
            <div className="bucket-header">
              <span className="bucket-title">30-60 days overdue</span>
              <span className="bucket-count">{agingBuckets.overdue30}</span>
            </div>
            <div className="bucket-bar">
              <div 
                className="bucket-fill overdue-moderate" 
                style={{ width: `${(agingBuckets.overdue30 / filteredStudents.length) * 100}%` }}
              ></div>
            </div>
          </div>
          <div className="bucket-card overdue-severe">
            <div className="bucket-header">
              <span className="bucket-title">&gt; 60 days overdue</span>
              <span className="bucket-count">{agingBuckets.overdue60}</span>
            </div>
            <div className="bucket-bar">
              <div 
                className="bucket-fill overdue-severe" 
                style={{ width: `${(agingBuckets.overdue60 / filteredStudents.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Outstanding Students List */}
      <div className="section">
        <h2>🔴 Students with Outstanding Dues</h2>
        <div className="students-table">
          <div className="table-header">
            <div className="header-cell">Student Details</div>
            <div className="header-cell">Amount Due</div>
            <div className="header-cell">Days Overdue</div>
            <div className="header-cell">Follow-up Status</div>
            <div className="header-cell">Actions</div>
          </div>
          {filteredStudents.map(student => (
            <div key={student.id} className={`table-row ${student.isHighRisk ? 'high-risk' : ''}`}>
              <div className="table-cell student-details">
                <div className="student-name">
                  {student.name}
                  {student.isHighRisk && <span className="risk-flag">🚨</span>}
                </div>
                <div className="student-meta">
                  {student.class} - {student.batch}
                </div>
                <div className="due-date">Due: {new Date(student.dueDate).toLocaleDateString()}</div>
              </div>
              <div className="table-cell amount-due">
                <div className="amount">{formatCurrency(student.amountDue)}</div>
                <div className={`aging-badge ${getAgingBucketColor(student.agingBucket)}`}>
                  {student.daysPastDue} days
                </div>
              </div>
              <div className="table-cell days-overdue">
                <div className={`overdue-count ${getAgingBucketColor(student.agingBucket)}`}>
                  {student.daysPastDue}
                </div>
              </div>
              <div className="table-cell follow-up-status">
                <div className="status-badge">
                  <span className="status-icon">{getFollowUpStatusIcon(student.followUpStatus)}</span>
                  <span className="status-text">{student.followUpStatus.replace('-', ' ')}</span>
                </div>
                {student.lastFollowUp && (
                  <div className="last-followup">
                    Last: {new Date(student.lastFollowUp).toLocaleDateString()}
                  </div>
                )}
              </div>
              <div className="table-cell actions">
                <button className="action-btn send-reminder">📱 SMS</button>
                <button className="action-btn send-email">📧 Email</button>
                <button className="action-btn call">📞 Call</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Class-wise Outstanding Summary */}
      <div className="section">
        <h2>🏫 Class/Batch-wise Outstanding Summary</h2>
        <div className="class-summary-grid">
          {filteredClassData.map((item, index) => (
            <div key={index} className="class-summary-card">
              <div className="class-summary-header">
                <h3>{item.class}</h3>
                <span className="batch-tag">{item.batch}</span>
              </div>
              <div className="summary-stats">
                <div className="stat-row">
                  <span className="stat-label">Total Students:</span>
                  <span className="stat-value">{item.totalStudents}</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">Students with Dues:</span>
                  <span className="stat-value outstanding">{item.studentsWithDues}</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">Total Outstanding:</span>
                  <span className="stat-value amount">{formatCurrency(item.totalOutstanding)}</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">Average Due:</span>
                  <span className="stat-value">{formatCurrency(item.averageDue)}</span>
                </div>
              </div>
              <div className="outstanding-percentage">
                <span>Outstanding Rate: </span>
                <span className="percentage">
                  {((item.studentsWithDues / item.totalStudents) * 100).toFixed(1)}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {filteredStudents.length === 0 && (
        <div className="no-data">
          <p>No outstanding dues found matching the selected filters.</p>
        </div>
      )}

      {/* Export Button */}
      <div className="export-section">
        <button className="export-btn">
          📊 Export Outstanding Dues Report
        </button>
      </div>
    </div>
  );
};

export default OutstandingDues;
