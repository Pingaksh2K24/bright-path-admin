import React, { useState } from 'react';
import './CourseEffectiveness.css';

interface SyllabusModule {
  id: string;
  name: string;
  plannedCompletion: number;
  actualCompletion: number;
  avgScore: number;
  studentFeedback: number;
}

interface CourseData {
  id: string;
  name: string;
  class: string;
  subject: string;
  faculty: string;
  syllabusModules: SyllabusModule[];
  facultyEffectiveness: number;
  dropoutRate: number;
  expectedCompletionTime: number;
  actualCompletionTime: number;
  totalStudents: number;
  activeStudents: number;
}

const CourseEffectiveness: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<string>('all');
  const [selectedClass, setSelectedClass] = useState<string>('all');
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [selectedFaculty, setSelectedFaculty] = useState<string>('all');
  const [selectedPeriod, setSelectedPeriod] = useState<string>('current-month');

  // Mock data
  const mockCourseData: CourseData[] = [
    {
      id: '1',
      name: 'Advanced Mathematics',
      class: 'Class 12',
      subject: 'Mathematics',
      faculty: 'Dr. Sharma',
      syllabusModules: [
        { id: '1', name: 'Calculus', plannedCompletion: 100, actualCompletion: 95, avgScore: 78, studentFeedback: 4.2 },
        { id: '2', name: 'Algebra', plannedCompletion: 100, actualCompletion: 88, avgScore: 82, studentFeedback: 4.5 },
        { id: '3', name: 'Trigonometry', plannedCompletion: 80, actualCompletion: 75, avgScore: 75, studentFeedback: 3.8 },
        { id: '4', name: 'Statistics', plannedCompletion: 60, actualCompletion: 45, avgScore: 70, studentFeedback: 3.9 }
      ],
      facultyEffectiveness: 4.3,
      dropoutRate: 8.5,
      expectedCompletionTime: 12,
      actualCompletionTime: 13.2,
      totalStudents: 45,
      activeStudents: 41
    },
    {
      id: '2',
      name: 'Physics Fundamentals',
      class: 'Class 11',
      subject: 'Physics',
      faculty: 'Prof. Kumar',
      syllabusModules: [
        { id: '1', name: 'Mechanics', plannedCompletion: 100, actualCompletion: 92, avgScore: 85, studentFeedback: 4.6 },
        { id: '2', name: 'Thermodynamics', plannedCompletion: 100, actualCompletion: 98, avgScore: 79, studentFeedback: 4.1 },
        { id: '3', name: 'Optics', plannedCompletion: 70, actualCompletion: 68, avgScore: 73, studentFeedback: 4.0 },
        { id: '4', name: 'Electricity', plannedCompletion: 50, actualCompletion: 55, avgScore: 77, studentFeedback: 4.3 }
      ],
      facultyEffectiveness: 4.5,
      dropoutRate: 5.2,
      expectedCompletionTime: 10,
      actualCompletionTime: 10.8,
      totalStudents: 38,
      activeStudents: 36
    }
  ];

  const filteredData = mockCourseData.filter(course => {
    return (selectedCourse === 'all' || course.name === selectedCourse) &&
           (selectedClass === 'all' || course.class === selectedClass) &&
           (selectedSubject === 'all' || course.subject === selectedSubject) &&
           (selectedFaculty === 'all' || course.faculty === selectedFaculty);
  });

  const calculateOverallSyllabusCompletion = (modules: SyllabusModule[]) => {
    const totalPlanned = modules.reduce((sum, module) => sum + module.plannedCompletion, 0);
    const totalActual = modules.reduce((sum, module) => sum + module.actualCompletion, 0);
    return totalPlanned > 0 ? (totalActual / totalPlanned) * 100 : 0;
  };

  const calculateOverallPerformance = (modules: SyllabusModule[]) => {
    return modules.reduce((sum, module) => sum + module.avgScore, 0) / modules.length;
  };

  const calculateOverallFeedback = (modules: SyllabusModule[]) => {
    return modules.reduce((sum, module) => sum + module.studentFeedback, 0) / modules.length;
  };

  return (
    <div className="course-effectiveness">
      <div className="page-header">
        <h1>📘 Course Effectiveness Report</h1>
        <p>Analyze course effectiveness and student understanding</p>
      </div>

      {/* Filters */}
      <div className="filters-section">
        <div className="filters-grid">
          <div className="filter-group">
            <label>Course</label>
            <select value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)}>
              <option value="all">All Courses</option>
              <option value="Advanced Mathematics">Advanced Mathematics</option>
              <option value="Physics Fundamentals">Physics Fundamentals</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Class</label>
            <select value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)}>
              <option value="all">All Classes</option>
              <option value="Class 11">Class 11</option>
              <option value="Class 12">Class 12</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Subject</label>
            <select value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)}>
              <option value="all">All Subjects</option>
              <option value="Mathematics">Mathematics</option>
              <option value="Physics">Physics</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Faculty</label>
            <select value={selectedFaculty} onChange={(e) => setSelectedFaculty(e.target.value)}>
              <option value="all">All Faculty</option>
              <option value="Dr. Sharma">Dr. Sharma</option>
              <option value="Prof. Kumar">Prof. Kumar</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Time Period</label>
            <select value={selectedPeriod} onChange={(e) => setSelectedPeriod(e.target.value)}>
              <option value="current-month">Current Month</option>
              <option value="last-month">Last Month</option>
              <option value="current-quarter">Current Quarter</option>
              <option value="last-quarter">Last Quarter</option>
            </select>
          </div>
        </div>
      </div>

      {/* Course Cards */}
      <div className="courses-grid">
        {filteredData.map(course => (
          <div key={course.id} className="course-card">
            <div className="course-header">
              <h3>{course.name}</h3>
              <div className="course-meta">
                <span className="class-badge">{course.class}</span>
                <span className="subject-badge">{course.subject}</span>
              </div>
            </div>

            <div className="faculty-info">
              <span className="faculty-name">👨‍🏫 {course.faculty}</span>
              <div className="faculty-effectiveness">
                <span>Faculty Score: </span>
                <span className={`score ${course.facultyEffectiveness >= 4 ? 'excellent' : course.facultyEffectiveness >= 3 ? 'good' : 'needs-improvement'}`}>
                  {course.facultyEffectiveness.toFixed(1)}/5.0
                </span>
              </div>
            </div>

            {/* Overall Metrics */}
            <div className="overall-metrics">
              <div className="metric-card">
                <div className="metric-header">
                  <span className="metric-icon">📘</span>
                  <span className="metric-title">Syllabus Coverage</span>
                </div>
                <div className="metric-value">
                  {calculateOverallSyllabusCompletion(course.syllabusModules).toFixed(1)}%
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${calculateOverallSyllabusCompletion(course.syllabusModules)}%` }}
                  ></div>
                </div>
              </div>

              <div className="metric-card">
                <div className="metric-header">
                  <span className="metric-icon">📈</span>
                  <span className="metric-title">Avg Performance</span>
                </div>
                <div className="metric-value">
                  {calculateOverallPerformance(course.syllabusModules).toFixed(1)}%
                </div>
              </div>

              <div className="metric-card">
                <div className="metric-header">
                  <span className="metric-icon">⭐</span>
                  <span className="metric-title">Student Feedback</span>
                </div>
                <div className="metric-value">
                  {calculateOverallFeedback(course.syllabusModules).toFixed(1)}/5.0
                </div>
              </div>

              <div className="metric-card">
                <div className="metric-header">
                  <span className="metric-icon">🔄</span>
                  <span className="metric-title">Dropout Rate</span>
                </div>
                <div className="metric-value dropout-rate">
                  {course.dropoutRate}%
                </div>
              </div>

              <div className="metric-card">
                <div className="metric-header">
                  <span className="metric-icon">⏱️</span>
                  <span className="metric-title">Completion Time</span>
                </div>
                <div className="metric-value">
                  {course.actualCompletionTime} / {course.expectedCompletionTime} months
                </div>
              </div>

              <div className="metric-card">
                <div className="metric-header">
                  <span className="metric-icon">👥</span>
                  <span className="metric-title">Active Students</span>
                </div>
                <div className="metric-value">
                  {course.activeStudents} / {course.totalStudents}
                </div>
              </div>
            </div>

            {/* Module-wise Details */}
            <div className="modules-section">
              <h4>Module-wise Performance</h4>
              <div className="modules-grid">
                {course.syllabusModules.map(module => (
                  <div key={module.id} className="module-card">
                    <div className="module-header">
                      <h5>{module.name}</h5>
                    </div>
                    
                    <div className="module-metrics">
                      <div className="module-metric">
                        <span className="metric-label">Coverage:</span>
                        <span className="metric-value">
                          {module.actualCompletion}/{module.plannedCompletion}%
                        </span>
                        <div className="mini-progress">
                          <div 
                            className="mini-progress-fill" 
                            style={{ width: `${(module.actualCompletion / module.plannedCompletion) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="module-metric">
                        <span className="metric-label">Avg Score:</span>
                        <span className={`metric-value ${module.avgScore >= 80 ? 'excellent' : module.avgScore >= 60 ? 'good' : 'needs-improvement'}`}>
                          {module.avgScore}%
                        </span>
                      </div>
                      
                      <div className="module-metric">
                        <span className="metric-label">Feedback:</span>
                        <span className="metric-value">
                          ⭐ {module.studentFeedback.toFixed(1)}/5.0
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredData.length === 0 && (
        <div className="no-data">
          <p>No courses found matching the selected filters.</p>
        </div>
      )}

      {/* Export Button */}
      <div className="export-section">
        <button className="export-btn">
          📊 Export Report
        </button>
      </div>
    </div>
  );
};

export default CourseEffectiveness;
