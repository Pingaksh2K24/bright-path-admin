import React, { useState } from 'react';
import Table, { type TableColumn } from '../../components/table/Table';

const columns: TableColumn[] = [
  { header: 'Course Id', accessor: 'id' },
  { header: 'Course Name', accessor: 'name' },
  { header: 'Duration', accessor: 'duration' },
  { header: 'Instructor', accessor: 'instructor' },
  { header: 'Status', accessor: 'status' },
  {
    header: 'Action', accessor: 'action',
    renderCell: () => (
      <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
        <button style={{ background: '#1976d2', color: '#fff', border: 'none', borderRadius: 4, padding: '4px 14px', fontWeight: 600, cursor: 'pointer', fontSize: 15 }}>Edit</button>
        <button style={{ background: '#C62828', color: '#fff', border: 'none', borderRadius: 4, padding: '4px 14px', fontWeight: 600, cursor: 'pointer', fontSize: 15 }}>Delete</button>
      </div>
    )
  },
];

const coursesData = [
  { id: 'CRS1001', name: 'Mathematics', duration: '12 Months', instructor: 'Dr. Sharma', status: 'Active' },
  { id: 'CRS1002', name: 'Physics', duration: '10 Months', instructor: 'Prof. Verma', status: 'Inactive' },
  { id: 'CRS1003', name: 'Chemistry', duration: '8 Months', instructor: 'Dr. Mehta', status: 'Active' },
  { id: 'CRS1004', name: 'Biology', duration: '6 Months', instructor: 'Dr. Singh', status: 'Active' },
  { id: 'CRS1005', name: 'English', duration: '5 Months', instructor: 'Ms. Gupta', status: 'Inactive' },
  { id: 'CRS1006', name: 'Computer Science', duration: '9 Months', instructor: 'Mr. Joshi', status: 'Active' },
  { id: 'CRS1007', name: 'Economics', duration: '7 Months', instructor: 'Dr. Rao', status: 'Active' },
  { id: 'CRS1008', name: 'History', duration: '6 Months', instructor: 'Ms. Patel', status: 'Inactive' },
  { id: 'CRS1009', name: 'Geography', duration: '8 Months', instructor: 'Mr. Kumar', status: 'Active' },
  { id: 'CRS1010', name: 'Political Science', duration: '10 Months', instructor: 'Dr. Nair', status: 'Active' },
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

const Course: React.FC = () => {
  const [page, setPage] = useState(1);
  const [pageInput, setPageInput] = useState('1');
  const [filters, setFilters] = useState({ name: '', instructor: '', status: '' });

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  // Filtered data based on all filters
  const filtered = coursesData.filter(u =>
    u.name.toLowerCase().includes(filters.name.toLowerCase()) &&
    u.instructor.toLowerCase().includes(filters.instructor.toLowerCase()) &&
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
      {/* Filter Section (above table) */}
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
            <label style={{ color: '#7b868a', fontSize: 16, marginBottom: 8 }}>Search by Instructor</label>
            <input
              type="text"
              name="instructor"
              value={filters.instructor}
              onChange={handleFilterChange}
              style={{ border: '1px solid #888', borderRadius: 2, fontSize: 15, padding: '8px 8px' }}
            />
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <label style={{ color: '#7b868a', fontSize: 16, marginBottom: 8 }}>Status</label>
            <select
              name="status"
              value={filters.status}
              onChange={handleFilterChange}
              style={{ border: '1px solid #888', borderRadius: 2, fontSize: 15, padding: '8px 8px', color: filters.status ? '#222' : '#7b868a' }}
            >
              <option value="">Select</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>
      </div>

      {/* Table and controls */}
      <div style={{ width: '90%', maxWidth: '100vw', margin: '20px auto', borderRadius: 12, boxShadow: '0 6px 24px 0 rgba(6,13,58,0.08)', padding: '32px 32px 48px 32px', background: '#fff' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
          <div style={{ color: '#0A2B73', fontSize: 19, fontWeight: 600 }}>Total Count : {filtered.length}</div>
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

export default Course; 