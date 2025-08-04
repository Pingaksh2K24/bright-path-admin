import React, { useState } from 'react';
import './BatchComparison.css';

interface BatchData {
  id: string;
  name: string;
  class: string;
  subject: string;
  faculty: string;
  avgTestScore: number;
  attendanceRate: number;
  syllabusCompletion: number;
  feedbackScore: number;
  dropoutCount: number;
  transferCount: number;
  totalStudents: number;
  topPerformers: { name: string; score: number }[];
  bottomPerformers: { name: string; score: number }[];
}

const BatchComparison: React.FC = () => {
  const [selectedClass, setSelectedClass] = useState<string>('all');
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [selectedFaculty, setSelectedFaculty] = useState<string>('all');
  const [selectedPeriod, setSelectedPeriod] = useState<string>('current-month');
  const [selectedBatch, setSelectedBatch] = useState<string>('all');

  // Mock data
  const mockBatchData: BatchData[] = [
    {
      id: '1',
      name: 'Batch A-2024',
      class: 'Class 12',
      subject: 'Mathematics',
      faculty: 'Dr. Sharma',
      avgTestScore: 78.5,
      attendanceRate: 92.3,
      syllabusCompletion: 85.0,
      feedbackScore: 4.2,
      dropoutCount: 2,
      transferCount: 1,
      totalStudents: 45,
      topPerformers: [
        { name: 'Rahul Kumar', score: 95 },
        { name: 'Priya Singh', score: 93 },
        { name: 'Amit Patel', score: 91 },
        { name: 'Sneha Gupta', score: 89 },
        { name: 'Vikash Yadav', score: 87 }
      ],
      bottomPerformers: [
        { name: 'Ravi Sharma', score: 45 },
        { name: 'Pooja Mishra', score: 48 },
        { name: 'Suresh Kumar', score: 52 },
        { name: 'Anita Devi', score: 55 },
        { name: 'Manoj Singh', score: 58 }
      ]
    },
    {
      id: '2',
      name: 'Batch B-2024',
      class: 'Class 12',
      subject: 'Mathematics',
      faculty: 'Dr. Sharma',
      avgTestScore: 82.1,
      attendanceRate: 89.7,
      syllabusCompletion: 88.5,
      feedbackScore: 4.4,
      dropoutCount: 1,
      transferCount: 0,
      totalStudents: 42,
      topPerformers: [
        { name: 'Deepak Verma', score: 97 },
        { name: 'Kavita Sharma', score: 94 },
        { name: 'Rohit Gupta', score: 92 },
        { name: 'Sunita Yadav', score: 90 },
        { name: 'Ajay Kumar', score: 88 }
      ],
      bottomPerformers: [
        { name: 'Ramesh Singh', score: 48 },
        { name: 'Geeta Devi', score: 51 },
        { name: 'Mukesh Kumar', score: 54 },
        { name: 'Sita Sharma', score: 57 },
        { name: 'Rajesh Yadav', score: 60 }
      ]
    },
    {
      id: '3',
      name: 'Batch C-2024',
      class: 'Class 11',
      subject: 'Physics',
      faculty: 'Prof. Kumar',
      avgTestScore: 75.8,
      attendanceRate: 94.1,
      syllabusCompletion: 82.3,
      feedbackScore: 4.1,
      dropoutCount: 3,
      transferCount: 2,
      totalStudents: 38,
      topPerformers: [
        { name: 'Arjun Patel', score: 96 },
        { name: 'Meera Singh', score: 92 },
        { name: 'Karan Sharma', score: 90 },
        { name: 'Ritu Gupta', score: 87 },
        { name: 'Sanjay Kumar', score: 85 }
      ],
      bottomPerformers: [
        { name: 'Mohan Yadav', score: 42 },
        { name: 'Radha Devi', score: 46 },
        { name: 'Sunil Kumar', score: 49 },
        { name: 'Lata Sharma', score: 53 },
        { name: 'Dinesh Singh', score: 56 }
      ]
    }
  ];

  const filteredData = mockBatchData.filter(batch => {
    return (selectedClass === 'all' || batch.class === selectedClass) &&
           (selectedSubject === 'all' || batch.subject === selectedSubject) &&
           (selectedFaculty === 'all' || batch.faculty === selectedFaculty) &&
           (selectedBatch === 'all' || batch.name === selectedBatch);
  });

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'excellent';
    if (score >= 60) return 'good';
    return 'needs-improvement';
  };

  const getAttendanceColor = (rate: number) => {
    if (rate >= 90) return 'excellent';
    if (rate >= 75) return 'good';
    return 'needs-improvement';
  };

  return (
    <div className="batch-comparison">
      <div className="page-header">
        <h1>📊 Batch Comparison Report</h1>
        <p>Compare different batches for consistency and quality check</p>
      </div>

      {/* Filters */}
      <div className="filters-section">
        <div className="filters-grid">
          <div className="filter-group">
            <label>Class</label>
            <select value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)}>
              <option value="all">All Classes</option>
              <option value="Class 11">Class 11</option>
              <option value="Class 12">Class 12</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Subject</label>
            <select value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)}>
              <option value="all">All Subjects</option>
              <option value="Mathematics">Mathematics</option>
              <option value="Physics">Physics</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Faculty</label>
            <select value={selectedFaculty} onChange={(e) => setSelectedFaculty(e.target.value)}>
              <option value="all">All Faculty</option>
              <option value="Dr. Sharma">Dr. Sharma</option>
              <option value="Prof. Kumar">Prof. Kumar</option>
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
            <label>Time Period</label>
            <select value={selectedPeriod} onChange={(e) => setSelectedPeriod(e.target.value)}>
              <option value="current-month">Current Month</option>
              <option value="last-month">Last Month</option>
              <option value="current-quarter">Current Quarter</option>
              <option value="last-quarter">Last Quarter</option>
            </select>
          </div>
        </div>
      </div>

      {/* Batch Comparison Cards */}
      <div className="batch-cards-grid">
        {filteredData.map(batch => (
          <div key={batch.id} className="batch-card">
            <div className="batch-header">
              <h3>{batch.name}</h3>
              <div className="batch-meta">
                <span className="class-badge">{batch.class}</span>
                <span className="subject-badge">{batch.subject}</span>
              </div>
            </div>

            <div className="faculty-info">
              <span className="faculty-name">👨‍🏫 {batch.faculty}</span>
              <span className="student-count">👥 {batch.totalStudents} Students</span>
            </div>

            {/* Key Metrics */}
            <div className="metrics-grid">
              <div className="metric-card">
                <div className="metric-header">
                  <span className="metric-icon">📊</span>
                  <span className="metric-title">Avg Test Score</span>
                </div>
                <div className={`metric-value ${getScoreColor(batch.avgTestScore)}`}>
                  {batch.avgTestScore.toFixed(1)}%
                </div>
              </div>

              <div className="metric-card">
                <div className="metric-header">
                  <span className="metric-icon">✅</span>
                  <span className="metric-title">Attendance</span>
                </div>
                <div className={`metric-value ${getAttendanceColor(batch.attendanceRate)}`}>
                  {batch.attendanceRate.toFixed(1)}%
                </div>
              </div>

              <div className="metric-card">
                <div className="metric-header">
                  <span className="metric-icon">📘</span>
                  <span className="metric-title">Syllabus Complete</span>
                </div>
                <div className="metric-value">
                  {batch.syllabusCompletion.toFixed(1)}%
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${batch.syllabusCompletion}%` }}
                  ></div>
                </div>
              </div>

              <div className="metric-card">
                <div className="metric-header">
                  <span className="metric-icon">⭐</span>
                  <span className="metric-title">Feedback Score</span>
                </div>
                <div className="metric-value">
                  {batch.feedbackScore.toFixed(1)}/5.0
                </div>
              </div>

              <div className="metric-card">
                <div className="metric-header">
                  <span className="metric-icon">🔄</span>
                  <span className="metric-title">Dropouts</span>
                </div>
                <div className="metric-value dropout-count">
                  {batch.dropoutCount}
                </div>
              </div>

              <div className="metric-card">
                <div className="metric-header">
                  <span className="metric-icon">↔️</span>
                  <span className="metric-title">Transfers</span>
                </div>
                <div className="metric-value">
                  {batch.transferCount}
                </div>
              </div>
            </div>

            {/* Top and Bottom Performers */}
            <div className="performers-section">
              <div className="performers-grid">
                <div className="performers-card">
                  <h4>🎯 Top 5 Performers</h4>
                  <div className="performers-list">
                    {batch.topPerformers.map((student, index) => (
                      <div key={index} className="performer-item top-performer">
                        <span className="rank">#{index + 1}</span>
                        <span className="name">{student.name}</span>
                        <span className="score">{student.score}%</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="performers-card">
                  <h4>📉 Bottom 5 Performers</h4>
                  <div className="performers-list">
                    {batch.bottomPerformers.map((student, index) => (
                      <div key={index} className="performer-item bottom-performer">
                        <span className="rank">#{batch.totalStudents - 4 + index}</span>
                        <span className="name">{student.name}</span>
                        <span className="score">{student.score}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredData.length === 0 && (
        <div className="no-data">
          <p>No batches found matching the selected filters.</p>
        </div>
      )}

      {/* Export Button */}
      <div className="export-section">
        <button className="export-btn">
          📊 Export Comparison Report
        </button>
      </div>
    </div>
  );
};

export default BatchComparison;
