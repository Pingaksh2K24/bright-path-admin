import React from 'react';
import './Branding.css';

const Branding: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Branding Settings</h1>
        <p>Customize your institute's visual identity with logos, themes, and custom styling</p>
      </div>
      
      <div className="content-section">
        <div className="section-card">
          <h2>Logo & Icons</h2>
          <div className="form-group">
            <label>Main Logo</label>
            <div className="file-upload-area">
              <input type="file" accept="image/*" />
              <p>Upload your institute logo (PNG, JPG, SVG recommended)</p>
              <small>Recommended size: 200x80px</small>
            </div>
          </div>
          <div className="form-group">
            <label>Favicon</label>
            <div className="file-upload-area">
              <input type="file" accept="image/x-icon,image/png" />
              <p>Upload favicon for browser tab (ICO, PNG)</p>
              <small>Recommended size: 32x32px or 16x16px</small>
            </div>
          </div>
          <div className="form-group">
            <label>Login Page Logo</label>
            <div className="file-upload-area">
              <input type="file" accept="image/*" />
              <p>Logo for login and authentication pages</p>
              <small>Recommended size: 300x120px</small>
            </div>
          </div>
        </div>

        <div className="section-card">
          <h2>Color Themes</h2>
          <div className="theme-options">
            <div className="theme-option active">
              <div className="theme-preview default-theme"></div>
              <label>Default Blue</label>
              <input type="radio" name="theme" value="default" checked />
            </div>
            <div className="theme-option">
              <div className="theme-preview green-theme"></div>
              <label>Green</label>
              <input type="radio" name="theme" value="green" />
            </div>
            <div className="theme-option">
              <div className="theme-preview purple-theme"></div>
              <label>Purple</label>
              <input type="radio" name="theme" value="purple" />
            </div>
            <div className="theme-option">
              <div className="theme-preview orange-theme"></div>
              <label>Orange</label>
              <input type="radio" name="theme" value="orange" />
            </div>
          </div>
          
          <div className="custom-colors">
            <h3>Custom Colors</h3>
            <div className="form-row">
              <div className="form-group">
                <label>Primary Color</label>
                <input type="color" value="#007bff" />
              </div>
              <div className="form-group">
                <label>Secondary Color</label>
                <input type="color" value="#6c757d" />
              </div>
              <div className="form-group">
                <label>Accent Color</label>
                <input type="color" value="#28a745" />
              </div>
            </div>
          </div>
        </div>

        <div className="section-card">
          <h2>Custom CSS</h2>
          <div className="form-group">
            <label>Additional CSS Styles</label>
            <textarea 
              rows={10} 
              placeholder="/* Add your custom CSS here */&#10;.custom-class {&#10;  color: #333;&#10;  font-size: 14px;&#10;}"
              style={{ fontFamily: 'monospace' }}
            ></textarea>
            <small>Add custom CSS to override default styles. Use with caution.</small>
          </div>
        </div>

        <div className="section-card">
          <h2>Preview</h2>
          <div className="branding-preview">
            <div className="preview-header">
              <img src="/logo.png" alt="Logo Preview" style={{ height: '40px' }} />
              <span>BRIGHT PATH</span>
            </div>
            <p>This is how your branding will appear in the system.</p>
          </div>
        </div>

        <div className="form-actions">
          <button className="btn btn-primary">Save Changes</button>
          <button className="btn btn-secondary">Reset to Default</button>
          <button className="btn btn-secondary">Preview Changes</button>
        </div>
      </div>
    </div>
  );
};

export default Branding;
