import React, { useState } from 'react';
import './FeeCollectionSummary.css';

interface FeeCollectionData {
  period: string;
  totalCollected: number;
  target: number;
  cash: number;
  card: number;
  upi: number;
  bankTransfer: number;
}

interface ClassWiseCollection {
  class: string;
  batch: string;
  totalStudents: number;
  collectedAmount: number;
  targetAmount: number;
  collectionRate: number;
}

interface TrendData {
  month: string;
  collected: number;
  target: number;
}

const FeeCollectionSummary: React.FC = () => {
  const [selectedDateRange, setSelectedDateRange] = useState<string>('current-month');
  const [selectedClass, setSelectedClass] = useState<string>('all');
  const [selectedBatch, setSelectedBatch] = useState<string>('all');
  const [selectedPaymentMode, setSelectedPaymentMode] = useState<string>('all');

  // Mock data
  const mockCollectionData: FeeCollectionData = {
    period: 'July 2024',
    totalCollected: 2850000,
    target: 3200000,
    cash: 450000,
    card: 680000,
    upi: 1250000,
    bankTransfer: 470000
  };

  const mockClassWiseData: ClassWiseCollection[] = [
    {
      class: 'Class 12',
      batch: 'Batch A-2024',
      totalStudents: 45,
      collectedAmount: 675000,
      targetAmount: 720000,
      collectionRate: 93.8
    },
    {
      class: 'Class 12',
      batch: 'Batch B-2024',
      totalStudents: 42,
      collectedAmount: 630000,
      targetAmount: 672000,
      collectionRate: 93.8
    },
    {
      class: 'Class 11',
      batch: 'Batch C-2024',
      totalStudents: 38,
      collectedAmount: 532000,
      targetAmount: 608000,
      collectionRate: 87.5
    },
    {
      class: 'Class 10',
      batch: 'Batch D-2024',
      totalStudents: 50,
      collectedAmount: 700000,
      targetAmount: 800000,
      collectionRate: 87.5
    },
    {
      class: 'Class 9',
      batch: 'Batch E-2024',
      totalStudents: 48,
      collectedAmount: 576000,
      targetAmount: 672000,
      collectionRate: 85.7
    }
  ];

  const mockTrendData: TrendData[] = [
    { month: 'Jan 2024', collected: 2650000, target: 3000000 },
    { month: 'Feb 2024', collected: 2780000, target: 3100000 },
    { month: 'Mar 2024', collected: 2920000, target: 3200000 },
    { month: 'Apr 2024', collected: 2850000, target: 3200000 },
    { month: 'May 2024', collected: 2950000, target: 3300000 },
    { month: 'Jun 2024', collected: 2800000, target: 3200000 },
    { month: 'Jul 2024', collected: 2850000, target: 3200000 }
  ];

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

  const getCollectionRateColor = (rate: number) => {
    if (rate >= 95) return 'excellent';
    if (rate >= 85) return 'good';
    return 'needs-improvement';
  };

  const calculatePaymentModePercentage = (amount: number) => {
    return ((amount / mockCollectionData.totalCollected) * 100).toFixed(1);
  };

  const getTargetAchievementPercentage = () => {
    return ((mockCollectionData.totalCollected / mockCollectionData.target) * 100).toFixed(1);
  };

  return (
    <div className="fee-collection-summary">
      <div className="page-header">
        <h1>💳 Fee Collection Summary</h1>
        <p>Track revenue collection and payment sources</p>
      </div>

      {/* Filters */}
      <div className="filters-section">
        <div className="filters-grid">
          <div className="filter-group">
            <label>Date Range</label>
            <select value={selectedDateRange} onChange={(e) => setSelectedDateRange(e.target.value)}>
              <option value="today">Today</option>
              <option value="this-week">This Week</option>
              <option value="current-month">Current Month</option>
              <option value="last-month">Last Month</option>
              <option value="current-quarter">Current Quarter</option>
              <option value="current-year">Current Year</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Class</label>
            <select value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)}>
              <option value="all">All Classes</option>
              <option value="Class 9">Class 9</option>
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
              <option value="Batch E-2024">Batch E-2024</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Payment Mode</label>
            <select value={selectedPaymentMode} onChange={(e) => setSelectedPaymentMode(e.target.value)}>
              <option value="all">All Modes</option>
              <option value="cash">Cash</option>
              <option value="card">Card</option>
              <option value="upi">UPI</option>
              <option value="bank-transfer">Bank Transfer</option>
            </select>
          </div>
        </div>
      </div>

      {/* Total Collection Overview */}
      <div className="overview-section">
        <div className="overview-cards">
          <div className="overview-card total-collection">
            <div className="card-icon">📅</div>
            <div className="card-content">
              <div className="card-title">Total Collected ({mockCollectionData.period})</div>
              <div className="card-value">{formatCurrency(mockCollectionData.totalCollected)}</div>
              <div className="card-subtitle">Target: {formatCurrency(mockCollectionData.target)}</div>
            </div>
          </div>

          <div className="overview-card target-achievement">
            <div className="card-icon">🎯</div>
            <div className="card-content">
              <div className="card-title">Target Achievement</div>
              <div className="card-value">{getTargetAchievementPercentage()}%</div>
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${getTargetAchievementPercentage()}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="overview-card collection-rate">
            <div className="card-icon">📈</div>
            <div className="card-content">
              <div className="card-title">Collection Rate</div>
              <div className="card-value">89.1%</div>
              <div className="card-subtitle">Overall collection efficiency</div>
            </div>
          </div>

          <div className="overview-card pending-amount">
            <div className="card-icon">⏳</div>
            <div className="card-content">
              <div className="card-title">Pending Amount</div>
              <div className="card-value">{formatCurrency(mockCollectionData.target - mockCollectionData.totalCollected)}</div>
              <div className="card-subtitle">Yet to be collected</div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Mode Breakdown */}
      <div className="section">
        <h2>💳 Payment Mode Breakdown</h2>
        <div className="payment-modes-grid">
          <div className="payment-mode-card cash">
            <div className="payment-icon">💵</div>
            <div className="payment-content">
              <div className="payment-title">Cash</div>
              <div className="payment-amount">{formatCurrency(mockCollectionData.cash)}</div>
              <div className="payment-percentage">{calculatePaymentModePercentage(mockCollectionData.cash)}%</div>
            </div>
          </div>

          <div className="payment-mode-card card">
            <div className="payment-icon">💳</div>
            <div className="payment-content">
              <div className="payment-title">Card</div>
              <div className="payment-amount">{formatCurrency(mockCollectionData.card)}</div>
              <div className="payment-percentage">{calculatePaymentModePercentage(mockCollectionData.card)}%</div>
            </div>
          </div>

          <div className="payment-mode-card upi">
            <div className="payment-icon">📱</div>
            <div className="payment-content">
              <div className="payment-title">UPI</div>
              <div className="payment-amount">{formatCurrency(mockCollectionData.upi)}</div>
              <div className="payment-percentage">{calculatePaymentModePercentage(mockCollectionData.upi)}%</div>
            </div>
          </div>

          <div className="payment-mode-card bank-transfer">
            <div className="payment-icon">🏦</div>
            <div className="payment-content">
              <div className="payment-title">Bank Transfer</div>
              <div className="payment-amount">{formatCurrency(mockCollectionData.bankTransfer)}</div>
              <div className="payment-percentage">{calculatePaymentModePercentage(mockCollectionData.bankTransfer)}%</div>
            </div>
          </div>
        </div>
      </div>

      {/* Class/Batch-wise Collection */}
      <div className="section">
        <h2>🏫 Class/Batch-wise Fee Collection</h2>
        <div className="class-wise-grid">
          {filteredClassData.map((item, index) => (
            <div key={index} className="class-card">
              <div className="class-header">
                <h3>{item.class}</h3>
                <span className="batch-tag">{item.batch}</span>
              </div>

              <div className="class-stats">
                <div className="stat-item">
                  <span className="stat-label">Students:</span>
                  <span className="stat-value">{item.totalStudents}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Collected:</span>
                  <span className="stat-value">{formatCurrency(item.collectedAmount)}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Target:</span>
                  <span className="stat-value">{formatCurrency(item.targetAmount)}</span>
                </div>
              </div>

              <div className="collection-progress">
                <div className="progress-header">
                  <span>Collection Rate</span>
                  <span className={`rate ${getCollectionRateColor(item.collectionRate)}`}>
                    {item.collectionRate.toFixed(1)}%
                  </span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${item.collectionRate}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Collection Trend */}
      <div className="section">
        <h2>📈 Monthly Collection Trend</h2>
        <div className="trend-chart">
          <div className="chart-container">
            {mockTrendData.map((data, index) => (
              <div key={index} className="trend-bar">
                <div className="bar-container">
                  <div 
                    className="bar collected" 
                    style={{ height: `${(data.collected / 3500000) * 100}%` }}
                    title={`Collected: ${formatCurrency(data.collected)}`}
                  ></div>
                  <div 
                    className="bar target" 
                    style={{ height: `${(data.target / 3500000) * 100}%` }}
                    title={`Target: ${formatCurrency(data.target)}`}
                  ></div>
                </div>
                <div className="bar-label">{data.month.split(' ')[0]}</div>
                <div className="bar-values">
                  <div className="collected-value">{formatCurrency(data.collected / 100000)}L</div>
                  <div className="target-value">{formatCurrency(data.target / 100000)}L</div>
                </div>
              </div>
            ))}
          </div>
          <div className="chart-legend">
            <div className="legend-item">
              <div className="legend-color collected"></div>
              <span>Collected</span>
            </div>
            <div className="legend-item">
              <div className="legend-color target"></div>
              <span>Target</span>
            </div>
          </div>
        </div>
      </div>

      {filteredClassData.length === 0 && (
        <div className="no-data">
          <p>No fee collection data found matching the selected filters.</p>
        </div>
      )}

      {/* Export Button */}
      <div className="export-section">
        <button className="export-btn">
          📊 Export Collection Report
        </button>
      </div>
    </div>
  );
};

export default FeeCollectionSummary;
