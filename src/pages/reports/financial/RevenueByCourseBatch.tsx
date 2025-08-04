import React, { useState } from 'react';
import './RevenueByCourseBatch.css';

interface CourseRevenue {
  courseId: string;
  courseName: string;
  totalStudents: number;
  totalCollected: number;
  totalOutstanding: number;
  refundsGiven: number;
  netRevenue: number;
  targetRevenue: number;
  profitMargin: number;
  averageFeePerStudent: number;
  collectionRate: number;
}

interface BatchRevenue {
  batchId: string;
  batchName: string;
  course: string;
  class: string;
  totalStudents: number;
  totalCollected: number;
  totalOutstanding: number;
  refundsGiven: number;
  netRevenue: number;
  targetRevenue: number;
  profitability: 'high' | 'medium' | 'low';
  faculty?: string;
}

interface MonthlyRevenue {
  month: string;
  collected: number;
  outstanding: number;
  refunds: number;
  netRevenue: number;
}

const RevenueByCourseBatch: React.FC = () => {
  const [selectedDateRange, setSelectedDateRange] = useState<string>('current-year');
  const [selectedCourse, setSelectedCourse] = useState<string>('all');
  const [selectedBatch, setSelectedBatch] = useState<string>('all');
  const [selectedFaculty, setSelectedFaculty] = useState<string>('all');
  const [viewType, setViewType] = useState<'course' | 'batch'>('course');

  // Mock data
  const mockCourseRevenue: CourseRevenue[] = [
    {
      courseId: '1',
      courseName: 'JEE Main + Advanced',
      totalStudents: 120,
      totalCollected: 12000000,
      totalOutstanding: 1800000,
      refundsGiven: 200000,
      netRevenue: 11800000,
      targetRevenue: 13000000,
      profitMargin: 65.2,
      averageFeePerStudent: 100000,
      collectionRate: 87.0
    },
    {
      courseId: '2',
      courseName: 'NEET Preparation',
      totalStudents: 95,
      totalCollected: 8500000,
      totalOutstanding: 950000,
      refundsGiven: 150000,
      netRevenue: 8350000,
      targetRevenue: 9000000,
      profitMargin: 72.1,
      averageFeePerStudent: 95000,
      collectionRate: 89.9
    },
    {
      courseId: '3',
      courseName: 'Class 12 Board Prep',
      totalStudents: 80,
      totalCollected: 4800000,
      totalOutstanding: 400000,
      refundsGiven: 100000,
      netRevenue: 4700000,
      targetRevenue: 5200000,
      profitMargin: 68.5,
      averageFeePerStudent: 65000,
      collectionRate: 92.3
    },
    {
      courseId: '4',
      courseName: 'Foundation Course',
      totalStudents: 60,
      totalCollected: 2400000,
      totalOutstanding: 300000,
      refundsGiven: 50000,
      netRevenue: 2350000,
      targetRevenue: 2700000,
      profitMargin: 58.9,
      averageFeePerStudent: 45000,
      collectionRate: 88.9
    }
  ];

  const mockBatchRevenue: BatchRevenue[] = [
    {
      batchId: '1',
      batchName: 'Batch A-2024',
      course: 'JEE Main + Advanced',
      class: 'Class 12',
      totalStudents: 45,
      totalCollected: 4500000,
      totalOutstanding: 675000,
      refundsGiven: 75000,
      netRevenue: 4425000,
      targetRevenue: 4800000,
      profitability: 'high',
      faculty: 'Dr. Sharma'
    },
    {
      batchId: '2',
      batchName: 'Batch B-2024',
      course: 'JEE Main + Advanced',
      class: 'Class 12',
      totalStudents: 42,
      totalCollected: 4200000,
      totalOutstanding: 630000,
      refundsGiven: 60000,
      netRevenue: 4140000,
      targetRevenue: 4500000,
      profitability: 'high',
      faculty: 'Prof. Kumar'
    },
    {
      batchId: '3',
      batchName: 'Batch C-2024',
      course: 'NEET Preparation',
      class: 'Class 11',
      totalStudents: 38,
      totalCollected: 3420000,
      totalOutstanding: 380000,
      refundsGiven: 57000,
      netRevenue: 3363000,
      targetRevenue: 3600000,
      profitability: 'medium',
      faculty: 'Dr. Patel'
    },
    {
      batchId: '4',
      batchName: 'Batch D-2024',
      course: 'Class 12 Board Prep',
      class: 'Class 12',
      totalStudents: 50,
      totalCollected: 3000000,
      totalOutstanding: 250000,
      refundsGiven: 50000,
      netRevenue: 2950000,
      targetRevenue: 3250000,
      profitability: 'medium',
      faculty: 'Mrs. Singh'
    },
    {
      batchId: '5',
      batchName: 'Batch E-2024',
      course: 'Foundation Course',
      class: 'Class 10',
      totalStudents: 35,
      totalCollected: 1400000,
      totalOutstanding: 175000,
      refundsGiven: 25000,
      netRevenue: 1375000,
      targetRevenue: 1575000,
      profitability: 'low',
      faculty: 'Mr. Gupta'
    }
  ];

  const mockMonthlyRevenue: MonthlyRevenue[] = [
    { month: 'Jan 2024', collected: 2800000, outstanding: 420000, refunds: 35000, netRevenue: 2765000 },
    { month: 'Feb 2024', collected: 3200000, outstanding: 480000, refunds: 40000, netRevenue: 3160000 },
    { month: 'Mar 2024', collected: 2900000, outstanding: 435000, refunds: 45000, netRevenue: 2855000 },
    { month: 'Apr 2024', collected: 3500000, outstanding: 525000, refunds: 50000, netRevenue: 3450000 },
    { month: 'May 2024', collected: 3100000, outstanding: 465000, refunds: 38000, netRevenue: 3062000 },
    { month: 'Jun 2024', collected: 3300000, outstanding: 495000, refunds: 42000, netRevenue: 3258000 }
  ];

  const filteredCourseRevenue = mockCourseRevenue.filter(course => {
    return selectedCourse === 'all' || course.courseName === selectedCourse;
  });

  const filteredBatchRevenue = mockBatchRevenue.filter(batch => {
    return (selectedCourse === 'all' || batch.course === selectedCourse) &&
           (selectedBatch === 'all' || batch.batchName === selectedBatch) &&
           (selectedFaculty === 'all' || batch.faculty === selectedFaculty);
  });

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const getProfitabilityColor = (profitability: string) => {
    switch (profitability) {
      case 'high': return 'high-profit';
      case 'medium': return 'medium-profit';
      case 'low': return 'low-profit';
      default: return '';
    }
  };

  const calculateTotalMetrics = () => {
    const data = viewType === 'course' ? filteredCourseRevenue : filteredBatchRevenue;
    return {
      totalCollected: data.reduce((sum, item) => sum + item.totalCollected, 0),
      totalOutstanding: data.reduce((sum, item) => sum + item.totalOutstanding, 0),
      totalRefunds: data.reduce((sum, item) => sum + item.refundsGiven, 0),
      totalNetRevenue: data.reduce((sum, item) => sum + item.netRevenue, 0)
    };
  };

  const totalMetrics = calculateTotalMetrics();

  return (
    <div className="revenue-by-course-batch">
      <div className="page-header">
        <h1>💰 Revenue by Course & Batch Report</h1>
        <p>Analyze profitability and revenue streams</p>
        <div className="access-note">
          🔒 <em>Access restricted to Admin/Finance users only</em>
        </div>
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
            <label>Course</label>
            <select value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)}>
              <option value="all">All Courses</option>
              <option value="JEE Main + Advanced">JEE Main + Advanced</option>
              <option value="NEET Preparation">NEET Preparation</option>
              <option value="Class 12 Board Prep">Class 12 Board Prep</option>
              <option value="Foundation Course">Foundation Course</option>
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
              <option value="Batch E-2024">Batch E-2024</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Faculty (Optional)</label>
            <select value={selectedFaculty} onChange={(e) => setSelectedFaculty(e.target.value)}>
              <option value="all">All Faculty</option>
              <option value="Dr. Sharma">Dr. Sharma</option>
              <option value="Prof. Kumar">Prof. Kumar</option>
              <option value="Dr. Patel">Dr. Patel</option>
              <option value="Mrs. Singh">Mrs. Singh</option>
              <option value="Mr. Gupta">Mr. Gupta</option>
            </select>
          </div>
          <div className="filter-group">
            <label>View Type</label>
            <select value={viewType} onChange={(e) => setViewType(e.target.value as 'course' | 'batch')}>
              <option value="course">By Course</option>
              <option value="batch">By Batch</option>
            </select>
          </div>
        </div>
      </div>

      {/* KPI Overview */}
      <div className="kpi-section">
        <div className="kpi-grid">
          <div className="kpi-card total-collected">
            <div className="kpi-icon">💰</div>
            <div className="kpi-content">
              <div className="kpi-value">{formatCurrency(totalMetrics.totalCollected)}</div>
              <div className="kpi-label">Total Collected</div>
            </div>
          </div>
          <div className="kpi-card total-outstanding">
            <div className="kpi-icon">⏳</div>
            <div className="kpi-content">
              <div className="kpi-value">{formatCurrency(totalMetrics.totalOutstanding)}</div>
              <div className="kpi-label">Total Outstanding</div>
            </div>
          </div>
          <div className="kpi-card total-refunds">
            <div className="kpi-icon">↩️</div>
            <div className="kpi-content">
              <div className="kpi-value">{formatCurrency(totalMetrics.totalRefunds)}</div>
              <div className="kpi-label">Refunds Given</div>
            </div>
          </div>
          <div className="kpi-card net-revenue">
            <div className="kpi-icon">📈</div>
            <div className="kpi-content">
              <div className="kpi-value">{formatCurrency(totalMetrics.totalNetRevenue)}</div>
              <div className="kpi-label">Net Revenue</div>
            </div>
          </div>
        </div>
      </div>

      {/* Monthly Revenue Trend */}
      <div className="section">
        <h2>📊 Monthly Revenue Trend</h2>
        <div className="revenue-trend-chart">
          <div className="chart-container">
            {mockMonthlyRevenue.map((month, index) => (
              <div key={index} className="trend-bar">
                <div className="bar-stack">
                  <div 
                    className="bar-segment collected" 
                    style={{ height: `${(month.collected / 4000000) * 100}%` }}
                    title={`Collected: ${formatCurrency(month.collected)}`}
                  ></div>
                  <div 
                    className="bar-segment outstanding" 
                    style={{ height: `${(month.outstanding / 4000000) * 100}%` }}
                    title={`Outstanding: ${formatCurrency(month.outstanding)}`}
                  ></div>
                </div>
                <div className="trend-label">{month.month}</div>
                <div className="trend-value">{formatCurrency(month.netRevenue)}</div>
              </div>
            ))}
          </div>
          <div className="trend-legend">
            <div className="legend-item">
              <div className="legend-color collected"></div>
              <span>Collected</span>
            </div>
            <div className="legend-item">
              <div className="legend-color outstanding"></div>
              <span>Outstanding</span>
            </div>
          </div>
        </div>
      </div>

      {/* Revenue Data Table */}
      <div className="section">
        <h2>{viewType === 'course' ? '📚 Course-wise Revenue' : '🏫 Batch-wise Revenue'}</h2>
        <div className="revenue-table">
          <div className="table-header">
            <div className="header-cell">{viewType === 'course' ? 'Course' : 'Batch'} Details</div>
            <div className="header-cell">Students</div>
            <div className="header-cell">Revenue Metrics</div>
            <div className="header-cell">Collection Rate</div>
            <div className="header-cell">Profitability</div>
          </div>
          
          {viewType === 'course' ? (
            filteredCourseRevenue.map(course => (
              <div key={course.courseId} className="table-row">
                <div className="table-cell course-details">
                  <div className="course-name">{course.courseName}</div>
                  <div className="course-meta">
                    Avg Fee: {formatCurrency(course.averageFeePerStudent)}
                  </div>
                </div>
                <div className="table-cell students-info">
                  <div className="student-count">{course.totalStudents}</div>
                  <div className="student-label">Students</div>
                </div>
                <div className="table-cell revenue-metrics">
                  <div className="metric-row">
                    <span className="metric-label">Collected:</span>
                    <span className="metric-value collected">{formatCurrency(course.totalCollected)}</span>
                  </div>
                  <div className="metric-row">
                    <span className="metric-label">Outstanding:</span>
                    <span className="metric-value outstanding">{formatCurrency(course.totalOutstanding)}</span>
                  </div>
                  <div className="metric-row">
                    <span className="metric-label">Refunds:</span>
                    <span className="metric-value refunds">{formatCurrency(course.refundsGiven)}</span>
                  </div>
                  <div className="metric-row net">
                    <span className="metric-label">Net Revenue:</span>
                    <span className="metric-value net-revenue">{formatCurrency(course.netRevenue)}</span>
                  </div>
                </div>
                <div className="table-cell collection-rate">
                  <div className="rate-percentage">{course.collectionRate.toFixed(1)}%</div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${course.collectionRate}%` }}
                    ></div>
                  </div>
                  <div className="target-comparison">
                    Target: {formatCurrency(course.targetRevenue)}
                  </div>
                </div>
                <div className="table-cell profitability">
                  <div className="profit-margin">{course.profitMargin.toFixed(1)}%</div>
                  <div className="profit-label">Profit Margin</div>
                  <div className={`profit-status ${course.profitMargin > 70 ? 'high-profit' : course.profitMargin > 60 ? 'medium-profit' : 'low-profit'}`}>
                    {course.profitMargin > 70 ? 'High' : course.profitMargin > 60 ? 'Medium' : 'Low'}
                  </div>
                </div>
              </div>
            ))
          ) : (
            filteredBatchRevenue.map(batch => (
              <div key={batch.batchId} className="table-row">
                <div className="table-cell batch-details">
                  <div className="batch-name">{batch.batchName}</div>
                  <div className="batch-meta">
                    {batch.course} - {batch.class}
                  </div>
                  {batch.faculty && (
                    <div className="faculty-info">Faculty: {batch.faculty}</div>
                  )}
                </div>
                <div className="table-cell students-info">
                  <div className="student-count">{batch.totalStudents}</div>
                  <div className="student-label">Students</div>
                </div>
                <div className="table-cell revenue-metrics">
                  <div className="metric-row">
                    <span className="metric-label">Collected:</span>
                    <span className="metric-value collected">{formatCurrency(batch.totalCollected)}</span>
                  </div>
                  <div className="metric-row">
                    <span className="metric-label">Outstanding:</span>
                    <span className="metric-value outstanding">{formatCurrency(batch.totalOutstanding)}</span>
                  </div>
                  <div className="metric-row">
                    <span className="metric-label">Refunds:</span>
                    <span className="metric-value refunds">{formatCurrency(batch.refundsGiven)}</span>
                  </div>
                  <div className="metric-row net">
                    <span className="metric-label">Net Revenue:</span>
                    <span className="metric-value net-revenue">{formatCurrency(batch.netRevenue)}</span>
                  </div>
                </div>
                <div className="table-cell collection-rate">
                  <div className="rate-percentage">
                    {((batch.totalCollected / (batch.totalCollected + batch.totalOutstanding)) * 100).toFixed(1)}%
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${(batch.totalCollected / (batch.totalCollected + batch.totalOutstanding)) * 100}%` }}
                    ></div>
                  </div>
                  <div className="target-comparison">
                    Target: {formatCurrency(batch.targetRevenue)}
                  </div>
                </div>
                <div className="table-cell profitability">
                  <div className={`profitability-badge ${getProfitabilityColor(batch.profitability)}`}>
                    {batch.profitability.charAt(0).toUpperCase() + batch.profitability.slice(1)}
                  </div>
                  <div className="revenue-vs-target">
                    {((batch.netRevenue / batch.targetRevenue) * 100).toFixed(1)}% of target
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {(filteredCourseRevenue.length === 0 && viewType === 'course') || 
       (filteredBatchRevenue.length === 0 && viewType === 'batch') ? (
        <div className="no-data">
          <p>No revenue data found matching the selected filters.</p>
        </div>
      ) : null}

      {/* Export Button */}
      <div className="export-section">
        <button className="export-btn">
          📊 Export Revenue Analysis Report
        </button>
      </div>
    </div>
  );
};

export default RevenueByCourseBatch;
