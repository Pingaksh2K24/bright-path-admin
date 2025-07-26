import React, { useState } from 'react';
import './AddFaculty.css';

const AddFaculty: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    mobileNumber: '',
    email: '',
    qualification: '',
    experience: '',
    subject: '',
    specialization: '',
    joiningDate: '',
    profilePhoto: null as File | null,
    idProof: null as File | null,
    address: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData(prev => ({
        ...prev,
        [name]: files[0]
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Faculty Data:', formData);
    // Here you would typically send the data to your backend
    alert('Faculty added successfully!');
  };

  return (
    <div className="add-faculty-container">
      <div className="add-faculty-header">
        <h1 className="add-faculty-title">Add Faculty</h1>
        <p className="add-faculty-subtitle">Add new faculty member to the institution</p>
      </div>

      <div className="add-faculty-card">
        <form onSubmit={handleSubmit}>
          {/* Personal Information */}
          <div className="form-section">
            <h2 className="section-title">👤 Personal Information</h2>
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Gender *</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="form-select"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Mobile Number *</label>
                <input
                  type="tel"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email ID</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
            </div>
          </div>

          {/* Professional Information */}
          <div className="form-section">
            <h2 className="section-title">🎓 Professional Information</h2>
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Qualification *</label>
                <input
                  type="text"
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="e.g., M.Tech, Ph.D., B.Ed"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Experience (Years) *</label>
                <input
                  type="number"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="form-input"
                  min="0"
                  max="50"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="e.g., Mathematics, Physics"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Specialization</label>
                <input
                  type="text"
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="e.g., Advanced Calculus, Quantum Physics"
                />
              </div>
            </div>
          </div>

          {/* Employment Details */}
          <div className="form-section">
            <h2 className="section-title">📅 Employment Details</h2>
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Joining Date *</label>
                <input
                  type="date"
                  name="joiningDate"
                  value={formData.joiningDate}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>
            </div>
          </div>

          {/* Documents */}
          <div className="form-section">
            <h2 className="section-title">📄 Documents</h2>
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Profile Photo</label>
                <input
                  type="file"
                  name="profilePhoto"
                  onChange={handleFileChange}
                  className="form-file-input"
                  accept="image/*"
                />
                <small className="form-help-text">Upload a professional photo (JPG, PNG)</small>
              </div>
              <div className="form-group">
                <label className="form-label">Aadhar / ID Proof (Optional)</label>
                <input
                  type="file"
                  name="idProof"
                  onChange={handleFileChange}
                  className="form-file-input"
                  accept=".pdf,.jpg,.jpeg,.png"
                />
                <small className="form-help-text">Upload ID proof document (PDF, JPG, PNG)</small>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="form-section">
            <h2 className="section-title">🏠 Address</h2>
            <div className="form-group">
              <label className="form-label">Complete Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="form-textarea"
                rows={3}
                placeholder="Enter complete address..."
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="form-actions">
            <button type="submit" className="save-button">
              ✔️ Save Faculty
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFaculty; 