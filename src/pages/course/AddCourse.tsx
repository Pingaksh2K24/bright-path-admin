import React, { useState } from 'react';

const AddCourse: React.FC = () => {
  const [formData, setFormData] = useState({
    courseTitle: '',
    description: '',
    duration: '',
    classLevel: '',
    courseType: '',
    activeStatus: 'Active'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Course Data:', formData);
    // Here you would typically send the data to your backend
    alert('Course added successfully!');
  };

  return (
    <div style={{ width: '90%', maxWidth: '800px', margin: '20px auto', background: '#fff', borderRadius: 12, boxShadow: '0 6px 24px 0 rgba(6,13,58,0.08)', padding: '32px' }}>
      <h2 style={{ color: '#0A2B73', fontSize: 24, fontWeight: 600, marginBottom: 32, textAlign: 'center' }}>
        Add New Course
      </h2>
      
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'grid', gap: 24 }}>
          {/* Course Title */}
          <div>
            <label style={{ display: 'block', color: '#7b868a', fontSize: 16, marginBottom: 8, fontWeight: 500 }}>
              Course Title *
            </label>
            <input
              type="text"
              name="courseTitle"
              value={formData.courseTitle}
              onChange={handleInputChange}
              placeholder="e.g. NEET, JEE, MHT-CET, Foundation 8th-10th"
              required
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid #ddd',
                borderRadius: 6,
                fontSize: 16,
                outline: 'none',
                transition: 'border-color 0.2s'
              }}
            />
          </div>

          {/* Description */}
          <div>
            <label style={{ display: 'block', color: '#7b868a', fontSize: 16, marginBottom: 8, fontWeight: 500 }}>
              Description *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Enter course description..."
              required
              rows={4}
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid #ddd',
                borderRadius: 6,
                fontSize: 16,
                outline: 'none',
                resize: 'vertical',
                transition: 'border-color 0.2s'
              }}
            />
          </div>

          {/* Duration and Class Level Row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <div>
              <label style={{ display: 'block', color: '#7b868a', fontSize: 16, marginBottom: 8, fontWeight: 500 }}>
                Duration (in months) *
              </label>
              <input
                type="number"
                name="duration"
                value={formData.duration}
                onChange={handleInputChange}
                placeholder="e.g. 12"
                required
                min="1"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '1px solid #ddd',
                  borderRadius: 6,
                  fontSize: 16,
                  outline: 'none',
                  transition: 'border-color 0.2s'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', color: '#7b868a', fontSize: 16, marginBottom: 8, fontWeight: 500 }}>
                Class Level *
              </label>
              <select
                name="classLevel"
                value={formData.classLevel}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '1px solid #ddd',
                  borderRadius: 6,
                  fontSize: 16,
                  outline: 'none',
                  backgroundColor: '#fff',
                  transition: 'border-color 0.2s'
                }}
              >
                <option value="">Select Class Level</option>
                <option value="8th">8th</option>
                <option value="9th">9th</option>
                <option value="10th">10th</option>
                <option value="11th">11th</option>
                <option value="12th">12th</option>
              </select>
            </div>
          </div>

          {/* Course Type and Active Status Row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <div>
              <label style={{ display: 'block', color: '#7b868a', fontSize: 16, marginBottom: 8, fontWeight: 500 }}>
                Course Type *
              </label>
              <select
                name="courseType"
                value={formData.courseType}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '1px solid #ddd',
                  borderRadius: 6,
                  fontSize: 16,
                  outline: 'none',
                  backgroundColor: '#fff',
                  transition: 'border-color 0.2s'
                }}
              >
                <option value="">Select Course Type</option>
                <option value="Full-time">Full-time</option>
                <option value="Crash">Crash</option>
                <option value="Weekend">Weekend</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', color: '#7b868a', fontSize: 16, marginBottom: 8, fontWeight: 500 }}>
                Active Status *
              </label>
              <select
                name="activeStatus"
                value={formData.activeStatus}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '1px solid #ddd',
                  borderRadius: 6,
                  fontSize: 16,
                  outline: 'none',
                  backgroundColor: '#fff',
                  transition: 'border-color 0.2s'
                }}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 16 }}>
            <button
              type="submit"
              style={{
                background: '#0A2B73',
                color: '#fff',
                fontWeight: 600,
                fontSize: 16,
                padding: '14px 32px',
                border: 'none',
                borderRadius: 6,
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                transition: 'all 0.2s'
              }}
            >
              ✔️ Save & List Course
            </button>
            <button
              type="button"
              onClick={() => setFormData({
                courseTitle: '',
                description: '',
                duration: '',
                classLevel: '',
                courseType: '',
                activeStatus: 'Active'
              })}
              style={{
                background: '#f5f5f5',
                color: '#666',
                fontWeight: 600,
                fontSize: 16,
                padding: '14px 32px',
                border: '1px solid #ddd',
                borderRadius: 6,
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              Clear Form
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCourse; 