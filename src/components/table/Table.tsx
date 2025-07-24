import React, { useState } from 'react';

export interface TableColumn {
  header: string;
  accessor: string;
  renderCell?: (row: Record<string, any>, rowIndex: number) => React.ReactNode;
}

export interface TableProps {
  columns: TableColumn[];
  data: Record<string, any>[];
  className?: string;
  rowsPerPage?: number;
}

const Table: React.FC<TableProps> = ({ columns, data, className, rowsPerPage = 5 }) => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(data.length / rowsPerPage);
  const paginated = data.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  const handlePrev = () => setPage((p) => Math.max(1, p - 1));
  const handleNext = () => setPage((p) => Math.min(totalPages, p + 1));

  React.useEffect(() => {
    if (page > totalPages) setPage(totalPages || 1);
  }, [data.length, rowsPerPage, totalPages]);

  const [pageInput, setPageInput] = useState('1');

  React.useEffect(() => {
    setPageInput(String(page));
  }, [page]);

  const handlePageInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^0-9]/g, '');
    setPageInput(val);
  };

  const goToPage = (val: string) => {
    let num = parseInt(val, 10);
    if (isNaN(num)) num = 1;
    if (num < 1) num = 1;
    if (num > totalPages) num = totalPages;
    setPage(num);
  };

  const handlePageInputBlur = () => {
    goToPage(pageInput);
  };

  const handlePageInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      goToPage(pageInput);
    }
  };

  return (
    <div style={{ overflowX: 'auto', boxShadow: '0 6px 24px 0 rgba(6,13,58,0.08)', borderRadius: 4, background: '#fff' }}>
      <table className={className || 'common-table'} style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #d1d5db' }}>
        <thead>
          <tr style={{ background: '#060d3a' }}>
            {columns.map((col) => (
              <th
                key={col.accessor}
                style={{ color: '#fff', fontWeight: 700, padding: '3px 0', textAlign: 'center', fontSize: 18 }}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginated.map((row, i) => (
            <tr key={i} style={{ borderBottom: '1px solid #e0e6f7', background: i % 2 === 0 ? '#fff' : '#f6f8fc' }}>
              {columns.map((col) => (
                <td
                  key={col.accessor}
                  style={{ padding: '3px 0', textAlign: 'center', fontSize: 16 }}
                >
                  {col.renderCell ? col.renderCell(row, (page - 1) * rowsPerPage + i) : row[col.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {totalPages > 1 && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 18, margin: '32px 0 6px 0' }}>
          <button onClick={handlePrev} disabled={page === 1} style={{ padding: '6px 18px', borderRadius: 4, border: 'none', background: page === 1 ? '#eee' : '#1976d2', color: page === 1 ? '#888' : '#fff', fontWeight: 600, cursor: page === 1 ? 'not-allowed' : 'pointer' }}>Previous</button>
          <span style={{ fontSize: 15, color: '#222', display: 'flex', alignItems: 'center', gap: 6 }}>
            Page
            <input
              type="text"
              value={pageInput}
              onChange={handlePageInputChange}
              onBlur={handlePageInputBlur}
              onKeyDown={handlePageInputKeyDown}
              style={{ width: 38, textAlign: 'center', fontSize: 15, border: '1px solid #bbb', borderRadius: 4, padding: '2px 0', margin: '0 4px' }}
            />
            of {totalPages}
          </span>
          <button onClick={handleNext} disabled={page === totalPages} style={{ padding: '6px 18px', borderRadius: 4, border: 'none', background: page === totalPages ? '#eee' : '#1976d2', color: page === totalPages ? '#888' : '#fff', fontWeight: 600, cursor: page === totalPages ? 'not-allowed' : 'pointer' }}>Next</button>
        </div>
      )}
    </div>
  );
};

export default Table; 