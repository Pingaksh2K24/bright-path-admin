import React, { useState } from 'react';
import './AssignmentCompliance.css';

interface AssignmentData {
  id: string;
  title: string;
  subject: string;
  class: string;
  batch: string;
  assignmentType: string;
  dueDate: string;
  totalStudents: number;
  submittedOnTime: number;
  submittedLate: number;
  notSubmitted: number;
  averageScore: number;
  status: 'pending' | 'reviewed' | 'graded';
  faculty: string;
}

interface StudentCompliance {
  name: string;
  class: string;
  totalAssignments: number;
  submitted: number;
  onTime: number;
  late: number;
  notSubmitted: number;
  averageScore: number;
  complianceRate: number;
}

interface FacultyCompliance {
  name: string;
  subject: string;
  totalAssignments: number;
  reviewed: number;
  pending: number;
  averageReviewTime: number;
  complianceRate: number;
}

const AssignmentCompliance: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [selectedClass, setSelectedClass] = useState<string>('all');
  const [selectedBatch, setSelectedBatch] = useState<string>('all');
  const [selectedDateRange, setSelectedDateRange] = useState<string>('current-month');
  const [selectedAssignmentType, setSelectedAssignmentType] = useState<string>('all');

  // Mock data
  const mockAssignmentData: AssignmentData[] = [
    {
      id: '1',
      title: 'Calculus Problem Set 1',
      subject: 'Mathematics',
      class: 'Class 12',
      batch: 'Batch A-2024',
      assignmentType: 'homework',
      dueDate: '2024-07-20',
      totalStudents: 45,
      submittedOnTime: 38,
      submittedLate: 5,
      notSubmitted: 2,
      averageScore: 78.5,
      status: 'graded',
      faculty: 'Dr. Sharma'
    },
    {
      id: '2',
      title: 'Physics Lab Report',
      subject: 'Physics',
      class: 'Class 11',
      batch: 'Batch C-2024',
      assignmentType: 'lab-work',
      dueDate: '2024-07-25',
      totalStudents: 38,
      submittedOnTime: 32,
      submittedLate: 4,
      notSubmitted: 2,
      averageScore: 82.1,
      status: 'reviewed',
      faculty: 'Prof. Kumar'
    },
    {
      id: '3',
      title: 'Chemistry Project',
      subject: 'Chemistry',
      class: 'Class 12',
      batch: 'Batch B-2024',
      assignmentType: 'project',
      dueDate: '2024-07-30',
      totalStudents: 42,
      submittedOnTime: 35,
      submittedLate: 6,
      notSubmitted: 1,
      averageScore: 85.3,
      status: 'pending',
      faculty: 'Dr. Verma'
    }
  ];

  const mockStudentCompliance: StudentCompliance[] = [
    {
      name: 'Rahul Kumar',
      class: 'Class 12',
      totalAssignments: 15,
      submitted: 14,
      onTime: 12,
      late: 2,
      notSubmitted: 1,
      averageScore: 88.5,
      complianceRate: 93.3
    },
    {
      name: 'Priya Singh',
      class: 'Class 12',
      totalAssignments: 15,
      submitted: 15,
      onTime: 15,
      late: 0,
      notSubmitted: 0,
      averageScore: 92.1,
      complianceRate: 100.0
    },
    {
      name: 'Amit Patel',
      class: 'Class 11',
      totalAssignments: 12,
      submitted: 10,
      onTime: 8,
      late: 2,
      notSubmitted: 2,
      averageScore: 75.8,
      complianceRate: 83.3
    },
    {
      name: 'Sneha Gupta',
      class: 'Class 12',
      totalAssignments: 15,
      submitted: 13,
      onTime: 11,
      late: 2,
      notSubmitted: 2,
      averageScore: 79.2,
      complianceRate: 86.7
    }
  ];

  const mockFacultyCompliance: FacultyCompliance[] = [
    {
      name: 'Dr. Sharma',
      subject: 'Mathematics',
      totalAssignments: 25,
      reviewed: 22,
      pending: 3,
      averageReviewTime: 2.5,
      complianceRate: 88.0
    },
    {
      name: 'Prof. Kumar',
      subject: 'Physics',
      totalAssignments: 20,
      reviewed: 19,
      pending: 1,
      averageReviewTime: 1.8,
      complianceRate: 95.0
    },
    {
      name: 'Dr. Verma',
      subject: 'Chemistry',
      totalAssignments: 18,
      reviewed: 15,
      pending: 3,
      averageReviewTime: 3.2,
      complianceRate: 83.3
    }
  ];

  const filteredAssignments = mockAssignmentData.filter(assignment => {
    return (selectedSubject === 'all' || assignment.subject === selectedSubject) &&
           (selectedClass === 'all' || assignment.class === selectedClass) &&
           (selectedBatch === 'all' || assignment.batch === selectedBatch) &&
           (selectedAssignmentType === 'all' || assignment.assignmentType === selectedAssignmentType);
  });

  const calculateOverallSubmissionRate = () => {
    const total = filteredAssignments.reduce((sum, assignment) => sum + assignment.totalStudents, 0);
    const submitted = filteredAssignments.reduce((sum, assignment) => 
      sum + assignment.submittedOnTime + assignment.submittedLate, 0);
    return total > 0 ? (submitted / total) * 100 : 0;
  };

  const calculateOnTimeRate = () => {
    const total = filteredAssignments.reduce((sum, assignment) => sum + assignment.totalStudents, 0);
    const onTime = filteredAssignments.reduce((sum, assignment) => sum + assignment.submittedOnTime, 0);
    return total > 0 ? (onTime / total) * 100 : 0;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'graded': return 'status-graded';
      case 'reviewed': return 'status-reviewed';
      case 'pending': return 'status-pending';
      default: return '';
    }
  };

  const getComplianceColor = (rate: number) => {
    if (rate >= 90) return 'excellent';
    if (rate >= 75) return 'good';
    return 'needs-improvement';
  };

  return (
    <div className="assignment-compliance">
      <div className="page-header">
        <h1>📚 Assignment Compliance Report</h1>
        <p>Track homework, projects, and assignment completion</p>
      </div>

      {/* Filters */}
      <div className="filters-section">
        <div className="filters-grid">
          <div className="filter-group">
            <label>Subject</label>
            <select value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)}>
              <option value="all">All Subjects</option>
              <option value="Mathematics">Mathematics</option>
              <option value="Physics">Physics</option>
              <option value="Chemistry">Chemistry</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Class</label>
            <select value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)}>
              <option value="all">All Classes</option>
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
            </select>
          </div>
          <div className="filter-group">
            <label>Assignment Type</label>
            <select value={selectedAssignmentType} onChange={(e) => setSelectedAssignmentType(e.target.value)}>
              <option value="all">All Types</option>
              <option value="homework">Homework</option>
              <option value="project">Project</option>
              <option value="lab-work">Lab Work</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Date Range</label>
            <select value={selectedDateRange} onChange={(e) => setSelectedDateRange(e.target.value)}>
              <option value="current-month">Current Month</option>
              <option value="last-month">Last Month</option>
              <option value="current-quarter">Current Quarter</option>
              <option value="last-quarter">Last Quarter</option>
            </select>
          </div>
        </div>
      </div>

      {/* Overall Statistics */}
      <div className="stats-section">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">📚</div>
            <div className="stat-content">
              <div className="stat-value">{calculateOverallSubmissionRate().toFixed(1)}%</div>
              <div className="stat-label">Overall Submission Rate</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🕒</div>
            <div className="stat-content">
              <div className="stat-value">{calculateOnTimeRate().toFixed(1)}%</div>
              <div className="stat-label">On-Time Submissions</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">⭐</div>
            <div className="stat-content">
              <div className="stat-value">
                {filteredAssignments.length > 0 
                  ? (filteredAssignments.reduce((sum, a) => sum + a.averageScore, 0) / filteredAssignments.length).toFixed(1)
                  : '0'}%
              </div>
              <div className="stat-label">Average Score</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📝</div>
            <div className="stat-content">
              <div className="stat-value">{filteredAssignments.length}</div>
              <div className="stat-label">Total Assignments</div>
            </div>
          </div>
        </div>
      </div>

      {/* Assignment Details */}
      <div className="section">
        <h2>📋 Assignment Status Overview</h2>
        <div className="assignments-grid">
          {filteredAssignments.map(assignment => (
            <div key={assignment.id} className="assignment-card">
              <div className="assignment-header">
                <h3>{assignment.title}</h3>
                <div className={`status-badge ${getStatusColor(assignment.status)}`}>
                  {assignment.status}
                </div>
              </div>

              <div className="assignment-meta">
                <span className="subject">{assignment.subject}</span>
                <span className="class-batch">{assignment.class} - {assignment.batch}</span>
                <span className="faculty">👨‍🏫 {assignment.faculty}</span>
                <span className="due-date">Due: {new Date(assignment.dueDate).toLocaleDateString()}</span>
              </div>

              <div className="submission-stats">
                <div className="submission-breakdown">
                  <div className="breakdown-item on-time">
                    <span className="count">{assignment.submittedOnTime}</span>
                    <span className="label">On Time</span>
                  </div>
                  <div className="breakdown-item late">
                    <span className="count">{assignment.submittedLate}</span>
                    <span className="label">Late</span>
                  </div>
                  <div className="breakdown-item not-submitted">
                    <span className="count">{assignment.notSubmitted}</span>
                    <span className="label">Not Submitted</span>
                  </div>
                </div>

                <div className="assignment-metrics">
                  <div className="metric">
                    <span className="metric-label">Submission Rate:</span>
                    <span className={`metric-value ${getComplianceColor(
                      ((assignment.submittedOnTime + assignment.submittedLate) / assignment.totalStudents) * 100
                    )}`}>
                      {(((assignment.submittedOnTime + assignment.submittedLate) / assignment.totalStudents) * 100).toFixed(1)}%
                    </span>
                  </div>
                  <div className="metric">
                    <span className="metric-label">Average Score:</span>
                    <span className={`metric-value ${getComplianceColor(assignment.averageScore)}`}>
                      {assignment.averageScore.toFixed(1)}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Student Compliance Tracking */}
      <div className="section">
        <h2>👥 Student Compliance Tracking</h2>
        <div className="compliance-table">
          <div className="table-header">
            <div className="header-cell">Student Name</div>
            <div className="header-cell">Class</div>
            <div className="header-cell">Total</div>
            <div className="header-cell">On Time</div>
            <div className="header-cell">Late</div>
            <div className="header-cell">Not Submitted</div>
            <div className="header-cell">Avg Score</div>
            <div className="header-cell">Compliance Rate</div>
          </div>
          {mockStudentCompliance.map((student, index) => (
            <div key={index} className="table-row">
              <div className="table-cell student-name">{student.name}</div>
              <div className="table-cell">{student.class}</div>
              <div className="table-cell">{student.totalAssignments}</div>
              <div className="table-cell on-time-count">{student.onTime}</div>
              <div className="table-cell late-count">{student.late}</div>
              <div className="table-cell not-submitted-count">{student.notSubmitted}</div>
              <div className={`table-cell ${getComplianceColor(student.averageScore)}`}>
                {student.averageScore.toFixed(1)}%
              </div>
              <div className={`table-cell ${getComplianceColor(student.complianceRate)}`}>
                {student.complianceRate.toFixed(1)}%
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Faculty Compliance Tracking */}
      <div className="section">
        <h2>👨‍🏫 Faculty Review Compliance</h2>
        <div className="faculty-compliance-grid">
          {mockFacultyCompliance.map((faculty, index) => (
            <div key={index} className="faculty-card">
              <div className="faculty-header">
                <h3>{faculty.name}</h3>
                <span className="subject-tag">{faculty.subject}</span>
              </div>
              
              <div className="faculty-metrics">
                <div className="faculty-metric">
                  <span className="metric-label">Total Assignments:</span>
                  <span className="metric-value">{faculty.totalAssignments}</span>
                </div>
                <div className="faculty-metric">
                  <span className="metric-label">Reviewed:</span>
                  <span className="metric-value reviewed">{faculty.reviewed}</span>
                </div>
                <div className="faculty-metric">
                  <span className="metric-label">Pending:</span>
                  <span className="metric-value pending">{faculty.pending}</span>
                </div>
                <div className="faculty-metric">
                  <span className="metric-label">Avg Review Time:</span>
                  <span className="metric-value">{faculty.averageReviewTime} days</span>
                </div>
                <div className="faculty-metric">
                  <span className="metric-label">Compliance Rate:</span>
                  <span className={`metric-value ${getComplianceColor(faculty.complianceRate)}`}>
                    {faculty.complianceRate.toFixed(1)}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {filteredAssignments.length === 0 && (
        <div className="no-data">
          <p>No assignments found matching the selected filters.</p>
        </div>
      )}

      {/* Export Button */}
      <div className="export-section">
        <button className="export-btn">
          📊 Export Compliance Report
        </button>
      </div>
    </div>
  );
};

export default AssignmentCompliance;
