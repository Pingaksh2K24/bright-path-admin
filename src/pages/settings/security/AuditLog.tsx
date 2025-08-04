import React from 'react';
import './AuditLog.css';

const AuditLog: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Audit Log</h1>
        <p>Monitor and track all system activities and user actions</p>
      </div>

      <div className="content-section">
        {/* Audit Actions */}
        <div className="section-card">
          <div className="audit-actions">
            <button className="btn btn-primary">
              📥 Export Logs
            </button>
            <button className="btn btn-secondary">
              🔍 Advanced Search
            </button>
            <button className="btn btn-secondary">
              📊 Generate Report
            </button>
            <button className="btn btn-secondary">
              ⚙️ Configure Alerts
            </button>
          </div>
        </div>

        {/* Audit Statistics */}
        <div className="section-card">
          <h2>Activity Overview</h2>
          <div className="stats-grid">
            <div className="stat-card login-stats">
              <div className="stat-number">1,245</div>
              <div className="stat-label">Login Attempts Today</div>
              <div className="stat-trend">↗️ +12% from yesterday</div>
            </div>
            <div className="stat-card failed-stats">
              <div className="stat-number">23</div>
              <div className="stat-label">Failed Login Attempts</div>
              <div className="stat-trend">↘️ -8% from yesterday</div>
            </div>
            <div className="stat-card data-stats">
              <div className="stat-number">8,456</div>
              <div className="stat-label">Data Access Events</div>
              <div className="stat-trend">↗️ +5% from yesterday</div>
            </div>
            <div className="stat-card security-stats">
              <div className="stat-number">3</div>
              <div className="stat-label">Security Alerts</div>
              <div className="stat-trend">⚠️ Needs attention</div>
            </div>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="section-card">
          <h2>Filter & Search</h2>
          <div className="filter-controls">
            <div className="filter-row">
              <div className="form-group">
                <label>Date Range</label>
                <div className="date-range">
                  <input type="date" defaultValue="2024-01-25" />
                  <span>to</span>
                  <input type="date" defaultValue="2024-01-31" />
                </div>
              </div>
              <div className="form-group">
                <label>Event Type</label>
                <select>
                  <option value="">All Events</option>
                  <option value="login">Login/Logout</option>
                  <option value="data">Data Access</option>
                  <option value="admin">Admin Actions</option>
                  <option value="security">Security Events</option>
                  <option value="system">System Events</option>
                </select>
              </div>
              <div className="form-group">
                <label>User</label>
                <input type="text" placeholder="Search by username or email" />
              </div>
              <div className="form-group">
                <label>IP Address</label>
                <input type="text" placeholder="Filter by IP address" />
              </div>
            </div>
            <div className="filter-actions">
              <button className="btn btn-primary">Apply Filters</button>
              <button className="btn btn-secondary">Clear All</button>
              <button className="btn btn-secondary">Save Filter</button>
            </div>
          </div>
        </div>

        {/* Audit Log Table */}
        <div className="section-card">
          <h2>Recent Activity</h2>
          <div className="audit-log-table">
            <table>
              <thead>
                <tr>
                  <th>Timestamp</th>
                  <th>User</th>
                  <th>Event Type</th>
                  <th>Description</th>
                  <th>IP Address</th>
                  <th>Status</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr className="event-success">
                  <td>
                    <div className="timestamp">
                      <strong>2024-01-31 14:32:15</strong>
                      <small>2 minutes ago</small>
                    </div>
                  </td>
                  <td>
                    <div className="user-info">
                      <strong>admin@brightpath.edu</strong>
                      <small>Super Admin</small>
                    </div>
                  </td>
                  <td><span className="event-badge event-admin">Admin Action</span></td>
                  <td>Updated student record for John Doe (ID: ST001)</td>
                  <td>192.168.1.100</td>
                  <td><span className="status-badge status-success">Success</span></td>
                  <td><button className="btn-icon" title="View Details">👁️</button></td>
                </tr>
                <tr className="event-warning">
                  <td>
                    <div className="timestamp">
                      <strong>2024-01-31 14:28:42</strong>
                      <small>6 minutes ago</small>
                    </div>
                  </td>
                  <td>
                    <div className="user-info">
                      <strong>teacher@brightpath.edu</strong>
                      <small>Faculty</small>
                    </div>
                  </td>
                  <td><span className="event-badge event-login">Login</span></td>
                  <td>Failed login attempt - Invalid password</td>
                  <td>203.0.113.45</td>
                  <td><span className="status-badge status-failed">Failed</span></td>
                  <td><button className="btn-icon" title="View Details">👁️</button></td>
                </tr>
                <tr className="event-success">
                  <td>
                    <div className="timestamp">
                      <strong>2024-01-31 14:25:18</strong>
                      <small>9 minutes ago</small>
                    </div>
                  </td>
                  <td>
                    <div className="user-info">
                      <strong>student@brightpath.edu</strong>
                      <small>Student</small>
                    </div>
                  </td>
                  <td><span className="event-badge event-data">Data Access</span></td>
                  <td>Viewed exam results for Semester 1</td>
                  <td>198.51.100.23</td>
                  <td><span className="status-badge status-success">Success</span></td>
                  <td><button className="btn-icon" title="View Details">👁️</button></td>
                </tr>
                <tr className="event-critical">
                  <td>
                    <div className="timestamp">
                      <strong>2024-01-31 14:20:05</strong>
                      <small>14 minutes ago</small>
                    </div>
                  </td>
                  <td>
                    <div className="user-info">
                      <strong>unknown</strong>
                      <small>Unauthorized</small>
                    </div>
                  </td>
                  <td><span className="event-badge event-security">Security</span></td>
                  <td>Multiple failed login attempts detected</td>
                  <td>185.199.108.153</td>
                  <td><span className="status-badge status-blocked">Blocked</span></td>
                  <td><button className="btn-icon" title="View Details">👁️</button></td>
                </tr>
                <tr className="event-success">
                  <td>
                    <div className="timestamp">
                      <strong>2024-01-31 14:15:33</strong>
                      <small>19 minutes ago</small>
                    </div>
                  </td>
                  <td>
                    <div className="user-info">
                      <strong>finance@brightpath.edu</strong>
                      <small>Finance Team</small>
                    </div>
                  </td>
                  <td><span className="event-badge event-admin">Admin Action</span></td>
                  <td>Generated fee report for January 2024</td>
                  <td>192.168.1.105</td>
                  <td><span className="status-badge status-success">Success</span></td>
                  <td><button className="btn-icon" title="View Details">👁️</button></td>
                </tr>
                <tr className="event-success">
                  <td>
                    <div className="timestamp">
                      <strong>2024-01-31 14:12:47</strong>
                      <small>22 minutes ago</small>
                    </div>
                  </td>
                  <td>
                    <div className="user-info">
                      <strong>system</strong>
                      <small>System Process</small>
                    </div>
                  </td>
                  <td><span className="event-badge event-system">System</span></td>
                  <td>Automated backup completed successfully</td>
                  <td>127.0.0.1</td>
                  <td><span className="status-badge status-success">Success</span></td>
                  <td><button className="btn-icon" title="View Details">👁️</button></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="table-pagination">
            <div className="pagination-info">
              Showing 1-10 of 1,245 entries
            </div>
            <div className="pagination-controls">
              <button className="btn btn-secondary" disabled>Previous</button>
              <button className="btn btn-primary">1</button>
              <button className="btn btn-secondary">2</button>
              <button className="btn btn-secondary">3</button>
              <button className="btn btn-secondary">...</button>
              <button className="btn btn-secondary">125</button>
              <button className="btn btn-secondary">Next</button>
            </div>
          </div>
        </div>

        {/* Audit Settings */}
        <div className="section-card">
          <h2>Audit Configuration</h2>
          <div className="form-row">
            <div className="form-group">
              <label>Log Retention Period</label>
              <select defaultValue="365">
                <option value="30">30 days</option>
                <option value="90">90 days</option>
                <option value="180">6 months</option>
                <option value="365">1 year</option>
                <option value="1095">3 years</option>
              </select>
            </div>
            <div className="form-group">
              <label>Log Level</label>
              <select defaultValue="info">
                <option value="debug">Debug (All events)</option>
                <option value="info">Info (Standard events)</option>
                <option value="warning">Warning (Important events)</option>
                <option value="error">Error (Critical events only)</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Auto-Export Schedule</label>
              <select defaultValue="weekly">
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="never">Never</option>
              </select>
            </div>
            <div className="form-group">
              <label>Export Format</label>
              <select defaultValue="csv">
                <option value="csv">CSV</option>
                <option value="json">JSON</option>
                <option value="pdf">PDF Report</option>
                <option value="excel">Excel</option>
              </select>
            </div>
          </div>
          <div className="checkbox-group">
            <label>
              <input type="checkbox" defaultChecked />
              Enable real-time monitoring
            </label>
            <label>
              <input type="checkbox" defaultChecked />
              Send email alerts for security events
            </label>
            <label>
              <input type="checkbox" />
              Log IP geolocation data
            </label>
            <label>
              <input type="checkbox" defaultChecked />
              Include user agent information
            </label>
          </div>
        </div>
      </div>

      <div className="form-actions">
        <button className="btn btn-primary">Save Configuration</button>
        <button className="btn btn-secondary">Export Current View</button>
        <button className="btn btn-secondary">Cancel</button>
      </div>
    </div>
  );
};

export default AuditLog;
