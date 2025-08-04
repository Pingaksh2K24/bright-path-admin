import React from 'react';
import './PasswordPolicy.css';

const PasswordPolicy: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Password Policy</h1>
        <p>Configure password requirements and security policies for all users</p>
      </div>

      <div className="content-section">
        {/* Policy Actions */}
        <div className="section-card">
          <div className="policy-actions">
            <button className="btn btn-primary">
              💾 Save Policy
            </button>
            <button className="btn btn-secondary">
              🔄 Reset to Default
            </button>
            <button className="btn btn-secondary">
              📤 Export Policy
            </button>
            <button className="btn btn-secondary">
              🧪 Test Policy
            </button>
          </div>
        </div>

        {/* Password Requirements */}
        <div className="section-card">
          <h2>Password Requirements</h2>
          <div className="policy-grid">
            <div className="policy-item">
              <div className="policy-header">
                <h3>Minimum Length</h3>
                <div className="policy-toggle">
                  <label className="switch">
                    <input type="checkbox" defaultChecked />
                    <span className="slider"></span>
                  </label>
                </div>
              </div>
              <div className="policy-content">
                <div className="form-group">
                  <label>Minimum characters required</label>
                  <input type="number" defaultValue="8" min="4" max="32" />
                </div>
                <div className="policy-preview">
                  <span className="preview-label">Current setting:</span>
                  <span className="preview-value">At least 8 characters</span>
                </div>
              </div>
            </div>

            <div className="policy-item">
              <div className="policy-header">
                <h3>Uppercase Letters</h3>
                <div className="policy-toggle">
                  <label className="switch">
                    <input type="checkbox" defaultChecked />
                    <span className="slider"></span>
                  </label>
                </div>
              </div>
              <div className="policy-content">
                <div className="form-group">
                  <label>Minimum uppercase letters</label>
                  <input type="number" defaultValue="1" min="0" max="10" />
                </div>
                <div className="policy-preview">
                  <span className="preview-label">Current setting:</span>
                  <span className="preview-value">At least 1 uppercase letter (A-Z)</span>
                </div>
              </div>
            </div>

            <div className="policy-item">
              <div className="policy-header">
                <h3>Lowercase Letters</h3>
                <div className="policy-toggle">
                  <label className="switch">
                    <input type="checkbox" defaultChecked />
                    <span className="slider"></span>
                  </label>
                </div>
              </div>
              <div className="policy-content">
                <div className="form-group">
                  <label>Minimum lowercase letters</label>
                  <input type="number" defaultValue="1" min="0" max="10" />
                </div>
                <div className="policy-preview">
                  <span className="preview-label">Current setting:</span>
                  <span className="preview-value">At least 1 lowercase letter (a-z)</span>
                </div>
              </div>
            </div>

            <div className="policy-item">
              <div className="policy-header">
                <h3>Numbers</h3>
                <div className="policy-toggle">
                  <label className="switch">
                    <input type="checkbox" defaultChecked />
                    <span className="slider"></span>
                  </label>
                </div>
              </div>
              <div className="policy-content">
                <div className="form-group">
                  <label>Minimum numbers required</label>
                  <input type="number" defaultValue="1" min="0" max="10" />
                </div>
                <div className="policy-preview">
                  <span className="preview-label">Current setting:</span>
                  <span className="preview-value">At least 1 number (0-9)</span>
                </div>
              </div>
            </div>

            <div className="policy-item">
              <div className="policy-header">
                <h3>Special Characters</h3>
                <div className="policy-toggle">
                  <label className="switch">
                    <input type="checkbox" defaultChecked />
                    <span className="slider"></span>
                  </label>
                </div>
              </div>
              <div className="policy-content">
                <div className="form-group">
                  <label>Minimum special characters</label>
                  <input type="number" defaultValue="1" min="0" max="10" />
                </div>
                <div className="policy-preview">
                  <span className="preview-label">Current setting:</span>
                  <span className="preview-value">At least 1 special character (!@#$%^&*)</span>
                </div>
              </div>
            </div>

            <div className="policy-item">
              <div className="policy-header">
                <h3>Password History</h3>
                <div className="policy-toggle">
                  <label className="switch">
                    <input type="checkbox" defaultChecked />
                    <span className="slider"></span>
                  </label>
                </div>
              </div>
              <div className="policy-content">
                <div className="form-group">
                  <label>Remember last N passwords</label>
                  <input type="number" defaultValue="5" min="1" max="24" />
                </div>
                <div className="policy-preview">
                  <span className="preview-label">Current setting:</span>
                  <span className="preview-value">Cannot reuse last 5 passwords</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Password Expiration */}
        <div className="section-card">
          <h2>Password Expiration</h2>
          <div className="form-row">
            <div className="form-group">
              <label>Password Expiration</label>
              <select defaultValue="90">
                <option value="0">Never expires</option>
                <option value="30">30 days</option>
                <option value="60">60 days</option>
                <option value="90">90 days</option>
                <option value="180">180 days</option>
                <option value="365">1 year</option>
              </select>
            </div>
            <div className="form-group">
              <label>Expiration Warning</label>
              <select defaultValue="7">
                <option value="1">1 day before</option>
                <option value="3">3 days before</option>
                <option value="7">7 days before</option>
                <option value="14">14 days before</option>
                <option value="30">30 days before</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Grace Period</label>
              <select defaultValue="3">
                <option value="0">No grace period</option>
                <option value="1">1 day</option>
                <option value="3">3 days</option>
                <option value="7">7 days</option>
                <option value="14">14 days</option>
              </select>
            </div>
            <div className="form-group">
              <label>Force Change After</label>
              <select defaultValue="0">
                <option value="0">Never force</option>
                <option value="1">1 failed attempt</option>
                <option value="3">3 failed attempts</option>
                <option value="5">5 failed attempts</option>
              </select>
            </div>
          </div>
        </div>

        {/* Account Lockout */}
        <div className="section-card">
          <h2>Account Lockout Policy</h2>
          <div className="form-row">
            <div className="form-group">
              <label>Failed Login Attempts</label>
              <select defaultValue="5">
                <option value="0">No lockout</option>
                <option value="3">3 attempts</option>
                <option value="5">5 attempts</option>
                <option value="10">10 attempts</option>
                <option value="15">15 attempts</option>
              </select>
            </div>
            <div className="form-group">
              <label>Lockout Duration</label>
              <select defaultValue="30">
                <option value="5">5 minutes</option>
                <option value="15">15 minutes</option>
                <option value="30">30 minutes</option>
                <option value="60">1 hour</option>
                <option value="240">4 hours</option>
                <option value="1440">24 hours</option>
                <option value="0">Until admin unlocks</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Reset Counter After</label>
              <select defaultValue="60">
                <option value="15">15 minutes</option>
                <option value="30">30 minutes</option>
                <option value="60">1 hour</option>
                <option value="240">4 hours</option>
                <option value="1440">24 hours</option>
              </select>
            </div>
            <div className="form-group">
              <label>Admin Notification</label>
              <select defaultValue="immediate">
                <option value="never">Never notify</option>
                <option value="immediate">Immediate</option>
                <option value="daily">Daily summary</option>
                <option value="weekly">Weekly summary</option>
              </select>
            </div>
          </div>
        </div>

        {/* Password Strength Checker */}
        <div className="section-card">
          <h2>Password Strength Tester</h2>
          <div className="password-tester">
            <div className="form-group">
              <label>Test Password Against Current Policy</label>
              <input type="password" placeholder="Enter a password to test..." />
            </div>
            <div className="strength-meter">
              <div className="strength-bar">
                <div className="strength-fill strength-medium" style={{width: '60%'}}></div>
              </div>
              <div className="strength-labels">
                <span className="strength-label weak">Weak</span>
                <span className="strength-label medium active">Medium</span>
                <span className="strength-label strong">Strong</span>
                <span className="strength-label very-strong">Very Strong</span>
              </div>
            </div>
            <div className="policy-checks">
              <div className="check-item valid">
                <span className="check-icon">✅</span>
                <span>Minimum 8 characters</span>
              </div>
              <div className="check-item valid">
                <span className="check-icon">✅</span>
                <span>Contains uppercase letter</span>
              </div>
              <div className="check-item valid">
                <span className="check-icon">✅</span>
                <span>Contains lowercase letter</span>
              </div>
              <div className="check-item invalid">
                <span className="check-icon">❌</span>
                <span>Contains number</span>
              </div>
              <div className="check-item invalid">
                <span className="check-icon">❌</span>
                <span>Contains special character</span>
              </div>
            </div>
          </div>
        </div>

        {/* Role-Based Policies */}
        <div className="section-card">
          <h2>Role-Based Password Policies</h2>
          <div className="role-policies">
            <div className="role-policy-item">
              <div className="role-header">
                <h3>👑 Super Admin</h3>
                <span className="policy-status active">Active</span>
              </div>
              <div className="role-requirements">
                <span>Min 12 chars, 2 uppercase, 2 numbers, 2 special chars</span>
                <span>Expires every 60 days</span>
                <span>Lockout after 3 attempts</span>
              </div>
              <div className="role-actions">
                <button className="btn-icon" title="Edit">✏️</button>
                <button className="btn-icon" title="Duplicate">📋</button>
              </div>
            </div>

            <div className="role-policy-item">
              <div className="role-header">
                <h3>👨‍💼 Admin</h3>
                <span className="policy-status active">Active</span>
              </div>
              <div className="role-requirements">
                <span>Min 10 chars, 1 uppercase, 1 number, 1 special char</span>
                <span>Expires every 90 days</span>
                <span>Lockout after 5 attempts</span>
              </div>
              <div className="role-actions">
                <button className="btn-icon" title="Edit">✏️</button>
                <button className="btn-icon" title="Duplicate">📋</button>
              </div>
            </div>

            <div className="role-policy-item">
              <div className="role-header">
                <h3>👨‍🏫 Faculty</h3>
                <span className="policy-status active">Active</span>
              </div>
              <div className="role-requirements">
                <span>Min 8 chars, 1 uppercase, 1 number</span>
                <span>Expires every 180 days</span>
                <span>Lockout after 5 attempts</span>
              </div>
              <div className="role-actions">
                <button className="btn-icon" title="Edit">✏️</button>
                <button className="btn-icon" title="Duplicate">📋</button>
              </div>
            </div>

            <div className="role-policy-item">
              <div className="role-header">
                <h3>🎓 Student</h3>
                <span className="policy-status active">Active</span>
              </div>
              <div className="role-requirements">
                <span>Min 6 chars, 1 number</span>
                <span>Never expires</span>
                <span>Lockout after 10 attempts</span>
              </div>
              <div className="role-actions">
                <button className="btn-icon" title="Edit">✏️</button>
                <button className="btn-icon" title="Duplicate">📋</button>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Settings */}
        <div className="section-card">
          <h2>Advanced Security Settings</h2>
          <div className="checkbox-group">
            <label>
              <input type="checkbox" defaultChecked />
              Enable password strength meter for users
            </label>
            <label>
              <input type="checkbox" defaultChecked />
              Prevent common passwords (dictionary check)
            </label>
            <label>
              <input type="checkbox" />
              Require password change on first login
            </label>
            <label>
              <input type="checkbox" defaultChecked />
              Send email notification on password change
            </label>
            <label>
              <input type="checkbox" />
              Allow users to see password requirements
            </label>
            <label>
              <input type="checkbox" defaultChecked />
              Log all password-related activities
            </label>
          </div>
        </div>
      </div>

      <div className="form-actions">
        <button className="btn btn-primary">Save Password Policy</button>
        <button className="btn btn-secondary">Apply to All Users</button>
        <button className="btn btn-secondary">Cancel</button>
      </div>
    </div>
  );
};

export default PasswordPolicy;
