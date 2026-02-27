import React from 'react'
import { Link } from 'react-router-dom'
import { useResponsive } from '../hooks/useResponsive.js'

function ShopBox({ to, title, closed, image }) {
  const { isMobile } = useResponsive()
  
  if (closed) return null
  
  return (
    <Link to={to} className={`shop-box ${isMobile ? 'mobile' : 'desktop'}`}>
      {image && <img src={image} alt={title} className="shop-box__image" />}
      <div className="shop-box__title">{title}</div>
    </Link>
  )
}
export default ShopBox


