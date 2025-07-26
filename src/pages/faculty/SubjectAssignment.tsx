import React, { useState } from 'react';
import './SubjectAssignment.css';

interface SubjectAssignment {
  id: number;
  facultyName: string;
  subject: string;
  batch: string;
  assignedDate: string;
  status: string;
  totalClasses: number;
  completedClasses: number;
}

const SubjectAssignment: React.FC = () => {
  const [selectedFaculty, setSelectedFaculty] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedBatch, setSelectedBatch] = useState('');
  const [showAssignForm, setShowAssignForm] = useState(false);

  const faculties = ['All Faculty', 'Dr. Rajesh Kumar', 'Prof. Priya Sharma', 'Dr. Amit Patel', 'Ms. Sneha Verma', 'Mr. Deepak Sharma', 'Dr. Meena Joshi'];
  const subjects = ['All Subjects', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'Computer Science'];
  const batches = ['All Batches', 'JEE-2025', 'NEET-2025', 'JEE-2026', 'NEET-2026'];

  const assignments: SubjectAssignment[] = [
    { id: 1, facultyName: 'Dr. Rajesh Kumar', subject: 'Mathematics', batch: 'JEE-2025', assignedDate: '15-Jan-2024', status: 'Active', totalClasses: 120, completedClasses: 85 },
    { id: 2, facultyName: 'Dr. Rajesh Kumar', subject: 'Mathematics', batch: 'NEET-2025', assignedDate: '20-Jan-2024', status: 'Active', totalClasses: 100, completedClasses: 72 },
    { id: 3, facultyName: 'Prof. Priya Sharma', subject: 'Physics', batch: 'JEE-2025', assignedDate: '18-Jan-2024', status: 'Active', totalClasses: 120, completedClasses: 78 },
    { id: 4, facultyName: 'Prof. Priya Sharma', subject: 'Physics', batch: 'NEET-2025', assignedDate: '22-Jan-2024', status: 'Active', totalClasses: 100, completedClasses: 65 },
    { id: 5, facultyName: 'Dr. Amit Patel', subject: 'Chemistry', batch: 'JEE-2025', assignedDate: '16-Jan-2024', status: 'Active', totalClasses: 120, completedClasses: 82 },
    { id: 6, facultyName: 'Dr. Amit Patel', subject: 'Chemistry', batch: 'NEET-2025', assignedDate: '19-Jan-2024', status: 'Active', totalClasses: 100, completedClasses: 70 },
    { id: 7, facultyName: 'Ms. Sneha Verma', subject: 'Biology', batch: 'NEET-2025', assignedDate: '21-Jan-2024', status: 'Active', totalClasses: 100, completedClasses: 68 },
    { id: 8, facultyName: 'Mr. Deepak Sharma', subject: 'English', batch: 'JEE-2025', assignedDate: '17-Jan-2024', status: 'Active', totalClasses: 60, completedClasses: 45 },
    { id: 9, facultyName: 'Mr. Deepak Sharma', subject: 'English', batch: 'NEET-2025', assignedDate: '23-Jan-2024', status: 'Active', totalClasses: 50, completedClasses: 38 },
    { id: 10, facultyName: 'Dr. Meena Joshi', subject: 'Computer Science', batch: 'JEE-2025', assignedDate: '24-Jan-2024', status: 'Active', totalClasses: 80, completedClasses: 52 },
  ];

  const filteredAssignments = assignments.filter(assignment => {
    const matchesFaculty = selectedFaculty === '' || selectedFaculty === 'All Faculty' || assignment.facultyName === selectedFaculty;
    const matchesSubject = selectedSubject === '' || selectedSubject === 'All Subjects' || assignment.subject === selectedSubject;
    const matchesBatch = selectedBatch === '' || selectedBatch === 'All Batches' || assignment.batch === selectedBatch;
    return matchesFaculty && matchesSubject && matchesBatch;
  });

  const handleAssignSubject = () => {
    setShowAssignForm(true);
  };

  const handleReassign = (assignmentId: number) => {
    // Here you would implement reassignment functionality
    alert(`Reassignment modal would open for assignment ID: ${assignmentId}`);
  };

  const getProgressPercentage = (completed: number, total: number) => {
    return Math.round((completed / total) * 100);
  };

  const getProgressClass = (percentage: number) => {
    if (percentage >= 80) return 'progress-excellent';
    if (percentage >= 60) return 'progress-good';
    if (percentage >= 40) return 'progress-average';
    return 'progress-poor';
  };

  return (
    <div className="subject-assignment-container">
      <div className="subject-assignment-header">
        <h1 className="subject-assignment-title">Subject Assignment</h1>
        <p className="subject-assignment-subtitle">Assign subjects to faculties and manage batch-specific assignments</p>
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
            <label className="control-label">Filter by Subject</label>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="control-select"
            >
              {subjects.map(subject => (
                <option key={subject} value={subject}>{subject}</option>
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
            <button className="assign-subject-button" onClick={handleAssignSubject}>
              ➕ Assign Subject
            </button>
          </div>
        </div>
      </div>

      {/* Subject Assignments Table */}
      <div className="table-container">
        <div className="table-header">
          <h2 className="table-title">Subject Assignments</h2>
          <div className="table-count">Total Assignments: {filteredAssignments.length}</div>
        </div>
        <div className="table-wrapper">
          <table className="assignments-table">
            <thead>
              <tr>
                <th>Faculty Name</th>
                <th>Subject</th>
                <th>Batch</th>
                <th>Assigned Date</th>
                <th>Status</th>
                <th>Progress</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredAssignments.map(assignment => {
                const progressPercentage = getProgressPercentage(assignment.completedClasses, assignment.totalClasses);
                return (
                  <tr key={assignment.id}>
                    <td className="faculty-name-cell">{assignment.facultyName}</td>
                    <td className="subject-cell">{assignment.subject}</td>
                    <td className="batch-cell">{assignment.batch}</td>
                    <td className="date-cell">{assignment.assignedDate}</td>
                    <td>
                      <span className={`status-badge ${assignment.status === 'Active' ? 'status-active' : 'status-inactive'}`}>
                        {assignment.status}
                      </span>
                    </td>
                    <td className="progress-cell">
                      <div className="progress-info">
                        <div className="progress-text">
                          {assignment.completedClasses}/{assignment.totalClasses} classes
                        </div>
                        <div className="progress-bar">
                          <div 
                            className={`progress-fill ${getProgressClass(progressPercentage)}`}
                            style={{ width: `${progressPercentage}%` }}
                          ></div>
                        </div>
                        <div className="progress-percentage">{progressPercentage}%</div>
                      </div>
                    </td>
                    <td className="actions-cell">
                      <button 
                        className="action-button reassign-button"
                        onClick={() => handleReassign(assignment.id)}
                      >
                        Reassign
                      </button>
                      <button className="action-button view-button">View</button>
                      <button className="action-button edit-button">Edit</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="summary-cards">
        <div className="summary-card">
          <div className="summary-label">Total Assignments</div>
          <div className="summary-value blue">{assignments.length}</div>
        </div>
        <div className="summary-card">
          <div className="summary-label">Active Assignments</div>
          <div className="summary-value green">{assignments.filter(a => a.status === 'Active').length}</div>
        </div>
        <div className="summary-card">
          <div className="summary-label">Total Classes</div>
          <div className="summary-value orange">{assignments.reduce((sum, a) => sum + a.totalClasses, 0)}</div>
        </div>
        <div className="summary-card">
          <div className="summary-label">Completed Classes</div>
          <div className="summary-value purple">{assignments.reduce((sum, a) => sum + a.completedClasses, 0)}</div>
        </div>
      </div>

      {/* Assignment Form Modal */}
      {showAssignForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Assign Subject to Faculty</h3>
              <button 
                className="modal-close"
                onClick={() => setShowAssignForm(false)}
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
                <label className="form-label">Select Subject</label>
                <select className="form-select">
                  {subjects.slice(1).map(subject => (
                    <option key={subject} value={subject}>{subject}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Select Batch</label>
                <select className="form-select">
                  {batches.slice(1).map(batch => (
                    <option key={batch} value={batch}>{batch}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Total Classes</label>
                <input type="number" className="form-input" placeholder="Enter total classes" />
              </div>
            </div>
            <div className="modal-footer">
              <button className="modal-button cancel-button" onClick={() => setShowAssignForm(false)}>
                Cancel
              </button>
              <button className="modal-button save-button">
                Assign Subject
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubjectAssignment; 