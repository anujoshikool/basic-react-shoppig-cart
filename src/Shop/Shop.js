import React from 'react'
import Product  from './Product'
import   {PRODUCTS }  from '../Products'
import './shop.css'

function Shop() {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Shop</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  )
}

export default Shop
