import React from 'react'
import ShopBox from '../components/ShopBox.jsx'
import { shops } from '../data/shops.js'
import { useResponsive } from '../hooks/useResponsive.js'
import './pages.css'

function Home() {
  const { isMobile } = useResponsive()
  
  return (
    <div className="container">
      <h2>Shops</h2>
      <div className={`shops-grid ${isMobile ? 'mobile-view' : 'desktop-view'}`}>
        {shops.filter(s => s.open).slice(0,5).map(s => (
          <ShopBox key={s.id} to={s.route} title={s.title} closed={!s.open} image={s.image} />
        ))}
      </div>
    </div>
  )
}

export default Home


