import React, { useState } from 'react';
import './FeeStructure.css';

const FeeStructure: React.FC = () => {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');

  const classes = ['9th Standard', '10th Standard', '11th Standard', '12th Standard'];
  const courses = ['NEET', 'JEE', 'Foundation', 'Competitive'];
  
  const feeData = [
    {
      id: 1,
      class: '11th Standard',
      course: 'NEET',
      admissionFee: 5000,
      tuitionFee: 15000,
      otherCharges: 2000,
      totalFee: 22000,
      discount: 2000,
      finalAmount: 20000,
      installments: 'Monthly'
    },
    {
      id: 2,
      class: '12th Standard', 
      course: 'NEET',
      admissionFee: 5000,
      tuitionFee: 18000,
      otherCharges: 2500,
      totalFee: 25500,
      discount: 2500,
      finalAmount: 23000,
      installments: 'Monthly'
    },
    {
      id: 3,
      class: '11th Standard',
      course: 'JEE',
      admissionFee: 5000,
      tuitionFee: 16000,
      otherCharges: 2200,
      totalFee: 23200,
      discount: 2200,
      finalAmount: 21000,
      installments: 'Monthly'
    },
    {
      id: 4,
      class: '12th Standard',
      course: 'JEE', 
      admissionFee: 5000,
      tuitionFee: 19000,
      otherCharges: 2700,
      totalFee: 26700,
      discount: 2700,
      finalAmount: 24000,
      installments: 'Monthly'
    }
  ];

  return (
    <div className="fee-structure-container">
      <div className="fee-structure-header">
        <h1 className="fee-structure-title">Fee Structure</h1>
        <p className="fee-structure-subtitle">Class-wise & Course-wise Fee Breakdown</p>
      </div>

      {/* Filters */}
      <div className="filters-section">
        <div className="filters-grid">
          <div className="filter-group">
            <label className="filter-label">Filter by Class</label>
            <select 
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="filter-select"
            >
              <option value="">All Classes</option>
              {classes.map(cls => (
                <option key={cls} value={cls}>{cls}</option>
              ))}
            </select>
          </div>
          <div className="filter-group">
            <label className="filter-label">Filter by Course</label>
            <select 
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              className="filter-select"
            >
              <option value="">All Courses</option>
              {courses.map(course => (
                <option key={course} value={course}>{course}</option>
              ))}
            </select>
          </div>
          <div className="filter-group">
            <button className="add-button">
              Add New Fee Structure
            </button>
          </div>
        </div>
      </div>

      {/* Fee Structure Table */}
      <div className="table-container">
        <div className="table-header">
          <h2 className="table-title">Fee Structure Details</h2>
        </div>
        <div className="table-wrapper">
          <table className="fee-table">
            <thead>
              <tr>
                <th>Class</th>
                <th>Course</th>
                <th>Admission Fee</th>
                <th>Tuition Fee</th>
                <th>Other Charges</th>
                <th>Total Fee</th>
                <th>Discount</th>
                <th>Final Amount</th>
                <th>Installments</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {feeData.map((fee) => (
                <tr key={fee.id}>
                  <td className="class-cell">{fee.class}</td>
                  <td className="course-cell">{fee.course}</td>
                  <td className="amount-cell">₹{fee.admissionFee.toLocaleString()}</td>
                  <td className="amount-cell">₹{fee.tuitionFee.toLocaleString()}</td>
                  <td className="amount-cell">₹{fee.otherCharges.toLocaleString()}</td>
                  <td className="total-cell">₹{fee.totalFee.toLocaleString()}</td>
                  <td className="discount-cell">₹{fee.discount.toLocaleString()}</td>
                  <td className="final-cell">₹{fee.finalAmount.toLocaleString()}</td>
                  <td className="installments-cell">{fee.installments}</td>
                  <td className="actions-cell">
                    <div className="actions-buttons">
                      <button className="edit-button">Edit</button>
                      <button className="delete-button">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FeeStructure; 