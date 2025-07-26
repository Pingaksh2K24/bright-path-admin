import React, { useState } from 'react';

const NewEnquiry: React.FC = () => {
  const [form, setForm] = useState({
    fullName: '',
    gender: '',
    dob: '',
    contact: '',
    altContact: '',
    email: '',
    city: '',
    area: '',
    pincode: '',
    currentClass: '',
    interestedCourse: '',
    preferredTiming: '',
    enquiryDate: new Date().toISOString().slice(0, 10),
    mode: '',
    source: '',
    remarks: '',
    nextFollowup: '',
    assignedTo: '',
  });
  const [error, setError] = useState('');

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validation can be added here
    setError('');
    // Submit logic here
  };

  return (
    <div style={{ background: '#f5f7fa', padding: 24, borderRadius: 8, minHeight: '100vh' }}>
      <div style={{ background: '#fff', boxShadow: '0 6px 24px 0 rgba(6,13,58,0.08)', borderRadius: 12, maxWidth: 950, marginBottom: '40px', padding: '40px 32px 32px 32px' }}>
        <form onSubmit={handleSubmit} style={{ maxWidth: 900, margin: '0 auto' }}>
          {/* Student Details */}
          <div style={{ marginBottom: 32 }}>
            <h2 style={{ color: '#0A2B73', fontSize: 20, fontWeight: 700, marginBottom: 6 }}>🎓 Student Details</h2>
            <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
              {/* First row: Full Name, Gender, Date of Birth */}
              <div style={{ flex: 1, minWidth: 220, marginBottom: 0, maxWidth: '100%' }} className="w-full md:w-1/3">
                <label style={{ display: 'block', marginBottom: 6, color: '#222', fontWeight: 500 }}>Full Name</label>
                <input name="fullName" value={form.fullName} onChange={handleInput} style={{ width: '100%', height: 40, border: '1px solid #bbb', borderRadius: 2, padding: '0 10px', fontSize: 16 }} />
              </div>
              <div style={{ flex: 1, minWidth: 180, marginBottom: 0, maxWidth: '100%' }} className="w-full md:w-1/3">
                <label style={{ display: 'block', marginBottom: 6, color: '#222', fontWeight: 500 }}>Gender</label>
                <select name="gender" value={form.gender} onChange={handleInput} style={{ width: '100%', height: 40, border: '1px solid #bbb', borderRadius: 2, padding: '0 10px', fontSize: 16 }}>
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div style={{ flex: 1, minWidth: 180, marginBottom: 0, maxWidth: '100%' }} className="w-full md:w-1/3">
                <label style={{ display: 'block', marginBottom: 6, color: '#222', fontWeight: 500 }}>Date of Birth</label>
                <input name="dob" type="date" value={form.dob} onChange={handleInput} style={{ width: '100%', height: 40, border: '1px solid #bbb', borderRadius: 2, padding: '0 10px', fontSize: 16 }} />
              </div>
              {/* Second row: Contact Number, Alternate Number, Email ID */}
              <div style={{ flex: 1, minWidth: 180, marginBottom: 0, maxWidth: '100%' }} className="w-full md:w-1/3">
                <label style={{ display: 'block', marginBottom: 6, color: '#222', fontWeight: 500 }}>Contact Number</label>
                <input name="contact" value={form.contact} onChange={handleInput} style={{ width: '100%', height: 40, border: '1px solid #bbb', borderRadius: 2, padding: '0 10px', fontSize: 16 }} />
              </div>
              <div style={{ flex: 1, minWidth: 180, marginBottom: 0, maxWidth: '100%' }} className="w-full md:w-1/3">
                <label style={{ display: 'block', marginBottom: 6, color: '#222', fontWeight: 500 }}>Alternate Number (Optional)</label>
                <input name="altContact" value={form.altContact} onChange={handleInput} style={{ width: '100%', height: 40, border: '1px solid #bbb', borderRadius: 2, padding: '0 10px', fontSize: 16 }} />
              </div>
              <div style={{ flex: 1, minWidth: 220, marginBottom: 0, maxWidth: '100%' }} className="w-full md:w-1/3">
                <label style={{ display: 'block', marginBottom: 6, color: '#222', fontWeight: 500 }}>Email ID (Optional)</label>
                <input name="email" type="email" value={form.email} onChange={handleInput} style={{ width: '100%', height: 40, border: '1px solid #bbb', borderRadius: 2, padding: '0 10px', fontSize: 16 }} />
              </div>
            </div>
          </div>
          {/* Address Details */}
          <div style={{ marginBottom: 32 }}>
            <h2 style={{ color: '#0A2B73', fontSize: 20, fontWeight: 700, marginBottom: 6 }}> Address Details</h2>
            <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: 180, marginBottom: 0 }}>
                <label style={{ display: 'block', marginBottom: 6, color: '#222', fontWeight: 500 }}>City / Town</label>
                <input name="city" value={form.city} onChange={handleInput} style={{ width: '100%', height: 40, border: '1px solid #bbb', borderRadius: 2, padding: '0 10px', fontSize: 16 }} />
              </div>
              <div style={{ flex: 1, minWidth: 180, marginBottom: 0 }}>
                <label style={{ display: 'block', marginBottom: 6, color: '#222', fontWeight: 500 }}>Area / Locality</label>
                <input name="area" value={form.area} onChange={handleInput} style={{ width: '100%', height: 40, border: '1px solid #bbb', borderRadius: 2, padding: '0 10px', fontSize: 16 }} />
              </div>
              <div style={{ flex: 1, minWidth: 180, marginBottom: 0 }}>
                <label style={{ display: 'block', marginBottom: 6, color: '#222', fontWeight: 500 }}>Pin Code</label>
                <input name="pincode" value={form.pincode} onChange={handleInput} style={{ width: '100%', height: 40, border: '1px solid #bbb', borderRadius: 2, padding: '0 10px', fontSize: 16 }} />
              </div>
            </div>
          </div>
          {/* Academic Info */}
          <div style={{ marginBottom: 32 }}>
            <h2 style={{ color: '#0A2B73', fontSize: 20, fontWeight: 700, marginBottom: 6 }}>📚 Academic Info</h2>
            <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: 180, marginBottom: 0 }}>
                <label style={{ display: 'block', marginBottom: 6, color: '#222', fontWeight: 500 }}>Current Class / Standard</label>
                <input name="currentClass" value={form.currentClass} onChange={handleInput} style={{ width: '100%', height: 40, border: '1px solid #bbb', borderRadius: 2, padding: '0 10px', fontSize: 16 }} />
              </div>
              <div style={{ flex: 1, minWidth: 220, marginBottom: 0 }}>
                <label style={{ display: 'block', marginBottom: 6, color: '#222', fontWeight: 500 }}>Interested Course / Subject / Batch</label>
                <input name="interestedCourse" value={form.interestedCourse} onChange={handleInput} style={{ width: '100%', height: 40, border: '1px solid #bbb', borderRadius: 2, padding: '0 10px', fontSize: 16 }} />
              </div>
              <div style={{ flex: 1, minWidth: 220, marginBottom: 0 }}>
                <label style={{ display: 'block', marginBottom: 6, color: '#222', fontWeight: 500 }}>Preferred Timing (Morning/Evening)</label>
                <input name="preferredTiming" value={form.preferredTiming} onChange={handleInput} style={{ width: '100%', height: 40, border: '1px solid #bbb', borderRadius: 2, padding: '0 10px', fontSize: 16 }} />
              </div>
            </div>
          </div>
          {/* Enquiry Details */}
          <div style={{ marginBottom: 32 }}>
            <h2 style={{ color: '#0A2B73', fontSize: 20, fontWeight: 700, marginBottom: 6 }}>📅 Enquiry Details</h2>
            <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: 180, marginBottom: 0 }}>
                <label style={{ display: 'block', marginBottom: 6, color: '#222', fontWeight: 500 }}>Enquiry Date</label>
                <input name="enquiryDate" type="date" value={form.enquiryDate} onChange={handleInput} style={{ width: '100%', height: 40, border: '1px solid #bbb', borderRadius: 2, padding: '0 10px', fontSize: 16 }} readOnly />
              </div>
              <div style={{ flex: 1, minWidth: 220, marginBottom: 0 }}>
                <label style={{ display: 'block', marginBottom: 6, color: '#222', fontWeight: 500 }}>Mode of Enquiry</label>
                <select name="mode" value={form.mode} onChange={handleInput} style={{ width: '100%', height: 40, border: '1px solid #bbb', borderRadius: 2, padding: '0 10px', fontSize: 16 }}>
                  <option value="">Select</option>
                  <option value="Walk-in">Walk-in</option>
                  <option value="Phone">Phone</option>
                  <option value="WhatsApp">WhatsApp</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Reference">Reference</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div style={{ flex: 1, minWidth: 220, marginBottom: 0 }}>
                <label style={{ display: 'block', marginBottom: 6, color: '#222', fontWeight: 500 }}>Source (optional)</label>
                <input name="source" value={form.source} onChange={handleInput} style={{ width: '100%', height: 40, border: '1px solid #bbb', borderRadius: 2, padding: '0 10px', fontSize: 16 }} />
              </div>
              <div style={{ flex: 1, minWidth: 220, marginBottom: 0 }}>
                <label style={{ display: 'block', marginBottom: 6, color: '#222', fontWeight: 500 }}>Remarks / Notes (Optional)</label>
                <textarea name="remarks" value={form.remarks} onChange={handleInput} style={{ width: '100%', minHeight: 40, border: '1px solid #bbb', borderRadius: 2, padding: '0 10px', fontSize: 16 }} />
              </div>
            </div>
          </div>
          {/* Follow-up Info */}
          <div style={{ marginBottom: 32 }}>
            <h2 style={{ color: '#0A2B73', fontSize: 20, fontWeight: 700, marginBottom: 6 }}>📞 Follow-up Info</h2>
            <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: 220, marginBottom: 0 }}>
                <label style={{ display: 'block', marginBottom: 6, color: '#222', fontWeight: 500 }}>Next Follow-up Date</label>
                <input name="nextFollowup" type="date" value={form.nextFollowup} onChange={handleInput} style={{ width: '100%', height: 40, border: '1px solid #bbb', borderRadius: 2, padding: '0 10px', fontSize: 16 }} />
              </div>
              <div style={{ flex: 1, minWidth: 220, marginBottom: 0 }}>
                <label style={{ display: 'block', marginBottom: 6, color: '#222', fontWeight: 500 }}>Assigned To</label>
                <select name="assignedTo" value={form.assignedTo} onChange={handleInput} style={{ width: '100%', height: 40, border: '1px solid #bbb', borderRadius: 2, padding: '0 10px', fontSize: 16 }}>
                  <option value="">Select</option>
                  <option value="Admin">Admin</option>
                  <option value="Faculty">Faculty</option>
                </select>
              </div>
            </div>
          </div>
          {error && <div style={{ color: 'red', fontSize: 14, marginBottom: 12 }}>{error}</div>}
          <button type="submit" style={{ margin: '32px auto 0 auto', display: 'block', background: '#0A2B73', color: '#fff', border: 'none', borderRadius: 4, padding: '8px 0', fontWeight: 700, fontSize: 16, width: '180px', maxWidth: '100%', height: '42px', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            Submit Enquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewEnquiry; 