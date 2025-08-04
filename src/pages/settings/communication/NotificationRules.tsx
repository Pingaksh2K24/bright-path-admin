import React from 'react';
import './NotificationRules.css';

const NotificationRules: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Notification Rules</h1>
        <p>Configure automated notification rules and triggers for various events</p>
      </div>

      <div className="content-section">
        {/* Rule Actions */}
        <div className="section-card">
          <div className="rule-actions">
            <button className="btn btn-primary">
              ➕ Create New Rule
            </button>
            <button className="btn btn-secondary">
              📤 Import Rules
            </button>
            <button className="btn btn-secondary">
              📥 Export Rules
            </button>
            <button className="btn btn-secondary">
              🔄 Reset to Default
            </button>
          </div>
        </div>

        {/* Rule Categories */}
        <div className="section-card">
          <h2>Rule Categories</h2>
          <div className="rule-categories">
            <div className="category-card active">
              <h3>🎓 Admission</h3>
              <p>6 active rules</p>
            </div>
            <div className="category-card">
              <h3>📚 Academic</h3>
              <p>8 active rules</p>
            </div>
            <div className="category-card">
              <h3>💰 Fee</h3>
              <p>5 active rules</p>
            </div>
            <div className="category-card">
              <h3>📊 Results</h3>
              <p>4 active rules</p>
            </div>
            <div className="category-card">
              <h3>🎉 Events</h3>
              <p>3 active rules</p>
            </div>
            <div className="category-card">
              <h3>⚠️ System</h3>
              <p>7 active rules</p>
            </div>
          </div>
        </div>

        {/* Active Rules */}
        <div className="section-card">
          <h2>Admission Notification Rules</h2>
          <div className="rules-list">
            <div className="rule-item">
              <div className="rule-header">
                <div className="rule-info">
                  <h3>New Application Received</h3>
                  <span className="badge badge-admission">Admission</span>
                  <span className="status-badge status-active">Active</span>
                </div>
                <div className="rule-toggle">
                  <label className="switch">
                    <input type="checkbox" defaultChecked />
                    <span className="slider"></span>
                  </label>
                </div>
              </div>
              <div className="rule-content">
                <div className="rule-trigger">
                  <strong>Trigger:</strong> When a new application is submitted
                </div>
                <div className="rule-actions-list">
                  <strong>Actions:</strong>
                  <div className="action-items">
                    <div className="action-item">
                      <span className="action-type">📧 Email</span>
                      <span>Send confirmation to applicant</span>
                    </div>
                    <div className="action-item">
                      <span className="action-type">📱 SMS</span>
                      <span>Send SMS notification to applicant</span>
                    </div>
                    <div className="action-item">
                      <span className="action-type">🔔 Internal</span>
                      <span>Notify admission team</span>
                    </div>
                  </div>
                </div>
                <div className="rule-conditions">
                  <strong>Conditions:</strong>
                  <span>Application status = "Submitted" AND Payment status = "Completed"</span>
                </div>
              </div>
              <div className="rule-meta">
                <span>Last triggered: 2 hours ago</span>
                <span>Success rate: 98.5%</span>
                <span>Total sent: 1,245</span>
                <div className="rule-actions-mini">
                  <button className="btn-icon" title="Edit">✏️</button>
                  <button className="btn-icon" title="Test">🧪</button>
                  <button className="btn-icon" title="Duplicate">📋</button>
                  <button className="btn-icon" title="Delete">🗑️</button>
                </div>
              </div>
            </div>

            <div className="rule-item">
              <div className="rule-header">
                <div className="rule-info">
                  <h3>Admission Confirmed</h3>
                  <span className="badge badge-admission">Admission</span>
                  <span className="status-badge status-active">Active</span>
                </div>
                <div className="rule-toggle">
                  <label className="switch">
                    <input type="checkbox" defaultChecked />
                    <span className="slider"></span>
                  </label>
                </div>
              </div>
              <div className="rule-content">
                <div className="rule-trigger">
                  <strong>Trigger:</strong> When admission status changes to "Confirmed"
                </div>
                <div className="rule-actions-list">
                  <strong>Actions:</strong>
                  <div className="action-items">
                    <div className="action-item">
                      <span className="action-type">📧 Email</span>
                      <span>Send welcome email with joining details</span>
                    </div>
                    <div className="action-item">
                      <span className="action-type">📱 SMS</span>
                      <span>Send welcome SMS</span>
                    </div>
                    <div className="action-item">
                      <span className="action-type">📄 Document</span>
                      <span>Generate admission letter PDF</span>
                    </div>
                  </div>
                </div>
                <div className="rule-conditions">
                  <strong>Conditions:</strong>
                  <span>Admission status = "Confirmed" AND Documents verified = "Yes"</span>
                </div>
              </div>
              <div className="rule-meta">
                <span>Last triggered: 1 day ago</span>
                <span>Success rate: 99.2%</span>
                <span>Total sent: 856</span>
                <div className="rule-actions-mini">
                  <button className="btn-icon" title="Edit">✏️</button>
                  <button className="btn-icon" title="Test">🧪</button>
                  <button className="btn-icon" title="Duplicate">📋</button>
                  <button className="btn-icon" title="Delete">🗑️</button>
                </div>
              </div>
            </div>

            <div className="rule-item">
              <div className="rule-header">
                <div className="rule-info">
                  <h3>Fee Payment Reminder</h3>
                  <span className="badge badge-fee">Fee</span>
                  <span className="status-badge status-active">Active</span>
                </div>
                <div className="rule-toggle">
                  <label className="switch">
                    <input type="checkbox" defaultChecked />
                    <span className="slider"></span>
                  </label>
                </div>
              </div>
              <div className="rule-content">
                <div className="rule-trigger">
                  <strong>Trigger:</strong> 3 days before fee due date
                </div>
                <div className="rule-actions-list">
                  <strong>Actions:</strong>
                  <div className="action-items">
                    <div className="action-item">
                      <span className="action-type">📧 Email</span>
                      <span>Send fee reminder email</span>
                    </div>
                    <div className="action-item">
                      <span className="action-type">📱 SMS</span>
                      <span>Send fee reminder SMS</span>
                    </div>
                    <div className="action-item">
                      <span className="action-type">🔔 Push</span>
                      <span>Send push notification to mobile app</span>
                    </div>
                  </div>
                </div>
                <div className="rule-conditions">
                  <strong>Conditions:</strong>
                  <span>Fee status = "Pending" AND Days until due date = 3</span>
                </div>
              </div>
              <div className="rule-meta">
                <span>Last triggered: 6 hours ago</span>
                <span>Success rate: 97.8%</span>
                <span>Total sent: 2,341</span>
                <div className="rule-actions-mini">
                  <button className="btn-icon" title="Edit">✏️</button>
                  <button className="btn-icon" title="Test">🧪</button>
                  <button className="btn-icon" title="Duplicate">📋</button>
                  <button className="btn-icon" title="Delete">🗑️</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rule Builder */}
        <div className="section-card">
          <h2>Quick Rule Builder</h2>
          <div className="rule-builder">
            <div className="builder-step">
              <h3>1. Select Trigger Event</h3>
              <select className="form-control">
                <option>Select an event...</option>
                <option>New application submitted</option>
                <option>Admission confirmed</option>
                <option>Fee payment received</option>
                <option>Result published</option>
                <option>Document uploaded</option>
                <option>Event scheduled</option>
              </select>
            </div>
            <div className="builder-step">
              <h3>2. Choose Actions</h3>
              <div className="action-checkboxes">
                <label className="checkbox-item">
                  <input type="checkbox" />
                  <span>📧 Send Email</span>
                </label>
                <label className="checkbox-item">
                  <input type="checkbox" />
                  <span>📱 Send SMS</span>
                </label>
                <label className="checkbox-item">
                  <input type="checkbox" />
                  <span>🔔 Push Notification</span>
                </label>
                <label className="checkbox-item">
                  <input type="checkbox" />
                  <span>📄 Generate Document</span>
                </label>
              </div>
            </div>
            <div className="builder-step">
              <h3>3. Set Conditions (Optional)</h3>
              <textarea className="form-control" rows={3} placeholder="Enter conditions (e.g., status = 'active' AND amount > 1000)"></textarea>
            </div>
            <div className="builder-actions">
              <button className="btn btn-primary">Create Rule</button>
              <button className="btn btn-secondary">Preview</button>
            </div>
          </div>
        </div>

        {/* Global Settings */}
        <div className="section-card">
          <h2>Global Notification Settings</h2>
          <div className="form-row">
            <div className="form-group">
              <label>Default Email Template</label>
              <select>
                <option>Standard Template</option>
                <option>Minimal Template</option>
                <option>Branded Template</option>
              </select>
            </div>
            <div className="form-group">
              <label>Default SMS Template</label>
              <select>
                <option>Standard SMS</option>
                <option>Short SMS</option>
                <option>Detailed SMS</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Retry Failed Notifications</label>
              <select>
                <option value="3">3 times</option>
                <option value="5">5 times</option>
                <option value="10">10 times</option>
                <option value="0">Don't retry</option>
              </select>
            </div>
            <div className="form-group">
              <label>Retry Interval (minutes)</label>
              <input type="number" defaultValue="15" min="1" max="60" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Daily Notification Limit</label>
              <input type="number" defaultValue="1000" />
            </div>
            <div className="form-group">
              <label>Rate Limit (per minute)</label>
              <input type="number" defaultValue="50" />
            </div>
          </div>
        </div>
      </div>

      <div className="form-actions">
        <button className="btn btn-primary">Save Settings</button>
        <button className="btn btn-secondary">Test All Rules</button>
        <button className="btn btn-secondary">Cancel</button>
      </div>
    </div>
  );
};

export default NotificationRules;
