import React, { useState } from 'react';
import Table, { type TableColumn } from '../../components/table/Table';

const columns: TableColumn[] = [
  { header: 'Student Id', accessor: 'id' },
  { header: 'Name', accessor: 'name' },
  { header: 'Standard', accessor: 'standard' },
  { header: 'Email', accessor: 'email' },
  { header: 'Status', accessor: 'status' },
  {
    header: 'Action', accessor: 'action',
    renderCell: (row) => (
      <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
        <button style={{ background: '#1976d2', color: '#fff', border: 'none', borderRadius: 4, padding: '4px 14px', fontWeight: 600, cursor: 'pointer', fontSize: 15 }}>Edit</button>
        <button style={{ background: '#C62828', color: '#fff', border: 'none', borderRadius: 4, padding: '4px 14px', fontWeight: 600, cursor: 'pointer', fontSize: 15 }}>Delete</button>
      </div>
    )
  },
];

const studentsData = [
  { id: 'SVM250001', name: 'Jhon Doe', standard: '12th Std', email: 'jhon@gmail.com', status: 'Active' },
  { id: 'SVM250002', name: 'Ram Shinde', standard: '12th Std', email: 'ram@gmail.com', status: 'Registered' },
  { id: 'SVM250003', name: 'Priya Singh', standard: '11th Std', email: 'priya@gmail.com', status: 'Active' },
  { id: 'SVM250004', name: 'Amit Kumar', standard: '10th Std', email: 'amit@gmail.com', status: 'Registered' },
  { id: 'SVM250005', name: 'Sneha Patil', standard: '9th Std', email: 'sneha@gmail.com', status: 'Active' },
  { id: 'SVM250006', name: 'Ravi Verma', standard: '12th Std', email: 'ravi@gmail.com', status: 'Active' },
  { id: 'SVM250007', name: 'Anjali Sharma', standard: '11th Std', email: 'anjali@gmail.com', status: 'Registered' },
  { id: 'SVM250008', name: 'Vikas Gupta', standard: '10th Std', email: 'vikas@gmail.com', status: 'Active' },
  { id: 'SVM250009', name: 'Meena Joshi', standard: '9th Std', email: 'meena@gmail.com', status: 'Registered' },
  { id: 'SVM250010', name: 'Suresh Rathi', standard: '12th Std', email: 'suresh@gmail.com', status: 'Active' },
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

const Student: React.FC = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [pageInput, setPageInput] = useState('1');
  const [filters, setFilters] = useState({ name: '', email: '', status: '' });

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  // Filtered data based on all filters
  const filtered = studentsData.filter(u =>
    u.name.toLowerCase().includes(filters.name.toLowerCase()) &&
    u.email.toLowerCase().includes(filters.email.toLowerCase()) &&
    (filters.status === '' || u.status === filters.status)
  ).filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase()) ||
    u.id.toLowerCase().includes(search.toLowerCase())
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
            <label style={{ color: '#7b868a', fontSize: 16, marginBottom: 8 }}>Search by Name</label>
            <input
              type="text"
              name="name"
              value={filters.name}
              onChange={handleFilterChange}
              style={{ border: '1px solid #888', borderRadius: 2, fontSize: 15, padding: '8px 8px' }}
            />
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <label style={{ color: '#7b868a', fontSize: 16, marginBottom: 8 }}>Search by Email Address</label>
            <input
              type="text"
              name="email"
              value={filters.email}
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
              <option value="Registered">Registered</option>
            </select>
          </div>
        </div>
      </div>

      {/* Table and controls */}
      <div style={{ width: '90%', maxWidth: '100vw', margin: '20px auto', borderRadius: 12, boxShadow: '0 6px 24px 0 rgba(6,13,58,0.08)', padding: '32px 32px 48px 32px', background: '#fff' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
          <div style={{ color: '#0A2B73', fontSize: 19, fontWeight: 600 }}>Total Count : {filtered.length}</div>
          <button style={{ background: '#0A2B73', color: '#fff', fontWeight: 700, fontSize: 14, padding: '10px 18px', border: 'none', borderRadius: 4, cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
            Add New Student
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

export default Student; 