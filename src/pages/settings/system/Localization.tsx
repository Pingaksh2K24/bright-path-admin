import React from 'react';
import './Localization.css';

const Localization: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Localization Settings</h1>
        <p>Configure language preferences, date formats, and number formats for your system</p>
      </div>
      
      <div className="content-section">
        <div className="section-card">
          <h2>Language Settings</h2>
          <div className="form-group">
            <label>Default System Language</label>
            <select>
              <option value="en">English</option>
              <option value="hi">हिंदी (Hindi)</option>
              <option value="mr">मराठी (Marathi)</option>
              <option value="gu">ગુજરાતી (Gujarati)</option>
              <option value="ta">தமிழ் (Tamil)</option>
              <option value="te">తెలుగు (Telugu)</option>
              <option value="kn">ಕನ್ನಡ (Kannada)</option>
              <option value="bn">বাংলা (Bengali)</option>
            </select>
          </div>
          <div className="form-group">
            <label>Secondary Language</label>
            <select>
              <option value="">None</option>
              <option value="en">English</option>
              <option value="hi">हिंदी (Hindi)</option>
              <option value="mr">मराठी (Marathi)</option>
            </select>
          </div>
          <div className="form-group">
            <label>Allow Users to Change Language</label>
            <div className="checkbox-group">
              <input type="checkbox" id="userLangChange" />
              <label htmlFor="userLangChange">Enable user language preferences</label>
            </div>
          </div>
        </div>

        <div className="section-card">
          <h2>Date & Time Formats</h2>
          <div className="form-group">
            <label>Date Format</label>
            <select>
              <option value="DD/MM/YYYY">DD/MM/YYYY (31/12/2024)</option>
              <option value="MM/DD/YYYY">MM/DD/YYYY (12/31/2024)</option>
              <option value="YYYY-MM-DD">YYYY-MM-DD (2024-12-31)</option>
              <option value="DD-MM-YYYY">DD-MM-YYYY (31-12-2024)</option>
              <option value="DD.MM.YYYY">DD.MM.YYYY (31.12.2024)</option>
            </select>
          </div>
          <div className="form-group">
            <label>Time Format</label>
            <select>
              <option value="12">12-hour (3:30 PM)</option>
              <option value="24">24-hour (15:30)</option>
            </select>
          </div>
          <div className="form-group">
            <label>First Day of Week</label>
            <select>
              <option value="1">Monday</option>
              <option value="0">Sunday</option>
              <option value="6">Saturday</option>
            </select>
          </div>
        </div>

        <div className="section-card">
          <h2>Number & Currency Formats</h2>
          <div className="form-group">
            <label>Number Format</label>
            <select>
              <option value="en-IN">Indian (1,23,45,678.90)</option>
              <option value="en-US">US (1,234,567.90)</option>
              <option value="en-GB">UK (1,234,567.90)</option>
              <option value="de-DE">German (1.234.567,90)</option>
            </select>
          </div>
          <div className="form-group">
            <label>Currency</label>
            <select>
              <option value="INR">Indian Rupee (₹)</option>
              <option value="USD">US Dollar ($)</option>
              <option value="EUR">Euro (€)</option>
              <option value="GBP">British Pound (£)</option>
            </select>
          </div>
          <div className="form-group">
            <label>Currency Display</label>
            <select>
              <option value="symbol">Symbol (₹1,234)</option>
              <option value="code">Code (INR 1,234)</option>
              <option value="name">Name (1,234 Rupees)</option>
            </select>
          </div>
        </div>

        <div className="section-card">
          <h2>Regional Settings</h2>
          <div className="form-group">
            <label>Country/Region</label>
            <select>
              <option value="IN">India</option>
              <option value="US">United States</option>
              <option value="GB">United Kingdom</option>
              <option value="AU">Australia</option>
              <option value="CA">Canada</option>
            </select>
          </div>
          <div className="form-group">
            <label>Address Format</label>
            <select>
              <option value="indian">Indian Format</option>
              <option value="us">US Format</option>
              <option value="uk">UK Format</option>
            </select>
          </div>
        </div>

        <div className="section-card">
          <h2>Preview</h2>
          <div className="localization-preview">
            <div className="preview-item">
              <strong>Date:</strong> <span>31/12/2024</span>
            </div>
            <div className="preview-item">
              <strong>Time:</strong> <span>3:30 PM</span>
            </div>
            <div className="preview-item">
              <strong>Number:</strong> <span>1,23,45,678.90</span>
            </div>
            <div className="preview-item">
              <strong>Currency:</strong> <span>₹12,345</span>
            </div>
          </div>
        </div>

        <div className="form-actions">
          <button className="btn btn-primary">Save Changes</button>
          <button className="btn btn-secondary">Reset to Default</button>
        </div>
      </div>
    </div>
  );
};

export default Localization;
