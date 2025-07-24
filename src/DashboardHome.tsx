import React from 'react';

const stats = [
  { label: 'Total Students', value: 120 },
  { label: 'Courses Offered', value: '08' },
  { label: 'Tests Conducted', value: 25 },
  { label: 'Enquiries', value: 10 },
];

const students = [
  { name: 'John Doe', class: '12', course: 'JEE', status: 'Active' },
  { name: 'Jane Smith', class: '12', course: 'JEE', status: 'Inactive' },
  { name: 'Alex Johnson', class: '12', course: 'JEE', status: 'Active' },
  { name: 'Emily Brown', class: '12', course: 'JEE', status: 'Active' },
];

const notifications = [
  'New enquiry received',
  'Test results published',
  'Fee payment pending',
  'New course added',
];

const feeStatus = {
  paid: 95,
  pending: 25,
};

const enquiryStats = {
  newEnquiries: 18,
  newAdmissions: 7,
  conversionRate: '39%',
};

const upcomingEvents = [
  { date: '2024-06-10', event: 'Math Test for Class 12' },
  { date: '2024-06-12', event: 'Parent-Teacher Meeting' },
  { date: '2024-06-15', event: 'Fee Payment Deadline' },
  { date: '2024-06-20', event: 'Science Quiz' },
];

const DashboardHome: React.FC = () => {
  return (
    <>
      <div className="dashboard-stats">
        {stats.map((stat, i) => (
          <div className="dashboard-stat-card" key={i}>
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
      {/* Fee Status, Upcoming Events, and Enquiry/Admission Stats Row */}
      <div className="dashboard-row dashboard-stats-row">
        <div className="dashboard-fee-section">
          <h2 className="dashboard-section-title">Fee Status</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center', justifyContent: 'center', marginTop: 12 }}>
            <div style={{ background: '#e0ffe0', borderRadius: 8, padding: '16px 24px', minWidth: 100, textAlign: 'center', width: '100%', maxWidth: 180 }}>
              <div style={{ fontSize: 22, fontWeight: 700, color: '#0A2B73' }}>{feeStatus.paid}</div>
              <div style={{ color: '#228B22', fontWeight: 600 }}>Paid</div>
            </div>
            <div style={{ background: '#fff0e0', borderRadius: 8, padding: '16px 24px', minWidth: 100, textAlign: 'center', width: '100%', maxWidth: 180 }}>
              <div style={{ fontSize: 22, fontWeight: 700, color: '#0A2B73' }}>{feeStatus.pending}</div>
              <div style={{ color: '#D2691E', fontWeight: 600 }}>Pending</div>
            </div>
          </div>
        </div>
        <div className="dashboard-events-section">
          <h2 className="dashboard-section-title">Upcoming Events / Reminders</h2>
          <ul className="dashboard-events-list">
            {upcomingEvents.map((e, i) => (
              <li key={i} style={{ marginBottom: 10 }}>
                <span style={{ fontWeight: 600, color: '#0A2B73' }}>{e.date}:</span> {e.event}
              </li>
            ))}
          </ul>
        </div>
        <div className="dashboard-enquiry-section">
          <h2 className="dashboard-section-title">Enquiry / Admission Stats</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 12 }}>
            <div style={{ background: '#e0f0ff', borderRadius: 8, padding: '10px 18px', minWidth: 120, textAlign: 'center' }}>
              <div style={{ fontSize: 18, fontWeight: 700, color: '#0A2B73' }}>{enquiryStats.newEnquiries}</div>
              <div style={{ color: '#0074D9', fontWeight: 600 }}>New Enquiries</div>
            </div>
            <div style={{ background: '#e0ffe0', borderRadius: 8, padding: '10px 18px', minWidth: 120, textAlign: 'center' }}>
              <div style={{ fontSize: 18, fontWeight: 700, color: '#0A2B73' }}>{enquiryStats.newAdmissions}</div>
              <div style={{ color: '#228B22', fontWeight: 600 }}>New Admissions</div>
            </div>
            <div style={{ background: '#fffbe0', borderRadius: 8, padding: '10px 18px', minWidth: 120, textAlign: 'center' }}>
              <div style={{ fontSize: 18, fontWeight: 700, color: '#0A2B73' }}>{enquiryStats.conversionRate}</div>
              <div style={{ color: '#FFD600', fontWeight: 600 }}>Conversion Rate</div>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-row">
        <div className="dashboard-table-section">
          <h2 className="dashboard-section-title">Student List</h2>
          <table className="dashboard-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Class</th>
                <th>Course</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s, i) => (
                <tr key={i}>
                  <td>{s.name}</td>
                  <td>{s.class}</td>
                  <td>{s.course}</td>
                  <td>{s.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="dashboard-notifications-section">
          <h2 className="dashboard-section-title">Notifications</h2>
          <ul className="dashboard-notifications">
            {notifications.map((n, i) => (
              <li key={i}>{n}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardHome; 