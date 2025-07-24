import React, { useState } from 'react';
import type { ChangeEvent } from 'react';

const roles = ['Admin', 'Editor', 'Viewer'];

const AccountManagement: React.FC = () => {
  const [profilePhoto, setProfilePhoto] = useState<string | null>(null);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: '',
  });
  const [error, setError] = useState('');

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (ev) => setProfilePhoto(ev.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.lastName || !form.email || !form.password || !form.role) {
      setError('All fields are required');
      return;
    }
    setError('');
    // Submit logic here
  };

  return (
    <div style={{ background: '#f5f7fa', padding: 24, borderRadius: 8 }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 48, alignItems: 'flex-start', justifyContent: 'center', flexWrap: 'wrap' }}>
        {/* Left: Form Fields */}
        <div style={{ flex: '1 1 340px', minWidth: 320, maxWidth: 500 }}>
          <div style={{ marginBottom: 24 }}>
            <label style={{ display: 'block', marginBottom: 6, color: '#222', fontWeight: 500 }}>
              First Name<span style={{ color: 'red' }}>*</span>
            </label>
            <input name="firstName" value={form.firstName} onChange={handleInput} style={{ width: '100%', height: 48, border: '1px solid #bbb', borderRadius: 2, padding: '0 10px', fontSize: 16 }} />
          </div>
          <div style={{ marginBottom: 24 }}>
            <label style={{ display: 'block', marginBottom: 6, color: '#222', fontWeight: 500 }}>
              Last Name<span style={{ color: 'red' }}>*</span>
            </label>
            <input name="lastName" value={form.lastName} onChange={handleInput} style={{ width: '100%', height: 48, border: '1px solid #bbb', borderRadius: 2, padding: '0 10px', fontSize: 16 }} />
          </div>
          <div style={{ marginBottom: 24 }}>
            <label style={{ display: 'block', marginBottom: 6, color: '#222', fontWeight: 500 }}>
              Email<span style={{ color: 'red' }}>*</span>
            </label>
            <input name="email" type="email" value={form.email} onChange={handleInput} style={{ width: '100%', height: 48, border: '1px solid #bbb', borderRadius: 2, padding: '0 10px', fontSize: 16 }} />
          </div>
          <div style={{ marginBottom: 24 }}>
            <label style={{ display: 'block', marginBottom: 6, color: '#222', fontWeight: 500 }}>
              Password<span style={{ color: 'red' }}>*</span>
            </label>
            <input name="password" type="password" value={form.password} onChange={handleInput} style={{ width: '100%', height: 48, border: '1px solid #bbb', borderRadius: 2, padding: '0 10px', fontSize: 16 }} />
          </div>
          <div style={{ marginBottom: 24 }}>
            <label style={{ display: 'block', marginBottom: 6, color: '#222', fontWeight: 500 }}>
              Role<span style={{ color: 'red' }}>*</span>
            </label>
            <select name="role" value={form.role} onChange={handleInput} style={{ width: '100%', height: 48, border: '1px solid #bbb', borderRadius: 2, padding: '0 10px', fontSize: 16 }}>
              <option value="">Select</option>
              {roles.map(r => <option key={r} value={r}>{r}</option>)}
            </select>
          </div>
          {error && <div style={{ color: 'red', fontSize: 14, marginBottom: 12 }}>{error}</div>}
        </div>
        {/* Right: Profile Photo Upload */}
        <div style={{ flex: '1 1 320px', minWidth: 280, maxWidth: 400, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ width: 300, height: 180, background: '#eee', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
            {profilePhoto ? (
              <img src={profilePhoto} alt="Profile Preview" style={{ width: 100, height: 100, borderRadius: '50%', objectFit: 'cover' }} />
            ) : (
              <svg width="80" height="80" fill="#bbb" viewBox="0 0 24 24"><path d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2ZM5 5h14v7.382l-2.276-2.276a2 2 0 0 0-2.828 0l-2.276 2.276-2.276-2.276a2 2 0 0 0-2.828 0L5 12.382V5Zm0 14v-2.618l4-4 2.276 2.276a2 2 0 0 0 2.828 0L19 12.382V19H5Z"/></svg>
            )}
          </div>
          <label htmlFor="profilePhotoInput" style={{ display: 'block', marginBottom: 8 }}>
            <input id="profilePhotoInput" type="file" accept="image/*" style={{ display: 'none' }} onChange={handlePhotoChange} />
            <span style={{ border: '2px solid #0A2B73', color: '#0A2B73', padding: '8px 28px', borderRadius: 2, fontWeight: 700, cursor: 'pointer', background: '#fff', fontSize: 17, display: 'inline-block' }}>
              Upload Profile Photo
            </span>
          </label>
          <div style={{ color: '#888', fontSize: 15, marginTop: 4, textAlign: 'center' }}>
            (Dimension: 200px by 200px Maximum<br />Size: 2MB)
          </div>
        </div>
      </form>
      <button type="submit" form="" style={{ margin: '32px auto 0 auto', display: 'block', background: '#0A2B73', color: '#fff', border: 'none', borderRadius: 4, padding: '8px 0', fontWeight: 700, fontSize: 16, width: '150px', maxWidth: '100%', height: '42px', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
        Create
      </button>
    </div>
  );
};

export default AccountManagement; 