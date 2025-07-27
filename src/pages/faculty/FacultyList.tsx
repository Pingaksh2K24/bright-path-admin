import React, { useState } from 'react';
import Table, { type TableColumn } from '../../components/table/Table';
import './FacultyList.css';

interface FacultyData {
  id: number;
  name: string;
  subject: string;
  contactNo: string;
  assignedBatches: string;
  status: string;
  email: string;
  experience: string;
  joiningDate: string;
}

const FacultyList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [page, setPage] = useState(1);
  const [pageInput, setPageInput] = useState('1');

  const subjects = ['All Subjects', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'Computer Science'];
  const statuses = ['All Status', 'Active', 'Inactive'];

  const sampleData: FacultyData[] = [
    { id: 1, name: 'Dr. Rajesh Kumar', subject: 'Mathematics', contactNo: '98765xxxxx', assignedBatches: 'JEE-2025, NEET-2025', status: 'Active', email: 'rajesh@brightpath.com', experience: '8 years', joiningDate: '15-Jan-2023' },
    { id: 2, name: 'Prof. Priya Sharma', subject: 'Physics', contactNo: '98230xxxxx', assignedBatches: 'JEE-2025', status: 'Active', email: 'priya@brightpath.com', experience: '6 years', joiningDate: '20-Mar-2023' },
    { id: 3, name: 'Dr. Amit Patel', subject: 'Chemistry', contactNo: '98111xxxxx', assignedBatches: 'NEET-2025', status: 'Active', email: 'amit@brightpath.com', experience: '10 years', joiningDate: '10-Feb-2023' },
    { id: 4, name: 'Ms. Sneha Verma', subject: 'Biology', contactNo: '98712xxxxx', assignedBatches: 'NEET-2025', status: 'Active', email: 'sneha@brightpath.com', experience: '4 years', joiningDate: '05-Apr-2023' },
    { id: 5, name: 'Mr. Vikas Singh', subject: 'English', contactNo: '98222xxxxx', assignedBatches: 'JEE-2025', status: 'Inactive', email: 'vikas@brightpath.com', experience: '3 years', joiningDate: '12-Jun-2023' },
    { id: 6, name: 'Dr. Meena Joshi', subject: 'Computer Science', contactNo: '98123xxxxx', assignedBatches: 'JEE-2025', status: 'Active', email: 'meena@brightpath.com', experience: '7 years', joiningDate: '18-Jul-2023' },
    { id: 7, name: 'Prof. Suresh Reddy', subject: 'Mathematics', contactNo: '98733xxxxx', assignedBatches: 'NEET-2025', status: 'Active', email: 'suresh@brightpath.com', experience: '12 years', joiningDate: '25-Aug-2023' },
    { id: 8, name: 'Ms. Anjali Shah', subject: 'Physics', contactNo: '98244xxxxx', assignedBatches: 'JEE-2025', status: 'Active', email: 'anjali@brightpath.com', experience: '5 years', joiningDate: '30-Sep-2023' },
    { id: 9, name: 'Dr. Ravi Verma', subject: 'Chemistry', contactNo: '98155xxxxx', assignedBatches: 'NEET-2025', status: 'Inactive', email: 'ravi@brightpath.com', experience: '9 years', joiningDate: '08-Oct-2023' },
    { id: 10, name: 'Prof. Asha Tiwari', subject: 'Biology', contactNo: '98766xxxxx', assignedBatches: 'JEE-2025', status: 'Active', email: 'asha@brightpath.com', experience: '6 years', joiningDate: '15-Nov-2023' },
    { id: 11, name: 'Mr. Deepak Sharma', subject: 'English', contactNo: '98277xxxxx', assignedBatches: 'NEET-2025', status: 'Active', email: 'deepak@brightpath.com', experience: '4 years', joiningDate: '22-Dec-2023' },
    { id: 12, name: 'Dr. Kiran Malhotra', subject: 'Computer Science', contactNo: '98188xxxxx', assignedBatches: 'JEE-2025', status: 'Active', email: 'kiran@brightpath.com', experience: '8 years', joiningDate: '05-Jan-2024' },
  ];

  const columns: TableColumn[] = [
    { 
      header: 'Name', 
      accessor: 'name',
      renderCell: (faculty) => (
        <div className="faculty-name">
          <div className="faculty-name-text">{faculty.name}</div>
          <div className="faculty-email">{faculty.email}</div>
        </div>
      )
    },
    { 
      header: 'Subject(s)', 
      accessor: 'subject',
      renderCell: (faculty) => (
        <div className="faculty-subject">
          <div className="subject-name">{faculty.subject}</div>
          <div className="subject-experience">{faculty.experience} exp.</div>
        </div>
      )
    },
    { header: 'Contact No.', accessor: 'contactNo' },
    { 
      header: 'Assigned Batches', 
      accessor: 'assignedBatches',
      renderCell: (faculty) => (
        <div className="assigned-batches">
          {faculty.assignedBatches.split(', ').map((batch: string, index: number) => (
            <span key={index} className="batch-tag">{batch}</span>
          ))}
        </div>
      )
    },
    { 
      header: 'Status', 
      accessor: 'status',
      renderCell: (faculty) => (
        <span className={`status-badge ${getStatusClass(faculty.status)}`}>
          {faculty.status}
        </span>
      )
    },
    { 
      header: 'Actions', 
      accessor: 'actions',
      renderCell: () => (
        <div className="actions-cell">
          <button className="action-button view-button">View</button>
          <button className="action-button edit-button">Edit</button>
          <button className="action-button delete-button">Delete</button>
        </div>
      )
    }
  ];

  const filteredData = sampleData.filter(faculty => {
    const matchesSearch = faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faculty.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faculty.contactNo.includes(searchTerm);
    const matchesSubject = selectedSubject === '' || selectedSubject === 'All Subjects' || faculty.subject === selectedSubject;
    const matchesStatus = selectedStatus === '' || selectedStatus === 'All Status' || faculty.status === selectedStatus;
    
    return matchesSearch && matchesSubject && matchesStatus;
  });

  const rowsPerPage = 5;
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
      setPageInput((page - 1).toString());
    }
  };

  const handleNext = () => {
    if (page < totalPages) {
      setPage(page + 1);
      setPageInput((page + 1).toString());
    }
  };

  const handlePageInput = (val: string) => {
    const pageNum = parseInt(val);
    if (pageNum >= 1 && pageNum <= totalPages) {
      setPage(pageNum);
      setPageInput(val);
    } else {
      setPageInput(page.toString());
    }
  };

  const getStatusClass = (status: string) => {
    return status === 'Active' ? 'status-active' : 'status-inactive';
  };



  interface TablePaginationProps {
    page: number;
    totalPages: number;
    onPrev: () => void;
    onNext: () => void;
    onPageInput: (val: string) => void;
    pageInput: string;
    setPageInput: React.Dispatch<React.SetStateAction<string>>;
  }

  const TablePagination: React.FC<TablePaginationProps> = ({ page, totalPages, onPrev, onNext, onPageInput, pageInput, setPageInput }) => (
    <div className="pagination-container">
      <button onClick={onPrev} disabled={page === 1} className="pagination-button prev-button">
        Previous
      </button>
      <span className="pagination-info">
        Page
        <input
          type="text"
          value={pageInput}
          onChange={e => setPageInput(e.target.value.replace(/[^0-9]/g, ''))}
          onBlur={() => onPageInput(pageInput)}
          onKeyDown={e => { if (e.key === 'Enter') onPageInput(pageInput); }}
          className="page-input"
        />
        of {totalPages}
      </span>
      <button onClick={onNext} disabled={page === totalPages} className="pagination-button next-button">
        Next
      </button>
    </div>
  );

  return (
    <div className="faculty-list-container">
      <div className="faculty-list-header">
        <h1 className="faculty-list-title">Faculty List / Directory</h1>
        <p className="faculty-list-subtitle">Manage and view all faculty members</p>
      </div>

      {/* Search and Filters */}
      <div className="search-filters-section">
        <div className="search-filters-grid">
          <div className="search-group">
            <label className="search-label">Search Faculty</label>
            <input
              type="text"
              placeholder="Name / Email / Mobile"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="search-group">
            <label className="search-label">Filter by Subject</label>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="filter-select"
            >
              {subjects.map(subject => (
                <option key={subject} value={subject}>{subject}</option>
              ))}
            </select>
          </div>
          <div className="search-group">
            <label className="search-label">Filter by Status</label>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="filter-select"
            >
              {statuses.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </div>
          <div className="search-group">
            <button className="add-faculty-button">Add New Faculty</button>
          </div>
        </div>
      </div>

      {/* Faculty Table */}
      <div className="table-container">
        <div className="table-header">
          <h2 className="table-title">Faculty Directory</h2>
          <div className="table-count">Total Faculty: {filteredData.length}</div>
        </div>
        <div className="table-wrapper">
          <Table
            data={currentData}
            columns={columns}
          />
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <TablePagination
          page={page}
          totalPages={totalPages}
          onPrev={handlePrev}
          onNext={handleNext}
          onPageInput={handlePageInput}
          pageInput={pageInput}
          setPageInput={setPageInput}
        />
      )}
    </div>
  );
};

export default FacultyList; 