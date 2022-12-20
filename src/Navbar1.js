import React from 'react'
import "./Navbar1.css";
import MenuIcon from "@mui/icons-material/Menu";

function navbar() {
  return (
    <div className="list_items">
      <ul>
      <li><MenuIcon className="menu"/></li>
        <li> <a href="">All</a></li>
        <li> <a href="">Best Seller</a> </li>
        <li> <a href="">Mobiles</a> </li>
        <li> <a href="">Books</a> </li>
        <li> <a href="">Customer Service</a> </li>
        <li> <a href="">Today's Deals</a> </li>
        <li> <a href="">Electronics</a> </li>
        <li> <a href="">Fashion</a> </li>
        <li> <a href="">Prime</a> </li>
        <li> <a href="">New Releases</a> </li>
        <li> <a href="">Home & kitchen</a> </li>
        <li> <a href="">Amazon Pay</a> </li>
        <li> <a href="">Computers</a> </li>
        <li> <a href="">Coupon</a> </li>
        <li> <a href="">Sell</a> </li>
        <li> <a href="">Toy & Games</a> </li>
        <li> <a href="">Car & Motoebike</a> </li>
        
      </ul>
    </div>
   
  )
}

export default navbar
