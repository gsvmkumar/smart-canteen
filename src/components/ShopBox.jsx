import React from 'react'
import { Link } from 'react-router-dom'

function ShopBox({ to, title, closed, image }) {
  if (closed) return null
  return (
    <Link to={to} className="shop-box">
      {image && <img src={image} alt={title} className="shop-box__image" />}
      <div className="shop-box__title">{title}</div>
    </Link>
  )
}
export default ShopBox


