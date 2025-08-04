import React, { useState } from 'react';
import './GradingScheme.css';

interface GradeBoundary {
  id: string;
  grade: string;
  minScore: number;
  maxScore: number;
  gradePoint: number;
  descriptor: string;
  color: string;
}

interface GradingSchemeData {
  id: string;
  name: string;
  description: string;
  effectiveDate: string;
  expiryDate?: string;
  isActive: boolean;
  gradeBoundaries: GradeBoundary[];
  passMarksThreshold: number;
  roundingRule: 'nearest' | 'up' | 'down';
  bonusPoints: number;
  graceMarks: number;
  applicableTo: string[];
}

interface CourseOverride {
  courseId: string;
  courseName: string;
  schemeId: string;
  schemeName: string;
  customAdjustments: {
    passMarksThreshold?: number;
    bonusPoints?: number;
    graceMarks?: number;
  };
}

const GradingScheme: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'schemes' | 'boundaries' | 'overrides' | 'preview'>('schemes');
  const [selectedScheme, setSelectedScheme] = useState<string>('default');
  const [previewScore, setPreviewScore] = useState<number>(85);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [showAddScheme, setShowAddScheme] = useState<boolean>(false);

  // Mock data for grading schemes
  const mockGradingSchemes: GradingSchemeData[] = [
    {
      id: 'default',
      name: 'Standard Grading Scheme',
      description: 'Default grading system for all courses',
      effectiveDate: '2024-01-01',
      isActive: true,
      passMarksThreshold: 50,
      roundingRule: 'nearest',
      bonusPoints: 0,
      graceMarks: 2,
      applicableTo: ['All Courses'],
      gradeBoundaries: [
        { id: '1', grade: 'A+', minScore: 90, maxScore: 100, gradePoint: 4.0, descriptor: 'Excellent', color: '#28a745' },
        { id: '2', grade: 'A', minScore: 80, maxScore: 89, gradePoint: 3.7, descriptor: 'Very Good', color: '#20c997' },
        { id: '3', grade: 'B+', minScore: 75, maxScore: 79, gradePoint: 3.3, descriptor: 'Good', color: '#17a2b8' },
        { id: '4', grade: 'B', minScore: 70, maxScore: 74, gradePoint: 3.0, descriptor: 'Above Average', color: '#007bff' },
        { id: '5', grade: 'C+', minScore: 65, maxScore: 69, gradePoint: 2.7, descriptor: 'Average', color: '#6f42c1' },
        { id: '6', grade: 'C', minScore: 60, maxScore: 64, gradePoint: 2.3, descriptor: 'Below Average', color: '#fd7e14' },
        { id: '7', grade: 'D', minScore: 50, maxScore: 59, gradePoint: 2.0, descriptor: 'Pass', color: '#ffc107' },
        { id: '8', grade: 'F', minScore: 0, maxScore: 49, gradePoint: 0.0, descriptor: 'Fail', color: '#dc3545' }
      ]
    },
    {
      id: 'strict',
      name: 'Strict Grading Scheme',
      description: 'Higher standards for advanced courses',
      effectiveDate: '2024-01-01',
      isActive: true,
      passMarksThreshold: 60,
      roundingRule: 'down',
      bonusPoints: 0,
      graceMarks: 0,
      applicableTo: ['JEE Advanced', 'NEET'],
      gradeBoundaries: [
        { id: '1', grade: 'A+', minScore: 95, maxScore: 100, gradePoint: 4.0, descriptor: 'Outstanding', color: '#28a745' },
        { id: '2', grade: 'A', minScore: 85, maxScore: 94, gradePoint: 3.7, descriptor: 'Excellent', color: '#20c997' },
        { id: '3', grade: 'B+', minScore: 80, maxScore: 84, gradePoint: 3.3, descriptor: 'Very Good', color: '#17a2b8' },
        { id: '4', grade: 'B', minScore: 75, maxScore: 79, gradePoint: 3.0, descriptor: 'Good', color: '#007bff' },
        { id: '5', grade: 'C+', minScore: 70, maxScore: 74, gradePoint: 2.7, descriptor: 'Above Average', color: '#6f42c1' },
        { id: '6', grade: 'C', minScore: 65, maxScore: 69, gradePoint: 2.3, descriptor: 'Average', color: '#fd7e14' },
        { id: '7', grade: 'D', minScore: 60, maxScore: 64, gradePoint: 2.0, descriptor: 'Pass', color: '#ffc107' },
        { id: '8', grade: 'F', minScore: 0, maxScore: 59, gradePoint: 0.0, descriptor: 'Fail', color: '#dc3545' }
      ]
    }
  ];

  const mockCourseOverrides: CourseOverride[] = [
    {
      courseId: 'jee-main',
      courseName: 'JEE Main Preparation',
      schemeId: 'strict',
      schemeName: 'Strict Grading Scheme',
      customAdjustments: {
        passMarksThreshold: 65,
        bonusPoints: 5,
        graceMarks: 1
      }
    },
    {
      courseId: 'foundation',
      courseName: 'Foundation Course',
      schemeId: 'default',
      schemeName: 'Standard Grading Scheme',
      customAdjustments: {
        passMarksThreshold: 45,
        bonusPoints: 3,
        graceMarks: 5
      }
    }
  ];

  const currentScheme = mockGradingSchemes.find(scheme => scheme.id === selectedScheme) || mockGradingSchemes[0];

  const calculateGrade = (score: number): { grade: string; gradePoint: number; descriptor: string; color: string; isPassing: boolean } => {
    const adjustedScore = Math.min(100, score + currentScheme.bonusPoints + currentScheme.graceMarks);
    const finalScore = currentScheme.roundingRule === 'up' ? Math.ceil(adjustedScore) :
                      currentScheme.roundingRule === 'down' ? Math.floor(adjustedScore) :
                      Math.round(adjustedScore);

    const boundary = currentScheme.gradeBoundaries.find(b => finalScore >= b.minScore && finalScore <= b.maxScore);
    const isPassing = finalScore >= currentScheme.passMarksThreshold;

    return {
      grade: boundary?.grade || 'N/A',
      gradePoint: boundary?.gradePoint || 0,
      descriptor: boundary?.descriptor || 'Unknown',
      color: boundary?.color || '#6c757d',
      isPassing
    };
  };

  const gradeResult = calculateGrade(previewScore);

  return (
    <div className="grading-scheme">
      <div className="page-header">
        <h1>📊 Grading Scheme Management</h1>
        <p>Configure grade boundaries, GPA mapping, and grading rules</p>
      </div>

      {/* Tab Navigation */}
      <div className="tab-navigation">
        <button 
          className={`tab-btn ${activeTab === 'schemes' ? 'active' : ''}`}
          onClick={() => setActiveTab('schemes')}
        >
          📋 Schemes
        </button>
        <button 
          className={`tab-btn ${activeTab === 'boundaries' ? 'active' : ''}`}
          onClick={() => setActiveTab('boundaries')}
        >
          🎯 Grade Boundaries
        </button>
        <button 
          className={`tab-btn ${activeTab === 'overrides' ? 'active' : ''}`}
          onClick={() => setActiveTab('overrides')}
        >
          🔧 Course Overrides
        </button>
        <button 
          className={`tab-btn ${activeTab === 'preview' ? 'active' : ''}`}
          onClick={() => setActiveTab('preview')}
        >
          👁️ Preview & Test
        </button>
      </div>

      {/* Schemes Tab */}
      {activeTab === 'schemes' && (
        <div className="tab-content">
          <div className="section-header">
            <h2>Grading Schemes</h2>
            <button className="add-btn" onClick={() => setShowAddScheme(true)}>
              ➕ Add New Scheme
            </button>
          </div>

          <div className="schemes-grid">
            {mockGradingSchemes.map(scheme => (
              <div key={scheme.id} className={`scheme-card ${scheme.isActive ? 'active' : 'inactive'}`}>
                <div className="scheme-header">
                  <h3>{scheme.name}</h3>
                  <div className="scheme-status">
                    <span className={`status-badge ${scheme.isActive ? 'active' : 'inactive'}`}>
                      {scheme.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                </div>
                <p className="scheme-description">{scheme.description}</p>
                
                <div className="scheme-details">
                  <div className="detail-row">
                    <span className="detail-label">Effective Date:</span>
                    <span className="detail-value">{new Date(scheme.effectiveDate).toLocaleDateString()}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Pass Threshold:</span>
                    <span className="detail-value">{scheme.passMarksThreshold}%</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Rounding:</span>
                    <span className="detail-value">{scheme.roundingRule}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Grace Marks:</span>
                    <span className="detail-value">{scheme.graceMarks}</span>
                  </div>
                </div>

                <div className="scheme-applicable">
                  <strong>Applicable to:</strong>
                  <div className="applicable-tags">
                    {scheme.applicableTo.map((item, index) => (
                      <span key={index} className="applicable-tag">{item}</span>
                    ))}
                  </div>
                </div>

                <div className="scheme-actions">
                  <button className="edit-btn" onClick={() => setSelectedScheme(scheme.id)}>
                    ✏️ Edit
                  </button>
                  <button className="duplicate-btn">
                    📋 Duplicate
                  </button>
                  <button className="delete-btn">
                    🗑️ Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Grade Boundaries Tab */}
      {activeTab === 'boundaries' && (
        <div className="tab-content">
          <div className="section-header">
            <h2>Grade Boundaries Configuration</h2>
            <div className="scheme-selector">
              <label>Select Scheme:</label>
              <select value={selectedScheme} onChange={(e) => setSelectedScheme(e.target.value)}>
                {mockGradingSchemes.map(scheme => (
                  <option key={scheme.id} value={scheme.id}>{scheme.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="boundaries-section">
            <div className="scheme-settings">
              <h3>Scheme Settings</h3>
              <div className="settings-grid">
                <div className="setting-group">
                  <label>Pass Marks Threshold (%)</label>
                  <input type="number" value={currentScheme.passMarksThreshold} min="0" max="100" />
                </div>
                <div className="setting-group">
                  <label>Rounding Rule</label>
                  <select value={currentScheme.roundingRule}>
                    <option value="nearest">Nearest Integer</option>
                    <option value="up">Round Up</option>
                    <option value="down">Round Down</option>
                  </select>
                </div>
                <div className="setting-group">
                  <label>Bonus Points</label>
                  <input type="number" value={currentScheme.bonusPoints} min="0" max="20" />
                </div>
                <div className="setting-group">
                  <label>Grace Marks</label>
                  <input type="number" value={currentScheme.graceMarks} min="0" max="10" />
                </div>
              </div>
            </div>

            <div className="boundaries-table">
              <h3>Grade Boundaries</h3>
              <div className="table-container">
                <table className="boundaries-table-content">
                  <thead>
                    <tr>
                      <th>Grade</th>
                      <th>Min Score</th>
                      <th>Max Score</th>
                      <th>Grade Point</th>
                      <th>Descriptor</th>
                      <th>Color</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentScheme.gradeBoundaries.map(boundary => (
                      <tr key={boundary.id}>
                        <td>
                          <span className="grade-badge" style={{ backgroundColor: boundary.color }}>
                            {boundary.grade}
                          </span>
                        </td>
                        <td>
                          <input 
                            type="number" 
                            value={boundary.minScore} 
                            min="0" 
                            max="100"
                            className="score-input"
                          />
                        </td>
                        <td>
                          <input 
                            type="number" 
                            value={boundary.maxScore} 
                            min="0" 
                            max="100"
                            className="score-input"
                          />
                        </td>
                        <td>
                          <input 
                            type="number" 
                            value={boundary.gradePoint} 
                            min="0" 
                            max="4" 
                            step="0.1"
                            className="gpa-input"
                          />
                        </td>
                        <td>
                          <input 
                            type="text" 
                            value={boundary.descriptor}
                            className="descriptor-input"
                          />
                        </td>
                        <td>
                          <input 
                            type="color" 
                            value={boundary.color}
                            className="color-input"
                          />
                        </td>
                        <td>
                          <button className="delete-row-btn">🗑️</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <button className="add-boundary-btn">➕ Add Grade Boundary</button>
            </div>
          </div>

          <div className="save-section">
            <button className="save-btn">💾 Save Changes</button>
            <button className="cancel-btn">❌ Cancel</button>
          </div>
        </div>
      )}

      {/* Course Overrides Tab */}
      {activeTab === 'overrides' && (
        <div className="tab-content">
          <div className="section-header">
            <h2>Course-Specific Overrides</h2>
            <button className="add-btn">➕ Add Override</button>
          </div>

          <div className="overrides-table">
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Course</th>
                    <th>Base Scheme</th>
                    <th>Pass Threshold</th>
                    <th>Bonus Points</th>
                    <th>Grace Marks</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mockCourseOverrides.map(override => (
                    <tr key={override.courseId}>
                      <td>
                        <div className="course-info">
                          <strong>{override.courseName}</strong>
                          <small>{override.courseId}</small>
                        </div>
                      </td>
                      <td>{override.schemeName}</td>
                      <td>
                        <span className="threshold-badge">
                          {override.customAdjustments.passMarksThreshold || 'Default'}%
                        </span>
                      </td>
                      <td>
                        <span className="bonus-badge">
                          +{override.customAdjustments.bonusPoints || 0}
                        </span>
                      </td>
                      <td>
                        <span className="grace-badge">
                          +{override.customAdjustments.graceMarks || 0}
                        </span>
                      </td>
                      <td>
                        <button className="edit-btn">✏️ Edit</button>
                        <button className="delete-btn">🗑️ Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Preview & Test Tab */}
      {activeTab === 'preview' && (
        <div className="tab-content">
          <div className="section-header">
            <h2>Grade Preview & Testing</h2>
            <div className="scheme-selector">
              <label>Test Scheme:</label>
              <select value={selectedScheme} onChange={(e) => setSelectedScheme(e.target.value)}>
                {mockGradingSchemes.map(scheme => (
                  <option key={scheme.id} value={scheme.id}>{scheme.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="preview-section">
            <div className="score-input-section">
              <h3>Test Score Conversion</h3>
              <div className="score-tester">
                <div className="input-group">
                  <label>Enter Raw Score:</label>
                  <input 
                    type="number" 
                    value={previewScore} 
                    onChange={(e) => setPreviewScore(Number(e.target.value))}
                    min="0" 
                    max="100"
                    className="preview-score-input"
                  />
                  <span className="input-suffix">/ 100</span>
                </div>
                
                <div className="calculation-steps">
                  <div className="step">
                    <span className="step-label">Raw Score:</span>
                    <span className="step-value">{previewScore}</span>
                  </div>
                  <div className="step">
                    <span className="step-label">+ Bonus Points:</span>
                    <span className="step-value">+{currentScheme.bonusPoints}</span>
                  </div>
                  <div className="step">
                    <span className="step-label">+ Grace Marks:</span>
                    <span className="step-value">+{currentScheme.graceMarks}</span>
                  </div>
                  <div className="step total">
                    <span className="step-label">Adjusted Score:</span>
                    <span className="step-value">
                      {Math.min(100, previewScore + currentScheme.bonusPoints + currentScheme.graceMarks)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="grade-result">
                <div className="result-card">
                  <div className="grade-display" style={{ backgroundColor: gradeResult.color }}>
                    <span className="grade-letter">{gradeResult.grade}</span>
                    <span className="grade-point">GPA: {gradeResult.gradePoint}</span>
                  </div>
                  <div className="grade-info">
                    <h4>{gradeResult.descriptor}</h4>
                    <p className={`pass-status ${gradeResult.isPassing ? 'passing' : 'failing'}`}>
                      {gradeResult.isPassing ? '✅ Passing' : '❌ Failing'}
                    </p>
                    <small>
                      Pass threshold: {currentScheme.passMarksThreshold}%
                    </small>
                  </div>
                </div>
              </div>
            </div>

            <div className="grade-scale-preview">
              <h3>Grade Scale Overview</h3>
              <div className="grade-scale">
                {currentScheme.gradeBoundaries.map(boundary => (
                  <div key={boundary.id} className="grade-scale-item">
                    <div className="grade-bar" style={{ backgroundColor: boundary.color }}>
                      <span className="grade-label">{boundary.grade}</span>
                    </div>
                    <div className="grade-details">
                      <div className="score-range">{boundary.minScore}-{boundary.maxScore}%</div>
                      <div className="grade-point">GPA: {boundary.gradePoint}</div>
                      <div className="descriptor">{boundary.descriptor}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add New Scheme Modal */}
      {showAddScheme && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h3>Add New Grading Scheme</h3>
              <button className="close-btn" onClick={() => setShowAddScheme(false)}>✕</button>
            </div>
            <div className="modal-content">
              <div className="form-group">
                <label>Scheme Name</label>
                <input type="text" placeholder="Enter scheme name" />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea placeholder="Enter description"></textarea>
              </div>
              <div className="form-group">
                <label>Effective Date</label>
                <input type="date" />
              </div>
              <div className="form-group">
                <label>Copy from existing scheme</label>
                <select>
                  <option value="">Select a scheme to copy</option>
                  {mockGradingSchemes.map(scheme => (
                    <option key={scheme.id} value={scheme.id}>{scheme.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="modal-actions">
              <button className="save-btn">Create Scheme</button>
              <button className="cancel-btn" onClick={() => setShowAddScheme(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GradingScheme;
