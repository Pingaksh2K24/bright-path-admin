import React from 'react';
import './General.css';

const General: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>General Settings</h1>
        <p>Configure institute information, timezone, and academic session/year settings</p>
      </div>
      
      <div className="content-section">
        <div className="section-card">
          <h2>Institute Information</h2>
          <div className="form-group">
            <label>Institute Name</label>
            <input type="text" placeholder="Enter institute name" />
          </div>
          <div className="form-group">
            <label>Institute Code</label>
            <input type="text" placeholder="Enter institute code" />
          </div>
          <div className="form-group">
            <label>Address</label>
            <textarea placeholder="Enter complete address" rows={3}></textarea>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Phone</label>
              <input type="tel" placeholder="Enter phone number" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter email address" />
            </div>
          </div>
        </div>

        <div className="section-card">
          <h2>Timezone Settings</h2>
          <div className="form-group">
            <label>Default Timezone</label>
            <select>
              <option value="Asia/Kolkata">Asia/Kolkata (IST)</option>
              <option value="UTC">UTC</option>
              <option value="America/New_York">America/New_York (EST)</option>
              <option value="Europe/London">Europe/London (GMT)</option>
            </select>
          </div>
        </div>

        <div className="section-card">
          <h2>Academic Session/Year</h2>
          <div className="form-row">
            <div className="form-group">
              <label>Current Academic Year</label>
              <select>
                <option value="2024-25">2024-25</option>
                <option value="2023-24">2023-24</option>
                <option value="2025-26">2025-26</option>
              </select>
            </div>
            <div className="form-group">
              <label>Session Start Month</label>
              <select>
                <option value="April">April</option>
                <option value="June">June</option>
                <option value="January">January</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label>Academic Year Format</label>
            <select>
              <option value="YYYY-YY">2024-25</option>
              <option value="YYYY-YYYY">2024-2025</option>
              <option value="YY-YY">24-25</option>
            </select>
          </div>
        </div>

        <div className="form-actions">
          <button className="btn btn-primary">Save Changes</button>
          <button className="btn btn-secondary">Reset</button>
        </div>
      </div>
    </div>
  );
};

export default General;
