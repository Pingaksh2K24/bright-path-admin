import React from 'react';
import './Backups.css';

const Backups: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Backup Management</h1>
        <p>Create, schedule, and manage database and file backups for data protection</p>
      </div>

      <div className="content-section">
        {/* Backup Actions */}
        <div className="section-card">
          <div className="backup-actions">
            <button className="btn btn-primary">
              💾 Create Backup Now
            </button>
            <button className="btn btn-secondary">
              📅 Schedule Backup
            </button>
            <button className="btn btn-secondary">
              📤 Export Backup
            </button>
            <button className="btn btn-secondary">
              🔄 Restore Backup
            </button>
          </div>
        </div>

        {/* Backup Statistics */}
        <div className="section-card">
          <h2>Backup Overview</h2>
          <div className="stats-grid">
            <div className="stat-card total-backups">
              <div className="stat-number">47</div>
              <div className="stat-label">Total Backups</div>
              <div className="stat-trend">↗️ +3 this week</div>
            </div>
            <div className="stat-card storage-used">
              <div className="stat-number">2.4 GB</div>
              <div className="stat-label">Storage Used</div>
              <div className="stat-trend">↗️ +156 MB this week</div>
            </div>
            <div className="stat-card last-backup">
              <div className="stat-number">2h ago</div>
              <div className="stat-label">Last Backup</div>
              <div className="stat-trend">✅ Successful</div>
            </div>
            <div className="stat-card success-rate">
              <div className="stat-number">98.5%</div>
              <div className="stat-label">Success Rate</div>
              <div className="stat-trend">↗️ +0.2% this month</div>
            </div>
          </div>
        </div>

        {/* Backup Schedule */}
        <div className="section-card">
          <h2>Backup Schedule</h2>
          <div className="schedule-grid">
            <div className="schedule-item active">
              <div className="schedule-header">
                <h3>📊 Database Backup</h3>
                <div className="schedule-toggle">
                  <label className="switch">
                    <input type="checkbox" defaultChecked />
                    <span className="slider"></span>
                  </label>
                </div>
              </div>
              <div className="schedule-details">
                <div className="schedule-info">
                  <span><strong>Frequency:</strong> Daily at 2:00 AM</span>
                  <span><strong>Retention:</strong> Keep 30 days</span>
                  <span><strong>Size:</strong> ~45 MB per backup</span>
                  <span><strong>Next Run:</strong> Today at 2:00 AM</span>
                </div>
                <div className="schedule-actions">
                  <button className="btn-icon" title="Edit Schedule">✏️</button>
                  <button className="btn-icon" title="Run Now">▶️</button>
                  <button className="btn-icon" title="View Logs">📋</button>
                </div>
              </div>
            </div>

            <div className="schedule-item active">
              <div className="schedule-header">
                <h3>📁 File System Backup</h3>
                <div className="schedule-toggle">
                  <label className="switch">
                    <input type="checkbox" defaultChecked />
                    <span className="slider"></span>
                  </label>
                </div>
              </div>
              <div className="schedule-details">
                <div className="schedule-info">
                  <span><strong>Frequency:</strong> Weekly on Sunday at 1:00 AM</span>
                  <span><strong>Retention:</strong> Keep 12 weeks</span>
                  <span><strong>Size:</strong> ~1.2 GB per backup</span>
                  <span><strong>Next Run:</strong> Sunday at 1:00 AM</span>
                </div>
                <div className="schedule-actions">
                  <button className="btn-icon" title="Edit Schedule">✏️</button>
                  <button className="btn-icon" title="Run Now">▶️</button>
                  <button className="btn-icon" title="View Logs">📋</button>
                </div>
              </div>
            </div>

            <div className="schedule-item">
              <div className="schedule-header">
                <h3>🖼️ Media Files Backup</h3>
                <div className="schedule-toggle">
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                  </label>
                </div>
              </div>
              <div className="schedule-details">
                <div className="schedule-info">
                  <span><strong>Frequency:</strong> Monthly on 1st at 12:00 AM</span>
                  <span><strong>Retention:</strong> Keep 6 months</span>
                  <span><strong>Size:</strong> ~3.8 GB per backup</span>
                  <span><strong>Status:</strong> Disabled</span>
                </div>
                <div className="schedule-actions">
                  <button className="btn-icon" title="Edit Schedule">✏️</button>
                  <button className="btn-icon" title="Run Now">▶️</button>
                  <button className="btn-icon" title="View Logs">📋</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Backups */}
        <div className="section-card">
          <h2>Recent Backups</h2>
          <div className="backups-table">
            <table>
              <thead>
                <tr>
                  <th>Backup Name</th>
                  <th>Type</th>
                  <th>Size</th>
                  <th>Created</th>
                  <th>Duration</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="backup-success">
                  <td>
                    <div className="backup-info">
                      <strong>db_backup_20240131_020015</strong>
                      <small>Automated daily backup</small>
                    </div>
                  </td>
                  <td><span className="type-badge type-database">Database</span></td>
                  <td>47.2 MB</td>
                  <td>
                    <div className="time-info">
                      <strong>2024-01-31 02:00:15</strong>
                      <small>2 hours ago</small>
                    </div>
                  </td>
                  <td>2m 34s</td>
                  <td><span className="status-badge status-success">Success</span></td>
                  <td>
                    <button className="btn-icon" title="Download">📥</button>
                    <button className="btn-icon" title="Restore">🔄</button>
                    <button className="btn-icon" title="Delete">🗑️</button>
                  </td>
                </tr>
                <tr className="backup-success">
                  <td>
                    <div className="backup-info">
                      <strong>files_backup_20240128_010032</strong>
                      <small>Weekly file system backup</small>
                    </div>
                  </td>
                  <td><span className="type-badge type-files">Files</span></td>
                  <td>1.18 GB</td>
                  <td>
                    <div className="time-info">
                      <strong>2024-01-28 01:00:32</strong>
                      <small>3 days ago</small>
                    </div>
                  </td>
                  <td>18m 45s</td>
                  <td><span className="status-badge status-success">Success</span></td>
                  <td>
                    <button className="btn-icon" title="Download">📥</button>
                    <button className="btn-icon" title="Restore">🔄</button>
                    <button className="btn-icon" title="Delete">🗑️</button>
                  </td>
                </tr>
                <tr className="backup-failed">
                  <td>
                    <div className="backup-info">
                      <strong>db_backup_20240130_020011</strong>
                      <small>Automated daily backup</small>
                    </div>
                  </td>
                  <td><span className="type-badge type-database">Database</span></td>
                  <td>0 MB</td>
                  <td>
                    <div className="time-info">
                      <strong>2024-01-30 02:00:11</strong>
                      <small>1 day ago</small>
                    </div>
                  </td>
                  <td>0m 12s</td>
                  <td><span className="status-badge status-failed">Failed</span></td>
                  <td>
                    <button className="btn-icon" title="View Error">⚠️</button>
                    <button className="btn-icon" title="Retry">🔄</button>
                    <button className="btn-icon" title="Delete">🗑️</button>
                  </td>
                </tr>
                <tr className="backup-success">
                  <td>
                    <div className="backup-info">
                      <strong>manual_backup_20240129_143022</strong>
                      <small>Manual backup by admin</small>
                    </div>
                  </td>
                  <td><span className="type-badge type-manual">Manual</span></td>
                  <td>52.8 MB</td>
                  <td>
                    <div className="time-info">
                      <strong>2024-01-29 14:30:22</strong>
                      <small>2 days ago</small>
                    </div>
                  </td>
                  <td>3m 18s</td>
                  <td><span className="status-badge status-success">Success</span></td>
                  <td>
                    <button className="btn-icon" title="Download">📥</button>
                    <button className="btn-icon" title="Restore">🔄</button>
                    <button className="btn-icon" title="Delete">🗑️</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Backup Configuration */}
        <div className="section-card">
          <h2>Backup Configuration</h2>
          <div className="form-row">
            <div className="form-group">
              <label>Backup Storage Location</label>
              <select defaultValue="local">
                <option value="local">Local Storage</option>
                <option value="aws">Amazon S3</option>
                <option value="google">Google Cloud Storage</option>
                <option value="azure">Azure Blob Storage</option>
                <option value="ftp">FTP Server</option>
              </select>
            </div>
            <div className="form-group">
              <label>Compression Level</label>
              <select defaultValue="medium">
                <option value="none">No Compression</option>
                <option value="low">Low (Fast)</option>
                <option value="medium">Medium (Balanced)</option>
                <option value="high">High (Small Size)</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Encryption</label>
              <select defaultValue="aes256">
                <option value="none">No Encryption</option>
                <option value="aes128">AES-128</option>
                <option value="aes256">AES-256</option>
              </select>
            </div>
            <div className="form-group">
              <label>Max Backup Size (GB)</label>
              <input type="number" defaultValue="10" min="1" max="100" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Email Notifications</label>
              <input type="email" defaultValue="admin@brightpath.edu" placeholder="Enter email for notifications" />
            </div>
            <div className="form-group">
              <label>Notification Events</label>
              <select defaultValue="failures">
                <option value="all">All Events</option>
                <option value="failures">Failures Only</option>
                <option value="success">Success Only</option>
                <option value="none">No Notifications</option>
              </select>
            </div>
          </div>
          <div className="checkbox-group">
            <label>
              <input type="checkbox" defaultChecked />
              Enable automatic cleanup of old backups
            </label>
            <label>
              <input type="checkbox" defaultChecked />
              Verify backup integrity after creation
            </label>
            <label>
              <input type="checkbox" />
              Create backup before system updates
            </label>
            <label>
              <input type="checkbox" defaultChecked />
              Log all backup activities
            </label>
          </div>
        </div>

        {/* Storage Usage */}
        <div className="section-card">
          <h2>Storage Usage</h2>
          <div className="storage-overview">
            <div className="storage-chart">
              <div className="storage-bar">
                <div className="storage-used" style={{width: '48%'}}></div>
              </div>
              <div className="storage-info">
                <span>2.4 GB used of 5 GB available (48%)</span>
              </div>
            </div>
            <div className="storage-breakdown">
              <div className="storage-item">
                <span className="storage-type">Database Backups</span>
                <span className="storage-size">1.2 GB</span>
                <span className="storage-percentage">50%</span>
              </div>
              <div className="storage-item">
                <span className="storage-type">File Backups</span>
                <span className="storage-size">1.1 GB</span>
                <span className="storage-percentage">46%</span>
              </div>
              <div className="storage-item">
                <span className="storage-type">Manual Backups</span>
                <span className="storage-size">100 MB</span>
                <span className="storage-percentage">4%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="form-actions">
        <button className="btn btn-primary">Save Configuration</button>
        <button className="btn btn-secondary">Test Backup</button>
        <button className="btn btn-secondary">Cancel</button>
      </div>
    </div>
  );
};

export default Backups;
