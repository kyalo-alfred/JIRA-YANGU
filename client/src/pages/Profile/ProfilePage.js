// Import React and hooks for state management
import React, { useState } from 'react';
// Import CSS for profile page styling
import '../../assets/css/profile.css';

// Default avatar SVG for users without uploaded avatars
const DEFAULT_AVATAR =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 90 90"><circle cx="45" cy="45" r="45" fill="%23d1fae5"/><circle cx="45" cy="38" r="18" fill="%23a7f3d0"/><ellipse cx="45" cy="70" rx="25" ry="15" fill="%23a7f3d0"/></svg>';

// Mock user data for demonstration
const mockUser = {
  name: 'Jane Doe',
  email: 'jane.doe@email.com',
  phone: '+254 712 345678',
  avatar: '', // Start with no avatar
  bio: 'Full Stack Developer passionate about building impactful solutions.'
};

// ProfilePage component: User profile management with edit functionality
function ProfilePage() {
  // State for user data
  const [user, setUser] = useState(mockUser);
  // State to track edit mode
  const [editMode, setEditMode] = useState(false);
  // State for form data during editing
  const [form, setForm] = useState(user);
  // State for avatar preview during editing
  const [avatarPreview, setAvatarPreview] = useState(user.avatar || DEFAULT_AVATAR);

  // Handle form field changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Enable edit mode
  const handleEdit = () => {
    setEditMode(true);
  };

  // Cancel editing and reset form
  const handleCancel = () => {
    setForm(user);
    setAvatarPreview(user.avatar || DEFAULT_AVATAR);
    setEditMode(false);
  };

  // Save profile changes
  const handleSave = (e) => {
    e.preventDefault();
    setUser({ ...form, avatar: avatarPreview === DEFAULT_AVATAR ? '' : avatarPreview });
    setEditMode(false);
  };

  // Handle avatar file upload
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
        {/* Avatar display with preview during edit */}
        <img
          src={editMode ? avatarPreview : user.avatar || DEFAULT_AVATAR}
          alt="Avatar"
          className="profile-avatar"
        />
        <form onSubmit={handleSave}>
          {/* File upload for avatar in edit mode */}
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
            {/* Name field */}
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
            {/* Email field */}
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
            {/* Phone field */}
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
            {/* Bio field */}
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
          {/* Action buttons: Save/Cancel in edit mode, Edit in view mode */}
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