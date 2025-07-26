import React, { useState } from 'react';
import './Attendance.css';

interface AttendanceRecord {
  id: number;
  facultyName: string;
  date: string;
  status: 'Present' | 'Absent' | 'Leave';
  checkInTime: string;
  checkOutTime: string;
  totalHours: string;
  remarks: string;
}

const Attendance: React.FC = () => {
  const [selectedFaculty, setSelectedFaculty] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [showMarkAttendance, setShowMarkAttendance] = useState(false);

  const faculties = ['All Faculty', 'Dr. Rajesh Kumar', 'Prof. Priya Sharma', 'Dr. Amit Patel', 'Ms. Sneha Verma', 'Mr. Deepak Sharma', 'Dr. Meena Joshi'];
  const statuses = ['All Status', 'Present', 'Absent', 'Leave'];

  const attendanceRecords: AttendanceRecord[] = [
    { id: 1, facultyName: 'Dr. Rajesh Kumar', date: '25-Jul-2024', status: 'Present', checkInTime: '8:30 AM', checkOutTime: '5:30 PM', totalHours: '9h 0m', remarks: 'Regular day' },
    { id: 2, facultyName: 'Prof. Priya Sharma', date: '25-Jul-2024', status: 'Present', checkInTime: '8:45 AM', checkOutTime: '5:15 PM', totalHours: '8h 30m', remarks: 'Regular day' },
    { id: 3, facultyName: 'Dr. Amit Patel', date: '25-Jul-2024', status: 'Present', checkInTime: '8:15 AM', checkOutTime: '5:45 PM', totalHours: '9h 30m', remarks: 'Regular day' },
    { id: 4, facultyName: 'Ms. Sneha Verma', date: '25-Jul-2024', status: 'Leave', checkInTime: '-', checkOutTime: '-', totalHours: '0h 0m', remarks: 'Personal leave' },
    { id: 5, facultyName: 'Mr. Deepak Sharma', date: '25-Jul-2024', status: 'Present', checkInTime: '9:00 AM', checkOutTime: '5:00 PM', totalHours: '8h 0m', remarks: 'Regular day' },
    { id: 6, facultyName: 'Dr. Meena Joshi', date: '25-Jul-2024', status: 'Present', checkInTime: '8:30 AM', checkOutTime: '5:30 PM', totalHours: '9h 0m', remarks: 'Regular day' },
    { id: 7, facultyName: 'Dr. Rajesh Kumar', date: '24-Jul-2024', status: 'Present', checkInTime: '8:30 AM', checkOutTime: '5:30 PM', totalHours: '9h 0m', remarks: 'Regular day' },
    { id: 8, facultyName: 'Prof. Priya Sharma', date: '24-Jul-2024', status: 'Absent', checkInTime: '-', checkOutTime: '-', totalHours: '0h 0m', remarks: 'No reason provided' },
    { id: 9, facultyName: 'Dr. Amit Patel', date: '24-Jul-2024', status: 'Present', checkInTime: '8:15 AM', checkOutTime: '5:45 PM', totalHours: '9h 30m', remarks: 'Regular day' },
    { id: 10, facultyName: 'Ms. Sneha Verma', date: '24-Jul-2024', status: 'Present', checkInTime: '8:45 AM', checkOutTime: '5:15 PM', totalHours: '8h 30m', remarks: 'Regular day' },
    { id: 11, facultyName: 'Mr. Deepak Sharma', date: '24-Jul-2024', status: 'Leave', checkInTime: '-', checkOutTime: '-', totalHours: '0h 0m', remarks: 'Medical leave' },
    { id: 12, facultyName: 'Dr. Meena Joshi', date: '24-Jul-2024', status: 'Present', checkInTime: '8:30 AM', checkOutTime: '5:30 PM', totalHours: '9h 0m', remarks: 'Regular day' },
  ];

  const filteredRecords = attendanceRecords.filter(record => {
    const matchesFaculty = selectedFaculty === '' || selectedFaculty === 'All Faculty' || record.facultyName === selectedFaculty;
    const matchesDate = selectedDate === '' || record.date === selectedDate;
    const matchesStatus = selectedStatus === '' || selectedStatus === 'All Status' || record.status === selectedStatus;
    return matchesFaculty && matchesDate && matchesStatus;
  });

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Present':
        return 'status-present';
      case 'Absent':
        return 'status-absent';
      case 'Leave':
        return 'status-leave';
      default:
        return '';
    }
  };

  const getAttendanceStats = () => {
    const totalRecords = attendanceRecords.length;
    const presentCount = attendanceRecords.filter(r => r.status === 'Present').length;
    const absentCount = attendanceRecords.filter(r => r.status === 'Absent').length;
    const leaveCount = attendanceRecords.filter(r => r.status === 'Leave').length;
    const attendanceRate = Math.round((presentCount / totalRecords) * 100);

    return { totalRecords, presentCount, absentCount, leaveCount, attendanceRate };
  };

  const stats = getAttendanceStats();

  const handleMarkAttendance = () => {
    setShowMarkAttendance(true);
  };

  const handleExportReport = () => {
    // Here you would implement export functionality
    alert('Attendance report exported successfully!');
  };

  return (
    <div className="attendance-container">
      <div className="attendance-header">
        <h1 className="attendance-title">Faculty Attendance</h1>
        <p className="attendance-subtitle">Mark and track faculty attendance with detailed reports</p>
      </div>

      {/* Summary Cards */}
      <div className="summary-cards">
        <div className="summary-card">
          <div className="summary-label">Total Records</div>
          <div className="summary-value blue">{stats.totalRecords}</div>
        </div>
        <div className="summary-card">
          <div className="summary-label">Present Today</div>
          <div className="summary-value green">{stats.presentCount}</div>
        </div>
        <div className="summary-card">
          <div className="summary-label">Absent Today</div>
          <div className="summary-value red">{stats.absentCount}</div>
        </div>
        <div className="summary-card">
          <div className="summary-label">Attendance Rate</div>
          <div className="summary-value purple">{stats.attendanceRate}%</div>
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
            <label className="control-label">Filter by Date</label>
            <select
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="control-select"
            >
              <option value="">All Dates</option>
              <option value="25-Jul-2024">25-Jul-2024</option>
              <option value="24-Jul-2024">24-Jul-2024</option>
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
            <button className="mark-attendance-button" onClick={handleMarkAttendance}>
              ✅ Mark Attendance
            </button>
          </div>
          <div className="control-group">
            <button className="export-report-button" onClick={handleExportReport}>
              📊 Export Report
            </button>
          </div>
        </div>
      </div>

      {/* Attendance Table */}
      <div className="table-container">
        <div className="table-header">
          <h2 className="table-title">Attendance Records</h2>
          <div className="table-count">Total Records: {filteredRecords.length}</div>
        </div>
        <div className="table-wrapper">
          <table className="attendance-table">
            <thead>
              <tr>
                <th>Faculty Name</th>
                <th>Date</th>
                <th>Status</th>
                <th>Check In</th>
                <th>Check Out</th>
                <th>Total Hours</th>
                <th>Remarks</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredRecords.map(record => (
                <tr key={record.id}>
                  <td className="faculty-name-cell">{record.facultyName}</td>
                  <td className="date-cell">{record.date}</td>
                  <td>
                    <span className={`status-badge ${getStatusClass(record.status)}`}>
                      {record.status}
                    </span>
                  </td>
                  <td className="time-cell">{record.checkInTime}</td>
                  <td className="time-cell">{record.checkOutTime}</td>
                  <td className="hours-cell">{record.totalHours}</td>
                  <td className="remarks-cell">{record.remarks}</td>
                  <td className="actions-cell">
                    <button className="action-button edit-button">Edit</button>
                    <button className="action-button view-button">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mark Attendance Modal */}
      {showMarkAttendance && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Mark Faculty Attendance</h3>
              <button 
                className="modal-close"
                onClick={() => setShowMarkAttendance(false)}
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
                <label className="form-label">Date</label>
                <input type="date" className="form-input" defaultValue={new Date().toISOString().split('T')[0]} />
              </div>
              <div className="form-group">
                <label className="form-label">Status</label>
                <select className="form-select">
                  <option value="Present">Present</option>
                  <option value="Absent">Absent</option>
                  <option value="Leave">Leave</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Check In Time</label>
                <input type="time" className="form-input" />
              </div>
              <div className="form-group">
                <label className="form-label">Check Out Time</label>
                <input type="time" className="form-input" />
              </div>
              <div className="form-group">
                <label className="form-label">Remarks</label>
                <textarea className="form-textarea" rows={3} placeholder="Enter remarks..."></textarea>
              </div>
            </div>
            <div className="modal-footer">
              <button className="modal-button cancel-button" onClick={() => setShowMarkAttendance(false)}>
                Cancel
              </button>
              <button className="modal-button save-button">
                Mark Attendance
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Attendance; 