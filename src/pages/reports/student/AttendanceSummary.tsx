import React, { useState } from 'react';
import './AttendanceSummary.css';

interface AttendanceData {
  date: string;
  day: string;
  overallAttendance: number;
  totalStudents: number;
  presentStudents: number;
}

interface ClassAttendance {
  className: string;
  batchName: string;
  totalStudents: number;
  averageAttendance: number;
  thisMonth: number;
  lastMonth: number;
  trend: 'up' | 'down' | 'stable';
}

interface FlaggedStudent {
  id: string;
  name: string;
  rollNumber: string;
  class: string;
  batch: string;
  attendancePercentage: number;
  daysAbsent: number;
  lastAttended: string;
  riskLevel: 'high' | 'medium' | 'low';
}

interface FacultyAttendance {
  facultyName: string;
  subject: string;
  classesScheduled: number;
  classesCompleted: number;
  attendanceRate: number;
  avgStudentAttendance: number;
}

const AttendanceSummary: React.FC = () => {
  const [dateRange, setDateRange] = useState('last-30-days');
  const [selectedClass, setSelectedClass] = useState('all');
  const [selectedBatch, setSelectedBatch] = useState('all');
  const [selectedGender, setSelectedGender] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock data - in real app, this would come from API
  const [attendanceData] = useState<AttendanceData[]>([
    { date: '2024-07-25', day: 'Thu', overallAttendance: 87.5, totalStudents: 320, presentStudents: 280 },
    { date: '2024-07-26', day: 'Fri', overallAttendance: 82.3, totalStudents: 320, presentStudents: 263 },
    { date: '2024-07-29', day: 'Mon', overallAttendance: 89.1, totalStudents: 320, presentStudents: 285 },
    { date: '2024-07-30', day: 'Tue', overallAttendance: 91.2, totalStudents: 320, presentStudents: 292 },
    { date: '2024-07-31', day: 'Wed', overallAttendance: 88.7, totalStudents: 320, presentStudents: 284 },
    { date: '2024-08-01', day: 'Thu', overallAttendance: 85.9, totalStudents: 320, presentStudents: 275 },
  ]);

  const [classAttendance] = useState<ClassAttendance[]>([
    { className: 'Web Development', batchName: 'WD-2024A', totalStudents: 28, averageAttendance: 89.5, thisMonth: 89.5, lastMonth: 87.2, trend: 'up' },
    { className: 'Web Development', batchName: 'WD-2024B', totalStudents: 25, averageAttendance: 82.1, thisMonth: 82.1, lastMonth: 85.3, trend: 'down' },
    { className: 'Data Science', batchName: 'DS-2024A', totalStudents: 22, averageAttendance: 91.8, thisMonth: 91.8, lastMonth: 90.5, trend: 'up' },
    { className: 'Digital Marketing', batchName: 'DM-2024A', totalStudents: 30, averageAttendance: 86.7, thisMonth: 86.7, lastMonth: 86.9, trend: 'stable' },
    { className: 'UI/UX Design', batchName: 'UX-2024A', totalStudents: 18, averageAttendance: 93.2, thisMonth: 93.2, lastMonth: 91.8, trend: 'up' },
    { className: 'Python Programming', batchName: 'PY-2024A', totalStudents: 24, averageAttendance: 88.4, thisMonth: 88.4, lastMonth: 89.1, trend: 'down' },
  ]);

  const [flaggedStudents] = useState<FlaggedStudent[]>([
    { id: '1', name: 'Rahul Sharma', rollNumber: 'WD001', class: 'Web Development', batch: 'WD-2024A', attendancePercentage: 68.5, daysAbsent: 12, lastAttended: '2024-07-28', riskLevel: 'high' },
    { id: '2', name: 'Priya Singh', rollNumber: 'DS002', class: 'Data Science', batch: 'DS-2024A', attendancePercentage: 72.3, daysAbsent: 8, lastAttended: '2024-07-30', riskLevel: 'medium' },
    { id: '3', name: 'Amit Kumar', rollNumber: 'DM003', class: 'Digital Marketing', batch: 'DM-2024A', attendancePercentage: 65.2, daysAbsent: 15, lastAttended: '2024-07-25', riskLevel: 'high' },
    { id: '4', name: 'Sneha Patel', rollNumber: 'UX004', class: 'UI/UX Design', batch: 'UX-2024A', attendancePercentage: 74.1, daysAbsent: 7, lastAttended: '2024-07-31', riskLevel: 'medium' },
    { id: '5', name: 'Rohit Gupta', rollNumber: 'PY005', class: 'Python Programming', batch: 'PY-2024A', attendancePercentage: 61.8, daysAbsent: 18, lastAttended: '2024-07-26', riskLevel: 'high' },
  ]);

  const [facultyAttendance] = useState<FacultyAttendance[]>([
    { facultyName: 'Dr. Rajesh Kumar', subject: 'React Development', classesScheduled: 20, classesCompleted: 19, attendanceRate: 95.0, avgStudentAttendance: 89.5 },
    { facultyName: 'Prof. Meera Shah', subject: 'Data Analytics', classesScheduled: 18, classesCompleted: 17, attendanceRate: 94.4, avgStudentAttendance: 91.8 },
    { facultyName: 'Mr. Arjun Patel', subject: 'Digital Strategy', classesScheduled: 15, classesCompleted: 14, attendanceRate: 93.3, avgStudentAttendance: 86.7 },
    { facultyName: 'Ms. Kavya Reddy', subject: 'UI Design', classesScheduled: 16, classesCompleted: 16, attendanceRate: 100.0, avgStudentAttendance: 93.2 },
  ]);

  const overallAttendance = attendanceData.reduce((sum, data) => sum + data.overallAttendance, 0) / attendanceData.length;
  const totalStudents = attendanceData[0]?.totalStudents || 0;
  const flaggedCount = flaggedStudents.length;
  const highRiskCount = flaggedStudents.filter(s => s.riskLevel === 'high').length;

  const maxAttendance = Math.max(...attendanceData.map(d => d.overallAttendance));
  const minAttendance = Math.min(...attendanceData.map(d => d.overallAttendance));

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return '📈';
      case 'down': return '📉';
      case 'stable': return '➡️';
      default: return '➡️';
    }
  };

  const getRiskColor = (riskLevel: string) => {
    switch (riskLevel) {
      case 'high': return '#e74c3c';
      case 'medium': return '#f39c12';
      case 'low': return '#2ecc71';
      default: return '#95a5a6';
    }
  };

  const getAttendanceColor = (percentage: number) => {
    if (percentage >= 90) return '#2ecc71';
    if (percentage >= 80) return '#f39c12';
    if (percentage >= 70) return '#e67e22';
    return '#e74c3c';
  };

  return (
    <div className="attendance-summary">
      <div className="page-header">
        <h1>Attendance Summary</h1>
        <p>Track student regularity and identify attendance patterns</p>
      </div>

      {/* Filters */}
      <div className="filters-section">
        <div className="filters-grid">
          <div className="filter-group">
            <label>Date Range</label>
            <select value={dateRange} onChange={(e) => setDateRange(e.target.value)}>
              <option value="last-7-days">Last 7 Days</option>
              <option value="last-30-days">Last 30 Days</option>
              <option value="this-month">This Month</option>
              <option value="last-month">Last Month</option>
              <option value="custom">Custom Range</option>
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
            <label>Batch</label>
            <select value={selectedBatch} onChange={(e) => setSelectedBatch(e.target.value)}>
              <option value="all">All Batches</option>
              <option value="2024a">2024-A</option>
              <option value="2024b">2024-B</option>
              <option value="2024c">2024-C</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Gender</label>
            <select value={selectedGender} onChange={(e) => setSelectedGender(e.target.value)}>
              <option value="all">All</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Category</label>
            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
              <option value="all">All Categories</option>
              <option value="general">General</option>
              <option value="obc">OBC</option>
              <option value="sc">SC</option>
              <option value="st">ST</option>
            </select>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="summary-cards">
        <div className="summary-card">
          <div className="card-icon" style={{ backgroundColor: '#3498db20' }}>📊</div>
          <div className="card-content">
            <h3>Overall Attendance</h3>
            <div className="card-value">{overallAttendance.toFixed(1)}%</div>
            <div className="card-subtitle">Average attendance</div>
          </div>
        </div>
        <div className="summary-card">
          <div className="card-icon" style={{ backgroundColor: '#2ecc7120' }}>👥</div>
          <div className="card-content">
            <h3>Total Students</h3>
            <div className="card-value">{totalStudents}</div>
            <div className="card-subtitle">Active enrollment</div>
          </div>
        </div>
        <div className="summary-card">
          <div className="card-icon" style={{ backgroundColor: '#e74c3c20' }}>🚨</div>
          <div className="card-content">
            <h3>Flagged Students</h3>
            <div className="card-value">{flaggedCount}</div>
            <div className="card-subtitle">&lt; 75% attendance</div>
          </div>
        </div>
        <div className="summary-card">
          <div className="card-icon" style={{ backgroundColor: '#f39c1220' }}>⚠️</div>
          <div className="card-content">
            <h3>High Risk</h3>
            <div className="card-value">{highRiskCount}</div>
            <div className="card-subtitle">Critical attention needed</div>
          </div>
        </div>
      </div>

      <div className="content-grid">
        {/* Daily Attendance Trends */}
        <div className="chart-section">
          <div className="section-header">
            <h2>Daily Attendance Trends</h2>
            <div className="chart-legend">
              <span className="legend-item">
                <span className="legend-color" style={{ backgroundColor: '#3498db' }}></span>
                Attendance %
              </span>
            </div>
          </div>
          <div className="line-chart">
            <div className="chart-grid">
              {attendanceData.map((data, index) => (
                <div key={index} className="chart-point">
                  <div 
                    className="point" 
                    style={{ 
                      bottom: `${((data.overallAttendance - minAttendance) / (maxAttendance - minAttendance)) * 100}%`,
                      backgroundColor: getAttendanceColor(data.overallAttendance)
                    }}
                    title={`${data.overallAttendance}% attendance on ${data.date}`}
                  ></div>
                  <div className="point-label">
                    <div className="date">{data.day}</div>
                    <div className="percentage">{data.overallAttendance.toFixed(1)}%</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Class-wise Attendance Comparison */}
        <div className="chart-section">
          <div className="section-header">
            <h2>Class-wise Performance</h2>
            <div className="comparison-legend">
              <span className="legend-item">
                <span className="legend-color" style={{ backgroundColor: '#3498db' }}></span>
                This Month
              </span>
              <span className="legend-item">
                <span className="legend-color" style={{ backgroundColor: '#95a5a6' }}></span>
                Last Month
              </span>
            </div>
          </div>
          <div className="comparison-chart">
            {classAttendance.map((classData, index) => (
              <div key={index} className="comparison-bar">
                <div className="class-info">
                  <div className="class-name">{classData.className}</div>
                  <div className="batch-name">{classData.batchName}</div>
                </div>
                <div className="bars-container">
                  <div className="bar-pair">
                    <div 
                      className="bar current-month" 
                      style={{ width: `${classData.thisMonth}%` }}
                    ></div>
                    <div 
                      className="bar last-month" 
                      style={{ width: `${classData.lastMonth}%` }}
                    ></div>
                  </div>
                  <div className="trend-indicator">
                    <span className="trend-icon">{getTrendIcon(classData.trend)}</span>
                    <span className="attendance-value">{classData.thisMonth.toFixed(1)}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Flagged Students Table */}
        <div className="table-section full-width">
          <div className="section-header">
            <h2>Students with Low Attendance (&lt; 75%)</h2>
            <button className="export-btn">Export List</button>
          </div>
          <div className="flagged-table">
            <table>
              <thead>
                <tr>
                  <th>Student Name</th>
                  <th>Roll Number</th>
                  <th>Class/Batch</th>
                  <th>Attendance %</th>
                  <th>Days Absent</th>
                  <th>Last Attended</th>
                  <th>Risk Level</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {flaggedStudents.map((student) => (
                  <tr key={student.id}>
                    <td>
                      <div className="student-info">
                        <div className="student-name">{student.name}</div>
                      </div>
                    </td>
                    <td>
                      <span className="roll-number">{student.rollNumber}</span>
                    </td>
                    <td>
                      <div className="class-batch">
                        <div className="class-name">{student.class}</div>
                        <div className="batch-name">{student.batch}</div>
                      </div>
                    </td>
                    <td>
                      <div className="attendance-cell">
                        <div 
                          className="attendance-bar" 
                          style={{ width: `${student.attendancePercentage}%`, backgroundColor: getAttendanceColor(student.attendancePercentage) }}
                        ></div>
                        <span className="attendance-text">{student.attendancePercentage.toFixed(1)}%</span>
                      </div>
                    </td>
                    <td>{student.daysAbsent} days</td>
                    <td>{new Date(student.lastAttended).toLocaleDateString()}</td>
                    <td>
                      <span 
                        className="risk-badge" 
                        style={{
                          backgroundColor: getRiskColor(student.riskLevel),
                          color: getRiskColor(student.riskLevel)
                        }}
                      >
                        {student.riskLevel}
                      </span>
                    </td>
                    <td>
                      <button className="action-btn">Contact</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Faculty-wise Attendance Tracking */}
        <div className="table-section full-width">
          <div className="section-header">
            <h2>Faculty-wise Attendance Tracking</h2>
            <button className="export-btn">Export Report</button>
          </div>
          <div className="faculty-table">
            <table>
              <thead>
                <tr>
                  <th>Faculty Name</th>
                  <th>Subject</th>
                  <th>Classes Scheduled</th>
                  <th>Classes Completed</th>
                  <th>Faculty Attendance</th>
                  <th>Avg Student Attendance</th>
                  <th>Performance</th>
                </tr>
              </thead>
              <tbody>
                {facultyAttendance.map((faculty, index) => (
                  <tr key={index}>
                    <td>
                      <div className="faculty-name">{faculty.facultyName}</div>
                    </td>
                    <td>{faculty.subject}</td>
                    <td>{faculty.classesScheduled}</td>
                    <td>{faculty.classesCompleted}</td>
                    <td>
                      <div className="attendance-cell">
                        <div 
                          className="attendance-bar" 
                          style={{ width: `${faculty.attendanceRate}%`, backgroundColor: getAttendanceColor(faculty.attendanceRate) }}
                        ></div>
                        <span className="attendance-text">{faculty.attendanceRate.toFixed(1)}%</span>
                      </div>
                    </td>
                    <td>
                      <div className="attendance-cell">
                        <div 
                          className="attendance-bar" 
                          style={{ width: `${faculty.avgStudentAttendance}%`, backgroundColor: getAttendanceColor(faculty.avgStudentAttendance) }}
                        ></div>
                        <span className="attendance-text">{faculty.avgStudentAttendance.toFixed(1)}%</span>
                      </div>
                    </td>
                    <td>
                      <span className={`performance-badge ${faculty.attendanceRate >= 95 ? 'excellent' : faculty.attendanceRate >= 90 ? 'good' : 'needs-improvement'}`}>
                        {faculty.attendanceRate >= 95 ? 'Excellent' : faculty.attendanceRate >= 90 ? 'Good' : 'Needs Improvement'}
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

export default AttendanceSummary;
