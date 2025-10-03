import React from 'react'

function ShopNavbar({ tabs, active, onChange }) {
  if (!tabs || tabs.length === 0) return null
  return (
    <div className="tabs">
      {tabs.map(t => (
        <button
          key={t}
          className={`tab ${active === t ? 'tab--active' : ''}`}
          onClick={() => onChange(t)}
        >
          {t}
        </button>
      ))}
    </div>
  )
}

export default ShopNavbar


