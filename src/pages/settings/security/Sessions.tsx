import React from 'react';
import './Sessions.css';

const Sessions: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Session Management</h1>
        <p>Monitor active sessions, manage user logins, and control IP access</p>
      </div>

      <div className="content-section">
        {/* Session Actions */}
        <div className="section-card">
          <div className="session-actions">
            <button className="btn btn-primary">
              🔄 Refresh Sessions
            </button>
            <button className="btn btn-secondary">
              🚪 Force Logout All
            </button>
            <button className="btn btn-secondary">
              📊 Export Report
            </button>
            <button className="btn btn-secondary">
              ⚙️ Session Settings
            </button>
          </div>
        </div>

        {/* Session Statistics */}
        <div className="section-card">
          <h2>Session Overview</h2>
          <div className="stats-grid">
            <div className="stat-card active-sessions">
              <div className="stat-number">247</div>
              <div className="stat-label">Active Sessions</div>
              <div className="stat-trend">↗️ +15 from last hour</div>
            </div>
            <div className="stat-card unique-users">
              <div className="stat-number">189</div>
              <div className="stat-label">Unique Users Online</div>
              <div className="stat-trend">↗️ +8 from last hour</div>
            </div>
            <div className="stat-card suspicious-sessions">
              <div className="stat-number">3</div>
              <div className="stat-label">Suspicious Sessions</div>
              <div className="stat-trend">⚠️ Needs review</div>
            </div>
            <div className="stat-card avg-duration">
              <div className="stat-number">2.5h</div>
              <div className="stat-label">Avg Session Duration</div>
              <div className="stat-trend">↘️ -0.3h from yesterday</div>
            </div>
          </div>
        </div>

        {/* Active Sessions */}
        <div className="section-card">
          <h2>Active Sessions</h2>
          <div className="session-filters">
            <div className="filter-row">
              <div className="form-group">
                <label>Filter by User</label>
                <input type="text" placeholder="Search by username or email" />
              </div>
              <div className="form-group">
                <label>Filter by Role</label>
                <select>
                  <option value="">All Roles</option>
                  <option value="admin">Admin</option>
                  <option value="faculty">Faculty</option>
                  <option value="student">Student</option>
                  <option value="staff">Staff</option>
                </select>
              </div>
              <div className="form-group">
                <label>Filter by Location</label>
                <input type="text" placeholder="City, Country or IP" />
              </div>
              <div className="form-group">
                <label>Session Status</label>
                <select>
                  <option value="">All Sessions</option>
                  <option value="active">Active</option>
                  <option value="idle">Idle</option>
                  <option value="suspicious">Suspicious</option>
                </select>
              </div>
            </div>
          </div>

          <div className="sessions-table">
            <table>
              <thead>
                <tr>
                  <th>User</th>
                  <th>Role</th>
                  <th>IP Address</th>
                  <th>Location</th>
                  <th>Device</th>
                  <th>Login Time</th>
                  <th>Last Activity</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="session-active">
                  <td>
                    <div className="user-info">
                      <strong>admin@brightpath.edu</strong>
                      <small>John Smith</small>
                    </div>
                  </td>
                  <td><span className="role-badge role-admin">Admin</span></td>
                  <td>
                    <div className="ip-info">
                      <strong>192.168.1.100</strong>
                      <small>Internal</small>
                    </div>
                  </td>
                  <td>
                    <div className="location-info">
                      <span>🇮🇳 Mumbai, India</span>
                    </div>
                  </td>
                  <td>
                    <div className="device-info">
                      <span>💻 Chrome on Windows</span>
                    </div>
                  </td>
                  <td>
                    <div className="time-info">
                      <strong>14:30:15</strong>
                      <small>2 hours ago</small>
                    </div>
                  </td>
                  <td>
                    <div className="time-info">
                      <strong>16:28:42</strong>
                      <small>2 minutes ago</small>
                    </div>
                  </td>
                  <td><span className="status-badge status-active">Active</span></td>
                  <td>
                    <button className="btn-icon" title="View Details">👁️</button>
                    <button className="btn-icon" title="Force Logout">🚪</button>
                    <button className="btn-icon" title="Block IP">🚫</button>
                  </td>
                </tr>
                <tr className="session-idle">
                  <td>
                    <div className="user-info">
                      <strong>teacher@brightpath.edu</strong>
                      <small>Sarah Johnson</small>
                    </div>
                  </td>
                  <td><span className="role-badge role-faculty">Faculty</span></td>
                  <td>
                    <div className="ip-info">
                      <strong>203.0.113.45</strong>
                      <small>External</small>
                    </div>
                  </td>
                  <td>
                    <div className="location-info">
                      <span>🇮🇳 Delhi, India</span>
                    </div>
                  </td>
                  <td>
                    <div className="device-info">
                      <span>📱 Safari on iPhone</span>
                    </div>
                  </td>
                  <td>
                    <div className="time-info">
                      <strong>13:15:30</strong>
                      <small>3 hours ago</small>
                    </div>
                  </td>
                  <td>
                    <div className="time-info">
                      <strong>15:45:18</strong>
                      <small>45 minutes ago</small>
                    </div>
                  </td>
                  <td><span className="status-badge status-idle">Idle</span></td>
                  <td>
                    <button className="btn-icon" title="View Details">👁️</button>
                    <button className="btn-icon" title="Force Logout">🚪</button>
                    <button className="btn-icon" title="Block IP">🚫</button>
                  </td>
                </tr>
                <tr className="session-suspicious">
                  <td>
                    <div className="user-info">
                      <strong>student@brightpath.edu</strong>
                      <small>Mike Wilson</small>
                    </div>
                  </td>
                  <td><span className="role-badge role-student">Student</span></td>
                  <td>
                    <div className="ip-info">
                      <strong>185.199.108.153</strong>
                      <small>VPN/Proxy</small>
                    </div>
                  </td>
                  <td>
                    <div className="location-info">
                      <span>🇺🇸 Unknown, USA</span>
                    </div>
                  </td>
                  <td>
                    <div className="device-info">
                      <span>💻 Firefox on Linux</span>
                    </div>
                  </td>
                  <td>
                    <div className="time-info">
                      <strong>16:20:05</strong>
                      <small>10 minutes ago</small>
                    </div>
                  </td>
                  <td>
                    <div className="time-info">
                      <strong>16:29:12</strong>
                      <small>1 minute ago</small>
                    </div>
                  </td>
                  <td><span className="status-badge status-suspicious">Suspicious</span></td>
                  <td>
                    <button className="btn-icon" title="View Details">👁️</button>
                    <button className="btn-icon" title="Force Logout">🚪</button>
                    <button className="btn-icon" title="Block IP">🚫</button>
                  </td>
                </tr>
                <tr className="session-active">
                  <td>
                    <div className="user-info">
                      <strong>finance@brightpath.edu</strong>
                      <small>Emma Davis</small>
                    </div>
                  </td>
                  <td><span className="role-badge role-staff">Staff</span></td>
                  <td>
                    <div className="ip-info">
                      <strong>192.168.1.105</strong>
                      <small>Internal</small>
                    </div>
                  </td>
                  <td>
                    <div className="location-info">
                      <span>🇮🇳 Mumbai, India</span>
                    </div>
                  </td>
                  <td>
                    <div className="device-info">
                      <span>💻 Edge on Windows</span>
                    </div>
                  </td>
                  <td>
                    <div className="time-info">
                      <strong>09:30:00</strong>
                      <small>7 hours ago</small>
                    </div>
                  </td>
                  <td>
                    <div className="time-info">
                      <strong>16:25:33</strong>
                      <small>5 minutes ago</small>
                    </div>
                  </td>
                  <td><span className="status-badge status-active">Active</span></td>
                  <td>
                    <button className="btn-icon" title="View Details">👁️</button>
                    <button className="btn-icon" title="Force Logout">🚪</button>
                    <button className="btn-icon" title="Block IP">🚫</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* IP Management */}
        <div className="section-card">
          <h2>IP Address Management</h2>
          <div className="ip-management">
            <div className="ip-actions">
              <button className="btn btn-primary">➕ Add IP Rule</button>
              <button className="btn btn-secondary">📤 Export IP List</button>
              <button className="btn btn-secondary">🔄 Refresh</button>
            </div>
            
            <div className="ip-tabs">
              <button className="ip-tab active">Whitelist (12)</button>
              <button className="ip-tab">Blacklist (8)</button>
              <button className="ip-tab">Suspicious (3)</button>
            </div>

            <div className="ip-list">
              <div className="ip-item">
                <div className="ip-info">
                  <strong>192.168.1.0/24</strong>
                  <small>Internal Network Range</small>
                </div>
                <div className="ip-details">
                  <span>Added: 2024-01-15</span>
                  <span>Last seen: 2 minutes ago</span>
                  <span>Sessions: 45</span>
                </div>
                <div className="ip-status">
                  <span className="status-badge status-whitelist">Whitelist</span>
                </div>
                <div className="ip-actions-mini">
                  <button className="btn-icon" title="Edit">✏️</button>
                  <button className="btn-icon" title="Remove">🗑️</button>
                </div>
              </div>

              <div className="ip-item">
                <div className="ip-info">
                  <strong>203.0.113.0/24</strong>
                  <small>Faculty Home Network</small>
                </div>
                <div className="ip-details">
                  <span>Added: 2024-01-10</span>
                  <span>Last seen: 1 hour ago</span>
                  <span>Sessions: 23</span>
                </div>
                <div className="ip-status">
                  <span className="status-badge status-whitelist">Whitelist</span>
                </div>
                <div className="ip-actions-mini">
                  <button className="btn-icon" title="Edit">✏️</button>
                  <button className="btn-icon" title="Remove">🗑️</button>
                </div>
              </div>

              <div className="ip-item">
                <div className="ip-info">
                  <strong>185.199.108.153</strong>
                  <small>Suspicious Activity Detected</small>
                </div>
                <div className="ip-details">
                  <span>Added: 2024-01-31</span>
                  <span>Last seen: 5 minutes ago</span>
                  <span>Failed attempts: 15</span>
                </div>
                <div className="ip-status">
                  <span className="status-badge status-blacklist">Blacklist</span>
                </div>
                <div className="ip-actions-mini">
                  <button className="btn-icon" title="Edit">✏️</button>
                  <button className="btn-icon" title="Remove">🗑️</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Session Settings */}
        <div className="section-card">
          <h2>Session Configuration</h2>
          <div className="form-row">
            <div className="form-group">
              <label>Session Timeout (minutes)</label>
              <select defaultValue="30">
                <option value="15">15 minutes</option>
                <option value="30">30 minutes</option>
                <option value="60">1 hour</option>
                <option value="120">2 hours</option>
                <option value="240">4 hours</option>
                <option value="480">8 hours</option>
              </select>
            </div>
            <div className="form-group">
              <label>Idle Timeout (minutes)</label>
              <select defaultValue="15">
                <option value="5">5 minutes</option>
                <option value="10">10 minutes</option>
                <option value="15">15 minutes</option>
                <option value="30">30 minutes</option>
                <option value="60">1 hour</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Max Concurrent Sessions</label>
              <select defaultValue="3">
                <option value="1">1 session</option>
                <option value="2">2 sessions</option>
                <option value="3">3 sessions</option>
                <option value="5">5 sessions</option>
                <option value="0">Unlimited</option>
              </select>
            </div>
            <div className="form-group">
              <label>Session Cleanup Interval</label>
              <select defaultValue="5">
                <option value="1">1 minute</option>
                <option value="5">5 minutes</option>
                <option value="10">10 minutes</option>
                <option value="30">30 minutes</option>
              </select>
            </div>
          </div>
          <div className="checkbox-group">
            <label>
              <input type="checkbox" defaultChecked />
              Enable session monitoring
            </label>
            <label>
              <input type="checkbox" defaultChecked />
              Log session activities
            </label>
            <label>
              <input type="checkbox" />
              Allow multiple sessions from same IP
            </label>
            <label>
              <input type="checkbox" defaultChecked />
              Detect suspicious login patterns
            </label>
            <label>
              <input type="checkbox" />
              Auto-block suspicious IPs
            </label>
          </div>
        </div>
      </div>

      <div className="form-actions">
        <button className="btn btn-primary">Save Settings</button>
        <button className="btn btn-secondary">Apply Changes</button>
        <button className="btn btn-secondary">Cancel</button>
      </div>
    </div>
  );
};

export default Sessions;
