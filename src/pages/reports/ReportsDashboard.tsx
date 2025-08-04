import React, { useState, useEffect } from 'react';
import './ReportsDashboard.css';

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: string;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  color: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, subtitle, icon, trend, color }) => (
  <div className="metric-card" style={{ borderLeft: `4px solid ${color}` }}>
    <div className="metric-header">
      <div className="metric-icon" style={{ backgroundColor: `${color}20` }}>
        {icon}
      </div>
      <div className="metric-content">
        <h3 className="metric-title">{title}</h3>
        <div className="metric-value">{value}</div>
        {subtitle && <div className="metric-subtitle">{subtitle}</div>}
        {trend && (
          <div className={`metric-trend ${trend.isPositive ? 'positive' : 'negative'}`}>
            {trend.isPositive ? '↗' : '↘'} {trend.value}
          </div>
        )}
      </div>
    </div>
  </div>
);

interface EnquiryItem {
  id: string;
  name: string;
  course: string;
  phone: string;
  time: string;
  status: 'new' | 'contacted' | 'follow-up';
}

interface TaskItem {
  id: string;
  title: string;
  type: 'admission' | 'fee' | 'document' | 'other';
  priority: 'high' | 'medium' | 'low';
  dueDate: string;
}

interface FeedbackItem {
  id: string;
  studentName: string;
  course: string;
  rating: number;
  comment: string;
  date: string;
}

const ReportsDashboard: React.FC = () => {
  const [currentDate] = useState(new Date());
  const [todayFeeCollection] = useState(45000);
  const [monthlyFeeCollection] = useState(1250000);
  const [activeStudents] = useState(342);
  
  // Mock data - in real app, this would come from API
  const [latestEnquiries] = useState<EnquiryItem[]>([
    { id: '1', name: 'Rahul Sharma', course: 'Web Development', phone: '+91 98765 43210', time: '2 hours ago', status: 'new' },
    { id: '2', name: 'Priya Singh', course: 'Data Science', phone: '+91 87654 32109', time: '4 hours ago', status: 'contacted' },
    { id: '3', name: 'Amit Kumar', course: 'Digital Marketing', phone: '+91 76543 21098', time: '6 hours ago', status: 'follow-up' },
    { id: '4', name: 'Sneha Patel', course: 'UI/UX Design', phone: '+91 65432 10987', time: '8 hours ago', status: 'new' },
  ]);

  const [pendingTasks] = useState<TaskItem[]>([
    { id: '1', title: 'Review admission documents for Batch-2024A', type: 'admission', priority: 'high', dueDate: 'Today' },
    { id: '2', title: 'Follow up on pending fee payments', type: 'fee', priority: 'high', dueDate: 'Tomorrow' },
    { id: '3', title: 'Update course material for Web Dev batch', type: 'other', priority: 'medium', dueDate: '2 days' },
    { id: '4', title: 'Verify student certificates', type: 'document', priority: 'low', dueDate: '3 days' },
  ]);

  const [recentFeedback] = useState<FeedbackItem[]>([
    { id: '1', studentName: 'Arjun Mehta', course: 'React Development', rating: 5, comment: 'Excellent teaching methodology and practical approach.', date: '1 day ago' },
    { id: '2', studentName: 'Kavya Reddy', course: 'Python Programming', rating: 4, comment: 'Good content but need more hands-on practice sessions.', date: '2 days ago' },
    { id: '3', studentName: 'Rohit Gupta', course: 'Digital Marketing', rating: 5, comment: 'Very satisfied with the course structure and faculty support.', date: '3 days ago' },
  ]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return '#ff6b6b';
      case 'contacted': return '#4ecdc4';
      case 'follow-up': return '#ffe66d';
      default: return '#95a5a6';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return '#e74c3c';
      case 'medium': return '#f39c12';
      case 'low': return '#27ae60';
      default: return '#95a5a6';
    }
  };

  const renderStars = (rating: number) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <div className="reports-dashboard">
      <div className="dashboard-header">
        <h1>Dashboard Overview</h1>
        <p>Key metrics and insights for {currentDate.toLocaleDateString('en-IN', { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })}</p>
      </div>

      {/* Key Metrics Cards */}
      <div className="metrics-grid">
        <MetricCard
          title="Active Students"
          value={activeStudents}
          subtitle="Currently enrolled"
          icon="👥"
          trend={{ value: "+12 this month", isPositive: true }}
          color="#3498db"
        />
        <MetricCard
          title="Today's Fee Collection"
          value={formatCurrency(todayFeeCollection)}
          subtitle="Collected today"
          icon="💰"
          trend={{ value: "+15% vs yesterday", isPositive: true }}
          color="#27ae60"
        />
        <MetricCard
          title="Monthly Fee Collection"
          value={formatCurrency(monthlyFeeCollection)}
          subtitle="This month's total"
          icon="📊"
          trend={{ value: "85% of target", isPositive: true }}
          color="#9b59b6"
        />
        <MetricCard
          title="New Enquiries"
          value={latestEnquiries.length}
          subtitle="Today"
          icon="📞"
          trend={{ value: "+3 vs yesterday", isPositive: true }}
          color="#e67e22"
        />
      </div>

      {/* Content Grid */}
      <div className="content-grid">
        {/* Latest Enquiries */}
        <div className="dashboard-section">
          <div className="section-header">
            <h2>Latest Enquiries</h2>
            <button className="view-all-btn">View All</button>
          </div>
          <div className="enquiries-list">
            {latestEnquiries.map((enquiry) => (
              <div key={enquiry.id} className="enquiry-item">
                <div className="enquiry-info">
                  <div className="enquiry-name">{enquiry.name}</div>
                  <div className="enquiry-course">{enquiry.course}</div>
                  <div className="enquiry-phone">{enquiry.phone}</div>
                </div>
                <div className="enquiry-meta">
                  <div className="enquiry-time">{enquiry.time}</div>
                  <span 
                    className="enquiry-status" 
                    style={{ backgroundColor: getStatusColor(enquiry.status) }}
                  >
                    {enquiry.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pending Tasks */}
        <div className="dashboard-section">
          <div className="section-header">
            <h2>Pending Tasks</h2>
            <button className="view-all-btn">View All</button>
          </div>
          <div className="tasks-list">
            {pendingTasks.map((task) => (
              <div key={task.id} className="task-item">
                <div className="task-info">
                  <div className="task-title">{task.title}</div>
                  <div className="task-meta">
                    <span className="task-type">{task.type}</span>
                    <span className="task-due">Due: {task.dueDate}</span>
                  </div>
                </div>
                <span 
                  className="task-priority" 
                  style={{ backgroundColor: getPriorityColor(task.priority) }}
                >
                  {task.priority}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Feedback */}
        <div className="dashboard-section full-width">
          <div className="section-header">
            <h2>Recent Feedback</h2>
            <button className="view-all-btn">View All</button>
          </div>
          <div className="feedback-list">
            {recentFeedback.map((feedback) => (
              <div key={feedback.id} className="feedback-item">
                <div className="feedback-header">
                  <div className="feedback-student">
                    <div className="student-name">{feedback.studentName}</div>
                    <div className="student-course">{feedback.course}</div>
                  </div>
                  <div className="feedback-rating">
                    <div className="stars">{renderStars(feedback.rating)}</div>
                    <div className="feedback-date">{feedback.date}</div>
                  </div>
                </div>
                <div className="feedback-comment">{feedback.comment}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsDashboard;
