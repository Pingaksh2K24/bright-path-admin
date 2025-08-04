import React, { useState } from 'react';
import './StudentEngagement.css';

interface ActivityParticipation {
  activityType: string;
  totalActivities: number;
  participatedActivities: number;
  participationRate: number;
  averageScore: number;
}

interface HomeworkSubmission {
  subject: string;
  totalAssignments: number;
  submittedAssignments: number;
  submissionRate: number;
  averageGrade: string;
  onTimeSubmissions: number;
}

interface InteractionLog {
  type: 'doubt-clearing' | 'ptm' | 'extra-class' | 'counseling';
  activity: string;
  date: string;
  duration: string;
  status: 'attended' | 'missed' | 'partial';
}

interface TeacherFeedback {
  teacherName: string;
  subject: string;
  engagementRating: number;
  participationScore: number;
  attentiveness: number;
  collaboration: number;
  comments: string;
  date: string;
}

interface CommunicationResponse {
  channel: 'sms' | 'email' | 'app-notification';
  totalSent: number;
  opened: number;
  responded: number;
  openRate: number;
  responseRate: number;
}

const StudentEngagement: React.FC = () => {
  const [selectedClass, setSelectedClass] = useState('all');
  const [selectedActivityType, setSelectedActivityType] = useState('all');
  const [selectedEngagementType, setSelectedEngagementType] = useState('all');

  // Mock data - in real app, this would come from API
  const [activityParticipation] = useState<ActivityParticipation[]>([
    { activityType: 'Quiz', totalActivities: 15, participatedActivities: 12, participationRate: 80.0, averageScore: 78.5 },
    { activityType: 'Assignments', totalActivities: 8, participatedActivities: 7, participationRate: 87.5, averageScore: 82.3 },
    { activityType: 'Projects', totalActivities: 3, participatedActivities: 3, participationRate: 100.0, averageScore: 85.7 },
    { activityType: 'Discussions', totalActivities: 20, participatedActivities: 16, participationRate: 80.0, averageScore: 76.2 },
    { activityType: 'Presentations', totalActivities: 4, participatedActivities: 3, participationRate: 75.0, averageScore: 88.9 },
  ]);

  const [homeworkSubmissions] = useState<HomeworkSubmission[]>([
    { subject: 'React Development', totalAssignments: 12, submittedAssignments: 11, submissionRate: 91.7, averageGrade: 'A-', onTimeSubmissions: 9 },
    { subject: 'JavaScript Fundamentals', totalAssignments: 10, submittedAssignments: 8, submissionRate: 80.0, averageGrade: 'B+', onTimeSubmissions: 6 },
    { subject: 'HTML/CSS', totalAssignments: 8, submittedAssignments: 8, submissionRate: 100.0, averageGrade: 'A', onTimeSubmissions: 7 },
    { subject: 'Node.js Backend', totalAssignments: 6, submittedAssignments: 5, submissionRate: 83.3, averageGrade: 'B', onTimeSubmissions: 4 },
    { subject: 'Database Management', totalAssignments: 7, submittedAssignments: 6, submissionRate: 85.7, averageGrade: 'B+', onTimeSubmissions: 5 },
  ]);

  const [interactionLogs] = useState<InteractionLog[]>([
    { type: 'doubt-clearing', activity: 'React Hooks Session', date: '2024-07-30', duration: '45 mins', status: 'attended' },
    { type: 'ptm', activity: 'Parent-Teacher Meeting', date: '2024-07-25', duration: '30 mins', status: 'attended' },
    { type: 'extra-class', activity: 'JavaScript Advanced Topics', date: '2024-07-28', duration: '60 mins', status: 'attended' },
    { type: 'doubt-clearing', activity: 'Database Queries Help', date: '2024-07-22', duration: '30 mins', status: 'missed' },
    { type: 'counseling', activity: 'Career Guidance Session', date: '2024-07-20', duration: '40 mins', status: 'attended' },
  ]);

  const [teacherFeedback] = useState<TeacherFeedback[]>([
    { teacherName: 'Dr. Rajesh Kumar', subject: 'React Development', engagementRating: 4.5, participationScore: 4.2, attentiveness: 4.0, collaboration: 4.8, comments: 'Excellent participation in group projects and always asks thoughtful questions.', date: '2024-07-28' },
    { teacherName: 'Prof. Meera Shah', subject: 'JavaScript Fundamentals', engagementRating: 3.8, participationScore: 3.5, attentiveness: 4.2, collaboration: 3.9, comments: 'Good understanding but could be more active in class discussions.', date: '2024-07-26' },
    { teacherName: 'Mr. Arjun Patel', subject: 'Database Management', engagementRating: 4.0, participationScore: 4.1, attentiveness: 3.8, collaboration: 4.3, comments: 'Shows great interest in complex topics and helps fellow students.', date: '2024-07-24' },
  ]);

  const [communicationResponse] = useState<CommunicationResponse[]>([
    { channel: 'sms', totalSent: 25, opened: 22, responded: 18, openRate: 88.0, responseRate: 72.0 },
    { channel: 'email', totalSent: 15, opened: 12, responded: 8, openRate: 80.0, responseRate: 53.3 },
    { channel: 'app-notification', totalSent: 30, opened: 28, responded: 25, openRate: 93.3, responseRate: 83.3 },
  ]);

  const overallParticipationRate = activityParticipation.reduce((sum, activity) => sum + activity.participationRate, 0) / activityParticipation.length;
  const overallSubmissionRate = homeworkSubmissions.reduce((sum, homework) => sum + homework.submissionRate, 0) / homeworkSubmissions.length;
  const averageEngagementRating = teacherFeedback.reduce((sum, feedback) => sum + feedback.engagementRating, 0) / teacherFeedback.length;
  const overallCommunicationResponse = communicationResponse.reduce((sum, comm) => sum + comm.responseRate, 0) / communicationResponse.length;

  const getEngagementColor = (rating: number) => {
    if (rating >= 4.5) return '#2ecc71';
    if (rating >= 4.0) return '#3498db';
    if (rating >= 3.5) return '#f39c12';
    if (rating >= 3.0) return '#e67e22';
    return '#e74c3c';
  };

  const getSubmissionColor = (rate: number) => {
    if (rate >= 90) return '#2ecc71';
    if (rate >= 80) return '#3498db';
    if (rate >= 70) return '#f39c12';
    if (rate >= 60) return '#e67e22';
    return '#e74c3c';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'attended': return '#2ecc71';
      case 'partial': return '#f39c12';
      case 'missed': return '#e74c3c';
      default: return '#95a5a6';
    }
  };

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'A': return '#2ecc71';
      case 'A-': return '#27ae60';
      case 'B+': return '#3498db';
      case 'B': return '#f39c12';
      case 'B-': return '#e67e22';
      default: return '#95a5a6';
    }
  };

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    return (
      <span className="stars">
        {'★'.repeat(fullStars)}
        {hasHalfStar && '☆'}
        {'☆'.repeat(emptyStars)}
      </span>
    );
  };

  return (
    <div className="student-engagement">
      <div className="page-header">
        <h1>Student Engagement</h1>
        <p>Measure classroom and co-curricular engagement levels</p>
      </div>

      {/* Filters */}
      <div className="filters-section">
        <div className="filters-grid">
          <div className="filter-group">
            <label>Class</label>
            <select value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)}>
              <option value="all">All Classes</option>
              <option value="web-dev">Web Development</option>
              <option value="data-science">Data Science</option>
              <option value="digital-marketing">Digital Marketing</option>
              <option value="ui-ux">UI/UX Design</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Activity Type</label>
            <select value={selectedActivityType} onChange={(e) => setSelectedActivityType(e.target.value)}>
              <option value="all">All Activities</option>
              <option value="quiz">Quiz</option>
              <option value="assignment">Assignment</option>
              <option value="project">Project</option>
              <option value="discussion">Discussion</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Engagement Type</label>
            <select value={selectedEngagementType} onChange={(e) => setSelectedEngagementType(e.target.value)}>
              <option value="all">All Types</option>
              <option value="academic">Academic</option>
              <option value="co-curricular">Co-curricular</option>
              <option value="communication">Communication</option>
            </select>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="summary-cards">
        <div className="summary-card">
          <div className="card-icon" style={{ backgroundColor: '#3498db20' }}>🎤</div>
          <div className="card-content">
            <h3>Activity Participation</h3>
            <div className="card-value">{overallParticipationRate.toFixed(1)}%</div>
            <div className="card-subtitle">Average participation rate</div>
          </div>
        </div>
        <div className="summary-card">
          <div className="card-icon" style={{ backgroundColor: '#2ecc7120' }}>📚</div>
          <div className="card-content">
            <h3>Homework Submission</h3>
            <div className="card-value">{overallSubmissionRate.toFixed(1)}%</div>
            <div className="card-subtitle">Assignment completion</div>
          </div>
        </div>
        <div className="summary-card">
          <div className="card-icon" style={{ backgroundColor: '#f39c1220' }}>⭐</div>
          <div className="card-content">
            <h3>Teacher Rating</h3>
            <div className="card-value">{averageEngagementRating.toFixed(1)}/5</div>
            <div className="card-subtitle">Engagement score</div>
          </div>
        </div>
        <div className="summary-card">
          <div className="card-icon" style={{ backgroundColor: '#9b59b620' }}>🔔</div>
          <div className="card-content">
            <h3>Communication Response</h3>
            <div className="card-value">{overallCommunicationResponse.toFixed(1)}%</div>
            <div className="card-subtitle">Response rate</div>
          </div>
        </div>
      </div>

      <div className="content-grid">
        {/* Activity Participation Chart */}
        <div className="chart-section">
          <div className="section-header">
            <h2>Activity Participation</h2>
            <span className="subtitle">Quiz, Assignments, Projects, Discussions</span>
          </div>
          <div className="participation-chart">
            {activityParticipation.map((activity, index) => (
              <div key={index} className="activity-bar">
                <div className="activity-info">
                  <div className="activity-name">{activity.activityType}</div>
                  <div className="activity-stats">
                    {activity.participatedActivities}/{activity.totalActivities}
                  </div>
                </div>
                <div className="progress-container">
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ 
                        width: `${activity.participationRate}%`,
                        backgroundColor: getSubmissionColor(activity.participationRate)
                      }}
                    ></div>
                  </div>
                  <div className="progress-text">
                    <span className="rate">{activity.participationRate.toFixed(1)}%</span>
                    <span className="score">Avg: {activity.averageScore.toFixed(1)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Homework Submission Table */}
        <div className="table-section">
          <div className="section-header">
            <h2>Homework & Assignment Submission</h2>
            <button className="export-btn">Export Data</button>
          </div>
          <div className="homework-table">
            <table>
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Submitted</th>
                  <th>Rate</th>
                  <th>Avg Grade</th>
                  <th>On Time</th>
                </tr>
              </thead>
              <tbody>
                {homeworkSubmissions.map((homework, index) => (
                  <tr key={index}>
                    <td>
                      <div className="subject-name">{homework.subject}</div>
                    </td>
                    <td>
                      <div className="submission-count">
                        {homework.submittedAssignments}/{homework.totalAssignments}
                      </div>
                    </td>
                    <td>
                      <div className="rate-cell">
                        <div 
                          className="rate-bar" 
                          style={{ 
                            width: `${homework.submissionRate}%`,
                            backgroundColor: getSubmissionColor(homework.submissionRate)
                          }}
                        ></div>
                        <span className="rate-text">{homework.submissionRate.toFixed(1)}%</span>
                      </div>
                    </td>
                    <td>
                      <span 
                        className="grade-badge"
                        style={{ 
                          backgroundColor: `${getGradeColor(homework.averageGrade)}20`,
                          color: getGradeColor(homework.averageGrade)
                        }}
                      >
                        {homework.averageGrade}
                      </span>
                    </td>
                    <td>
                      <div className="ontime-count">
                        {homework.onTimeSubmissions}/{homework.submittedAssignments}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Interaction Logs */}
        <div className="table-section">
          <div className="section-header">
            <h2>Interaction Logs</h2>
            <span className="subtitle">Doubt-clearing, PTM, Extra Classes</span>
          </div>
          <div className="interaction-list">
            {interactionLogs.map((log, index) => (
              <div key={index} className="interaction-item">
                <div className="interaction-info">
                  <div className="interaction-header">
                    <span className="interaction-type">{log.type.replace('-', ' ')}</span>
                    <span 
                      className="status-badge"
                      style={{ backgroundColor: getStatusColor(log.status) }}
                    >
                      {log.status}
                    </span>
                  </div>
                  <div className="interaction-activity">{log.activity}</div>
                  <div className="interaction-meta">
                    <span className="date">{new Date(log.date).toLocaleDateString()}</span>
                    <span className="duration">{log.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Teacher Feedback */}
        <div className="table-section">
          <div className="section-header">
            <h2>Teacher Feedback & Ratings</h2>
            <button className="export-btn">Export Feedback</button>
          </div>
          <div className="feedback-list">
            {teacherFeedback.map((feedback, index) => (
              <div key={index} className="feedback-item">
                <div className="feedback-header">
                  <div className="teacher-info">
                    <div className="teacher-name">{feedback.teacherName}</div>
                    <div className="subject-name">{feedback.subject}</div>
                  </div>
                  <div className="feedback-date">
                    {new Date(feedback.date).toLocaleDateString()}
                  </div>
                </div>
                <div className="ratings-grid">
                  <div className="rating-item">
                    <span className="rating-label">Engagement</span>
                    <div className="rating-value">
                      {renderStars(feedback.engagementRating)}
                      <span className="rating-number">{feedback.engagementRating}</span>
                    </div>
                  </div>
                  <div className="rating-item">
                    <span className="rating-label">Participation</span>
                    <div className="rating-value">
                      {renderStars(feedback.participationScore)}
                      <span className="rating-number">{feedback.participationScore}</span>
                    </div>
                  </div>
                  <div className="rating-item">
                    <span className="rating-label">Attentiveness</span>
                    <div className="rating-value">
                      {renderStars(feedback.attentiveness)}
                      <span className="rating-number">{feedback.attentiveness}</span>
                    </div>
                  </div>
                  <div className="rating-item">
                    <span className="rating-label">Collaboration</span>
                    <div className="rating-value">
                      {renderStars(feedback.collaboration)}
                      <span className="rating-number">{feedback.collaboration}</span>
                    </div>
                  </div>
                </div>
                <div className="feedback-comments">
                  <strong>Comments:</strong> {feedback.comments}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Communication Response */}
        <div className="chart-section full-width">
          <div className="section-header">
            <h2>Communication Response Rates</h2>
            <span className="subtitle">SMS, Email, App Notifications</span>
          </div>
          <div className="communication-chart">
            {communicationResponse.map((comm, index) => (
              <div key={index} className="communication-item">
                <div className="comm-header">
                  <div className="comm-channel">
                    <span className="channel-icon">
                      {comm.channel === 'sms' && '📱'}
                      {comm.channel === 'email' && '📧'}
                      {comm.channel === 'app-notification' && '🔔'}
                    </span>
                    <span className="channel-name">{comm.channel.replace('-', ' ')}</span>
                  </div>
                  <div className="comm-stats">
                    <span className="total-sent">Sent: {comm.totalSent}</span>
                  </div>
                </div>
                <div className="comm-metrics">
                  <div className="metric">
                    <div className="metric-label">Open Rate</div>
                    <div className="metric-bar">
                      <div 
                        className="metric-fill" 
                        style={{ 
                          width: `${comm.openRate}%`,
                          backgroundColor: '#3498db'
                        }}
                      ></div>
                    </div>
                    <div className="metric-value">{comm.openRate.toFixed(1)}%</div>
                  </div>
                  <div className="metric">
                    <div className="metric-label">Response Rate</div>
                    <div className="metric-bar">
                      <div 
                        className="metric-fill" 
                        style={{ 
                          width: `${comm.responseRate}%`,
                          backgroundColor: '#2ecc71'
                        }}
                      ></div>
                    </div>
                    <div className="metric-value">{comm.responseRate.toFixed(1)}%</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentEngagement;
