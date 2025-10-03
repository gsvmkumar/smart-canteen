import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

function ProfileMenu() {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function onDoc(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('click', onDoc)
    return () => document.removeEventListener('click', onDoc)
  }, [])

  return (
    <div className="profile" ref={ref}>
      <button className="btn" onClick={() => setOpen(o => !o)} aria-expanded={open}>
        Profile
      </button>
      {open && (
        <div className="dropdown">
          <Link to="/profile" onClick={() => setOpen(false)}>Profile</Link>
          <Link to="/cart" onClick={() => setOpen(false)}>Cart</Link>
        </div>
      )}
    </div>
  )
}

export default ProfileMenu


