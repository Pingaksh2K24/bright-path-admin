import React, { useState } from 'react';

interface Subject {
  id: number;
  name: string;
  syllabusLink: string;
  topicCount: number;
  order: number;
}

interface Course {
  id: number;
  name: string;
  subjects: Subject[];
}

const SubjectMapping: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);
  const [courses] = useState<Course[]>([
    {
      id: 1,
      name: 'NEET Preparation',
      subjects: [
        { id: 1, name: 'Physics', syllabusLink: '', topicCount: 25, order: 1 },
        { id: 2, name: 'Chemistry', syllabusLink: '', topicCount: 30, order: 2 },
        { id: 3, name: 'Biology', syllabusLink: '', topicCount: 40, order: 3 }
      ]
    },
    {
      id: 2,
      name: 'JEE Main & Advanced',
      subjects: [
        { id: 4, name: 'Physics', syllabusLink: '', topicCount: 28, order: 1 },
        { id: 5, name: 'Chemistry', syllabusLink: '', topicCount: 32, order: 2 },
        { id: 6, name: 'Mathematics', syllabusLink: '', topicCount: 35, order: 3 }
      ]
    },
    {
      id: 3,
      name: 'MHT-CET',
      subjects: [
        { id: 7, name: 'Physics', syllabusLink: '', topicCount: 20, order: 1 },
        { id: 8, name: 'Chemistry', syllabusLink: '', topicCount: 25, order: 2 },
        { id: 9, name: 'Mathematics', syllabusLink: '', topicCount: 30, order: 3 }
      ]
    }
  ]);

  const [availableSubjects] = useState([
    'Physics', 'Chemistry', 'Mathematics', 'Biology', 'English', 'Computer Science', 'Economics', 'History', 'Geography', 'Political Science'
  ]);

  const [newSubject, setNewSubject] = useState('');
  const [newSubjectSyllabus, setNewSubjectSyllabus] = useState('');
  const [newSubjectTopics, setNewSubjectTopics] = useState('');

  const selectedCourseData = courses.find(course => course.id === selectedCourse);

  const handleAddSubject = () => {
    if (!selectedCourse || !newSubject.trim()) return;
    
    const course = courses.find(c => c.id === selectedCourse);
    if (course) {
      const newSubjectObj: Subject = {
        id: Date.now(),
        name: newSubject,
        syllabusLink: newSubjectSyllabus,
        topicCount: parseInt(newSubjectTopics) || 0,
        order: course.subjects.length + 1
      };
      
      course.subjects.push(newSubjectObj);
      setNewSubject('');
      setNewSubjectSyllabus('');
      setNewSubjectTopics('');
    }
  };

  const handleRemoveSubject = (subjectId: number) => {
    if (!selectedCourse) return;
    
    const course = courses.find(c => c.id === selectedCourse);
    if (course) {
      course.subjects = course.subjects.filter(s => s.id !== subjectId);
      // Reorder remaining subjects
      course.subjects.forEach((subject, index) => {
        subject.order = index + 1;
      });
    }
  };

  const moveSubject = (subjectId: number, direction: 'up' | 'down') => {
    if (!selectedCourse) return;
    
    const course = courses.find(c => c.id === selectedCourse);
    if (!course) return;
    
    const subjectIndex = course.subjects.findIndex(s => s.id === subjectId);
    if (subjectIndex === -1) return;
    
    if (direction === 'up' && subjectIndex > 0) {
      [course.subjects[subjectIndex], course.subjects[subjectIndex - 1]] = 
      [course.subjects[subjectIndex - 1], course.subjects[subjectIndex]];
    } else if (direction === 'down' && subjectIndex < course.subjects.length - 1) {
      [course.subjects[subjectIndex], course.subjects[subjectIndex + 1]] = 
      [course.subjects[subjectIndex + 1], course.subjects[subjectIndex]];
    }
    
    // Update order numbers
    course.subjects.forEach((subject, index) => {
      subject.order = index + 1;
    });
  };

  const updateSyllabusLink = (subjectId: number, link: string) => {
    if (!selectedCourse) return;
    
    const course = courses.find(c => c.id === selectedCourse);
    if (course) {
      const subject = course.subjects.find(s => s.id === subjectId);
      if (subject) {
        subject.syllabusLink = link;
      }
    }
  };

  return (
    <div style={{ width: '90%', maxWidth: '1200px', margin: '20px auto', background: '#fff', borderRadius: 12, boxShadow: '0 6px 24px 0 rgba(6,13,58,0.08)', padding: '32px' }}>
      <h2 style={{ color: '#0A2B73', fontSize: 24, fontWeight: 600, marginBottom: 32, textAlign: 'center' }}>
        Subject Mapping
      </h2>

      {/* Course Selection */}
      <div style={{ marginBottom: 32 }}>
        <label style={{ display: 'block', color: '#7b868a', fontSize: 16, marginBottom: 12, fontWeight: 500 }}>
          Select Course *
        </label>
        <select
          value={selectedCourse || ''}
          onChange={(e) => setSelectedCourse(parseInt(e.target.value) || null)}
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
          <option value="">Choose a course...</option>
          {courses.map(course => (
            <option key={course.id} value={course.id}>{course.name}</option>
          ))}
        </select>
      </div>

      {selectedCourseData && (
        <>
          {/* Current Subjects */}
          <div style={{ marginBottom: 32 }}>
            <h3 style={{ color: '#0A2B73', fontSize: 18, fontWeight: 600, marginBottom: 16 }}>
              Current Subjects for {selectedCourseData.name}
            </h3>
            
            {selectedCourseData.subjects.length === 0 ? (
              <div style={{ textAlign: 'center', color: '#666', padding: '40px', border: '2px dashed #ddd', borderRadius: 8 }}>
                No subjects assigned yet. Add subjects below.
              </div>
            ) : (
              <div style={{ display: 'grid', gap: 12 }}>
                {selectedCourseData.subjects.map((subject, index) => (
                  <div key={subject.id} style={{
                    display: 'grid',
                    gridTemplateColumns: 'auto 1fr auto auto auto',
                    gap: 16,
                    alignItems: 'center',
                    padding: '16px',
                    border: '1px solid #eee',
                    borderRadius: 8,
                    backgroundColor: '#fafafa'
                  }}>
                    <span style={{ fontWeight: 600, color: '#0A2B73', minWidth: '40px' }}>
                      {subject.order}
                    </span>
                    
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 4 }}>
                        {subject.name}
                      </div>
                      <input
                        type="text"
                        placeholder="Syllabus link (optional)"
                        value={subject.syllabusLink}
                        onChange={(e) => updateSyllabusLink(subject.id, e.target.value)}
                        style={{
                          width: '100%',
                          padding: '6px 8px',
                          border: '1px solid #ddd',
                          borderRadius: 4,
                          fontSize: 14
                        }}
                      />
                    </div>
                    
                    <span style={{ 
                      padding: '4px 8px', 
                      backgroundColor: '#e3f2fd', 
                      color: '#1976d2', 
                      borderRadius: 4, 
                      fontSize: 12, 
                      fontWeight: 600 
                    }}>
                      {subject.topicCount} topics
                    </span>
                    
                    <div style={{ display: 'flex', gap: 4 }}>
                      <button
                        onClick={() => moveSubject(subject.id, 'up')}
                        disabled={index === 0}
                        style={{
                          padding: '4px 8px',
                          border: 'none',
                          background: index === 0 ? '#eee' : '#1976d2',
                          color: index === 0 ? '#999' : '#fff',
                          borderRadius: 4,
                          cursor: index === 0 ? 'not-allowed' : 'pointer',
                          fontSize: 12
                        }}
                      >
                        ↑
                      </button>
                      <button
                        onClick={() => moveSubject(subject.id, 'down')}
                        disabled={index === selectedCourseData.subjects.length - 1}
                        style={{
                          padding: '4px 8px',
                          border: 'none',
                          background: index === selectedCourseData.subjects.length - 1 ? '#eee' : '#1976d2',
                          color: index === selectedCourseData.subjects.length - 1 ? '#999' : '#fff',
                          borderRadius: 4,
                          cursor: index === selectedCourseData.subjects.length - 1 ? 'not-allowed' : 'pointer',
                          fontSize: 12
                        }}
                      >
                        ↓
                      </button>
                    </div>
                    
                    <button
                      onClick={() => handleRemoveSubject(subject.id)}
                      style={{
                        padding: '6px 12px',
                        border: 'none',
                        background: '#d32f2f',
                        color: '#fff',
                        borderRadius: 4,
                        cursor: 'pointer',
                        fontSize: 12,
                        fontWeight: 600
                      }}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Add New Subject */}
          <div style={{ 
            border: '2px dashed #ddd', 
            borderRadius: 8, 
            padding: '24px', 
            backgroundColor: '#fafafa',
            marginBottom: 24
          }}>
            <h4 style={{ color: '#0A2B73', fontSize: 16, fontWeight: 600, marginBottom: 16 }}>
              Add New Subject
            </h4>
            
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 1fr auto', gap: 16, alignItems: 'end' }}>
              <div>
                <label style={{ display: 'block', color: '#7b868a', fontSize: 14, marginBottom: 6 }}>
                  Subject Name *
                </label>
                <select
                  value={newSubject}
                  onChange={(e) => setNewSubject(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    border: '1px solid #ddd',
                    borderRadius: 6,
                    fontSize: 14,
                    outline: 'none'
                  }}
                >
                  <option value="">Select Subject</option>
                  {availableSubjects
                    .filter(subject => !selectedCourseData.subjects.some(s => s.name === subject))
                    .map(subject => (
                      <option key={subject} value={subject}>{subject}</option>
                    ))
                  }
                </select>
              </div>
              
              <div>
                <label style={{ display: 'block', color: '#7b868a', fontSize: 14, marginBottom: 6 }}>
                  Syllabus Link (optional)
                </label>
                <input
                  type="text"
                  value={newSubjectSyllabus}
                  onChange={(e) => setNewSubjectSyllabus(e.target.value)}
                  placeholder="https://..."
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    border: '1px solid #ddd',
                    borderRadius: 6,
                    fontSize: 14,
                    outline: 'none'
                  }}
                />
              </div>
              
              <div>
                <label style={{ display: 'block', color: '#7b868a', fontSize: 14, marginBottom: 6 }}>
                  Topic Count
                </label>
                <input
                  type="number"
                  value={newSubjectTopics}
                  onChange={(e) => setNewSubjectTopics(e.target.value)}
                  placeholder="25"
                  min="0"
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    border: '1px solid #ddd',
                    borderRadius: 6,
                    fontSize: 14,
                    outline: 'none'
                  }}
                />
              </div>
              
              <button
                onClick={handleAddSubject}
                disabled={!newSubject.trim()}
                style={{
                  padding: '10px 20px',
                  border: 'none',
                  background: !newSubject.trim() ? '#eee' : '#0A2B73',
                  color: !newSubject.trim() ? '#999' : '#fff',
                  borderRadius: 6,
                  cursor: !newSubject.trim() ? 'not-allowed' : 'pointer',
                  fontSize: 14,
                  fontWeight: 600
                }}
              >
                Add Subject
              </button>
            </div>
          </div>

          {/* Save Button */}
          <div style={{ textAlign: 'center' }}>
            <button
              style={{
                background: '#4caf50',
                color: '#fff',
                fontWeight: 600,
                fontSize: 16,
                padding: '14px 32px',
                border: 'none',
                borderRadius: 6,
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}
            >
              💾 Save Subject Mapping
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default SubjectMapping; 