import React, { useState } from 'react';
import './TestResultsSummary.css';

interface TestResult {
  id: string;
  testName: string;
  examType: string;
  subject: string;
  class: string;
  batch: string;
  date: string;
  averageScore: number;
  highestScore: number;
  lowestScore: number;
  passPercentage: number;
  totalStudents: number;
  passedStudents: number;
}

interface SubjectStrength {
  subject: string;
  averageScore: number;
  trend: 'up' | 'down' | 'stable';
  trendValue: number;
}

interface TopPerformer {
  name: string;
  score: number;
  rank: number;
  subject: string;
}

interface LowPerformer {
  name: string;
  score: number;
  subject: string;
  status: 'failing' | 'low-performing';
}

const TestResultsSummary: React.FC = () => {
  const [selectedExamType, setSelectedExamType] = useState<string>('all');
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [selectedClass, setSelectedClass] = useState<string>('all');
  const [selectedBatch, setSelectedBatch] = useState<string>('all');
  const [selectedDateRange, setSelectedDateRange] = useState<string>('current-month');

  // Mock data
  const mockTestResults: TestResult[] = [
    {
      id: '1',
      testName: 'Mathematics Unit Test 1',
      examType: 'unit-test',
      subject: 'Mathematics',
      class: 'Class 12',
      batch: 'Batch A-2024',
      date: '2024-07-15',
      averageScore: 78.5,
      highestScore: 95,
      lowestScore: 42,
      passPercentage: 82.2,
      totalStudents: 45,
      passedStudents: 37
    },
    {
      id: '2',
      testName: 'Physics Midterm Exam',
      examType: 'midterm',
      subject: 'Physics',
      class: 'Class 11',
      batch: 'Batch C-2024',
      date: '2024-07-20',
      averageScore: 75.8,
      highestScore: 96,
      lowestScore: 38,
      passPercentage: 78.9,
      totalStudents: 38,
      passedStudents: 30
    },
    {
      id: '3',
      testName: 'Chemistry Final Exam',
      examType: 'final',
      subject: 'Chemistry',
      class: 'Class 12',
      batch: 'Batch B-2024',
      date: '2024-07-25',
      averageScore: 82.1,
      highestScore: 97,
      lowestScore: 45,
      passPercentage: 88.1,
      totalStudents: 42,
      passedStudents: 37
    }
  ];

  const mockSubjectStrengths: SubjectStrength[] = [
    { subject: 'Mathematics', averageScore: 78.5, trend: 'up', trendValue: 5.2 },
    { subject: 'Physics', averageScore: 75.8, trend: 'down', trendValue: -2.1 },
    { subject: 'Chemistry', averageScore: 82.1, trend: 'up', trendValue: 3.8 },
    { subject: 'Biology', averageScore: 79.3, trend: 'stable', trendValue: 0.5 }
  ];

  const mockTopPerformers: TopPerformer[] = [
    { name: 'Rahul Kumar', score: 97, rank: 1, subject: 'Chemistry' },
    { name: 'Priya Singh', score: 96, rank: 2, subject: 'Physics' },
    { name: 'Amit Patel', score: 95, rank: 3, subject: 'Mathematics' },
    { name: 'Sneha Gupta', score: 94, rank: 4, subject: 'Chemistry' },
    { name: 'Vikash Yadav', score: 93, rank: 5, subject: 'Mathematics' }
  ];

  const mockLowPerformers: LowPerformer[] = [
    { name: 'Ravi Sharma', score: 38, subject: 'Physics', status: 'failing' },
    { name: 'Pooja Mishra', score: 42, subject: 'Mathematics', status: 'failing' },
    { name: 'Suresh Kumar', score: 45, subject: 'Chemistry', status: 'failing' },
    { name: 'Anita Devi', score: 48, subject: 'Physics', status: 'low-performing' },
    { name: 'Manoj Singh', score: 52, subject: 'Mathematics', status: 'low-performing' }
  ];

  const filteredResults = mockTestResults.filter(result => {
    return (selectedExamType === 'all' || result.examType === selectedExamType) &&
           (selectedSubject === 'all' || result.subject === selectedSubject) &&
           (selectedClass === 'all' || result.class === selectedClass) &&
           (selectedBatch === 'all' || result.batch === selectedBatch);
  });

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'excellent';
    if (score >= 60) return 'good';
    return 'needs-improvement';
  };

  const getPassColor = (percentage: number) => {
    if (percentage >= 85) return 'excellent';
    if (percentage >= 70) return 'good';
    return 'needs-improvement';
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return '📈';
      case 'down': return '📉';
      default: return '➡️';
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up': return 'trend-up';
      case 'down': return 'trend-down';
      default: return 'trend-stable';
    }
  };

  return (
    <div className="test-results-summary">
      <div className="page-header">
        <h1>📝 Test & Results Summary</h1>
        <p>Consolidated summary for academic performance tracking</p>
      </div>

      {/* Filters */}
      <div className="filters-section">
        <div className="filters-grid">
          <div className="filter-group">
            <label>Exam Type</label>
            <select value={selectedExamType} onChange={(e) => setSelectedExamType(e.target.value)}>
              <option value="all">All Types</option>
              <option value="unit-test">Unit Test</option>
              <option value="midterm">Midterm</option>
              <option value="final">Final</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Subject</label>
            <select value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)}>
              <option value="all">All Subjects</option>
              <option value="Mathematics">Mathematics</option>
              <option value="Physics">Physics</option>
              <option value="Chemistry">Chemistry</option>
              <option value="Biology">Biology</option>
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

      {/* Recent Test Results */}
      <div className="section">
        <h2>📝 Recent Test/Exam Results</h2>
        <div className="test-results-grid">
          {filteredResults.map(result => (
            <div key={result.id} className="test-result-card">
              <div className="test-header">
                <h3>{result.testName}</h3>
                <div className="test-meta">
                  <span className="exam-type-badge">{result.examType}</span>
                  <span className="date">{new Date(result.date).toLocaleDateString()}</span>
                </div>
              </div>

              <div className="test-info">
                <span className="subject">{result.subject}</span>
                <span className="class-batch">{result.class} - {result.batch}</span>
              </div>

              <div className="test-metrics">
                <div className="metric">
                  <span className="label">Average:</span>
                  <span className={`value ${getScoreColor(result.averageScore)}`}>
                    {result.averageScore.toFixed(1)}%
                  </span>
                </div>
                <div className="metric">
                  <span className="label">Highest:</span>
                  <span className="value excellent">{result.highestScore}%</span>
                </div>
                <div className="metric">
                  <span className="label">Lowest:</span>
                  <span className="value needs-improvement">{result.lowestScore}%</span>
                </div>
                <div className="metric">
                  <span className="label">Pass Rate:</span>
                  <span className={`value ${getPassColor(result.passPercentage)}`}>
                    {result.passPercentage.toFixed(1)}%
                  </span>
                </div>
              </div>

              <div className="student-stats">
                <span>👥 {result.passedStudents}/{result.totalStudents} students passed</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subject-wise Strengths & Weaknesses */}
      <div className="section">
        <h2>🎯 Subject-wise Performance Analysis</h2>
        <div className="subjects-grid">
          {mockSubjectStrengths.map(subject => (
            <div key={subject.subject} className="subject-card">
              <div className="subject-header">
                <h3>{subject.subject}</h3>
                <div className={`trend-indicator ${getTrendColor(subject.trend)}`}>
                  <span className="trend-icon">{getTrendIcon(subject.trend)}</span>
                  <span className="trend-value">
                    {subject.trend === 'stable' ? '±' : subject.trend === 'up' ? '+' : ''}
                    {Math.abs(subject.trendValue).toFixed(1)}%
                  </span>
                </div>
              </div>
              <div className="subject-score">
                <span className={`score ${getScoreColor(subject.averageScore)}`}>
                  {subject.averageScore.toFixed(1)}%
                </span>
                <span className="label">Average Score</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Performers and Low Performers */}
      <div className="performers-section">
        <div className="performers-grid">
          <div className="performers-card">
            <h2>🏆 Top Performers</h2>
            <div className="performers-list">
              {mockTopPerformers.map(performer => (
                <div key={performer.rank} className="performer-item top-performer">
                  <div className="rank-badge">#{performer.rank}</div>
                  <div className="performer-info">
                    <span className="name">{performer.name}</span>
                    <span className="subject">{performer.subject}</span>
                  </div>
                  <div className="score">{performer.score}%</div>
                </div>
              ))}
            </div>
          </div>

          <div className="performers-card">
            <h2>❗ Students Needing Attention</h2>
            <div className="performers-list">
              {mockLowPerformers.map((performer, index) => (
                <div key={index} className={`performer-item low-performer ${performer.status}`}>
                  <div className={`status-badge ${performer.status}`}>
                    {performer.status === 'failing' ? '❌' : '⚠️'}
                  </div>
                  <div className="performer-info">
                    <span className="name">{performer.name}</span>
                    <span className="subject">{performer.subject}</span>
                  </div>
                  <div className="score">{performer.score}%</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Year-over-Year Comparison */}
      <div className="section">
        <h2>🧮 Year-over-Year Comparison</h2>
        <div className="comparison-card">
          <div className="comparison-metrics">
            <div className="comparison-metric">
              <span className="label">Current Year Average</span>
              <span className="value current">78.8%</span>
            </div>
            <div className="comparison-metric">
              <span className="label">Last Year Average</span>
              <span className="value previous">75.2%</span>
            </div>
            <div className="comparison-metric">
              <span className="label">Improvement</span>
              <span className="value improvement">+3.6%</span>
            </div>
          </div>
          <div className="comparison-note">
            <p>📈 Overall performance has improved by 3.6% compared to last year's batch</p>
          </div>
        </div>
      </div>

      {filteredResults.length === 0 && (
        <div className="no-data">
          <p>No test results found matching the selected filters.</p>
        </div>
      )}

      {/* Export Button */}
      <div className="export-section">
        <button className="export-btn">
          📊 Export Results Summary
        </button>
      </div>
    </div>
  );
};

export default TestResultsSummary;
