import React, { useState } from 'react';
import Table, { type TableColumn } from './components/table/Table';

const columns: TableColumn[] = [
  { header: 'Name', accessor: 'name' },
  { header: 'Email', accessor: 'email' },
  {
    header: 'Image', accessor: 'image',
    renderCell: (row) => (
      <img src={row.image} alt={row.name} style={{ width: 38, height: 38, borderRadius: '50%', objectFit: 'cover', boxShadow: '0 2px 8px #e0e6f7' }} />
    )
  },
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

const dummyUsers = [
  { name: 'John Doe', email: 'john@example.com', image: 'https://randomuser.me/api/portraits/men/1.jpg' },
  { name: 'Jane Smith', email: 'jane@example.com', image: 'https://randomuser.me/api/portraits/women/2.jpg' },
  { name: 'Alex Johnson', email: 'alex@example.com', image: 'https://randomuser.me/api/portraits/men/3.jpg' },
  { name: 'Emily Brown', email: 'emily@example.com', image: 'https://randomuser.me/api/portraits/women/4.jpg' },
  { name: 'Sam Wilson', email: 'sam@example.com', image: 'https://randomuser.me/api/portraits/men/5.jpg' },
  { name: 'Priya Patel', email: 'priya@example.com', image: 'https://randomuser.me/api/portraits/women/6.jpg' },
  { name: 'Ravi Kumar', email: 'ravi@example.com', image: 'https://randomuser.me/api/portraits/men/7.jpg' },
];

const rowsPerPage = 5;

type TablePaginationProps = {
  page: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
  onPageInput: (val: string) => void;
  pageInput: string;
  setPageInput: React.Dispatch<React.SetStateAction<string>>;
};

const TablePagination: React.FC<TablePaginationProps> = ({ page, totalPages, onPrev, onNext, onPageInput, pageInput, setPageInput }) => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 18, margin: '32px 0 16px 0' }}>
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

const ViewAccount: React.FC = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [pageInput, setPageInput] = useState('1');
  const filtered = dummyUsers.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
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
      <div className="view-account-card" style={{ width: '90%', maxWidth: '100vw', margin: '20px auto', background: '#fff', borderRadius: 12, boxShadow: '0 6px 24px 0 rgba(6,13,58,0.08)', padding: '32px 32px 48px 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28, flexWrap: 'wrap' }}>
          <span style={{ color: '#0A2B73', fontSize: 19, marginRight: 18, fontWeight: 600 }}>Total Count : {filtered.length}</span>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <label style={{ marginRight: 10, color: '#555', fontSize: 17 }}>Search</label>
            <input
              type="text"
              placeholder=""
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ padding: '12px 16px', borderRadius: 2, border: '1px solid #222', fontSize: 16, minWidth: 220, background: '#fff' }}
            />
          </div>
        </div>
        <div style={{ width: '100%' }}>
          <Table columns={columns} data={paginated} rowsPerPage={rowsPerPage} />
        </div>
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

export default ViewAccount; 