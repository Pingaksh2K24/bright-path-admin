import React, { useState } from 'react';
import './ProgressSnapshot.css';

interface AssessmentScore {
  assessmentName: string;
  subject: string;
  date: string;
  maxMarks: number;
  obtainedMarks: number;
  percentage: number;
  grade: string;
}

interface SubjectPerformance {
  subject: string;
  averageScore: number;
  lastThreeTests: number[];
  trend: 'up' | 'down' | 'stable';
  classAverage: number;
  studentCount: number;
}

interface TopPerformer {
  id: string;
  name: string;
  rollNumber: string;
  class: string;
  batch: string;
  overallPercentage: number;
  rank: number;
  strongSubjects: string[];
}

interface LowPerformer {
  id: string;
  name: string;
  rollNumber: string;
  class: string;
  batch: string;
  overallPercentage: number;
  failingSubjects: string[];
  riskLevel: 'high' | 'medium' | 'low';
}

const ProgressSnapshot: React.FC = () => {
  const [selectedClass, setSelectedClass] = useState('all');
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [selectedExamType, setSelectedExamType] = useState('all');
  const [dateRange, setDateRange] = useState('last-3-months');

  // Mock data - in real app, this would come from API
  const [recentAssessments] = useState<AssessmentScore[]>([
    { assessmentName: 'Mid-term Exam', subject: 'React Development', date: '2024-07-15', maxMarks: 100, obtainedMarks: 85, percentage: 85.0, grade: 'A' },
    { assessmentName: 'Unit Test 3', subject: 'JavaScript Fundamentals', date: '2024-07-20', maxMarks: 50, obtainedMarks: 42, percentage: 84.0, grade: 'A' },
    { assessmentName: 'Project Assessment', subject: 'HTML/CSS', date: '2024-07-25', maxMarks: 100, obtainedMarks: 78, percentage: 78.0, grade: 'B+' },
  ]);

  const [subjectPerformance] = useState<SubjectPerformance[]>([
    { subject: 'React Development', averageScore: 82.5, lastThreeTests: [78, 85, 84], trend: 'up', classAverage: 76.2, studentCount: 28 },
    { subject: 'JavaScript Fundamentals', averageScore: 79.3, lastThreeTests: [82, 78, 78], trend: 'down', classAverage: 74.8, studentCount: 28 },
    { subject: 'HTML/CSS', averageScore: 85.1, lastThreeTests: [83, 86, 87], trend: 'up', classAverage: 79.4, studentCount: 28 },
    { subject: 'Node.js Backend', averageScore: 73.8, lastThreeTests: [71, 75, 75], trend: 'stable', classAverage: 71.2, studentCount: 28 },
    { subject: 'Database Management', averageScore: 77.2, lastThreeTests: [74, 78, 80], trend: 'up', classAverage: 73.6, studentCount: 28 },
    { subject: 'Project Management', averageScore: 88.4, lastThreeTests: [86, 89, 90], trend: 'up', classAverage: 82.1, studentCount: 28 },
  ]);

  const [topPerformers] = useState<TopPerformer[]>([
    { id: '1', name: 'Arjun Mehta', rollNumber: 'WD001', class: 'Web Development', batch: 'WD-2024A', overallPercentage: 92.5, rank: 1, strongSubjects: ['React Development', 'Project Management'] },
    { id: '2', name: 'Kavya Reddy', rollNumber: 'WD002', class: 'Web Development', batch: 'WD-2024A', overallPercentage: 89.8, rank: 2, strongSubjects: ['HTML/CSS', 'JavaScript Fundamentals'] },
    { id: '3', name: 'Rohit Gupta', rollNumber: 'WD003', class: 'Web Development', batch: 'WD-2024A', overallPercentage: 87.2, rank: 3, strongSubjects: ['Database Management', 'Node.js Backend'] },
    { id: '4', name: 'Sneha Patel', rollNumber: 'WD004', class: 'Web Development', batch: 'WD-2024A', overallPercentage: 85.6, rank: 4, strongSubjects: ['React Development', 'HTML/CSS'] },
    { id: '5', name: 'Amit Kumar', rollNumber: 'WD005', class: 'Web Development', batch: 'WD-2024A', overallPercentage: 84.3, rank: 5, strongSubjects: ['Project Management', 'JavaScript Fundamentals'] },
  ]);

  const [lowPerformers] = useState<LowPerformer[]>([
    { id: '1', name: 'Rahul Sharma', rollNumber: 'WD025', class: 'Web Development', batch: 'WD-2024A', overallPercentage: 38.5, failingSubjects: ['React Development', 'Node.js Backend', 'Database Management'], riskLevel: 'high' },
    { id: '2', name: 'Priya Singh', rollNumber: 'WD026', class: 'Web Development', batch: 'WD-2024A', overallPercentage: 42.3, failingSubjects: ['JavaScript Fundamentals', 'Node.js Backend'], riskLevel: 'high' },
    { id: '3', name: 'Vikram Joshi', rollNumber: 'WD027', class: 'Web Development', batch: 'WD-2024A', overallPercentage: 48.7, failingSubjects: ['React Development', 'Database Management'], riskLevel: 'medium' },
    { id: '4', name: 'Anjali Gupta', rollNumber: 'WD028', class: 'Web Development', batch: 'WD-2024A', overallPercentage: 52.1, failingSubjects: ['Node.js Backend'], riskLevel: 'medium' },
  ]);

  const overallAverage = subjectPerformance.reduce((sum, subject) => sum + subject.averageScore, 0) / subjectPerformance.length;
  const classAverage = subjectPerformance.reduce((sum, subject) => sum + subject.classAverage, 0) / subjectPerformance.length;

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return '📈';
      case 'down': return '📉';
      case 'stable': return '➡️';
      default: return '➡️';
    }
  };

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'A': return '#2ecc71';
      case 'A-': return '#27ae60';
      case 'B+': return '#f39c12';
      case 'B': return '#e67e22';
      case 'B-': return '#d35400';
      case 'C+': return '#e74c3c';
      case 'C': return '#c0392b';
      default: return '#95a5a6';
    }
  };

  const getPerformanceColor = (percentage: number) => {
    if (percentage >= 90) return '#2ecc71';
    if (percentage >= 80) return '#3498db';
    if (percentage >= 70) return '#f39c12';
    if (percentage >= 60) return '#e67e22';
    if (percentage >= 50) return '#e74c3c';
    return '#c0392b';
  };

  const getRiskColor = (riskLevel: string) => {
    switch (riskLevel) {
      case 'high': return '#e74c3c';
      case 'medium': return '#f39c12';
      case 'low': return '#2ecc71';
      default: return '#95a5a6';
    }
  };

  return (
    <div className="progress-snapshot">
      <div className="page-header">
        <h1>Progress Snapshot</h1>
        <p>Quick overview of student academic performance and trends</p>
      </div>

      {/* Filters */}
      <div className="filters-section">
        <div className="filters-grid">
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
            <label>Subject</label>
            <select value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)}>
              <option value="all">All Subjects</option>
              <option value="react">React Development</option>
              <option value="javascript">JavaScript Fundamentals</option>
              <option value="html-css">HTML/CSS</option>
              <option value="nodejs">Node.js Backend</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Exam/Test Type</label>
            <select value={selectedExamType} onChange={(e) => setSelectedExamType(e.target.value)}>
              <option value="all">All Types</option>
              <option value="midterm">Mid-term Exam</option>
              <option value="unit-test">Unit Test</option>
              <option value="project">Project Assessment</option>
              <option value="quiz">Quiz</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Date Range</label>
            <select value={dateRange} onChange={(e) => setDateRange(e.target.value)}>
              <option value="last-month">Last Month</option>
              <option value="last-3-months">Last 3 Months</option>
              <option value="this-semester">This Semester</option>
              <option value="custom">Custom Range</option>
            </select>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="summary-cards">
        <div className="summary-card">
          <div className="card-icon" style={{ backgroundColor: '#3498db20' }}>📊</div>
          <div className="card-content">
            <h3>Overall Average</h3>
            <div className="card-value">{overallAverage.toFixed(1)}%</div>
            <div className="card-subtitle">Student performance</div>
          </div>
        </div>
        <div className="summary-card">
          <div className="card-icon" style={{ backgroundColor: '#2ecc7120' }}>🎯</div>
          <div className="card-content">
            <h3>Class Average</h3>
            <div className="card-value">{classAverage.toFixed(1)}%</div>
            <div className="card-subtitle">Batch comparison</div>
          </div>
        </div>
        <div className="summary-card">
          <div className="card-icon" style={{ backgroundColor: '#f39c1220' }}>🏆</div>
          <div className="card-content">
            <h3>Top Performers</h3>
            <div className="card-value">{topPerformers.length}</div>
            <div className="card-subtitle">Above 80% average</div>
          </div>
        </div>
        <div className="summary-card">
          <div className="card-icon" style={{ backgroundColor: '#e74c3c20' }}>⚠️</div>
          <div className="card-content">
            <h3>At Risk</h3>
            <div className="card-value">{lowPerformers.length}</div>
            <div className="card-subtitle">Below passing grade</div>
          </div>
        </div>
      </div>

      <div className="content-grid">
        {/* Recent Assessments */}
        <div className="assessments-section">
          <div className="section-header">
            <h2>Recent Test/Exam Scores</h2>
            <span className="subtitle">Last 3 Assessments</span>
          </div>
          <div className="assessments-list">
            {recentAssessments.map((assessment, index) => (
              <div key={index} className="assessment-card">
                <div className="assessment-header">
                  <div className="assessment-info">
                    <h4>{assessment.assessmentName}</h4>
                    <p>{assessment.subject}</p>
                  </div>
                  <div className="assessment-date">
                    {new Date(assessment.date).toLocaleDateString()}
                  </div>
                </div>
                <div className="assessment-score">
                  <div className="score-display">
                    <span className="obtained">{assessment.obtainedMarks}</span>
                    <span className="separator">/</span>
                    <span className="total">{assessment.maxMarks}</span>
                  </div>
                  <div className="percentage-grade">
                    <span className="percentage" style={{ color: getPerformanceColor(assessment.percentage) }}>
                      {assessment.percentage.toFixed(1)}%
                    </span>
                    <span 
                      className="grade" 
                      style={{ 
                        backgroundColor: `${getGradeColor(assessment.grade)}20`,
                        color: getGradeColor(assessment.grade)
                      }}
                    >
                      {assessment.grade}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subject-wise Performance Chart */}
        <div className="chart-section">
          <div className="section-header">
            <h2>Subject-wise Performance</h2>
            <div className="chart-legend">
              <span className="legend-item">
                <span className="legend-color" style={{ backgroundColor: '#3498db' }}></span>
                Student Avg
              </span>
              <span className="legend-item">
                <span className="legend-color" style={{ backgroundColor: '#95a5a6' }}></span>
                Class Avg
              </span>
            </div>
          </div>
          <div className="performance-chart">
            {subjectPerformance.map((subject, index) => (
              <div key={index} className="subject-bar">
                <div className="subject-info">
                  <div className="subject-name">{subject.subject}</div>
                  <div className="trend-indicator">
                    <span className="trend-icon">{getTrendIcon(subject.trend)}</span>
                  </div>
                </div>
                <div className="bars-container">
                  <div className="bar-pair">
                    <div 
                      className="bar student-bar" 
                      style={{ 
                        width: `${subject.averageScore}%`,
                        backgroundColor: getPerformanceColor(subject.averageScore)
                      }}
                    ></div>
                    <div 
                      className="bar class-bar" 
                      style={{ width: `${subject.classAverage}%` }}
                    ></div>
                  </div>
                  <div className="score-values">
                    <span className="student-score">{subject.averageScore.toFixed(1)}%</span>
                    <span className="class-score">{subject.classAverage.toFixed(1)}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Performers Table */}
        <div className="table-section">
          <div className="section-header">
            <h2>Top Performing Students</h2>
            <button className="export-btn">Export List</button>
          </div>
          <div className="performers-table">
            <table>
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Student Name</th>
                  <th>Roll Number</th>
                  <th>Class/Batch</th>
                  <th>Overall %</th>
                  <th>Strong Subjects</th>
                </tr>
              </thead>
              <tbody>
                {topPerformers.map((student) => (
                  <tr key={student.id}>
                    <td>
                      <div className="rank-badge">#{student.rank}</div>
                    </td>
                    <td>
                      <div className="student-name">{student.name}</div>
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
                      <div className="percentage-cell">
                        <span 
                          className="percentage-value"
                          style={{ color: getPerformanceColor(student.overallPercentage) }}
                        >
                          {student.overallPercentage.toFixed(1)}%
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="subjects-tags">
                        {student.strongSubjects.map((subject, index) => (
                          <span key={index} className="subject-tag">
                            {subject}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Low Performers Table */}
        <div className="table-section">
          <div className="section-header">
            <h2>Students Needing Attention</h2>
            <button className="export-btn">Export List</button>
          </div>
          <div className="performers-table">
            <table>
              <thead>
                <tr>
                  <th>Student Name</th>
                  <th>Roll Number</th>
                  <th>Class/Batch</th>
                  <th>Overall %</th>
                  <th>Failing Subjects</th>
                  <th>Risk Level</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {lowPerformers.map((student) => (
                  <tr key={student.id}>
                    <td>
                      <div className="student-name">{student.name}</div>
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
                      <div className="percentage-cell">
                        <span 
                          className="percentage-value"
                          style={{ color: getPerformanceColor(student.overallPercentage) }}
                        >
                          {student.overallPercentage.toFixed(1)}%
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="subjects-tags">
                        {student.failingSubjects.map((subject, index) => (
                          <span key={index} className="subject-tag failing">
                            {subject}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td>
                      <span 
                        className="risk-badge" 
                        style={{ 
                          backgroundColor: `${getRiskColor(student.riskLevel)}20`,
                          color: getRiskColor(student.riskLevel)
                        }}
                      >
                        {student.riskLevel}
                      </span>
                    </td>
                    <td>
                      <button className="action-btn">Intervene</button>
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

export default ProgressSnapshot;
