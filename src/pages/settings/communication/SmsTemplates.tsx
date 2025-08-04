import React from 'react';
import './SmsTemplates.css';

const SmsTemplates: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>SMS Templates</h1>
        <p>Manage and customize SMS templates for various communications</p>
      </div>

      <div className="content-section">
        {/* Template Actions */}
        <div className="section-card">
          <div className="template-actions">
            <button className="btn btn-primary">
              ➕ Create New Template
            </button>
            <button className="btn btn-secondary">
              📤 Import Templates
            </button>
            <button className="btn btn-secondary">
              📥 Export Templates
            </button>
            <button className="btn btn-secondary">
              🔄 Reset to Default
            </button>
          </div>
        </div>

        {/* SMS Statistics */}
        <div className="section-card">
          <h2>SMS Statistics</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">1,245</div>
              <div className="stat-label">SMS Sent This Month</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">98.5%</div>
              <div className="stat-label">Delivery Rate</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">₹2,890</div>
              <div className="stat-label">Monthly SMS Cost</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">15</div>
              <div className="stat-label">Active Templates</div>
            </div>
          </div>
        </div>

        {/* Template Categories */}
        <div className="section-card">
          <h2>Template Categories</h2>
          <div className="template-categories">
            <div className="category-card active">
              <h3>📱 Admission</h3>
              <p>4 templates</p>
            </div>
            <div className="category-card">
              <h3>📚 Academic</h3>
              <p>6 templates</p>
            </div>
            <div className="category-card">
              <h3>💰 Fee</h3>
              <p>5 templates</p>
            </div>
            <div className="category-card">
              <h3>📊 Results</h3>
              <p>3 templates</p>
            </div>
            <div className="category-card">
              <h3>🚨 Alerts</h3>
              <p>7 templates</p>
            </div>
          </div>
        </div>

        {/* Templates List */}
        <div className="section-card">
          <h2>Admission SMS Templates</h2>
          <div className="templates-list">
            <div className="template-item">
              <div className="template-header">
                <div className="template-info">
                  <h3>Welcome SMS</h3>
                  <span className="badge badge-admission">Admission</span>
                  <span className="status-badge status-active">Active</span>
                </div>
                <div className="template-actions-mini">
                  <button className="btn-icon" title="Edit">✏️</button>
                  <button className="btn-icon" title="Test">📱</button>
                  <button className="btn-icon" title="Duplicate">📋</button>
                  <button className="btn-icon" title="Delete">🗑️</button>
                </div>
              </div>
              <div className="template-content">
                <div className="sms-preview">
                  <p>Welcome to [INSTITUTE_NAME]! Your admission is confirmed for [COURSE_NAME]. Report on [ADMISSION_DATE]. Contact: [CONTACT_NUMBER]</p>
                  <div className="character-count">
                    <span className="count">142/160</span>
                    <span className="sms-count">1 SMS</span>
                  </div>
                </div>
              </div>
              <div className="template-meta">
                <span>Last used: 2 days ago</span>
                <span>Success rate: 98.2%</span>
                <span>Modified: Jan 15, 2024</span>
              </div>
            </div>

            <div className="template-item">
              <div className="template-header">
                <div className="template-info">
                  <h3>Application Received</h3>
                  <span className="badge badge-admission">Admission</span>
                  <span className="status-badge status-active">Active</span>
                </div>
                <div className="template-actions-mini">
                  <button className="btn-icon" title="Edit">✏️</button>
                  <button className="btn-icon" title="Test">📱</button>
                  <button className="btn-icon" title="Duplicate">📋</button>
                  <button className="btn-icon" title="Delete">🗑️</button>
                </div>
              </div>
              <div className="template-content">
                <div className="sms-preview">
                  <p>Dear [STUDENT_NAME], your application #[APPLICATION_ID] has been received. We will review and contact you within 3-5 working days.</p>
                  <div className="character-count">
                    <span className="count">135/160</span>
                    <span className="sms-count">1 SMS</span>
                  </div>
                </div>
              </div>
              <div className="template-meta">
                <span>Last used: 1 day ago</span>
                <span>Success rate: 99.1%</span>
                <span>Modified: Jan 12, 2024</span>
              </div>
            </div>

            <div className="template-item">
              <div className="template-header">
                <div className="template-info">
                  <h3>Fee Reminder</h3>
                  <span className="badge badge-fee">Fee</span>
                  <span className="status-badge status-active">Active</span>
                </div>
                <div className="template-actions-mini">
                  <button className="btn-icon" title="Edit">✏️</button>
                  <button className="btn-icon" title="Test">📱</button>
                  <button className="btn-icon" title="Duplicate">📋</button>
                  <button className="btn-icon" title="Delete">🗑️</button>
                </div>
              </div>
              <div className="template-content">
                <div className="sms-preview">
                  <p>Dear [STUDENT_NAME], your fee payment of ₹[FEE_AMOUNT] is due on [DUE_DATE]. Pay online at [PAYMENT_LINK] or visit office.</p>
                  <div className="character-count">
                    <span className="count">158/160</span>
                    <span className="sms-count">1 SMS</span>
                  </div>
                </div>
              </div>
              <div className="template-meta">
                <span>Last used: Today</span>
                <span>Success rate: 97.8%</span>
                <span>Modified: Jan 10, 2024</span>
              </div>
            </div>
          </div>
        </div>

        {/* SMS Variables */}
        <div className="section-card">
          <h2>Available Variables</h2>
          <p>Use these variables in your SMS templates. They will be automatically replaced with actual values.</p>
          <div className="variables-grid">
            <div className="variable-item">
              <code>[STUDENT_NAME]</code>
              <span>Student's full name</span>
            </div>
            <div className="variable-item">
              <code>[INSTITUTE_NAME]</code>
              <span>Institution name</span>
            </div>
            <div className="variable-item">
              <code>[COURSE_NAME]</code>
              <span>Course/Program name</span>
            </div>
            <div className="variable-item">
              <code>[APPLICATION_ID]</code>
              <span>Application reference number</span>
            </div>
            <div className="variable-item">
              <code>[FEE_AMOUNT]</code>
              <span>Fee amount</span>
            </div>
            <div className="variable-item">
              <code>[DUE_DATE]</code>
              <span>Payment due date</span>
            </div>
            <div className="variable-item">
              <code>[CONTACT_NUMBER]</code>
              <span>Institution contact number</span>
            </div>
            <div className="variable-item">
              <code>[PAYMENT_LINK]</code>
              <span>Online payment link</span>
            </div>
          </div>
        </div>

        {/* SMS Settings */}
        <div className="section-card">
          <h2>SMS Configuration</h2>
          <div className="form-row">
            <div className="form-group">
              <label>SMS Provider</label>
              <select defaultValue="textlocal">
                <option value="textlocal">TextLocal</option>
                <option value="twilio">Twilio</option>
                <option value="msg91">MSG91</option>
                <option value="fast2sms">Fast2SMS</option>
              </select>
            </div>
            <div className="form-group">
              <label>Sender ID</label>
              <input type="text" defaultValue="BRTPTH" maxLength={6} />
              <small>6 characters max for promotional SMS</small>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>API Key</label>
              <input type="password" defaultValue="••••••••••••••••" />
            </div>
            <div className="form-group">
              <label>SMS Route</label>
              <select defaultValue="promotional">
                <option value="promotional">Promotional</option>
                <option value="transactional">Transactional</option>
                <option value="otp">OTP</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Daily SMS Limit</label>
              <input type="number" defaultValue="500" />
            </div>
            <div className="form-group">
              <label>SMS Rate (per SMS)</label>
              <input type="number" step="0.01" defaultValue="0.25" />
            </div>
          </div>
        </div>
      </div>

      <div className="form-actions">
        <button className="btn btn-primary">Save Changes</button>
        <button className="btn btn-secondary">Test SMS</button>
        <button className="btn btn-secondary">Cancel</button>
      </div>
    </div>
  );
};

export default SmsTemplates;
