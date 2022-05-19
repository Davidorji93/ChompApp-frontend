import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./DesktopNavbar.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchProductFilter from "../../searchProductFilter/searchProductFilter";
import AuthHelper from "../../utils/AuthHelper";
import StorageHelper from "../../utils/StorageHelper";
import { useAuth } from "../../security/auth";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const DesktopNavbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true);
  const auth = useAuth();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <div className="header__badge">
        <p>We are now open and available for delivery. Call +2347030490674</p>
      </div>

      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img
            style={{ width: "70px", height: "70px" }}
            className="navbar-logo-image"
            src="public/assets/logo1.png"
            alt="Logo"
          />
        </Link>

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>

        <div className="navbar-search-box">
          <SearchProductFilter />
        </div>

        <ul
          style={{ backgroundColor: "", display: "flex", alignItems: "center" }}
          className={click ? "nav-menu active" : "nav-menu"}
        >
          <li
            className="nav-item"
            onClick={!dropdown ? onMouseEnter : onMouseLeave}
            // onClick={}
          >
            <div
              // to='/services'
              style={{ display: "flex", alignItems: "center" }}
              className="myNavbar-nav-links"
              onClick={closeMobileMenu}
            >
              {AuthHelper.isLoggedIn() ? (
                <div className="login">
                  <NavLink
                    style={{
                      color: "brown",
                      marginRight: "5px",
                      fontSize: "25px",
                      borderBottom: "none",
                    }}
                    to="/"
                  >
                    <i className="fa fa-user"></i>
                  </NavLink>
                </div>
              ) : (
                <div className="myNavbar-login">
                  <NavLink
                    style={{
                      color: "black",
                      textDecoration: "none",
                      marginRight: "5px",
                      fontSize: "18px",
                      borderBottom: "none",
                    }}
                    to="/login"
                  >
                    {" "}
                    Login
                  </NavLink>
                </div>
              )}
              {/* {
                  auth.user ?( 
                  <NavLink className={"user-login"} to="login">
                    login
                  </NavLink>) :(
                      <NavLink className={"user-login"} to="user">
                      username  
                    </NavLink>
                  )
            } */}

              <i className="fas fa-caret-down" />
            </div>
            {dropdown && <Dropdown />}
          </li>

          <li>
            <NavLink to="/cart" className="myNavbar__cart__button">
              {/* <img
                src="http://assets.stickpng.com/thumbs/59bedb1e7a216d0b052f128b.png"
                style={{ height: "40px", width: "40px", marginTop: "-5px" }}
                alt=""
              /> */}
              <ShoppingCartOutlinedIcon style={{ height: "40px", width: "40px", marginTop: "-5px", color:"black" }}>

              </ShoppingCartOutlinedIcon>

              <span className="cart__count">
                {StorageHelper.getItem("cart-count") || 0}
              </span>
            </NavLink>
          </li>

          {/* <li>
            <Link
              to="/sign-up"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li> */}
        </ul>
        {/* <Button /> */}
      </nav>
    </>
  );
};

export default DesktopNavbar;

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        <li>
          <Link
            className={"dropdown-link"}
            to={"/"}
            onClick={() => setClick(false)}
          >
            <i className="fa fa-user"></i> {"Home"}
          </Link>
        </li>
        {AuthHelper.isLoggedIn() && (
          <li>
            <Link
              className={"dropdown-link"}
              to={"/order"}
              onClick={() => setClick(false)}
            >
              <i className="fa fa-credit-card"></i> {"Order"}
            </Link>
          </li>
        )}
        <li>
          <Link
            className={"dropdown-link"}
            to={"/company"}
            onClick={() => setClick(false)}
          >
            <i className="fa fa-industry"></i> {"Company"}
          </Link>
        </li>
        <li>
          <Link
            className={"dropdown-link"}
            to={"/"}
            onClick={(e) => {
              setClick(false);
              e.preventDefault();
              AuthHelper.logout();
              window.location.to = "/login";
            }}
          >
            <i className="fa fa-sign-out"></i> {"Logout"}
          </Link>
        </li>
      </ul>
    </>
  );
}

function Button() {
  return (
    <Link to="sign-up">
      <button className="navbar-btn">Sign Up</button>
    </Link>
  );
}
