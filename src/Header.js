import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import {useStateValue} from "./StateProvider";
import {auth} from './firebase';

function Header() {

  const[{basket,user}]=useStateValue();

  const handleAuthentication=()=>{
      if(user){
          auth.signOut();
      }
  }

  return (
    <div className="header">
        <Link to="/">
        <img 
        className="header-logo" 
        src="https://play-lh.googleusercontent.com/G7jAks-PRl4d7IkL-s3Ir44nGyPq0Yh872N5UMwZYIJz4wG1Oj0DqoQjsAR5ddKZbQ"
         alt=""/>

        </Link>
        <div className="header_search">
            <input className="header_searchInput" 
            type="text"/>
            <SearchIcon className="header_searchIcon" />
        </div>

        <div className="header_nav">
            <Link to={!user&&"/login"}>
            <div  onClick={handleAuthentication} className="header_option">
                <span className="header_optionLineOne">{user ?user.email:'Hello Guest'}</span>
                <span className="header-optionLineTwo">
                    {user ?'Sign Out':'Sign In'}
                </span>
            </div>
            </Link>

            <div className="header_option">
                <span className="header_optionLineOne">Returns</span>
                <span className="header-optionLineTwo">Orders</span>
            </div>

            <div className="header_option">
                <span className="header_optionLineOne">Your</span>
                <span className="header-optionLineTwo">Prime</span>
            </div>

            <Link to="/checkout">
                <div className="header_optionBasket">
                    <ShoppingBasketIcon/>
                    <span className="header_optionLineTwo
                    header_basketCount">{basket?.length}</span>
                </div>
            </Link>
        </div>
    </div>

  )
}

export default Header