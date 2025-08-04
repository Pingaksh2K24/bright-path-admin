import React, { useState } from 'react';
import './AtRiskStudents.css';

interface RiskFactor {
  type: 'attendance' | 'academic' | 'financial' | 'behavioral';
  severity: 'high' | 'medium' | 'low';
  description: string;
  value: string;
}

interface AtRiskStudent {
  id: string;
  name: string;
  rollNumber: string;
  class: string;
  batch: string;
  overallRiskScore: number;
  riskLevel: 'critical' | 'high' | 'medium' | 'low';
  riskFactors: RiskFactor[];
  attendancePercentage: number;
  academicAverage: number;
  outstandingFees: number;
  lastActivity: string;
  recommendedInterventions: string[];
  assignedMentor?: string;
  parentContactDate?: string;
}

interface InterventionAction {
  type: 'mentor-assignment' | 'parent-meeting' | 'counseling' | 'academic-support' | 'financial-assistance';
  title: string;
  description: string;
  urgency: 'immediate' | 'within-week' | 'within-month';
  estimatedTime: string;
}

const AtRiskStudents: React.FC = () => {
  const [selectedRiskCategory, setSelectedRiskCategory] = useState('all');
  const [selectedClass, setSelectedClass] = useState('all');
  const [selectedBatch, setSelectedBatch] = useState('all');
  const [selectedRiskLevel, setSelectedRiskLevel] = useState('all');

  // Mock data - in real app, this would come from API
  const [atRiskStudents] = useState<AtRiskStudent[]>([
    {
      id: '1',
      name: 'Rahul Sharma',
      rollNumber: 'WD025',
      class: 'Web Development',
      batch: 'WD-2024A',
      overallRiskScore: 85,
      riskLevel: 'critical',
      riskFactors: [
        { type: 'attendance', severity: 'high', description: 'Low attendance', value: '58%' },
        { type: 'academic', severity: 'high', description: 'Failing multiple subjects', value: '38% avg' },
        { type: 'financial', severity: 'medium', description: 'Outstanding fees', value: '₹15,000' }
      ],
      attendancePercentage: 58.2,
      academicAverage: 38.5,
      outstandingFees: 15000,
      lastActivity: '2024-07-20',
      recommendedInterventions: ['Assign mentor', 'Parent meeting', 'Academic counseling'],
      assignedMentor: undefined,
      parentContactDate: undefined
    },
    {
      id: '2',
      name: 'Priya Singh',
      rollNumber: 'DS012',
      class: 'Data Science',
      batch: 'DS-2024A',
      overallRiskScore: 72,
      riskLevel: 'high',
      riskFactors: [
        { type: 'academic', severity: 'high', description: 'Consistently low scores', value: '42% avg' },
        { type: 'attendance', severity: 'medium', description: 'Below average attendance', value: '68%' },
        { type: 'behavioral', severity: 'low', description: 'Low engagement', value: 'Minimal participation' }
      ],
      attendancePercentage: 68.1,
      academicAverage: 42.3,
      outstandingFees: 0,
      lastActivity: '2024-07-25',
      recommendedInterventions: ['Academic support', 'Peer mentoring', 'Study group'],
      assignedMentor: 'Dr. Meera Shah',
      parentContactDate: '2024-07-22'
    },
    {
      id: '3',
      name: 'Vikram Joshi',
      rollNumber: 'DM018',
      class: 'Digital Marketing',
      batch: 'DM-2024A',
      overallRiskScore: 65,
      riskLevel: 'high',
      riskFactors: [
        { type: 'financial', severity: 'high', description: 'Outstanding fees', value: '₹25,000' },
        { type: 'attendance', severity: 'medium', description: 'Irregular attendance', value: '71%' },
        { type: 'academic', severity: 'low', description: 'Average performance', value: '58% avg' }
      ],
      attendancePercentage: 71.4,
      academicAverage: 58.7,
      outstandingFees: 25000,
      lastActivity: '2024-07-28',
      recommendedInterventions: ['Financial counseling', 'Payment plan', 'Scholarship evaluation'],
      assignedMentor: 'Mr. Arjun Patel',
      parentContactDate: '2024-07-18'
    },
    {
      id: '4',
      name: 'Anjali Gupta',
      rollNumber: 'UX009',
      class: 'UI/UX Design',
      batch: 'UX-2024A',
      overallRiskScore: 58,
      riskLevel: 'medium',
      riskFactors: [
        { type: 'academic', severity: 'medium', description: 'Struggling with concepts', value: '52% avg' },
        { type: 'behavioral', severity: 'medium', description: 'Low confidence', value: 'Needs encouragement' }
      ],
      attendancePercentage: 78.9,
      academicAverage: 52.1,
      outstandingFees: 0,
      lastActivity: '2024-07-30',
      recommendedInterventions: ['Confidence building', 'Extra tutoring', 'Skill development'],
      assignedMentor: 'Ms. Kavya Reddy',
      parentContactDate: '2024-07-26'
    },
    {
      id: '5',
      name: 'Rohit Gupta',
      rollNumber: 'PY015',
      class: 'Python Programming',
      batch: 'PY-2024A',
      overallRiskScore: 78,
      riskLevel: 'high',
      riskFactors: [
        { type: 'attendance', severity: 'high', description: 'Very low attendance', value: '45%' },
        { type: 'academic', severity: 'medium', description: 'Missing assignments', value: '48% avg' },
        { type: 'behavioral', severity: 'high', description: 'Disengaged', value: 'No participation' }
      ],
      attendancePercentage: 45.3,
      academicAverage: 48.2,
      outstandingFees: 8000,
      lastActivity: '2024-07-15',
      recommendedInterventions: ['Immediate intervention', 'Parent meeting', 'Counseling'],
      assignedMentor: undefined,
      parentContactDate: undefined
    }
  ]);

  const [interventionActions] = useState<InterventionAction[]>([
    {
      type: 'mentor-assignment',
      title: 'Assign Academic Mentor',
      description: 'Pair student with experienced faculty member for personalized guidance',
      urgency: 'within-week',
      estimatedTime: '30 mins setup + ongoing'
    },
    {
      type: 'parent-meeting',
      title: 'Schedule Parent Meeting',
      description: 'Discuss student progress and concerns with parents/guardians',
      urgency: 'immediate',
      estimatedTime: '45-60 mins'
    },
    {
      type: 'counseling',
      title: 'Academic Counseling',
      description: 'Professional counseling to address academic and personal challenges',
      urgency: 'within-week',
      estimatedTime: '60 mins'
    },
    {
      type: 'academic-support',
      title: 'Extra Academic Support',
      description: 'Additional tutoring sessions and study materials',
      urgency: 'within-week',
      estimatedTime: '2-3 hours/week'
    },
    {
      type: 'financial-assistance',
      title: 'Financial Assistance Review',
      description: 'Evaluate eligibility for scholarships or payment plans',
      urgency: 'within-month',
      estimatedTime: '30-45 mins'
    }
  ]);

  const criticalCount = atRiskStudents.filter(s => s.riskLevel === 'critical').length;
  const highRiskCount = atRiskStudents.filter(s => s.riskLevel === 'high').length;
  const mediumRiskCount = atRiskStudents.filter(s => s.riskLevel === 'medium').length;
  const totalAtRisk = atRiskStudents.length;

  const getRiskColor = (riskLevel: string) => {
    switch (riskLevel) {
      case 'critical': return '#c0392b';
      case 'high': return '#e74c3c';
      case 'medium': return '#f39c12';
      case 'low': return '#2ecc71';
      default: return '#95a5a6';
    }
  };

  const getRiskFactorColor = (type: string) => {
    switch (type) {
      case 'attendance': return '#e74c3c';
      case 'academic': return '#f39c12';
      case 'financial': return '#9b59b6';
      case 'behavioral': return '#34495e';
      default: return '#95a5a6';
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'immediate': return '#e74c3c';
      case 'within-week': return '#f39c12';
      case 'within-month': return '#3498db';
      default: return '#95a5a6';
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const filteredStudents = atRiskStudents.filter(student => {
    if (selectedRiskCategory !== 'all') {
      const hasRiskCategory = student.riskFactors.some(factor => factor.type === selectedRiskCategory);
      if (!hasRiskCategory) return false;
    }
    if (selectedClass !== 'all' && !student.class.toLowerCase().includes(selectedClass)) return false;
    if (selectedBatch !== 'all' && !student.batch.toLowerCase().includes(selectedBatch)) return false;
    if (selectedRiskLevel !== 'all' && student.riskLevel !== selectedRiskLevel) return false;
    return true;
  });

  return (
    <div className="at-risk-students">
      <div className="page-header">
        <h1>At-Risk Students</h1>
        <p>Early warning system for student dropout and failure prevention</p>
      </div>

      {/* Filters */}
      <div className="filters-section">
        <div className="filters-grid">
          <div className="filter-group">
            <label>Risk Category</label>
            <select value={selectedRiskCategory} onChange={(e) => setSelectedRiskCategory(e.target.value)}>
              <option value="all">All Categories</option>
              <option value="attendance">Attendance Risk</option>
              <option value="academic">Academic Risk</option>
              <option value="financial">Financial Risk</option>
              <option value="behavioral">Behavioral Risk</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Class</label>
            <select value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)}>
              <option value="all">All Classes</option>
              <option value="web">Web Development</option>
              <option value="data">Data Science</option>
              <option value="digital">Digital Marketing</option>
              <option value="ui">UI/UX Design</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Batch</label>
            <select value={selectedBatch} onChange={(e) => setSelectedBatch(e.target.value)}>
              <option value="all">All Batches</option>
              <option value="2024a">2024-A</option>
              <option value="2024b">2024-B</option>
              <option value="2024c">2024-C</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Risk Level</label>
            <select value={selectedRiskLevel} onChange={(e) => setSelectedRiskLevel(e.target.value)}>
              <option value="all">All Levels</option>
              <option value="critical">Critical</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="summary-cards">
        <div className="summary-card">
          <div className="card-icon" style={{ backgroundColor: '#c0392b20' }}>🚨</div>
          <div className="card-content">
            <h3>Critical Risk</h3>
            <div className="card-value">{criticalCount}</div>
            <div className="card-subtitle">Immediate attention needed</div>
          </div>
        </div>
        <div className="summary-card">
          <div className="card-icon" style={{ backgroundColor: '#e74c3c20' }}>⚠️</div>
          <div className="card-content">
            <h3>High Risk</h3>
            <div className="card-value">{highRiskCount}</div>
            <div className="card-subtitle">Intervention required</div>
          </div>
        </div>
        <div className="summary-card">
          <div className="card-icon" style={{ backgroundColor: '#f39c1220' }}>⚡</div>
          <div className="card-content">
            <h3>Medium Risk</h3>
            <div className="card-value">{mediumRiskCount}</div>
            <div className="card-subtitle">Monitor closely</div>
          </div>
        </div>
        <div className="summary-card">
          <div className="card-icon" style={{ backgroundColor: '#34495e20' }}>📊</div>
          <div className="card-content">
            <h3>Total At-Risk</h3>
            <div className="card-value">{totalAtRisk}</div>
            <div className="card-subtitle">Students requiring support</div>
          </div>
        </div>
      </div>

      <div className="content-grid">
        {/* At-Risk Students Table */}
        <div className="table-section full-width">
          <div className="section-header">
            <h2>At-Risk Students List</h2>
            <div className="header-actions">
              <button className="export-btn">Export Report</button>
              <button className="action-btn primary">Bulk Actions</button>
            </div>
          </div>
          <div className="risk-table">
            <table>
              <thead>
                <tr>
                  <th>Student</th>
                  <th>Risk Score</th>
                  <th>Risk Factors</th>
                  <th>Academic Performance</th>
                  <th>Attendance</th>
                  <th>Outstanding Fees</th>
                  <th>Mentor Assigned</th>
                  <th>Last Contact</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((student) => (
                  <tr key={student.id}>
                    <td>
                      <div className="student-info">
                        <div className="student-name">{student.name}</div>
                        <div className="student-details">
                          <span className="roll-number">{student.rollNumber}</span>
                          <span className="class-batch">{student.class} - {student.batch}</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="risk-score">
                        <div 
                          className="risk-circle"
                          style={{ backgroundColor: getRiskColor(student.riskLevel) }}
                        >
                          {student.overallRiskScore}
                        </div>
                        <span 
                          className="risk-level"
                          style={{ color: getRiskColor(student.riskLevel) }}
                        >
                          {student.riskLevel}
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="risk-factors">
                        {student.riskFactors.map((factor, index) => (
                          <div key={index} className="risk-factor">
                            <span 
                              className="factor-badge"
                              style={{ 
                                backgroundColor: `${getRiskFactorColor(factor.type)}20`,
                                color: getRiskFactorColor(factor.type)
                              }}
                            >
                              {factor.type}
                            </span>
                            <span className="factor-value">{factor.value}</span>
                          </div>
                        ))}
                      </div>
                    </td>
                    <td>
                      <div className="performance-cell">
                        <span 
                          className="performance-value"
                          style={{ color: student.academicAverage < 50 ? '#e74c3c' : '#f39c12' }}
                        >
                          {student.academicAverage.toFixed(1)}%
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="attendance-cell">
                        <span 
                          className="attendance-value"
                          style={{ color: student.attendancePercentage < 60 ? '#e74c3c' : student.attendancePercentage < 75 ? '#f39c12' : '#2ecc71' }}
                        >
                          {student.attendancePercentage.toFixed(1)}%
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="fees-cell">
                        {student.outstandingFees > 0 ? (
                          <span className="outstanding-fees">
                            {formatCurrency(student.outstandingFees)}
                          </span>
                        ) : (
                          <span className="no-dues">No dues</span>
                        )}
                      </div>
                    </td>
                    <td>
                      <div className="mentor-cell">
                        {student.assignedMentor ? (
                          <span className="mentor-assigned">{student.assignedMentor}</span>
                        ) : (
                          <span className="no-mentor">Not assigned</span>
                        )}
                      </div>
                    </td>
                    <td>
                      <div className="contact-cell">
                        {student.parentContactDate ? (
                          <span className="contact-date">
                            {new Date(student.parentContactDate).toLocaleDateString()}
                          </span>
                        ) : (
                          <span className="no-contact">No contact</span>
                        )}
                      </div>
                    </td>
                    <td>
                      <div className="action-buttons">
                        <button className="action-btn small">Intervene</button>
                        <button className="action-btn small secondary">Contact</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recommended Interventions */}
        <div className="interventions-section">
          <div className="section-header">
            <h2>Recommended Interventions</h2>
            <span className="subtitle">Action plans for at-risk students</span>
          </div>
          <div className="interventions-list">
            {interventionActions.map((intervention, index) => (
              <div key={index} className="intervention-card">
                <div className="intervention-header">
                  <div className="intervention-title">
                    <h4>{intervention.title}</h4>
                    <span 
                      className="urgency-badge"
                      style={{ backgroundColor: getUrgencyColor(intervention.urgency) }}
                    >
                      {intervention.urgency.replace('-', ' ')}
                    </span>
                  </div>
                  <div className="intervention-time">
                    {intervention.estimatedTime}
                  </div>
                </div>
                <div className="intervention-description">
                  {intervention.description}
                </div>
                <div className="intervention-actions">
                  <button className="action-btn small">Apply to Selected</button>
                  <button className="action-btn small secondary">Schedule</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Risk Distribution Chart */}
        <div className="chart-section">
          <div className="section-header">
            <h2>Risk Distribution</h2>
            <span className="subtitle">By category and severity</span>
          </div>
          <div className="risk-distribution">
            <div className="distribution-chart">
              <div className="chart-item">
                <div className="chart-bar">
                  <div 
                    className="bar-fill critical" 
                    style={{ height: `${(criticalCount / totalAtRisk) * 100}%` }}
                  ></div>
                </div>
                <div className="chart-label">
                  <span className="label-text">Critical</span>
                  <span className="label-count">{criticalCount}</span>
                </div>
              </div>
              <div className="chart-item">
                <div className="chart-bar">
                  <div 
                    className="bar-fill high" 
                    style={{ height: `${(highRiskCount / totalAtRisk) * 100}%` }}
                  ></div>
                </div>
                <div className="chart-label">
                  <span className="label-text">High</span>
                  <span className="label-count">{highRiskCount}</span>
                </div>
              </div>
              <div className="chart-item">
                <div className="chart-bar">
                  <div 
                    className="bar-fill medium" 
                    style={{ height: `${(mediumRiskCount / totalAtRisk) * 100}%` }}
                  ></div>
                </div>
                <div className="chart-label">
                  <span className="label-text">Medium</span>
                  <span className="label-count">{mediumRiskCount}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AtRiskStudents;
