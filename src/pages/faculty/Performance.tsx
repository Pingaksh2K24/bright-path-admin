import React, { useState } from 'react';
import './Performance.css';

interface PerformanceRecord {
  id: number;
  facultyName: string;
  batch: string;
  subject: string;
  studentFeedback: string;
  studentRating: number;
  adminNotes: string;
  adminRating: number;
  feedbackDate: string;
  status: string;
}

const Performance: React.FC = () => {
  const [selectedFaculty, setSelectedFaculty] = useState('');
  const [selectedBatch, setSelectedBatch] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [showAddFeedback, setShowAddFeedback] = useState(false);

  const faculties = ['All Faculty', 'Dr. Rajesh Kumar', 'Prof. Priya Sharma', 'Dr. Amit Patel', 'Ms. Sneha Verma', 'Mr. Deepak Sharma', 'Dr. Meena Joshi'];
  const batches = ['All Batches', 'JEE-2025', 'NEET-2025', 'JEE-2026', 'NEET-2026'];
  const statuses = ['All Status', 'Pending Review', 'Reviewed', 'Action Required'];

  const performanceRecords: PerformanceRecord[] = [
    { id: 1, facultyName: 'Dr. Rajesh Kumar', batch: 'JEE-2025', subject: 'Mathematics', studentFeedback: 'Excellent teaching methodology, very clear explanations', studentRating: 5, adminNotes: 'Consistently high performance, recommended for advanced batches', adminRating: 5, feedbackDate: '20-Jul-2024', status: 'Reviewed' },
    { id: 2, facultyName: 'Dr. Rajesh Kumar', batch: 'NEET-2025', subject: 'Mathematics', studentFeedback: 'Good teacher, but sometimes rushes through topics', studentRating: 4, adminNotes: 'Good performance, needs to pace better', adminRating: 4, feedbackDate: '19-Jul-2024', status: 'Reviewed' },
    { id: 3, facultyName: 'Prof. Priya Sharma', batch: 'JEE-2025', subject: 'Physics', studentFeedback: 'Amazing teacher, makes complex topics simple', studentRating: 5, adminNotes: 'Outstanding performance, excellent student engagement', adminRating: 5, feedbackDate: '18-Jul-2024', status: 'Reviewed' },
    { id: 4, facultyName: 'Prof. Priya Sharma', batch: 'NEET-2025', subject: 'Physics', studentFeedback: 'Very knowledgeable, good practical examples', studentRating: 4, adminNotes: 'Good performance, continue current approach', adminRating: 4, feedbackDate: '17-Jul-2024', status: 'Reviewed' },
    { id: 5, facultyName: 'Dr. Amit Patel', batch: 'JEE-2025', subject: 'Chemistry', studentFeedback: 'Needs improvement in explaining organic chemistry', studentRating: 3, adminNotes: 'Requires additional training in organic chemistry', adminRating: 3, feedbackDate: '16-Jul-2024', status: 'Action Required' },
    { id: 6, facultyName: 'Dr. Amit Patel', batch: 'NEET-2025', subject: 'Chemistry', studentFeedback: 'Good inorganic chemistry teacher', studentRating: 4, adminNotes: 'Strong in inorganic, needs organic chemistry support', adminRating: 3, feedbackDate: '15-Jul-2024', status: 'Action Required' },
    { id: 7, facultyName: 'Ms. Sneha Verma', batch: 'NEET-2025', subject: 'Biology', studentFeedback: 'Excellent biology teacher, very patient', studentRating: 5, adminNotes: 'Excellent performance, highly recommended', adminRating: 5, feedbackDate: '14-Jul-2024', status: 'Reviewed' },
    { id: 8, facultyName: 'Mr. Deepak Sharma', batch: 'JEE-2025', subject: 'English', studentFeedback: 'Good communication skills, helpful', studentRating: 4, adminNotes: 'Good performance, continue current methods', adminRating: 4, feedbackDate: '13-Jul-2024', status: 'Reviewed' },
    { id: 9, facultyName: 'Mr. Deepak Sharma', batch: 'NEET-2025', subject: 'English', studentFeedback: 'Average teaching, needs more practice exercises', studentRating: 3, adminNotes: 'Needs improvement in practice material preparation', adminRating: 3, feedbackDate: '12-Jul-2024', status: 'Pending Review' },
    { id: 10, facultyName: 'Dr. Meena Joshi', batch: 'JEE-2025', subject: 'Computer Science', studentFeedback: 'Very technical and knowledgeable', studentRating: 4, adminNotes: 'Good technical knowledge, needs better student interaction', adminRating: 4, feedbackDate: '11-Jul-2024', status: 'Reviewed' },
  ];

  const filteredRecords = performanceRecords.filter(record => {
    const matchesFaculty = selectedFaculty === '' || selectedFaculty === 'All Faculty' || record.facultyName === selectedFaculty;
    const matchesBatch = selectedBatch === '' || selectedBatch === 'All Batches' || record.batch === selectedBatch;
    const matchesStatus = selectedStatus === '' || selectedStatus === 'All Status' || record.status === selectedStatus;
    return matchesFaculty && matchesBatch && matchesStatus;
  });

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Reviewed':
        return 'status-reviewed';
      case 'Pending Review':
        return 'status-pending';
      case 'Action Required':
        return 'status-action';
      default:
        return '';
    }
  };

  const getRatingStars = (rating: number) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  const getRatingClass = (rating: number) => {
    if (rating >= 4.5) return 'rating-excellent';
    if (rating >= 4) return 'rating-good';
    if (rating >= 3) return 'rating-average';
    return 'rating-poor';
  };

  const getPerformanceStats = () => {
    const totalRecords = performanceRecords.length;
    const avgStudentRating = performanceRecords.reduce((sum, r) => sum + r.studentRating, 0) / totalRecords;
    const avgAdminRating = performanceRecords.reduce((sum, r) => sum + r.adminRating, 0) / totalRecords;
    const reviewedCount = performanceRecords.filter(r => r.status === 'Reviewed').length;
    const actionRequiredCount = performanceRecords.filter(r => r.status === 'Action Required').length;

    return { totalRecords, avgStudentRating, avgAdminRating, reviewedCount, actionRequiredCount };
  };

  const stats = getPerformanceStats();

  const handleAddFeedback = () => {
    setShowAddFeedback(true);
  };

  const handleExportReport = () => {
    // Here you would implement export functionality
    alert('Performance report exported successfully!');
  };

  return (
    <div className="performance-container">
      <div className="performance-header">
        <h1 className="performance-title">Performance Feedback</h1>
        <p className="performance-subtitle">Student feedback and admin evaluation for faculty performance</p>
      </div>

      {/* Summary Cards */}
      <div className="summary-cards">
        <div className="summary-card">
          <div className="summary-label">Total Feedback</div>
          <div className="summary-value blue">{stats.totalRecords}</div>
        </div>
        <div className="summary-card">
          <div className="summary-label">Avg Student Rating</div>
          <div className="summary-value green">{stats.avgStudentRating.toFixed(1)}/5</div>
        </div>
        <div className="summary-card">
          <div className="summary-label">Avg Admin Rating</div>
          <div className="summary-value orange">{stats.avgAdminRating.toFixed(1)}/5</div>
        </div>
        <div className="summary-card">
          <div className="summary-label">Action Required</div>
          <div className="summary-value red">{stats.actionRequiredCount}</div>
        </div>
      </div>

      {/* Controls */}
      <div className="controls-section">
        <div className="controls-grid">
          <div className="control-group">
            <label className="control-label">Filter by Faculty</label>
            <select
              value={selectedFaculty}
              onChange={(e) => setSelectedFaculty(e.target.value)}
              className="control-select"
            >
              {faculties.map(faculty => (
                <option key={faculty} value={faculty}>{faculty}</option>
              ))}
            </select>
          </div>
          <div className="control-group">
            <label className="control-label">Filter by Batch</label>
            <select
              value={selectedBatch}
              onChange={(e) => setSelectedBatch(e.target.value)}
              className="control-select"
            >
              {batches.map(batch => (
                <option key={batch} value={batch}>{batch}</option>
              ))}
            </select>
          </div>
          <div className="control-group">
            <label className="control-label">Filter by Status</label>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="control-select"
            >
              {statuses.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </div>
          <div className="control-group">
            <button className="add-feedback-button" onClick={handleAddFeedback}>
              ➕ Add Feedback
            </button>
          </div>
          <div className="control-group">
            <button className="export-report-button" onClick={handleExportReport}>
              📊 Export Report
            </button>
          </div>
        </div>
      </div>

      {/* Performance Table */}
      <div className="table-container">
        <div className="table-header">
          <h2 className="table-title">Performance Records</h2>
          <div className="table-count">Total Records: {filteredRecords.length}</div>
        </div>
        <div className="table-wrapper">
          <table className="performance-table">
            <thead>
              <tr>
                <th>Faculty Name</th>
                <th>Batch & Subject</th>
                <th>Student Feedback</th>
                <th>Student Rating</th>
                <th>Admin Notes</th>
                <th>Admin Rating</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredRecords.map(record => (
                <tr key={record.id}>
                  <td className="faculty-name-cell">{record.facultyName}</td>
                  <td className="batch-subject-cell">
                    <div className="batch-name">{record.batch}</div>
                    <div className="subject-name">{record.subject}</div>
                  </td>
                  <td className="feedback-cell">
                    <div className="feedback-text">{record.studentFeedback}</div>
                  </td>
                  <td className="rating-cell">
                    <div className={`rating-stars ${getRatingClass(record.studentRating)}`}>
                      {getRatingStars(record.studentRating)}
                    </div>
                    <div className="rating-number">{record.studentRating}/5</div>
                  </td>
                  <td className="notes-cell">
                    <div className="notes-text">{record.adminNotes}</div>
                  </td>
                  <td className="rating-cell">
                    <div className={`rating-stars ${getRatingClass(record.adminRating)}`}>
                      {getRatingStars(record.adminRating)}
                    </div>
                    <div className="rating-number">{record.adminRating}/5</div>
                  </td>
                  <td>
                    <span className={`status-badge ${getStatusClass(record.status)}`}>
                      {record.status}
                    </span>
                  </td>
                  <td className="actions-cell">
                    <button className="action-button view-button">View</button>
                    <button className="action-button edit-button">Edit</button>
                    <button className="action-button review-button">Review</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Feedback Modal */}
      {showAddFeedback && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Add Performance Feedback</h3>
              <button 
                className="modal-close"
                onClick={() => setShowAddFeedback(false)}
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label className="form-label">Select Faculty</label>
                <select className="form-select">
                  {faculties.slice(1).map(faculty => (
                    <option key={faculty} value={faculty}>{faculty}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Batch</label>
                <select className="form-select">
                  {batches.slice(1).map(batch => (
                    <option key={batch} value={batch}>{batch}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Subject</label>
                <input type="text" className="form-input" placeholder="Enter subject" />
              </div>
              <div className="form-group">
                <label className="form-label">Student Feedback</label>
                <textarea className="form-textarea" rows={3} placeholder="Enter student feedback..."></textarea>
              </div>
              <div className="form-group">
                <label className="form-label">Student Rating (1-5)</label>
                <input type="number" className="form-input" min="1" max="5" placeholder="Enter rating" />
              </div>
              <div className="form-group">
                <label className="form-label">Admin Notes</label>
                <textarea className="form-textarea" rows={3} placeholder="Enter admin notes..."></textarea>
              </div>
              <div className="form-group">
                <label className="form-label">Admin Rating (1-5)</label>
                <input type="number" className="form-input" min="1" max="5" placeholder="Enter rating" />
              </div>
            </div>
            <div className="modal-footer">
              <button className="modal-button cancel-button" onClick={() => setShowAddFeedback(false)}>
                Cancel
              </button>
              <button className="modal-button save-button">
                Add Feedback
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Performance; 