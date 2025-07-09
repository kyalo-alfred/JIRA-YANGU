import React, { useState } from 'react';
import '../../assets/css/profile.css';

const DEFAULT_AVATAR =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 90 90"><circle cx="45" cy="45" r="45" fill="%23d1fae5"/><circle cx="45" cy="38" r="18" fill="%23a7f3d0"/><ellipse cx="45" cy="70" rx="25" ry="15" fill="%23a7f3d0"/></svg>';

const mockUser = {
  name: 'Jane Doe',
  email: 'jane.doe@email.com',
  phone: '+254 712 345678',
  avatar: '', // Start with no avatar
  bio: 'Full Stack Developer passionate about building impactful solutions.'
};

function ProfilePage() {
  const [user, setUser] = useState(mockUser);
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState(user);
  const [avatarPreview, setAvatarPreview] = useState(user.avatar || DEFAULT_AVATAR);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleCancel = () => {
    setForm(user);
    setAvatarPreview(user.avatar || DEFAULT_AVATAR);
    setEditMode(false);
  };

  const handleSave = (e) => {
    e.preventDefault();
    setUser({ ...form, avatar: avatarPreview === DEFAULT_AVATAR ? '' : avatarPreview });
    setEditMode(false);
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>My Profile</h2>
      </div>
      <div className="profile-card">
        <img
          src={editMode ? avatarPreview : user.avatar || DEFAULT_AVATAR}
          alt="Avatar"
          className="profile-avatar"
        />
        <form onSubmit={handleSave}>
          {editMode && (
            <div style={{ marginBottom: '1rem' }}>
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                style={{ display: 'block', margin: '0 auto' }}
              />
            </div>
          )}
          <div className="profile-info">
            <div>
              <span className="profile-label">Name:</span>
              {editMode ? (
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              ) : (
                <span>{user.name}</span>
              )}
            </div>
            <div>
              <span className="profile-label">Email:</span>
              {editMode ? (
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              ) : (
                <span>{user.email}</span>
              )}
            </div>
            <div>
              <span className="profile-label">Phone:</span>
              {editMode ? (
                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                />
              ) : (
                <span>{user.phone}</span>
              )}
            </div>
            <div>
              <span className="profile-label">Bio:</span>
              {editMode ? (
                <textarea
                  name="bio"
                  value={form.bio}
                  onChange={handleChange}
                  rows={2}
                />
              ) : (
                <span>{user.bio}</span>
              )}
            </div>
          </div>
          {editMode ? (
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button type="submit" className="edit-btn">Save</button>
              <button type="button" className="edit-btn" style={{ background: '#ccc', color: '#222' }} onClick={handleCancel}>Cancel</button>
            </div>
          ) : (
            <button type="button" className="edit-btn" onClick={handleEdit}>Edit Profile</button>
          )}
        </form>
      </div>
    </div>
  );
}

export default ProfilePage; 