import React, { useState } from 'react';

interface Syllabus {
  id: number;
  courseName: string;
  academicYear: string;
  fileName: string;
  fileSize: string;
  uploadDate: string;
  downloadLink: string;
  visibility: 'internal' | 'public';
}

const SyllabusManagement: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState('');
  const [academicYear, setAcademicYear] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [visibility, setVisibility] = useState<'internal' | 'public'>('internal');
  const [syllabi] = useState<Syllabus[]>([
    {
      id: 1,
      courseName: 'NEET Preparation',
      academicYear: '2024-25',
      fileName: 'NEET_Syllabus_2024.pdf',
      fileSize: '2.5 MB',
      uploadDate: '2024-01-15',
      downloadLink: '#',
      visibility: 'public'
    },
    {
      id: 2,
      courseName: 'JEE Main & Advanced',
      academicYear: '2024-25',
      fileName: 'JEE_Syllabus_2024.pdf',
      fileSize: '3.1 MB',
      uploadDate: '2024-01-10',
      downloadLink: '#',
      visibility: 'public'
    },
    {
      id: 3,
      courseName: 'MHT-CET',
      academicYear: '2024-25',
      fileName: 'MHT_CET_Syllabus_2024.pdf',
      fileSize: '1.8 MB',
      uploadDate: '2024-01-20',
      downloadLink: '#',
      visibility: 'internal'
    }
  ]);

  const courses = ['NEET Preparation', 'JEE Main & Advanced', 'MHT-CET', 'Foundation 8th-10th', 'CBSE Board Prep'];
  const years = ['2024-25', '2023-24', '2022-23'];

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!selectedCourse || !academicYear || !selectedFile) {
      alert('Please fill all required fields and select a file');
      return;
    }
    
    console.log('Uploading syllabus:', {
      course: selectedCourse,
      year: academicYear,
      file: selectedFile.name,
      visibility
    });
    
    alert('Syllabus uploaded successfully!');
    setSelectedCourse('');
    setAcademicYear('');
    setSelectedFile(null);
    setVisibility('internal');
  };

  const handleDownload = (syllabus: Syllabus) => {
    console.log('Downloading:', syllabus.fileName);
    // Here you would implement actual file download
    alert(`Downloading ${syllabus.fileName}`);
  };

  const handleDelete = (id: number) => {
    console.log('Deleting syllabus with id:', id);
    alert('Syllabus deleted successfully!');
  };

  return (
    <div style={{ width: '90%', maxWidth: '1200px', margin: '20px auto', background: '#fff', borderRadius: 12, boxShadow: '0 6px 24px 0 rgba(6,13,58,0.08)', padding: '32px' }}>
      <h2 style={{ color: '#0A2B73', fontSize: 24, fontWeight: 600, marginBottom: 32, textAlign: 'center' }}>
        Syllabus Upload / Management
      </h2>

      {/* Upload Section */}
      <div style={{ 
        border: '2px dashed #ddd', 
        borderRadius: 8, 
        padding: '32px', 
        backgroundColor: '#fafafa',
        marginBottom: 32
      }}>
        <h3 style={{ color: '#0A2B73', fontSize: 18, fontWeight: 600, marginBottom: 24 }}>
          📤 Upload New Syllabus
        </h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 24 }}>
          <div>
            <label style={{ display: 'block', color: '#7b868a', fontSize: 16, marginBottom: 8, fontWeight: 500 }}>
              Course Name *
            </label>
            <select
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid #ddd',
                borderRadius: 6,
                fontSize: 16,
                outline: 'none',
                backgroundColor: '#fff'
              }}
            >
              <option value="">Select Course</option>
              {courses.map(course => (
                <option key={course} value={course}>{course}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label style={{ display: 'block', color: '#7b868a', fontSize: 16, marginBottom: 8, fontWeight: 500 }}>
              Academic Year *
            </label>
            <select
              value={academicYear}
              onChange={(e) => setAcademicYear(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid #ddd',
                borderRadius: 6,
                fontSize: 16,
                outline: 'none',
                backgroundColor: '#fff'
              }}
            >
              <option value="">Select Year</option>
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 24 }}>
          <div>
            <label style={{ display: 'block', color: '#7b868a', fontSize: 16, marginBottom: 8, fontWeight: 500 }}>
              Upload File (PDF/DOC) *
            </label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileSelect}
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid #ddd',
                borderRadius: 6,
                fontSize: 16,
                outline: 'none',
                backgroundColor: '#fff'
              }}
            />
            {selectedFile && (
              <div style={{ marginTop: 8, fontSize: 14, color: '#666' }}>
                Selected: {selectedFile.name} ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)
              </div>
            )}
          </div>
          
          <div>
            <label style={{ display: 'block', color: '#7b868a', fontSize: 16, marginBottom: 8, fontWeight: 500 }}>
              Visibility *
            </label>
            <select
              value={visibility}
              onChange={(e) => setVisibility(e.target.value as 'internal' | 'public')}
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid #ddd',
                borderRadius: 6,
                fontSize: 16,
                outline: 'none',
                backgroundColor: '#fff'
              }}
            >
              <option value="internal">Internal Only</option>
              <option value="public">Public (Students)</option>
            </select>
          </div>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={handleUpload}
            disabled={!selectedCourse || !academicYear || !selectedFile}
            style={{
              background: !selectedCourse || !academicYear || !selectedFile ? '#eee' : '#0A2B73',
              color: !selectedCourse || !academicYear || !selectedFile ? '#999' : '#fff',
              fontWeight: 600,
              fontSize: 16,
              padding: '14px 32px',
              border: 'none',
              borderRadius: 6,
              cursor: !selectedCourse || !academicYear || !selectedFile ? 'not-allowed' : 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}
          >
            📤 Upload Syllabus
          </button>
        </div>
      </div>

      {/* Manual Syllabus Entry */}
      <div style={{ 
        border: '2px solid #e0e0e0', 
        borderRadius: 8, 
        padding: '24px', 
        backgroundColor: '#f9f9f9',
        marginBottom: 32
      }}>
        <h3 style={{ color: '#0A2B73', fontSize: 18, fontWeight: 600, marginBottom: 16 }}>
          📝 Manual Syllabus Entry
        </h3>
        <p style={{ color: '#666', fontSize: 14, marginBottom: 16 }}>
          Or manually add syllabus structure: Unit → Chapter → Topics
        </p>
        <button
          style={{
            background: '#4caf50',
            color: '#fff',
            fontWeight: 600,
            fontSize: 14,
            padding: '10px 20px',
            border: 'none',
            borderRadius: 6,
            cursor: 'pointer'
          }}
        >
          + Add Manual Entry
        </button>
      </div>

      {/* Existing Syllabi */}
      <div>
        <h3 style={{ color: '#0A2B73', fontSize: 18, fontWeight: 600, marginBottom: 24 }}>
          📚 Existing Syllabi
        </h3>
        
        {syllabi.length === 0 ? (
          <div style={{ textAlign: 'center', color: '#666', padding: '40px', border: '2px dashed #ddd', borderRadius: 8 }}>
            No syllabi uploaded yet.
          </div>
        ) : (
          <div style={{ display: 'grid', gap: 16 }}>
            {syllabi.map(syllabus => (
              <div key={syllabus.id} style={{
                display: 'grid',
                gridTemplateColumns: '1fr auto auto auto auto',
                gap: 16,
                alignItems: 'center',
                padding: '16px',
                border: '1px solid #eee',
                borderRadius: 8,
                backgroundColor: '#fafafa'
              }}>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 4 }}>
                    {syllabus.courseName}
                  </div>
                  <div style={{ fontSize: 14, color: '#666' }}>
                    {syllabus.fileName} • {syllabus.fileSize} • {syllabus.academicYear}
                  </div>
                  <div style={{ fontSize: 12, color: '#999' }}>
                    Uploaded: {syllabus.uploadDate}
                  </div>
                </div>
                
                <span style={{ 
                  padding: '4px 8px', 
                  backgroundColor: syllabus.visibility === 'public' ? '#e8f5e8' : '#fff3e0', 
                  color: syllabus.visibility === 'public' ? '#2e7d32' : '#f57c00', 
                  borderRadius: 4, 
                  fontSize: 12, 
                  fontWeight: 600 
                }}>
                  {syllabus.visibility === 'public' ? '🌐 Public' : '🔒 Internal'}
                </span>
                
                <button
                  onClick={() => handleDownload(syllabus)}
                  style={{
                    padding: '8px 16px',
                    border: 'none',
                    background: '#1976d2',
                    color: '#fff',
                    borderRadius: 4,
                    cursor: 'pointer',
                    fontSize: 13,
                    fontWeight: 600
                  }}
                >
                  📥 Download
                </button>
                
                <button
                  style={{
                    padding: '8px 16px',
                    border: 'none',
                    background: '#ff9800',
                    color: '#fff',
                    borderRadius: 4,
                    cursor: 'pointer',
                    fontSize: 13,
                    fontWeight: 600
                  }}
                >
                  ✏️ Edit
                </button>
                
                <button
                  onClick={() => handleDelete(syllabus.id)}
                  style={{
                    padding: '8px 16px',
                    border: 'none',
                    background: '#d32f2f',
                    color: '#fff',
                    borderRadius: 4,
                    cursor: 'pointer',
                    fontSize: 13,
                    fontWeight: 600
                  }}
                >
                  🗑️ Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SyllabusManagement; 