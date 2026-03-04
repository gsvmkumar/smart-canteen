import React from 'react'
import ShopBox from '../components/ShopBox.jsx'
import { useResponsive } from '../hooks/useResponsive.js'
import { useCanteenData } from '../context/CanteenDataContext.jsx'
import './pages.css'

function Home() {
  const { isMobile } = useResponsive()
  const { shops } = useCanteenData()
  
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


