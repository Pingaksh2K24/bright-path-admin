import React, { useState } from 'react';
import Table, { type TableColumn } from '../../components/table/Table';

const statusOptions = [
  'Pending',
  'Completed',
  'Not Interested',
  'Admitted',
];

const sampleData = [
  { id: 1, name: 'Ramesh S.', contact: '98765xxxxx', course: 'NEET', enquiryDate: '21-Jul-2025', followupDate: '24-Jul-2025', status: 'Pending', notes: '', assignedTo: '' },
  { id: 2, name: 'Priya M.', contact: '98230xxxxx', course: 'JEE', enquiryDate: '20-Jul-2025', followupDate: '23-Jul-2025', status: 'Completed', notes: '', assignedTo: '' },
  { id: 3, name: 'Amit K.', contact: '98111xxxxx', course: 'NEET', enquiryDate: '19-Jul-2025', followupDate: '22-Jul-2025', status: 'Pending', notes: '', assignedTo: '' },
  { id: 4, name: 'Sneha P.', contact: '98712xxxxx', course: 'JEE', enquiryDate: '18-Jul-2025', followupDate: '21-Jul-2025', status: 'Not Interested', notes: '', assignedTo: '' },
  { id: 5, name: 'Vikas G.', contact: '98222xxxxx', course: 'NEET', enquiryDate: '17-Jul-2025', followupDate: '20-Jul-2025', status: 'Admitted', notes: '', assignedTo: '' },
  { id: 6, name: 'Meena J.', contact: '98123xxxxx', course: 'JEE', enquiryDate: '16-Jul-2025', followupDate: '19-Jul-2025', status: 'Pending', notes: '', assignedTo: '' },
  { id: 7, name: 'Suresh R.', contact: '98733xxxxx', course: 'NEET', enquiryDate: '15-Jul-2025', followupDate: '18-Jul-2025', status: 'Completed', notes: '', assignedTo: '' },
  { id: 8, name: 'Anjali S.', contact: '98244xxxxx', course: 'JEE', enquiryDate: '14-Jul-2025', followupDate: '17-Jul-2025', status: 'Pending', notes: '', assignedTo: '' },
  { id: 9, name: 'Ravi V.', contact: '98155xxxxx', course: 'NEET', enquiryDate: '13-Jul-2025', followupDate: '16-Jul-2025', status: 'Pending', notes: '', assignedTo: '' },
  { id: 10, name: 'Asha T.', contact: '98766xxxxx', course: 'JEE', enquiryDate: '12-Jul-2025', followupDate: '15-Jul-2025', status: 'Completed', notes: '', assignedTo: '' },
  { id: 11, name: 'Deepak S.', contact: '98277xxxxx', course: 'NEET', enquiryDate: '11-Jul-2025', followupDate: '14-Jul-2025', status: 'Pending', notes: '', assignedTo: '' },
  { id: 12, name: 'Kiran M.', contact: '98188xxxxx', course: 'JEE', enquiryDate: '10-Jul-2025', followupDate: '13-Jul-2025', status: 'Admitted', notes: '', assignedTo: '' },
  { id: 13, name: 'Sunil P.', contact: '98799xxxxx', course: 'NEET', enquiryDate: '09-Jul-2025', followupDate: '12-Jul-2025', status: 'Not Interested', notes: '', assignedTo: '' },
  { id: 14, name: 'Pooja L.', contact: '98210xxxxx', course: 'JEE', enquiryDate: '08-Jul-2025', followupDate: '11-Jul-2025', status: 'Pending', notes: '', assignedTo: '' },
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

const FollowupTracker: React.FC = () => {
  const [data, setData] = useState(sampleData);
  const [filters, setFilters] = useState({ name: '', contact: '', status: '' });
  const [page, setPage] = useState(1);
  const [pageInput, setPageInput] = useState('1');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);
  const [modalForm, setModalForm] = useState({
    notes: '',
    status: '',
    followupDate: '',
    assignedTo: '',
  });

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  // Filtered data based on all filters
  const filtered = data.filter(u =>
    u.name.toLowerCase().includes(filters.name.toLowerCase()) &&
    u.contact.toLowerCase().includes(filters.contact.toLowerCase()) &&
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

  const handleUpdateClick = (row: any) => {
    setSelectedRow(row);
    setModalForm({
      notes: row.notes || '',
      status: row.status || '',
      followupDate: row.followupDate || '',
      assignedTo: row.assignedTo || '',
    });
    setModalOpen(true);
  };

  const handleModalChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setModalForm({ ...modalForm, [e.target.name]: e.target.value });
  };

  const handleModalSave = () => {
    setData((prev) =>
      prev.map((row) =>
        row.id === selectedRow.id
          ? { ...row, ...modalForm }
          : row
      )
    );
    setModalOpen(false);
    setSelectedRow(null);
  };

  // Table columns for Follow-up Tracker
  const columns: TableColumn[] = [
    { header: 'Sr.', accessor: 'sr', renderCell: (_row, idx) => (page - 1) * rowsPerPage + idx + 1 },
    { header: 'Name', accessor: 'name' },
    { header: 'Contact No.', accessor: 'contact' },
    { header: 'Course Interested', accessor: 'course' },
    { header: 'Enquiry Date', accessor: 'enquiryDate' },
    { header: 'Follow-up Date', accessor: 'followupDate' },
    {
      header: 'Status', accessor: 'status',
      renderCell: (row) => (
        <span className={
          row.status === 'Pending' ? 'text-yellow-600 font-semibold' :
          row.status === 'Completed' ? 'text-green-700 font-semibold' :
          row.status === 'Not Interested' ? 'text-gray-500 font-semibold' :
          row.status === 'Admitted' ? 'text-blue-700 font-semibold' : ''
        }>
          {row.status}
        </span>
      )
    },
    {
      header: 'Action', accessor: 'action',
      renderCell: (row) => (
        <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
          <button
            style={{ background: '#0A2B73', color: '#fff', border: 'none', borderRadius: 4, padding: '4px 14px', fontWeight: 600, cursor: 'pointer', fontSize: 15 }}
            onClick={() => handleUpdateClick(row)}
          >
            Update
          </button>
          <button
            style={{ background: '#e5e7eb', color: '#0A2B73', border: 'none', borderRadius: 4, padding: '4px 14px', fontWeight: 600, cursor: 'pointer', fontSize: 15 }}
          >
            View
          </button>
        </div>
      )
    },
  ];

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
            <label style={{ color: '#7b868a', fontSize: 16, marginBottom: 8 }}>Search by Contact No.</label>
            <input
              type="text"
              name="contact"
              value={filters.contact}
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
              {statusOptions.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Table and controls */}
      <div style={{ width: '90%', maxWidth: '100vw', margin: '20px auto', borderRadius: 12, boxShadow: '0 6px 24px 0 rgba(6,13,58,0.08)', padding: '32px 32px 48px 32px', background: '#fff' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
          <div style={{ color: '#0A2B73', fontSize: 19, fontWeight: 600 }}>Total Count : {filtered.length}</div>
          <button style={{ background: '#0A2B73', color: '#fff', fontWeight: 700, fontSize: 14, padding: '10px 18px', border: 'none', borderRadius: 4, cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
            Add New Enquiry
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
      {/* Modal/Popup for Update */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
            <h2 className="text-lg font-bold text-[#0A2B73] mb-4">Update Follow-up</h2>
            <div className="mb-3">
              <label className="block mb-1 font-medium text-gray-700">Notes</label>
              <textarea
                name="notes"
                value={modalForm.notes}
                onChange={handleModalChange}
                className="w-full border border-gray-300 rounded px-3 py-2 min-h-[60px]"
              />
            </div>
            <div className="mb-3">
              <label className="block mb-1 font-medium text-gray-700">Status</label>
              <select
                name="status"
                value={modalForm.status}
                onChange={handleModalChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
              >
                <option value="">Select</option>
                {statusOptions.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label className="block mb-1 font-medium text-gray-700">Reschedule Follow-up Date (optional)</label>
              <input
                type="date"
                name="followupDate"
                value={modalForm.followupDate}
                onChange={handleModalChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div className="mb-3">
              <label className="block mb-1 font-medium text-gray-700">Assigned To (optional)</label>
              <input
                type="text"
                name="assignedTo"
                value={modalForm.assignedTo}
                onChange={handleModalChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="Admin / Faculty Name"
              />
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <button
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
                onClick={() => setModalOpen(false)}
                type="button"
              >
                Cancel
              </button>
              <button
                className="bg-[#0A2B73] text-white px-4 py-2 rounded font-semibold hover:bg-[#143a7b]"
                onClick={handleModalSave}
                type="button"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FollowupTracker; 