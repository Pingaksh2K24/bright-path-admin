import React, { useState } from 'react';
import './Timetable.css';

interface TimeSlot {
  id: number;
  time: string;
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
}

interface FacultySchedule {
  id: number;
  facultyName: string;
  subject: string;
  batch: string;
  timeSlot: string;
  day: string;
  room: string;
}

const Timetable: React.FC = () => {
  const [selectedFaculty, setSelectedFaculty] = useState('');
  const [selectedBatch, setSelectedBatch] = useState('');
  const [viewMode, setViewMode] = useState<'weekly' | 'faculty'>('weekly');

  const faculties = ['All Faculty', 'Dr. Rajesh Kumar', 'Prof. Priya Sharma', 'Dr. Amit Patel', 'Ms. Sneha Verma'];
  const batches = ['All Batches', 'JEE-2025', 'NEET-2025', 'JEE-2026', 'NEET-2026'];

  const timeSlots: TimeSlot[] = [
    { id: 1, time: '8:00 AM - 9:00 AM', monday: 'Mathematics (Dr. Rajesh)', tuesday: 'Physics (Prof. Priya)', wednesday: 'Chemistry (Dr. Amit)', thursday: 'Biology (Ms. Sneha)', friday: 'Mathematics (Dr. Rajesh)', saturday: 'Physics (Prof. Priya)' },
    { id: 2, time: '9:00 AM - 10:00 AM', monday: 'Physics (Prof. Priya)', tuesday: 'Chemistry (Dr. Amit)', wednesday: 'Biology (Ms. Sneha)', thursday: 'Mathematics (Dr. Rajesh)', friday: 'Physics (Prof. Priya)', saturday: 'Chemistry (Dr. Amit)' },
    { id: 3, time: '10:00 AM - 11:00 AM', monday: 'Chemistry (Dr. Amit)', tuesday: 'Biology (Ms. Sneha)', wednesday: 'Mathematics (Dr. Rajesh)', thursday: 'Physics (Prof. Priya)', friday: 'Chemistry (Dr. Amit)', saturday: 'Biology (Ms. Sneha)' },
    { id: 4, time: '11:00 AM - 12:00 PM', monday: 'Biology (Ms. Sneha)', tuesday: 'Mathematics (Dr. Rajesh)', wednesday: 'Physics (Prof. Priya)', thursday: 'Chemistry (Dr. Amit)', friday: 'Biology (Ms. Sneha)', saturday: 'Mathematics (Dr. Rajesh)' },
    { id: 5, time: '2:00 PM - 3:00 PM', monday: 'English (Mr. Deepak)', tuesday: 'Computer Science (Dr. Meena)', wednesday: 'English (Mr. Deepak)', thursday: 'Computer Science (Dr. Meena)', friday: 'English (Mr. Deepak)', saturday: 'Computer Science (Dr. Meena)' },
    { id: 6, time: '3:00 PM - 4:00 PM', monday: 'Computer Science (Dr. Meena)', tuesday: 'English (Mr. Deepak)', wednesday: 'Computer Science (Dr. Meena)', thursday: 'English (Mr. Deepak)', friday: 'Computer Science (Dr. Meena)', saturday: 'English (Mr. Deepak)' },
  ];

  const facultySchedules: FacultySchedule[] = [
    { id: 1, facultyName: 'Dr. Rajesh Kumar', subject: 'Mathematics', batch: 'JEE-2025', timeSlot: '8:00 AM - 9:00 AM', day: 'Monday', room: 'Room 101' },
    { id: 2, facultyName: 'Dr. Rajesh Kumar', subject: 'Mathematics', batch: 'NEET-2025', timeSlot: '9:00 AM - 10:00 AM', day: 'Tuesday', room: 'Room 102' },
    { id: 3, facultyName: 'Prof. Priya Sharma', subject: 'Physics', batch: 'JEE-2025', timeSlot: '10:00 AM - 11:00 AM', day: 'Wednesday', room: 'Room 103' },
    { id: 4, facultyName: 'Prof. Priya Sharma', subject: 'Physics', batch: 'NEET-2025', timeSlot: '11:00 AM - 12:00 PM', day: 'Thursday', room: 'Room 104' },
    { id: 5, facultyName: 'Dr. Amit Patel', subject: 'Chemistry', batch: 'JEE-2025', timeSlot: '2:00 PM - 3:00 PM', day: 'Friday', room: 'Room 105' },
    { id: 6, facultyName: 'Dr. Amit Patel', subject: 'Chemistry', batch: 'NEET-2025', timeSlot: '3:00 PM - 4:00 PM', day: 'Saturday', room: 'Room 106' },
  ];

  const filteredFacultySchedules = facultySchedules.filter(schedule => {
    const matchesFaculty = selectedFaculty === '' || selectedFaculty === 'All Faculty' || schedule.facultyName === selectedFaculty;
    const matchesBatch = selectedBatch === '' || selectedBatch === 'All Batches' || schedule.batch === selectedBatch;
    return matchesFaculty && matchesBatch;
  });

  const handleExport = () => {
    // Here you would implement export functionality
    alert('Timetable exported successfully!');
  };

  const handleAssignClass = () => {
    // Here you would implement class assignment functionality
    alert('Class assignment modal would open here!');
  };

  return (
    <div className="timetable-container">
      <div className="timetable-header">
        <h1 className="timetable-title">Timetable / Class Schedule</h1>
        <p className="timetable-subtitle">Manage faculty-wise class schedules and timetables</p>
      </div>

      {/* Controls */}
      <div className="controls-section">
        <div className="controls-grid">
          <div className="control-group">
            <label className="control-label">View Mode</label>
            <div className="view-mode-buttons">
              <button
                className={`view-mode-button ${viewMode === 'weekly' ? 'active' : ''}`}
                onClick={() => setViewMode('weekly')}
              >
                📅 Weekly View
              </button>
              <button
                className={`view-mode-button ${viewMode === 'faculty' ? 'active' : ''}`}
                onClick={() => setViewMode('faculty')}
              >
                👨‍🏫 Faculty View
              </button>
            </div>
          </div>
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
            <button className="assign-class-button" onClick={handleAssignClass}>
              ➕ Assign Class
            </button>
          </div>
          <div className="control-group">
            <button className="export-button" onClick={handleExport}>
              📤 Export Timetable
            </button>
          </div>
        </div>
      </div>

      {/* Weekly Timetable View */}
      {viewMode === 'weekly' && (
        <div className="timetable-view">
          <div className="timetable-card">
            <div className="timetable-card-header">
              <h2 className="timetable-card-title">Weekly Class Schedule</h2>
            </div>
            <div className="timetable-wrapper">
              <table className="timetable-table">
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                  </tr>
                </thead>
                <tbody>
                  {timeSlots.map(slot => (
                    <tr key={slot.id}>
                      <td className="time-slot">{slot.time}</td>
                      <td className="class-slot">{slot.monday}</td>
                      <td className="class-slot">{slot.tuesday}</td>
                      <td className="class-slot">{slot.wednesday}</td>
                      <td className="class-slot">{slot.thursday}</td>
                      <td className="class-slot">{slot.friday}</td>
                      <td className="class-slot">{slot.saturday}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Faculty Schedule View */}
      {viewMode === 'faculty' && (
        <div className="timetable-view">
          <div className="timetable-card">
            <div className="timetable-card-header">
              <h2 className="timetable-card-title">Faculty-wise Schedule</h2>
            </div>
            <div className="timetable-wrapper">
              <table className="faculty-schedule-table">
                <thead>
                  <tr>
                    <th>Faculty Name</th>
                    <th>Subject</th>
                    <th>Batch</th>
                    <th>Time Slot</th>
                    <th>Day</th>
                    <th>Room</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredFacultySchedules.map(schedule => (
                    <tr key={schedule.id}>
                      <td className="faculty-name-cell">{schedule.facultyName}</td>
                      <td className="subject-cell">{schedule.subject}</td>
                      <td className="batch-cell">{schedule.batch}</td>
                      <td className="time-cell">{schedule.timeSlot}</td>
                      <td className="day-cell">{schedule.day}</td>
                      <td className="room-cell">{schedule.room}</td>
                      <td className="actions-cell">
                        <button className="action-button edit-button">Edit</button>
                        <button className="action-button delete-button">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Summary Cards */}
      <div className="summary-cards">
        <div className="summary-card">
          <div className="summary-label">Total Classes</div>
          <div className="summary-value blue">{timeSlots.length * 6}</div>
        </div>
        <div className="summary-card">
          <div className="summary-label">Active Faculty</div>
          <div className="summary-value green">{faculties.length - 1}</div>
        </div>
        <div className="summary-card">
          <div className="summary-label">Total Batches</div>
          <div className="summary-value orange">{batches.length - 1}</div>
        </div>
        <div className="summary-card">
          <div className="summary-label">Weekly Hours</div>
          <div className="summary-value purple">{timeSlots.length * 6}</div>
        </div>
      </div>
    </div>
  );
};

export default Timetable; 