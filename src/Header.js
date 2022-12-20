import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const[{basket, user}, dispatch] = useStateValue();
  
  const handleAuthentication = () =>{
    if(user){
      auth.signOut();
    }
  }
  
  
  
  
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Symbol.jpg"
        />
      </Link>

      <div className="Location">
        <PlaceOutlinedIcon className="location" />
      </div>
      <div className="header_option">
        <span className="header_optionLineOne">Hello</span>
        <span className="header_optionLineTwo">Select your address</span>
      </div>
      <div className="header_search">
        <input className="header_searchInput" type="text"></input>
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to={!user && '/Loginpage'}>
        <div onClick={handleAuthentication} className="header_option">
          <span className="header_optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
          <span className="header_optionLineTwo">{user ? 'Sign Out':'Sign In'}</span>
        </div>
        </Link>

        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
        <Link to="checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLineTwo header_BasketCount">
              {basket?.length}
              </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
