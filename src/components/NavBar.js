import React from 'react'
import { Link } from 'react-router-dom'
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import "./NavBar.css";

function NavBar() {
  return (
    <div className="NavBar">
      <div className="links">
      <Link to="/" >Shop</Link>
      <Link to="/cart" ><ShoppingCartSharpIcon ></ShoppingCartSharpIcon>Cart</Link>
    </div>
    </div>
  )
}

export default NavBar
