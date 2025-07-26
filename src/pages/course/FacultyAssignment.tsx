import React, { useState } from 'react';

interface Faculty {
  id: number;
  name: string;
  email: string;
  phone: string;
  subjects: string[];
  status: 'active' | 'inactive';
}

interface CourseSubject {
  id: number;
  courseName: string;
  subjectName: string;
  assignedFaculty: Faculty | null;
  batchOverride: Faculty | null;
}

const FacultyAssignment: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedFaculty, setSelectedFaculty] = useState('');
  const [batchOverride, setBatchOverride] = useState(false);
  const [batchOverrideFaculty, setBatchOverrideFaculty] = useState('');

  const [facultyMembers] = useState<Faculty[]>([
    {
      id: 1,
      name: 'Dr. Sharma',
      email: 'sharma@brightpath.com',
      phone: '+91 98765 43210',
      subjects: ['Physics', 'Mathematics'],
      status: 'active'
    },
    {
      id: 2,
      name: 'Prof. Verma',
      email: 'verma@brightpath.com',
      phone: '+91 98765 43211',
      subjects: ['Chemistry', 'Biology'],
      status: 'active'
    },
    {
      id: 3,
      name: 'Dr. Mehta',
      email: 'mehta@brightpath.com',
      phone: '+91 98765 43212',
      subjects: ['Mathematics', 'Computer Science'],
      status: 'active'
    },
    {
      id: 4,
      name: 'Ms. Gupta',
      email: 'gupta@brightpath.com',
      phone: '+91 98765 43213',
      subjects: ['English', 'History'],
      status: 'inactive'
    }
  ]);

  const [courseSubjects] = useState<CourseSubject[]>([
    {
      id: 1,
      courseName: 'NEET Preparation',
      subjectName: 'Physics',
      assignedFaculty: facultyMembers[0],
      batchOverride: null
    },
    {
      id: 2,
      courseName: 'NEET Preparation',
      subjectName: 'Chemistry',
      assignedFaculty: facultyMembers[1],
      batchOverride: null
    },
    {
      id: 3,
      courseName: 'NEET Preparation',
      subjectName: 'Biology',
      assignedFaculty: facultyMembers[1],
      batchOverride: null
    },
    {
      id: 4,
      courseName: 'JEE Main & Advanced',
      subjectName: 'Physics',
      assignedFaculty: facultyMembers[0],
      batchOverride: null
    },
    {
      id: 5,
      courseName: 'JEE Main & Advanced',
      subjectName: 'Chemistry',
      assignedFaculty: facultyMembers[1],
      batchOverride: null
    },
    {
      id: 6,
      courseName: 'JEE Main & Advanced',
      subjectName: 'Mathematics',
      assignedFaculty: facultyMembers[2],
      batchOverride: null
    }
  ]);

  const courses = ['NEET Preparation', 'JEE Main & Advanced', 'MHT-CET', 'Foundation 8th-10th'];
  const subjects = ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'English', 'Computer Science'];

  const handleAssignment = () => {
    if (!selectedCourse || !selectedSubject || !selectedFaculty) {
      alert('Please select course, subject, and faculty');
      return;
    }

    console.log('Assigning faculty:', {
      course: selectedCourse,
      subject: selectedSubject,
      faculty: selectedFaculty,
      batchOverride: batchOverride ? batchOverrideFaculty : null
    });

    alert('Faculty assigned successfully!');
    setSelectedCourse('');
    setSelectedSubject('');
    setSelectedFaculty('');
    setBatchOverride(false);
    setBatchOverrideFaculty('');
  };

  const handleRemoveAssignment = (courseSubjectId: number) => {
    console.log('Removing assignment for:', courseSubjectId);
    alert('Assignment removed successfully!');
  };

  const filteredCourseSubjects = courseSubjects.filter(cs => 
    !selectedCourse || cs.courseName === selectedCourse
  );

  const availableFaculty = facultyMembers.filter(f => f.status === 'active');

  return (
    <div style={{ width: '90%', maxWidth: '1200px', margin: '20px auto', background: '#fff', borderRadius: 12, boxShadow: '0 6px 24px 0 rgba(6,13,58,0.08)', padding: '32px' }}>
      <h2 style={{ color: '#0A2B73', fontSize: 24, fontWeight: 600, marginBottom: 32, textAlign: 'center' }}>
        Assign Faculty to Course
      </h2>

      {/* Assignment Form */}
      <div style={{ 
        border: '2px dashed #ddd', 
        borderRadius: 8, 
        padding: '32px', 
        backgroundColor: '#fafafa',
        marginBottom: 32
      }}>
        <h3 style={{ color: '#0A2B73', fontSize: 18, fontWeight: 600, marginBottom: 24 }}>
          👨‍🏫 New Faculty Assignment
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
              Assign Faculty *
            </label>
            <select
              value={selectedFaculty}
              onChange={(e) => setSelectedFaculty(e.target.value)}
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
              <option value="">Select Faculty</option>
              {availableFaculty.map(faculty => (
                <option key={faculty.id} value={faculty.name}>
                  {faculty.name} ({faculty.subjects.join(', ')})
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label style={{ display: 'block', color: '#7b868a', fontSize: 16, marginBottom: 8, fontWeight: 500 }}>
              Batch Override (Optional)
            </label>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <input
                type="checkbox"
                checked={batchOverride}
                onChange={(e) => setBatchOverride(e.target.checked)}
                style={{ transform: 'scale(1.2)' }}
              />
              <span style={{ fontSize: 14, color: '#666' }}>
                Enable batch-specific faculty assignment
              </span>
            </div>
            {batchOverride && (
              <select
                value={batchOverrideFaculty}
                onChange={(e) => setBatchOverrideFaculty(e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  border: '1px solid #ddd',
                  borderRadius: 4,
                  fontSize: 14,
                  outline: 'none',
                  backgroundColor: '#fff',
                  marginTop: 8
                }}
              >
                <option value="">Select Batch Faculty</option>
                {availableFaculty.map(faculty => (
                  <option key={faculty.id} value={faculty.name}>
                    {faculty.name} ({faculty.subjects.join(', ')})
                  </option>
                ))}
              </select>
            )}
          </div>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={handleAssignment}
            disabled={!selectedCourse || !selectedSubject || !selectedFaculty}
            style={{
              background: !selectedCourse || !selectedSubject || !selectedFaculty ? '#eee' : '#0A2B73',
              color: !selectedCourse || !selectedSubject || !selectedFaculty ? '#999' : '#fff',
              fontWeight: 600,
              fontSize: 16,
              padding: '14px 32px',
              border: 'none',
              borderRadius: 6,
              cursor: !selectedCourse || !selectedSubject || !selectedFaculty ? 'not-allowed' : 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}
          >
            ✅ Assign Faculty
          </button>
        </div>
      </div>

      {/* Current Assignments */}
      <div>
        <h3 style={{ color: '#0A2B73', fontSize: 18, fontWeight: 600, marginBottom: 24 }}>
          📋 Current Faculty Assignments
        </h3>
        
        {/* Filter */}
        <div style={{ marginBottom: 24 }}>
          <label style={{ display: 'block', color: '#7b868a', fontSize: 16, marginBottom: 8 }}>
            Filter by Course
          </label>
          <select
            onChange={(e) => setSelectedCourse(e.target.value)}
            style={{
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
        
        {filteredCourseSubjects.length === 0 ? (
          <div style={{ textAlign: 'center', color: '#666', padding: '40px', border: '2px dashed #ddd', borderRadius: 8 }}>
            No faculty assignments found.
          </div>
        ) : (
          <div style={{ display: 'grid', gap: 16 }}>
            {filteredCourseSubjects.map(cs => (
              <div key={cs.id} style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr auto auto',
                gap: 16,
                alignItems: 'center',
                padding: '16px',
                border: '1px solid #eee',
                borderRadius: 8,
                backgroundColor: '#fafafa'
              }}>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 4 }}>
                    {cs.courseName}
                  </div>
                  <div style={{ fontSize: 14, color: '#666' }}>
                    Subject: {cs.subjectName}
                  </div>
                </div>
                
                <div>
                  {cs.assignedFaculty ? (
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 2 }}>
                        {cs.assignedFaculty.name}
                      </div>
                      <div style={{ fontSize: 12, color: '#666' }}>
                        {cs.assignedFaculty.email} • {cs.assignedFaculty.phone}
                      </div>
                      {cs.batchOverride && (
                        <div style={{ fontSize: 12, color: '#ff9800', marginTop: 4 }}>
                          🔄 Batch Override: {cs.batchOverride.name}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div style={{ color: '#999', fontStyle: 'italic' }}>
                      No faculty assigned
                    </div>
                  )}
                </div>
                
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
                  onClick={() => handleRemoveAssignment(cs.id)}
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
                  🗑️ Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Faculty Directory Quick View */}
      <div style={{ 
        border: '2px solid #e0e0e0', 
        borderRadius: 8, 
        padding: '24px', 
        backgroundColor: '#f9f9f9',
        marginTop: 32
      }}>
        <h3 style={{ color: '#0A2B73', fontSize: 18, fontWeight: 600, marginBottom: 16 }}>
          👥 Faculty Directory Quick View
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16 }}>
          {facultyMembers.map(faculty => (
            <div key={faculty.id} style={{
              padding: '12px',
              border: '1px solid #ddd',
              borderRadius: 6,
              backgroundColor: '#fff'
            }}>
              <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>
                {faculty.name}
              </div>
              <div style={{ fontSize: 12, color: '#666', marginBottom: 4 }}>
                {faculty.email}
              </div>
              <div style={{ fontSize: 12, color: '#666', marginBottom: 4 }}>
                Subjects: {faculty.subjects.join(', ')}
              </div>
              <span style={{ 
                padding: '2px 6px', 
                backgroundColor: faculty.status === 'active' ? '#e8f5e8' : '#ffe8e8', 
                color: faculty.status === 'active' ? '#2e7d32' : '#d32f2f', 
                borderRadius: 3, 
                fontSize: 10, 
                fontWeight: 600 
              }}>
                {faculty.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacultyAssignment; 