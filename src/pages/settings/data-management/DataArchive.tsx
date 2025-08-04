import React from 'react';
import './DataArchive.css';

const DataArchive: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Data Archive & Cleanup</h1>
        <p>Manage data archival, cleanup policies, and storage optimization</p>
      </div>

      <div className="content-section">
        {/* Archive Actions */}
        <div className="section-card">
          <div className="archive-actions">
            <button className="btn btn-primary">
              📦 Create Archive
            </button>
            <button className="btn btn-secondary">
              🗂️ Browse Archives
            </button>
            <button className="btn btn-secondary">
              🧹 Run Cleanup
            </button>
            <button className="btn btn-secondary">
              📊 Storage Analysis
            </button>
          </div>
        </div>

        {/* Archive Statistics */}
        <div className="section-card">
          <h2>Archive Overview</h2>
          <div className="stats-grid">
            <div className="stat-card archived-records">
              <div className="stat-number">15,847</div>
              <div className="stat-label">Archived Records</div>
              <div className="stat-trend">↗️ +1,234 this month</div>
            </div>
            <div className="stat-card storage-saved">
              <div className="stat-number">8.2 GB</div>
              <div className="stat-label">Storage Saved</div>
              <div className="stat-trend">↗️ +1.4 GB this month</div>
            </div>
            <div className="stat-card cleanup-jobs">
              <div className="stat-number">23</div>
              <div className="stat-label">Cleanup Jobs Run</div>
              <div className="stat-trend">✅ Last run: 2 days ago</div>
            </div>
            <div className="stat-card retention-compliance">
              <div className="stat-number">98.5%</div>
              <div className="stat-label">Retention Compliance</div>
              <div className="stat-trend">↗️ +0.3% this quarter</div>
            </div>
          </div>
        </div>

        {/* Archive Policies */}
        <div className="section-card">
          <h2>Archive Policies</h2>
          <div className="policies-grid">
            <div className="policy-item active">
              <div className="policy-header">
                <h3>🎓 Student Records</h3>
                <div className="policy-toggle">
                  <label className="switch">
                    <input type="checkbox" defaultChecked />
                    <span className="slider"></span>
                  </label>
                </div>
              </div>
              <div className="policy-content">
                <div className="policy-rules">
                  <div className="rule-item">
                    <span className="rule-label">Archive after:</span>
                    <span className="rule-value">3 years of graduation</span>
                  </div>
                  <div className="rule-item">
                    <span className="rule-label">Delete after:</span>
                    <span className="rule-value">7 years in archive</span>
                  </div>
                  <div className="rule-item">
                    <span className="rule-label">Last run:</span>
                    <span className="rule-value">2024-01-28 (3 days ago)</span>
                  </div>
                  <div className="rule-item">
                    <span className="rule-label">Records affected:</span>
                    <span className="rule-value">1,245 students</span>
                  </div>
                </div>
                <div className="policy-actions">
                  <button className="btn-icon" title="Edit Policy">✏️</button>
                  <button className="btn-icon" title="Run Now">▶️</button>
                  <button className="btn-icon" title="View Logs">📋</button>
                </div>
              </div>
            </div>

            <div className="policy-item active">
              <div className="policy-header">
                <h3>📊 Exam Results</h3>
                <div className="policy-toggle">
                  <label className="switch">
                    <input type="checkbox" defaultChecked />
                    <span className="slider"></span>
                  </label>
                </div>
              </div>
              <div className="policy-content">
                <div className="policy-rules">
                  <div className="rule-item">
                    <span className="rule-label">Archive after:</span>
                    <span className="rule-value">2 years</span>
                  </div>
                  <div className="rule-item">
                    <span className="rule-label">Delete after:</span>
                    <span className="rule-value">5 years in archive</span>
                  </div>
                  <div className="rule-item">
                    <span className="rule-label">Last run:</span>
                    <span className="rule-value">2024-01-30 (1 day ago)</span>
                  </div>
                  <div className="rule-item">
                    <span className="rule-label">Records affected:</span>
                    <span className="rule-value">8,456 results</span>
                  </div>
                </div>
                <div className="policy-actions">
                  <button className="btn-icon" title="Edit Policy">✏️</button>
                  <button className="btn-icon" title="Run Now">▶️</button>
                  <button className="btn-icon" title="View Logs">📋</button>
                </div>
              </div>
            </div>

            <div className="policy-item">
              <div className="policy-header">
                <h3>📝 Application Forms</h3>
                <div className="policy-toggle">
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                  </label>
                </div>
              </div>
              <div className="policy-content">
                <div className="policy-rules">
                  <div className="rule-item">
                    <span className="rule-label">Archive after:</span>
                    <span className="rule-value">1 year</span>
                  </div>
                  <div className="rule-item">
                    <span className="rule-label">Delete after:</span>
                    <span className="rule-value">3 years in archive</span>
                  </div>
                  <div className="rule-item">
                    <span className="rule-label">Status:</span>
                    <span className="rule-value">Disabled</span>
                  </div>
                  <div className="rule-item">
                    <span className="rule-label">Pending records:</span>
                    <span className="rule-value">2,847 applications</span>
                  </div>
                </div>
                <div className="policy-actions">
                  <button className="btn-icon" title="Edit Policy">✏️</button>
                  <button className="btn-icon" title="Run Now">▶️</button>
                  <button className="btn-icon" title="View Logs">📋</button>
                </div>
              </div>
            </div>

            <div className="policy-item active">
              <div className="policy-header">
                <h3>📄 System Logs</h3>
                <div className="policy-toggle">
                  <label className="switch">
                    <input type="checkbox" defaultChecked />
                    <span className="slider"></span>
                  </label>
                </div>
              </div>
              <div className="policy-content">
                <div className="policy-rules">
                  <div className="rule-item">
                    <span className="rule-label">Archive after:</span>
                    <span className="rule-value">90 days</span>
                  </div>
                  <div className="rule-item">
                    <span className="rule-label">Delete after:</span>
                    <span className="rule-value">1 year in archive</span>
                  </div>
                  <div className="rule-item">
                    <span className="rule-label">Last run:</span>
                    <span className="rule-value">2024-01-31 (Today)</span>
                  </div>
                  <div className="rule-item">
                    <span className="rule-label">Records affected:</span>
                    <span className="rule-value">45,678 log entries</span>
                  </div>
                </div>
                <div className="policy-actions">
                  <button className="btn-icon" title="Edit Policy">✏️</button>
                  <button className="btn-icon" title="Run Now">▶️</button>
                  <button className="btn-icon" title="View Logs">📋</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Archive Activities */}
        <div className="section-card">
          <h2>Recent Archive Activities</h2>
          <div className="activities-table">
            <table>
              <thead>
                <tr>
                  <th>Activity</th>
                  <th>Type</th>
                  <th>Records</th>
                  <th>Size</th>
                  <th>Date</th>
                  <th>Duration</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="activity-success">
                  <td>
                    <div className="activity-info">
                      <strong>Student Records Archive</strong>
                      <small>Graduated batch 2020-2021</small>
                    </div>
                  </td>
                  <td><span className="type-badge type-archive">Archive</span></td>
                  <td>1,245</td>
                  <td>2.3 GB</td>
                  <td>
                    <div className="time-info">
                      <strong>2024-01-28</strong>
                      <small>3 days ago</small>
                    </div>
                  </td>
                  <td>45m 23s</td>
                  <td><span className="status-badge status-success">Success</span></td>
                  <td>
                    <button className="btn-icon" title="View Details">👁️</button>
                    <button className="btn-icon" title="Restore">🔄</button>
                    <button className="btn-icon" title="Download">📥</button>
                  </td>
                </tr>
                <tr className="activity-success">
                  <td>
                    <div className="activity-info">
                      <strong>System Logs Cleanup</strong>
                      <small>Logs older than 90 days</small>
                    </div>
                  </td>
                  <td><span className="type-badge type-cleanup">Cleanup</span></td>
                  <td>45,678</td>
                  <td>890 MB</td>
                  <td>
                    <div className="time-info">
                      <strong>2024-01-31</strong>
                      <small>Today</small>
                    </div>
                  </td>
                  <td>12m 45s</td>
                  <td><span className="status-badge status-success">Success</span></td>
                  <td>
                    <button className="btn-icon" title="View Details">👁️</button>
                    <button className="btn-icon" title="View Report">📊</button>
                  </td>
                </tr>
                <tr className="activity-warning">
                  <td>
                    <div className="activity-info">
                      <strong>Exam Results Archive</strong>
                      <small>Results from 2022</small>
                    </div>
                  </td>
                  <td><span className="type-badge type-archive">Archive</span></td>
                  <td>8,456</td>
                  <td>1.8 GB</td>
                  <td>
                    <div className="time-info">
                      <strong>2024-01-30</strong>
                      <small>1 day ago</small>
                    </div>
                  </td>
                  <td>32m 18s</td>
                  <td><span className="status-badge status-warning">Partial</span></td>
                  <td>
                    <button className="btn-icon" title="View Details">👁️</button>
                    <button className="btn-icon" title="Retry">🔄</button>
                    <button className="btn-icon" title="Download">📥</button>
                  </td>
                </tr>
                <tr className="activity-failed">
                  <td>
                    <div className="activity-info">
                      <strong>Application Forms Cleanup</strong>
                      <small>Rejected applications cleanup</small>
                    </div>
                  </td>
                  <td><span className="type-badge type-cleanup">Cleanup</span></td>
                  <td>0</td>
                  <td>0 MB</td>
                  <td>
                    <div className="time-info">
                      <strong>2024-01-29</strong>
                      <small>2 days ago</small>
                    </div>
                  </td>
                  <td>0m 15s</td>
                  <td><span className="status-badge status-failed">Failed</span></td>
                  <td>
                    <button className="btn-icon" title="View Error">⚠️</button>
                    <button className="btn-icon" title="Retry">🔄</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Storage Analysis */}
        <div className="section-card">
          <h2>Storage Analysis</h2>
          <div className="storage-analysis">
            <div className="storage-charts">
              <div className="chart-item">
                <h3>Data Distribution</h3>
                <div className="chart-placeholder">
                  <div className="chart-segment student-data" style={{width: '45%'}}>Student Data (45%)</div>
                  <div className="chart-segment exam-data" style={{width: '30%'}}>Exam Data (30%)</div>
                  <div className="chart-segment system-data" style={{width: '15%'}}>System Data (15%)</div>
                  <div className="chart-segment other-data" style={{width: '10%'}}>Other (10%)</div>
                </div>
              </div>
              <div className="chart-item">
                <h3>Growth Trend</h3>
                <div className="trend-chart">
                  <div className="trend-line">
                    <span>📈 Data growth: +2.3 GB/month</span>
                    <span>📦 Archive rate: +1.8 GB/month</span>
                    <span>🗑️ Cleanup savings: +0.5 GB/month</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="storage-recommendations">
              <h3>Recommendations</h3>
              <div className="recommendation-item">
                <span className="recommendation-icon">💡</span>
                <div className="recommendation-content">
                  <strong>Enable Application Forms Archive</strong>
                  <p>2,847 old application forms can be archived to save ~450 MB</p>
                </div>
              </div>
              <div className="recommendation-item">
                <span className="recommendation-icon">⚠️</span>
                <div className="recommendation-content">
                  <strong>Review System Logs Retention</strong>
                  <p>Consider reducing log retention from 90 to 60 days to save storage</p>
                </div>
              </div>
              <div className="recommendation-item">
                <span className="recommendation-icon">🔧</span>
                <div className="recommendation-content">
                  <strong>Optimize Archive Compression</strong>
                  <p>Increase compression level to save additional 15-20% storage</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Archive Configuration */}
        <div className="section-card">
          <h2>Archive Configuration</h2>
          <div className="form-row">
            <div className="form-group">
              <label>Archive Storage Location</label>
              <select defaultValue="local">
                <option value="local">Local Storage</option>
                <option value="aws">Amazon S3 Glacier</option>
                <option value="google">Google Cloud Archive</option>
                <option value="azure">Azure Archive Storage</option>
              </select>
            </div>
            <div className="form-group">
              <label>Archive Compression</label>
              <select defaultValue="high">
                <option value="none">No Compression</option>
                <option value="low">Low (Fast)</option>
                <option value="medium">Medium (Balanced)</option>
                <option value="high">High (Maximum Space Saving)</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Archive Encryption</label>
              <select defaultValue="aes256">
                <option value="none">No Encryption</option>
                <option value="aes128">AES-128</option>
                <option value="aes256">AES-256</option>
              </select>
            </div>
            <div className="form-group">
              <label>Cleanup Schedule</label>
              <select defaultValue="weekly">
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="manual">Manual Only</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Notification Email</label>
              <input type="email" defaultValue="admin@brightpath.edu" placeholder="Enter email for notifications" />
            </div>
            <div className="form-group">
              <label>Archive Verification</label>
              <select defaultValue="checksum">
                <option value="none">No Verification</option>
                <option value="checksum">Checksum Verification</option>
                <option value="full">Full Data Verification</option>
              </select>
            </div>
          </div>
          <div className="checkbox-group">
            <label>
              <input type="checkbox" defaultChecked />
              Enable automatic archival based on policies
            </label>
            <label>
              <input type="checkbox" defaultChecked />
              Send notifications for archive activities
            </label>
            <label>
              <input type="checkbox" />
              Create backup before permanent deletion
            </label>
            <label>
              <input type="checkbox" defaultChecked />
              Log all archive and cleanup activities
            </label>
            <label>
              <input type="checkbox" />
              Enable data recovery protection (30-day grace period)
            </label>
          </div>
        </div>
      </div>

      <div className="form-actions">
        <button className="btn btn-primary">Save Configuration</button>
        <button className="btn btn-secondary">Run Archive Analysis</button>
        <button className="btn btn-secondary">Cancel</button>
      </div>
    </div>
  );
};

export default DataArchive;
