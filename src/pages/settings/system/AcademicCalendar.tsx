import React from 'react';
import './AcademicCalendar.css';

const AcademicCalendar: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Academic Calendar</h1>
        <p>Manage academic year calendar, holidays, exam schedules, and important dates</p>
      </div>
      
      <div className="content-section">
        <div className="section-card">
          <h2>Academic Year Setup</h2>
          <div className="form-row">
            <div className="form-group">
              <label>Academic Year</label>
              <select>
                <option value="2024-25">2024-25</option>
                <option value="2023-24">2023-24</option>
                <option value="2025-26">2025-26</option>
              </select>
            </div>
            <div className="form-group">
              <label>Year Start Date</label>
              <input type="date" />
            </div>
            <div className="form-group">
              <label>Year End Date</label>
              <input type="date" />
            </div>
          </div>
        </div>

        <div className="section-card">
          <h2>Semester/Term Configuration</h2>
          <div className="semester-config">
            <div className="semester-item">
              <h3>Semester 1</h3>
              <div className="form-row">
                <div className="form-group">
                  <label>Start Date</label>
                  <input type="date" />
                </div>
                <div className="form-group">
                  <label>End Date</label>
                  <input type="date" />
                </div>
                <div className="form-group">
                  <label>Status</label>
                  <select>
                    <option value="active">Active</option>
                    <option value="upcoming">Upcoming</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="semester-item">
              <h3>Semester 2</h3>
              <div className="form-row">
                <div className="form-group">
                  <label>Start Date</label>
                  <input type="date" />
                </div>
                <div className="form-group">
                  <label>End Date</label>
                  <input type="date" />
                </div>
                <div className="form-group">
                  <label>Status</label>
                  <select>
                    <option value="upcoming">Upcoming</option>
                    <option value="active">Active</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <button className="btn btn-secondary">Add New Semester</button>
        </div>

        <div className="section-card">
          <h2>Holidays & Events</h2>
          <div className="calendar-actions">
            <button className="btn btn-primary">
              ➕ Add Holiday
            </button>
            <button className="btn btn-secondary">
              📅 Add Event
            </button>
            <button className="btn btn-secondary">
              📤 Import Calendar
            </button>
            <button className="btn btn-secondary">
              📥 Export Calendar
            </button>
          </div>
          
          <div className="holidays-list">
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2024-01-26</td>
                  <td>Republic Day</td>
                  <td><span className="badge badge-holiday">National Holiday</span></td>
                  <td>Constitution Day of India</td>
                  <td>
                    <button className="btn-icon" title="Edit">✏️</button>
                    <button className="btn-icon" title="Delete">🗑️</button>
                  </td>
                </tr>
                <tr>
                  <td>2024-08-15</td>
                  <td>Independence Day</td>
                  <td><span className="badge badge-holiday">National Holiday</span></td>
                  <td>Independence Day of India</td>
                  <td>
                    <button className="btn-icon" title="Edit">✏️</button>
                    <button className="btn-icon" title="Delete">🗑️</button>
                  </td>
                </tr>
                <tr>
                  <td>02/10/2024</td>
                  <td>Gandhi Jayanti</td>
                  <td><span className="badge badge-holiday">National Holiday</span></td>
                  <td>National Holiday</td>
                  <td>
                    <button className="btn-icon">✏️</button>
                    <button className="btn-icon">🗑️</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="section-card">
          <h2>Exam Schedule</h2>
          <div className="exam-schedule">
            <div className="schedule-item">
              <h3>Mid-Term Exams</h3>
              <div className="form-row">
                <div className="form-group">
                  <label>Start Date</label>
                  <input type="date" />
                </div>
                <div className="form-group">
                  <label>End Date</label>
                  <input type="date" />
                </div>
                <div className="form-group">
                  <label>Semester</label>
                  <select>
                    <option value="1">Semester 1</option>
                    <option value="2">Semester 2</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="schedule-item">
              <h3>Final Exams</h3>
              <div className="form-row">
                <div className="form-group">
                  <label>Start Date</label>
                  <input type="date" />
                </div>
                <div className="form-group">
                  <label>End Date</label>
                  <input type="date" />
                </div>
                <div className="form-group">
                  <label>Semester</label>
                  <select>
                    <option value="1">Semester 1</option>
                    <option value="2">Semester 2</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <button className="btn btn-secondary">Add Exam Period</button>
        </div>

        <div className="section-card">
          <h2>Important Dates</h2>
          <div className="important-dates">
            <div className="date-item">
              <label>Admission Start Date</label>
              <input type="date" />
            </div>
            <div className="date-item">
              <label>Admission End Date</label>
              <input type="date" />
            </div>
            <div className="date-item">
              <label>Fee Payment Deadline</label>
              <input type="date" />
            </div>
            <div className="date-item">
              <label>Result Declaration</label>
              <input type="date" />
            </div>
          </div>
        </div>

        <div className="section-card">
          <h2>Calendar View</h2>
          <div className="calendar-preview">
            <div className="calendar-header">
              <button className="btn btn-sm">← Previous</button>
              <h3>January 2024</h3>
              <button className="btn btn-sm">Next →</button>
            </div>
            <div className="calendar-grid">
              <div className="calendar-placeholder">
                <p>Calendar view will be displayed here</p>
                <small>Shows holidays, events, and important dates</small>
              </div>
            </div>
          </div>
        </div>

        <div className="form-actions">
          <button className="btn btn-primary">Save Calendar</button>
          <button className="btn btn-secondary">Export Calendar</button>
          <button className="btn btn-secondary">Reset</button>
        </div>
      </div>
    </div>
  );
};

export default AcademicCalendar;
