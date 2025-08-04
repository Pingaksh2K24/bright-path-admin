import React from 'react';
import './EmailTemplates.css';

const EmailTemplates: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Email Templates</h1>
        <p>Manage and customize email templates for various communications</p>
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

        {/* Template Categories */}
        <div className="section-card">
          <h2>Template Categories</h2>
          <div className="template-categories">
            <div className="category-card active">
              <h3>📧 Admission</h3>
              <p>5 templates</p>
            </div>
            <div className="category-card">
              <h3>📚 Academic</h3>
              <p>8 templates</p>
            </div>
            <div className="category-card">
              <h3>💰 Fee</h3>
              <p>6 templates</p>
            </div>
            <div className="category-card">
              <h3>📊 Results</h3>
              <p>4 templates</p>
            </div>
            <div className="category-card">
              <h3>🎉 Events</h3>
              <p>3 templates</p>
            </div>
            <div className="category-card">
              <h3>⚠️ Alerts</h3>
              <p>7 templates</p>
            </div>
          </div>
        </div>

        {/* Templates List */}
        <div className="section-card">
          <h2>Admission Templates</h2>
          <div className="templates-list">
            <table>
              <thead>
                <tr>
                  <th>Template Name</th>
                  <th>Subject</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Last Modified</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="template-info">
                      <strong>Welcome Email</strong>
                      <small>New student welcome message</small>
                    </div>
                  </td>
                  <td>Welcome to [INSTITUTE_NAME] - Your Journey Begins!</td>
                  <td><span className="badge badge-admission">Admission</span></td>
                  <td><span className="status-badge status-active">Active</span></td>
                  <td>2024-01-15</td>
                  <td>
                    <button className="btn-icon" title="Edit">✏️</button>
                    <button className="btn-icon" title="Preview">👁️</button>
                    <button className="btn-icon" title="Duplicate">📋</button>
                    <button className="btn-icon" title="Delete">🗑️</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="template-info">
                      <strong>Application Received</strong>
                      <small>Confirmation of application submission</small>
                    </div>
                  </td>
                  <td>Application Received - Reference #[APPLICATION_ID]</td>
                  <td><span className="badge badge-admission">Admission</span></td>
                  <td><span className="status-badge status-active">Active</span></td>
                  <td>2024-01-10</td>
                  <td>
                    <button className="btn-icon" title="Edit">✏️</button>
                    <button className="btn-icon" title="Preview">👁️</button>
                    <button className="btn-icon" title="Duplicate">📋</button>
                    <button className="btn-icon" title="Delete">🗑️</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="template-info">
                      <strong>Admission Confirmation</strong>
                      <small>Successful admission notification</small>
                    </div>
                  </td>
                  <td>Congratulations! Admission Confirmed for [COURSE_NAME]</td>
                  <td><span className="badge badge-admission">Admission</span></td>
                  <td><span className="status-badge status-active">Active</span></td>
                  <td>2024-01-08</td>
                  <td>
                    <button className="btn-icon" title="Edit">✏️</button>
                    <button className="btn-icon" title="Preview">👁️</button>
                    <button className="btn-icon" title="Duplicate">📋</button>
                    <button className="btn-icon" title="Delete">🗑️</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="template-info">
                      <strong>Document Required</strong>
                      <small>Missing document notification</small>
                    </div>
                  </td>
                  <td>Action Required: Submit Missing Documents</td>
                  <td><span className="badge badge-admission">Admission</span></td>
                  <td><span className="status-badge status-draft">Draft</span></td>
                  <td>2024-01-05</td>
                  <td>
                    <button className="btn-icon" title="Edit">✏️</button>
                    <button className="btn-icon" title="Preview">👁️</button>
                    <button className="btn-icon" title="Duplicate">📋</button>
                    <button className="btn-icon" title="Delete">🗑️</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Template Variables */}
        <div className="section-card">
          <h2>Available Variables</h2>
          <p>Use these variables in your email templates. They will be automatically replaced with actual values.</p>
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
              <code>[ADMISSION_DATE]</code>
              <span>Date of admission</span>
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
              <code>[CONTACT_EMAIL]</code>
              <span>Institution contact email</span>
            </div>
          </div>
        </div>

        {/* Email Settings */}
        <div className="section-card">
          <h2>Email Configuration</h2>
          <div className="form-row">
            <div className="form-group">
              <label>Default From Name</label>
              <input type="text" defaultValue="Bright Path Institute" />
            </div>
            <div className="form-group">
              <label>Default From Email</label>
              <input type="email" defaultValue="noreply@brightpath.edu" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Reply-To Email</label>
              <input type="email" defaultValue="support@brightpath.edu" />
            </div>
            <div className="form-group">
              <label>Email Signature</label>
              <textarea rows={3} defaultValue="Best regards,&#10;Bright Path Institute&#10;www.brightpath.edu"></textarea>
            </div>
          </div>
        </div>
      </div>

      <div className="form-actions">
        <button className="btn btn-primary">Save Changes</button>
        <button className="btn btn-secondary">Cancel</button>
      </div>
    </div>
  );
};

export default EmailTemplates;
