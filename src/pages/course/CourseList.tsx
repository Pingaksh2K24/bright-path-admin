import React, { useState } from 'react';
import Table, { type TableColumn } from '../../components/table/Table';

const columns: TableColumn[] = [
  { header: 'Course Name', accessor: 'name' },
  { header: 'Class Level', accessor: 'classLevel' },
  { header: 'Duration', accessor: 'duration' },
  { header: 'Total Subjects', accessor: 'totalSubjects' },
  { 
    header: 'Status', 
    accessor: 'status',
    renderCell: (row) => (
      <span style={{
        padding: '4px 12px',
        borderRadius: 12,
        fontSize: 12,
        fontWeight: 600,
        backgroundColor: row.status === 'Active' ? '#e8f5e8' : '#ffe8e8',
        color: row.status === 'Active' ? '#2e7d32' : '#d32f2f'
      }}>
        {row.status}
      </span>
    )
  },
  {
    header: 'Actions', accessor: 'action',
    renderCell: () => (
      <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
        <button style={{ background: '#1976d2', color: '#fff', border: 'none', borderRadius: 4, padding: '6px 12px', fontWeight: 600, cursor: 'pointer', fontSize: 13 }}>View</button>
        <button style={{ background: '#ff9800', color: '#fff', border: 'none', borderRadius: 4, padding: '6px 12px', fontWeight: 600, cursor: 'pointer', fontSize: 13 }}>Edit</button>
        <button style={{ background: '#C62828', color: '#fff', border: 'none', borderRadius: 4, padding: '6px 12px', fontWeight: 600, cursor: 'pointer', fontSize: 13 }}>Delete</button>
      </div>
    )
  },
];

const coursesData = [
  { id: 1, name: 'NEET Preparation', classLevel: '12th', duration: '12 Months', totalSubjects: 3, status: 'Active' },
  { id: 2, name: 'JEE Main & Advanced', classLevel: '12th', duration: '18 Months', totalSubjects: 3, status: 'Active' },
  { id: 3, name: 'MHT-CET', classLevel: '12th', duration: '10 Months', totalSubjects: 3, status: 'Active' },
  { id: 4, name: 'Foundation 8th-10th', classLevel: '8th-10th', duration: '24 Months', totalSubjects: 5, status: 'Active' },
  { id: 5, name: 'CBSE Board Prep', classLevel: '10th', duration: '8 Months', totalSubjects: 5, status: 'Inactive' },
  { id: 6, name: 'ICSE Board Prep', classLevel: '10th', duration: '8 Months', totalSubjects: 5, status: 'Active' },
  { id: 7, name: 'Crash Course JEE', classLevel: '12th', duration: '3 Months', totalSubjects: 3, status: 'Active' },
  { id: 8, name: 'Weekend NEET', classLevel: '12th', duration: '15 Months', totalSubjects: 3, status: 'Inactive' },
  { id: 9, name: 'Foundation 11th', classLevel: '11th', duration: '12 Months', totalSubjects: 3, status: 'Active' },
  { id: 10, name: 'Olympiad Prep', classLevel: '9th-12th', duration: '6 Months', totalSubjects: 4, status: 'Active' },
];

const rowsPerPage = 5;

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
  <div style={{ width: '90%', maxWidth: '100vw', margin: '18px auto 0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 18 }}>
    <button onClick={onPrev} disabled={page === 1} style={{ padding: '6px 18px', borderRadius: 4, border: 'none', background: page === 1 ? '#eee' : '#1976d2', color: page === 1 ? '#888' : '#fff', fontWeight: 600, cursor: page === 1 ? 'not-allowed' : 'pointer' }}>Previous</button>
    <span style={{ fontSize: 15, color: '#222', display: 'flex', alignItems: 'center', gap: 6 }}>
      Page
      <input
        type="text"
        value={pageInput}
        onChange={e => setPageInput(e.target.value.replace(/[^0-9]/g, ''))}
        onBlur={() => onPageInput(pageInput)}
        onKeyDown={e => { if (e.key === 'Enter') onPageInput(pageInput); }}
        style={{ width: 38, textAlign: 'center', fontSize: 15, border: '1px solid #bbb', borderRadius: 4, padding: '2px 0', margin: '0 4px' }}
      />
      of {totalPages}
    </span>
    <button onClick={onNext} disabled={page === totalPages} style={{ padding: '6px 18px', borderRadius: 4, border: 'none', background: page === totalPages ? '#eee' : '#1976d2', color: page === totalPages ? '#888' : '#fff', fontWeight: 600, cursor: page === totalPages ? 'not-allowed' : 'pointer' }}>Next</button>
  </div>
);

const CourseList: React.FC = () => {
  const [page, setPage] = useState(1);
  const [pageInput, setPageInput] = useState('1');
  const [filters, setFilters] = useState({ name: '', classLevel: '', status: '' });

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  // Filtered data based on all filters
  const filtered = coursesData.filter(u =>
    u.name.toLowerCase().includes(filters.name.toLowerCase()) &&
    u.classLevel.toLowerCase().includes(filters.classLevel.toLowerCase()) &&
    (filters.status === '' || u.status === filters.status)
  );
  
  const totalPages = Math.ceil(filtered.length / rowsPerPage);
  const paginated = filtered.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  React.useEffect(() => {
    setPageInput(String(page));
    if (page > totalPages) setPage(totalPages || 1);
  }, [page, totalPages]);

  const handlePrev = () => setPage(p => Math.max(1, p - 1));
  const handleNext = () => setPage(p => Math.min(totalPages, p + 1));
  const handlePageInput = (val: string) => {
    let num = parseInt(val, 10);
    if (isNaN(num)) num = 1;
    if (num < 1) num = 1;
    if (num > totalPages) num = totalPages;
    setPage(num);
  };

  return (
    <>
      {/* Filter Section */}
      <div style={{ background: '#fff', boxShadow: '0 4px 16px 0 rgba(6,13,58,0.08)', borderRadius: 6, padding: '32px 24px', margin: '20px auto 32px auto', width: '90%', maxWidth: '100vw' }}>
        <div style={{ display: 'flex', gap: 32 }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <label style={{ color: '#7b868a', fontSize: 16, marginBottom: 8 }}>Search by Course Name</label>
            <input
              type="text"
              name="name"
              value={filters.name}
              onChange={handleFilterChange}
              style={{ border: '1px solid #888', borderRadius: 2, fontSize: 15, padding: '8px 8px' }}
            />
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <label style={{ color: '#7b868a', fontSize: 16, marginBottom: 8 }}>Class Level</label>
            <select
              name="classLevel"
              value={filters.classLevel}
              onChange={handleFilterChange}
              style={{ border: '1px solid #888', borderRadius: 2, fontSize: 15, padding: '8px 8px', color: filters.classLevel ? '#222' : '#7b868a' }}
            >
              <option value="">All Levels</option>
              <option value="8th">8th</option>
              <option value="9th">9th</option>
              <option value="10th">10th</option>
              <option value="11th">11th</option>
              <option value="12th">12th</option>
            </select>
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <label style={{ color: '#7b868a', fontSize: 16, marginBottom: 8 }}>Status</label>
            <select
              name="status"
              value={filters.status}
              onChange={handleFilterChange}
              style={{ border: '1px solid #888', borderRadius: 2, fontSize: 15, padding: '8px 8px', color: filters.status ? '#222' : '#7b868a' }}
            >
              <option value="">All Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>
      </div>

      {/* Table and controls */}
      <div style={{ width: '90%', maxWidth: '100vw', margin: '20px auto', borderRadius: 12, boxShadow: '0 6px 24px 0 rgba(6,13,58,0.08)', padding: '32px 32px 48px 32px', background: '#fff' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
          <div style={{ color: '#0A2B73', fontSize: 19, fontWeight: 600 }}>Total Courses: {filtered.length}</div>
          <button style={{ background: '#0A2B73', color: '#fff', fontWeight: 700, fontSize: 14, padding: '10px 18px', border: 'none', borderRadius: 4, cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
            Add New Course
          </button>
        </div>
        <div style={{ width: '100%' }}>
          <Table columns={columns} data={paginated} rowsPerPage={rowsPerPage} />
        </div>
        {/* Pagination below table */}
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
    </>
  );
};

export default CourseList; 