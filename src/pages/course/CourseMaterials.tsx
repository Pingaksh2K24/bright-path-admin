import React, { useState } from 'react';

interface Material {
  id: number;
  courseName: string;
  subjectName: string;
  title: string;
  type: 'pdf' | 'video' | 'link' | 'document';
  fileSize?: string;
  uploadDate: string;
  uploadBy: string;
  accessControl: 'internal' | 'public';
  downloadCount: number;
  description: string;
}

const CourseMaterials: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [materialTitle, setMaterialTitle] = useState('');
  const [materialDescription, setMaterialDescription] = useState('');
  const [materialType, setMaterialType] = useState<'pdf' | 'video' | 'link' | 'document'>('pdf');
  const [materialLink, setMaterialLink] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [accessControl, setAccessControl] = useState<'internal' | 'public'>('internal');

  const [materials] = useState<Material[]>([
    {
      id: 1,
      courseName: 'NEET Preparation',
      subjectName: 'Physics',
      title: 'Mechanics Notes - Chapter 1',
      type: 'pdf',
      fileSize: '2.1 MB',
      uploadDate: '2024-01-15',
      uploadBy: 'Dr. Sharma',
      accessControl: 'public',
      downloadCount: 45,
      description: 'Comprehensive notes on Newton\'s Laws and Motion'
    },
    {
      id: 2,
      courseName: 'NEET Preparation',
      subjectName: 'Chemistry',
      title: 'Organic Chemistry Video Lecture',
      type: 'video',
      fileSize: '15.2 MB',
      uploadDate: '2024-01-12',
      uploadBy: 'Prof. Verma',
      accessControl: 'public',
      downloadCount: 32,
      description: 'Video lecture covering basic organic chemistry concepts'
    },
    {
      id: 3,
      courseName: 'JEE Main & Advanced',
      subjectName: 'Mathematics',
      title: 'Calculus Practice Problems',
      type: 'pdf',
      fileSize: '1.8 MB',
      uploadDate: '2024-01-10',
      uploadBy: 'Dr. Mehta',
      accessControl: 'internal',
      downloadCount: 28,
      description: 'Practice problems with solutions for calculus topics'
    },
    {
      id: 4,
      courseName: 'MHT-CET',
      subjectName: 'Biology',
      title: 'Cell Biology Reference Link',
      type: 'link',
      uploadDate: '2024-01-08',
      uploadBy: 'Ms. Gupta',
      accessControl: 'public',
      downloadCount: 15,
      description: 'External link to comprehensive cell biology resources'
    }
  ]);

  const courses = ['NEET Preparation', 'JEE Main & Advanced', 'MHT-CET', 'Foundation 8th-10th'];
  const subjects = ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'English', 'Computer Science'];

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!selectedCourse || !selectedSubject || !materialTitle.trim()) {
      alert('Please fill all required fields');
      return;
    }

    if (materialType === 'link' && !materialLink.trim()) {
      alert('Please provide a link for link type materials');
      return;
    }

    if (materialType !== 'link' && !selectedFile) {
      alert('Please select a file for upload');
      return;
    }

    console.log('Uploading material:', {
      course: selectedCourse,
      subject: selectedSubject,
      title: materialTitle,
      type: materialType,
      link: materialLink,
      file: selectedFile?.name,
      accessControl
    });

    alert('Material uploaded successfully!');
    setSelectedCourse('');
    setSelectedSubject('');
    setMaterialTitle('');
    setMaterialDescription('');
    setMaterialType('pdf');
    setMaterialLink('');
    setSelectedFile(null);
    setAccessControl('internal');
  };

  const handleDownload = (material: Material) => {
    console.log('Downloading:', material.title);
    alert(`Downloading ${material.title}`);
  };

  const handleDelete = (id: number) => {
    console.log('Deleting material with id:', id);
    alert('Material deleted successfully!');
  };

  const getMaterialIcon = (type: string) => {
    switch (type) {
      case 'pdf': return '📄';
      case 'video': return '🎥';
      case 'link': return '🔗';
      case 'document': return '📝';
      default: return '📄';
    }
  };

  const filteredMaterials = materials.filter(material => 
    (!selectedCourse || material.courseName === selectedCourse) &&
    (!selectedSubject || material.subjectName === selectedSubject)
  );

  return (
    <div style={{ width: '90%', maxWidth: '1200px', margin: '20px auto', background: '#fff', borderRadius: 12, boxShadow: '0 6px 24px 0 rgba(6,13,58,0.08)', padding: '32px' }}>
      <h2 style={{ color: '#0A2B73', fontSize: 24, fontWeight: 600, marginBottom: 32, textAlign: 'center' }}>
        Course Materials
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
          📤 Upload New Material
        </h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 24 }}>
          <div>
            <label style={{ display: 'block', color: '#7b868a', fontSize: 16, marginBottom: 8, fontWeight: 500 }}>
              Course *
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
              Subject *
            </label>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
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
              <option value="">Select Subject</option>
              {subjects.map(subject => (
                <option key={subject} value={subject}>{subject}</option>
              ))}
            </select>
          </div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 24 }}>
          <div>
            <label style={{ display: 'block', color: '#7b868a', fontSize: 16, marginBottom: 8, fontWeight: 500 }}>
              Material Title *
            </label>
            <input
              type="text"
              value={materialTitle}
              onChange={(e) => setMaterialTitle(e.target.value)}
              placeholder="e.g. Chapter 1 Notes, Practice Problems"
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid #ddd',
                borderRadius: 6,
                fontSize: 16,
                outline: 'none'
              }}
            />
          </div>
          
          <div>
            <label style={{ display: 'block', color: '#7b868a', fontSize: 16, marginBottom: 8, fontWeight: 500 }}>
              Material Type *
            </label>
            <select
              value={materialType}
              onChange={(e) => setMaterialType(e.target.value as 'pdf' | 'video' | 'link' | 'document')}
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
              <option value="pdf">PDF Document</option>
              <option value="video">Video File</option>
              <option value="link">External Link</option>
              <option value="document">Word Document</option>
            </select>
          </div>
        </div>
        
        <div style={{ marginBottom: 24 }}>
          <label style={{ display: 'block', color: '#7b868a', fontSize: 16, marginBottom: 8, fontWeight: 500 }}>
            Description
          </label>
          <textarea
            value={materialDescription}
            onChange={(e) => setMaterialDescription(e.target.value)}
            placeholder="Brief description of the material..."
            rows={3}
            style={{
              width: '100%',
              padding: '12px 16px',
              border: '1px solid #ddd',
              borderRadius: 6,
              fontSize: 16,
              outline: 'none',
              resize: 'vertical'
            }}
          />
        </div>
        
        {materialType === 'link' ? (
          <div style={{ marginBottom: 24 }}>
            <label style={{ display: 'block', color: '#7b868a', fontSize: 16, marginBottom: 8, fontWeight: 500 }}>
              External Link *
            </label>
            <input
              type="url"
              value={materialLink}
              onChange={(e) => setMaterialLink(e.target.value)}
              placeholder="https://..."
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid #ddd',
                borderRadius: 6,
                fontSize: 16,
                outline: 'none'
              }}
            />
          </div>
        ) : (
          <div style={{ marginBottom: 24 }}>
            <label style={{ display: 'block', color: '#7b868a', fontSize: 16, marginBottom: 8, fontWeight: 500 }}>
              Upload File *
            </label>
            <input
              type="file"
              accept={materialType === 'pdf' ? '.pdf' : materialType === 'video' ? '.mp4,.avi,.mov' : '.doc,.docx,.txt'}
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
        )}
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 24 }}>
          <div>
            <label style={{ display: 'block', color: '#7b868a', fontSize: 16, marginBottom: 8, fontWeight: 500 }}>
              Access Control *
            </label>
            <select
              value={accessControl}
              onChange={(e) => setAccessControl(e.target.value as 'internal' | 'public')}
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
              <option value="internal">Internal Only (Staff)</option>
              <option value="public">Public (Students)</option>
            </select>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'end' }}>
            <button
              onClick={handleUpload}
              disabled={!selectedCourse || !selectedSubject || !materialTitle.trim() || (materialType === 'link' ? !materialLink.trim() : !selectedFile)}
              style={{
                background: !selectedCourse || !selectedSubject || !materialTitle.trim() || (materialType === 'link' ? !materialLink.trim() : !selectedFile) ? '#eee' : '#0A2B73',
                color: !selectedCourse || !selectedSubject || !materialTitle.trim() || (materialType === 'link' ? !materialLink.trim() : !selectedFile) ? '#999' : '#fff',
                fontWeight: 600,
                fontSize: 16,
                padding: '14px 32px',
                border: 'none',
                borderRadius: 6,
                cursor: !selectedCourse || !selectedSubject || !materialTitle.trim() || (materialType === 'link' ? !materialLink.trim() : !selectedFile) ? 'not-allowed' : 'pointer',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}
            >
              📤 Upload Material
            </button>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div style={{ 
        background: '#f5f5f5', 
        borderRadius: 8, 
        padding: '20px', 
        marginBottom: 24 
      }}>
        <h4 style={{ color: '#0A2B73', fontSize: 16, fontWeight: 600, marginBottom: 16 }}>
          🔍 Filter Materials
        </h4>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div>
            <label style={{ display: 'block', color: '#7b868a', fontSize: 14, marginBottom: 6 }}>
              Course
            </label>
            <select
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              style={{
                width: '100%',
                padding: '8px 12px',
                border: '1px solid #ddd',
                borderRadius: 4,
                fontSize: 14,
                outline: 'none',
                backgroundColor: '#fff'
              }}
            >
              <option value="">All Courses</option>
              {courses.map(course => (
                <option key={course} value={course}>{course}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label style={{ display: 'block', color: '#7b868a', fontSize: 14, marginBottom: 6 }}>
              Subject
            </label>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              style={{
                width: '100%',
                padding: '8px 12px',
                border: '1px solid #ddd',
                borderRadius: 4,
                fontSize: 14,
                outline: 'none',
                backgroundColor: '#fff'
              }}
            >
              <option value="">All Subjects</option>
              {subjects.map(subject => (
                <option key={subject} value={subject}>{subject}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Materials List */}
      <div>
        <h3 style={{ color: '#0A2B73', fontSize: 18, fontWeight: 600, marginBottom: 24 }}>
          📚 Course Materials ({filteredMaterials.length})
        </h3>
        
        {filteredMaterials.length === 0 ? (
          <div style={{ textAlign: 'center', color: '#666', padding: '40px', border: '2px dashed #ddd', borderRadius: 8 }}>
            No materials found for the selected filters.
          </div>
        ) : (
          <div style={{ display: 'grid', gap: 16 }}>
            {filteredMaterials.map(material => (
              <div key={material.id} style={{
                display: 'grid',
                gridTemplateColumns: 'auto 1fr auto auto auto auto',
                gap: 16,
                alignItems: 'center',
                padding: '16px',
                border: '1px solid #eee',
                borderRadius: 8,
                backgroundColor: '#fafafa'
              }}>
                <div style={{ fontSize: 24 }}>
                  {getMaterialIcon(material.type)}
                </div>
                
                <div>
                  <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 4 }}>
                    {material.title}
                  </div>
                  <div style={{ fontSize: 14, color: '#666', marginBottom: 2 }}>
                    {material.courseName} • {material.subjectName}
                  </div>
                  <div style={{ fontSize: 12, color: '#999', marginBottom: 4 }}>
                    {material.description}
                  </div>
                  <div style={{ fontSize: 12, color: '#999' }}>
                    Uploaded by {material.uploadBy} on {material.uploadDate}
                    {material.fileSize && ` • ${material.fileSize}`}
                  </div>
                </div>
                
                <span style={{ 
                  padding: '4px 8px', 
                  backgroundColor: material.accessControl === 'public' ? '#e8f5e8' : '#fff3e0', 
                  color: material.accessControl === 'public' ? '#2e7d32' : '#f57c00', 
                  borderRadius: 4, 
                  fontSize: 12, 
                  fontWeight: 600 
                }}>
                  {material.accessControl === 'public' ? '🌐 Public' : '🔒 Internal'}
                </span>
                
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 12, color: '#666' }}>Downloads</div>
                  <div style={{ fontWeight: 600, color: '#0A2B73' }}>{material.downloadCount}</div>
                </div>
                
                <button
                  onClick={() => handleDownload(material)}
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
                  onClick={() => handleDelete(material.id)}
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

export default CourseMaterials; 