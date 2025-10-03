import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Profile() {
  const navigate = useNavigate()
  const { username } = useAuth()
  
  // Load user data from localStorage or use defaults
  const getUserData = () => {
    const savedUser = localStorage.getItem('userProfile')
    if (savedUser) {
      return JSON.parse(savedUser)
    }
    return {
      name: username || 'User',
      email: `${username || 'user'}@example.com`,
      phone: '+91 9876543210',
      address: 'Enter your address here',
      rollNumber: 'CS21B1001',
      department: 'Computer Science',
      year: '3rd Year',
      hostel: 'Block A, Room 301'
    }
  }

  const [user, setUser] = useState(getUserData())
  const [editing, setEditing] = useState(false)
  const [formData, setFormData] = useState(user)

  // Update user data when username changes
  useEffect(() => {
    if (username && user.name !== username) {
      const updatedUser = {
        ...user,
        name: username,
        email: `${username}@example.com`
      }
      setUser(updatedUser)
      setFormData(updatedUser)
      localStorage.setItem('userProfile', JSON.stringify(updatedUser))
    }
  }, [username])

  const handleSave = () => {
    setUser(formData)
    setEditing(false)
    // Save to localStorage
    localStorage.setItem('userProfile', JSON.stringify(formData))
  }

  const handleCancel = () => {
    setFormData(user)
    setEditing(false)
  }

  return (
    <div style={{ 
      padding: "20px 40px",
      backgroundColor: "#f8f9fa",
      minHeight: "100vh"
    }}>
      {/* Header */}
      <div style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "32px"
      }}>
        <button
          onClick={() => navigate("/")}
          style={{
            padding: "8px 16px",
            backgroundColor: "#6c757d",
            color: "white",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
            marginRight: "16px",
            fontSize: "14px"
          }}
        >
          ← Back to Home
        </button>
        <h1 style={{
          margin: 0,
          fontSize: "28px",
          fontWeight: "700",
          color: "#333"
        }}>
          My Profile
        </h1>
      </div>

      <div style={{ maxWidth: '600px' }}>
        <div style={{ background: 'white', padding: '32px', borderRadius: '12px', border: '1px solid #e5e7eb' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '32px' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#ff6b35', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '32px', fontWeight: 'bold', marginRight: '20px' }}>
              {user.name.charAt(0)}
            </div>
            <div>
              <h3 style={{ margin: '0 0 4px 0', fontSize: '24px' }}>{user.name}</h3>
              <p style={{ margin: 0, color: '#6b7280' }}>{user.email}</p>
            </div>
          </div>

          {!editing ? (
            <div>
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#374151' }}>Name</label>
                <p style={{ margin: 0, padding: '12px', background: '#f9fafb', borderRadius: '8px' }}>{user.name}</p>
              </div>
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#374151' }}>Email</label>
                <p style={{ margin: 0, padding: '12px', background: '#f9fafb', borderRadius: '8px' }}>{user.email}</p>
              </div>
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#374151' }}>Phone</label>
                <p style={{ margin: 0, padding: '12px', background: '#f9fafb', borderRadius: '8px' }}>{user.phone}</p>
              </div>
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#374151' }}>Address</label>
                <p style={{ margin: 0, padding: '12px', background: '#f9fafb', borderRadius: '8px' }}>{user.address}</p>
              </div>
              <button 
                onClick={() => setEditing(true)}
                style={{ background: '#ff6b35', color: 'white', border: 'none', padding: '12px 24px', borderRadius: '8px', fontWeight: '600', cursor: 'pointer' }}
              >
                Edit Profile
              </button>
            </div>
          ) : (
            <div>
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#374151' }}>Name</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  style={{ width: '100%', padding: '12px', border: '1px solid #e5e7eb', borderRadius: '8px', fontSize: '16px' }}
                />
              </div>
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#374151' }}>Email</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  style={{ width: '100%', padding: '12px', border: '1px solid #e5e7eb', borderRadius: '8px', fontSize: '16px' }}
                />
              </div>
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#374151' }}>Phone</label>
                <input 
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  style={{ width: '100%', padding: '12px', border: '1px solid #e5e7eb', borderRadius: '8px', fontSize: '16px' }}
                />
              </div>
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#374151' }}>Address</label>
                <textarea 
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  rows={3}
                  style={{ width: '100%', padding: '12px', border: '1px solid #e5e7eb', borderRadius: '8px', fontSize: '16px', resize: 'vertical' }}
                />
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button 
                  onClick={handleSave}
                  style={{ background: '#ff6b35', color: 'white', border: 'none', padding: '12px 24px', borderRadius: '8px', fontWeight: '600', cursor: 'pointer' }}
                >
                  Save Changes
                </button>
                <button 
                  onClick={handleCancel}
                  style={{ background: '#f3f4f6', color: '#374151', border: 'none', padding: '12px 24px', borderRadius: '8px', fontWeight: '600', cursor: 'pointer' }}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Profile
