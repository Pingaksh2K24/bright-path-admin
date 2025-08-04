import React, { useState, useEffect } from 'react';
import './EnrollmentTrends.css';

interface EnrollmentData {
  month: string;
  newEnrollments: number;
  activeStudents: number;
  withdrawnStudents: number;
}

interface ClassEnrollment {
  className: string;
  batchName: string;
  enrolled: number;
  capacity: number;
  percentage: number;
}

interface AdmissionSource {
  source: string;
  count: number;
  percentage: number;
  color: string;
}

const EnrollmentTrends: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState('2024');
  const [selectedMonth, setSelectedMonth] = useState('all');
  const [selectedClass, setSelectedClass] = useState('all');
  const [selectedBatch, setSelectedBatch] = useState('all');
  const [selectedSource, setSelectedSource] = useState('all');

  // Mock data - in real app, this would come from API
  const [enrollmentData] = useState<EnrollmentData[]>([
    { month: 'Jan', newEnrollments: 45, activeStudents: 320, withdrawnStudents: 8 },
    { month: 'Feb', newEnrollments: 52, activeStudents: 364, withdrawnStudents: 12 },
    { month: 'Mar', newEnrollments: 38, activeStudents: 390, withdrawnStudents: 15 },
    { month: 'Apr', newEnrollments: 41, activeStudents: 416, withdrawnStudents: 9 },
    { month: 'May', newEnrollments: 35, activeStudents: 442, withdrawnStudents: 11 },
    { month: 'Jun', newEnrollments: 48, activeStudents: 479, withdrawnStudents: 7 },
    { month: 'Jul', newEnrollments: 55, activeStudents: 527, withdrawnStudents: 13 },
    { month: 'Aug', newEnrollments: 42, activeStudents: 556, withdrawnStudents: 10 },
  ]);

  const [classEnrollments] = useState<ClassEnrollment[]>([
    { className: 'Web Development', batchName: 'WD-2024A', enrolled: 28, capacity: 30, percentage: 93.3 },
    { className: 'Web Development', batchName: 'WD-2024B', enrolled: 25, capacity: 30, percentage: 83.3 },
    { className: 'Data Science', batchName: 'DS-2024A', enrolled: 22, capacity: 25, percentage: 88.0 },
    { className: 'Digital Marketing', batchName: 'DM-2024A', enrolled: 30, capacity: 35, percentage: 85.7 },
    { className: 'UI/UX Design', batchName: 'UX-2024A', enrolled: 18, capacity: 20, percentage: 90.0 },
    { className: 'Python Programming', batchName: 'PY-2024A', enrolled: 24, capacity: 25, percentage: 96.0 },
  ]);

  const [admissionSources] = useState<AdmissionSource[]>([
    { source: 'Referral', count: 145, percentage: 35.2, color: '#3498db' },
    { source: 'Walk-in', count: 98, percentage: 23.8, color: '#2ecc71' },
    { source: 'Online Enquiry', count: 87, percentage: 21.1, color: '#e74c3c' },
    { source: 'Social Media', count: 52, percentage: 12.6, color: '#f39c12' },
    { source: 'Website', count: 30, percentage: 7.3, color: '#9b59b6' },
  ]);

  const totalEnrollments = enrollmentData.reduce((sum, data) => sum + data.newEnrollments, 0);
  const totalActive = enrollmentData[enrollmentData.length - 1]?.activeStudents || 0;
  const totalWithdrawn = enrollmentData.reduce((sum, data) => sum + data.withdrawnStudents, 0);

  const maxEnrollment = Math.max(...enrollmentData.map(d => d.newEnrollments));

  return (
    <div className="enrollment-trends">
      <div className="page-header">
        <h1>Enrollment Trends</h1>
        <p>Track admission patterns and enrollment statistics</p>
      </div>

      {/* Filters */}
      <div className="filters-section">
        <div className="filters-grid">
          <div className="filter-group">
            <label>Year</label>
            <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Month</label>
            <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
              <option value="all">All Months</option>
              <option value="jan">January</option>
              <option value="feb">February</option>
              <option value="mar">March</option>
              <option value="apr">April</option>
              <option value="may">May</option>
              <option value="jun">June</option>
              <option value="jul">July</option>
              <option value="aug">August</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Class</label>
            <select value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)}>
              <option value="all">All Classes</option>
              <option value="web-dev">Web Development</option>
              <option value="data-science">Data Science</option>
              <option value="digital-marketing">Digital Marketing</option>
              <option value="ui-ux">UI/UX Design</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Admission Source</label>
            <select value={selectedSource} onChange={(e) => setSelectedSource(e.target.value)}>
              <option value="all">All Sources</option>
              <option value="referral">Referral</option>
              <option value="walk-in">Walk-in</option>
              <option value="online">Online Enquiry</option>
              <option value="social">Social Media</option>
            </select>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="summary-cards">
        <div className="summary-card">
          <div className="card-icon" style={{ backgroundColor: '#3498db20' }}>📈</div>
          <div className="card-content">
            <h3>Total New Enrollments</h3>
            <div className="card-value">{totalEnrollments}</div>
            <div className="card-subtitle">This year</div>
          </div>
        </div>
        <div className="summary-card">
          <div className="card-icon" style={{ backgroundColor: '#2ecc7120' }}>👥</div>
          <div className="card-content">
            <h3>Active Students</h3>
            <div className="card-value">{totalActive}</div>
            <div className="card-subtitle">Currently enrolled</div>
          </div>
        </div>
        <div className="summary-card">
          <div className="card-icon" style={{ backgroundColor: '#e74c3c20' }}>📉</div>
          <div className="card-content">
            <h3>Withdrawn Students</h3>
            <div className="card-value">{totalWithdrawn}</div>
            <div className="card-subtitle">This year</div>
          </div>
        </div>
        <div className="summary-card">
          <div className="card-icon" style={{ backgroundColor: '#f39c1220' }}>📊</div>
          <div className="card-content">
            <h3>Retention Rate</h3>
            <div className="card-value">{((totalActive / (totalActive + totalWithdrawn)) * 100).toFixed(1)}%</div>
            <div className="card-subtitle">Active vs Total</div>
          </div>
        </div>
      </div>

      <div className="content-grid">
        {/* Monthly Enrollment Trends Chart */}
        <div className="chart-section">
          <div className="section-header">
            <h2>Monthly Enrollment Trends</h2>
            <div className="chart-legend">
              <span className="legend-item">
                <span className="legend-color" style={{ backgroundColor: '#3498db' }}></span>
                New Enrollments
              </span>
              <span className="legend-item">
                <span className="legend-color" style={{ backgroundColor: '#e74c3c' }}></span>
                Withdrawals
              </span>
            </div>
          </div>
          <div className="bar-chart">
            {enrollmentData.map((data, index) => (
              <div key={index} className="bar-group">
                <div className="bars">
                  <div 
                    className="bar enrollment-bar" 
                    style={{ 
                      height: `${(data.newEnrollments / maxEnrollment) * 100}%`,
                      backgroundColor: '#3498db'
                    }}
                    title={`${data.newEnrollments} new enrollments`}
                  ></div>
                  <div 
                    className="bar withdrawal-bar" 
                    style={{ 
                      height: `${(data.withdrawnStudents / maxEnrollment) * 100}%`,
                      backgroundColor: '#e74c3c'
                    }}
                    title={`${data.withdrawnStudents} withdrawals`}
                  ></div>
                </div>
                <div className="bar-label">{data.month}</div>
                <div className="bar-values">
                  <span className="enrollment-value">+{data.newEnrollments}</span>
                  <span className="withdrawal-value">-{data.withdrawnStudents}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Admission Sources Pie Chart */}
        <div className="chart-section">
          <div className="section-header">
            <h2>Admission Sources</h2>
          </div>
          <div className="pie-chart-container">
            <div className="pie-chart">
              {admissionSources.map((source, index) => {
                const angle = (source.percentage / 100) * 360;
                const prevAngles = admissionSources.slice(0, index).reduce((sum, s) => sum + (s.percentage / 100) * 360, 0);
                return (
                  <div
                    key={source.source}
                    className="pie-slice"
                    style={{
                      '--angle': `${angle}deg`,
                      '--start-angle': `${prevAngles}deg`,
                      backgroundColor: source.color,
                    } as React.CSSProperties}
                    title={`${source.source}: ${source.count} (${source.percentage}%)`}
                  ></div>
                );
              })}
            </div>
            <div className="pie-legend">
              {admissionSources.map((source) => (
                <div key={source.source} className="pie-legend-item">
                  <span className="legend-color" style={{ backgroundColor: source.color }}></span>
                  <span className="legend-text">{source.source}</span>
                  <span className="legend-value">{source.count} ({source.percentage}%)</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Class-wise Enrollment Table */}
        <div className="table-section full-width">
          <div className="section-header">
            <h2>Class & Batch-wise Enrollment</h2>
            <button className="export-btn">Export Data</button>
          </div>
          <div className="enrollment-table">
            <table>
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Batch</th>
                  <th>Enrolled</th>
                  <th>Capacity</th>
                  <th>Utilization</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {classEnrollments.map((enrollment, index) => (
                  <tr key={index}>
                    <td>{enrollment.className}</td>
                    <td>
                      <span className="batch-tag">{enrollment.batchName}</span>
                    </td>
                    <td>{enrollment.enrolled}</td>
                    <td>{enrollment.capacity}</td>
                    <td>
                      <div className="progress-bar">
                        <div 
                          className="progress-fill" 
                          style={{ width: `${enrollment.percentage}%` }}
                        ></div>
                        <span className="progress-text">{enrollment.percentage.toFixed(1)}%</span>
                      </div>
                    </td>
                    <td>
                      <span className={`status-badge ${enrollment.percentage >= 90 ? 'full' : enrollment.percentage >= 70 ? 'good' : 'low'}`}>
                        {enrollment.percentage >= 90 ? 'Nearly Full' : enrollment.percentage >= 70 ? 'Good' : 'Available'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentTrends;
