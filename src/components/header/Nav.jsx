import React, { useState } from "react";
import "./Nav.css";
import { menuitems } from "./MenuItems";
import AuthHelper from '../utils/AuthHelper';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";


const Nav = () => {
  const [clicked, setClicked] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <div className="navbar-responsive">
        <div className="header__badge">
          <p>
            We are now open and available for delivery. Call +2347030490674
          </p>
        </div>

        <nav className="navbarItems" id="home">
          <div style={{marginLeft:'10px'}}>
            <a href="/">
              <img
                src="assets/logo1.png"
                alt="Logo"
              />
            </a>
          </div>

          <ul className={clicked ? "nav-menu-responsive active" : "nav-menu-responsive"}>
            {menuitems.map((item, index) => {
              return (
                <li key={index}>
                  <a className={item.cName} href={item.url}>
                    {item.text}
                  </a>
                </li>
              );
            })}
          </ul>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >

        {!AuthHelper.isLoggedIn() && <div className="login"><a href="/login">Login</a></div>}
               {AuthHelper.isLoggedIn() && <>
                        <div className="login"><a href="/user"><i className='fa fa-user fa-lg'></i></a></div>
                        {/* <a className="users__dashboard__avartar__link" href="/user">
                <AccountCircleIcon className="users__dashboard__avartar" />
              </a> */}
                        <div className="login logout"><a href="#" onClick={(e)=>{
                            e.preventDefault();
                            AuthHelper.logout();
                            window.location.href = "/login"
                        }}>Logout</a></div>
               </>
               }

           {/* {!loggedIn ? (
              <div className="login">
                <a href="/login">login</a>
              </div>
            ) : (
              <a className="users__dashboard__avartar__link" href="/user">
                <AccountCircleIcon className="users__dashboard__avartar" />
              </a>
            )}  */}

              {/* <Link to="/cart" className="cart__button"><i className="fa fa-shopping-cart"></i>
                <span className="cart__count">{StorageHelper.getItem('cart-count') || 0}</span>
                </Link> */}

            <button className="burger__menu" onClick={handleClick}>
              <i className={clicked ? "fa fa-times" : "fa fa-bars"}></i>
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Nav;