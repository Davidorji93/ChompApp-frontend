import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./UserDashboard.css";
import SearchProductFilter from "../searchProductFilter/searchProductFilter";
import UsersEditForm from "./usersEditform/UsersEditForm";
import FundWallet from "../fundWallet/FundWallet";
import { useAuth } from "../security/auth";
import { useNavigate } from 'react-router-dom'
const UsersDashboard = () => {
  const [sideBarResponsive, setSideBarResponsive] = useState(true);
  const [openUserForm, setOpenUserForm] = useState(false);
  const [openUserAdressForm, setOpenUserAdressForm] = useState(false);
  const [isSubscriptionFormOpen, setIsSubscriptionFormOpen] = useState(false);
  const [isAccountDetailsFormOpen, setIsAccountDetailsFormOpen] = useState(false);
  const [usersWallet, setUsersWallet] = useState(false)
  const auth = useAuth()
  const navigate = useNavigate();

  const handleLogout = ()=>{
    auth.logout();
    navigate('/')
  }


  const handleResponsiveness = () => {
    setSideBarResponsive(true);
  };
  const toggleSidebar = () => {
    setSideBarResponsive(false);
  };

  const openPersonalInfoForm = (e) =>{
    e.preventDefault();
    setOpenUserForm(true)
    setOpenUserAdressForm(false)
    setIsAccountDetailsFormOpen(false)
    setIsSubscriptionFormOpen(false)
    setUsersWallet(false)
  }
  const openAdressForm = (e) =>{
    e.preventDefault()
    setOpenUserAdressForm(true)
    setOpenUserForm(false)
    setIsAccountDetailsFormOpen(false)
    setIsSubscriptionFormOpen(false)
    setUsersWallet(false)

  }
  const openSubscriptionForm = (e) =>{
    e.preventDefault()
    setIsSubscriptionFormOpen(true)
    setOpenUserForm(false)
    setOpenUserAdressForm(false)
    setIsAccountDetailsFormOpen(false)
    setUsersWallet(false)
  }
  const openFundWalletForm = (e) =>{
    e.preventDefault()
    setUsersWallet(true)
    setOpenUserAdressForm(false)
    setOpenUserForm(false)
    setIsAccountDetailsFormOpen(false)
    setIsSubscriptionFormOpen(false)

  }
  
  return (
    <>
      <div className="users__dashboard__container">
        <nav className="users__dashboard__navbar">
          <div className="users__dashboard__nav_icon" onClick={toggleSidebar}>
            <i className="fa fa-bars" aria-hidden="true"></i>
          </div>
          <div  className="users__dashboard__navbar__left">
          {/* <SearchProductFilter /> */}

            {/* <a href="#">Subscribers</a>
        <a href="#">Video Management</a>
        <a className="users__dashboard__active_link" href="#">Admin</a>  */}
          </div>
          <div className="users__dashboard__navbar__right">
            <a href="#">
              <i className="fa fa-search" aria-hidden="true"></i>
            </a>
            <a href="#">
              <i className="fa fa-clock" aria-hidden="true"></i>
            </a>
            <a className="users__dashboard__avartar__link" href="#">
              <AccountCircleIcon className="users__dashboard__avartar" />
              {/* <i className="fa fa-user-circle-o" aria-hidden="true"></i>  */}
            </a>
          </div>
        </nav>

        <main>
          <div className="users__dashboard__main__title">

            <img src="assets/hello.svg" alt="" />
            <div className="users__dashboard__main__greeting">
              <h1>Hello {auth.user}</h1>
              <p>Welcome to your account dashboard</p>
            </div>

          </div>


          <div className="users__dashboard__charts">

            { !openUserForm?

            
            <div className="users__dashboard__charts__left">
              <div className="users__dashboard__charts__left__title">
                <div>
                  <h1>Personal Information</h1>
                  <p>Osinachi Uchenna</p>
                </div>
                <i className="fa fa-user" aria-hidden="true"></i>
              </div>
              <br />
              <div className="users__dashboard__charts__left__info">
                <div>
                  <p>ogbodouchenna1425@gmail.com</p>
                  <p>Osinachi Uchenna</p>
                </div>
                <a onClick={openPersonalInfoForm} href="#">
                  <i className="fa fa-pencil" aria-hidden="true"></i>
                </a>
              </div>
            </div>: <UsersEditForm/>
            }

            {  !openUserAdressForm?
                   <div className="users__dashboard__charts__left">
                   <div className="users__dashboard__charts__left__title">
                     <div>
                       <h1>Address & shipping details</h1>
                       <p>Lagos state</p>
                     </div>
                     <i className="fa fa-truck" aria-hidden="true"></i>
                   </div>
                   <br />
     
                   <div className="users__dashboard__charts__left__info">
                     <div>
                       <p>chomp house</p>
                       <p>Chomp house</p>
                     </div>
                     <a onClick={openAdressForm} href="#">
                       <i className="fa fa-pencil" aria-hidden="true"></i>
                     </a>
                   </div>
                 </div> : <UsersEditForm/>
            }

           
           {  !isSubscriptionFormOpen?
                     <div className="users__dashboard__charts__left">
                     <div className="users__dashboard__charts__left__title">
                       <div>
                         <h1>Subscriptions</h1>
                         <p></p>
                       </div>
                       <i className="fa fa-user" aria-hidden="true"></i>
                     </div>
                     <br />
       
                     <div className="users__dashboard__charts__left__info">
                       <div>
                         <span className="users__dashboard__subscribe__checkbox">
                           subscribe to our newsletter{" "}
                         </span>
                         <input type="checkbox" />
                       </div>
                       <a href="#" onClick={openSubscriptionForm}>
                         <i  className="fa fa-pencil" aria-hidden="true"></i>
                       </a>
                     </div>
                   </div> : <UsersEditForm/>

           }




        {  !usersWallet?
                     <div className="users__dashboard__charts__left">
                     <div className="users__dashboard__charts__left__title">
                       <div>
                         <h1>Subscriptions</h1>
                         <p></p>
                       </div>
                       <i className="fa fa-user" aria-hidden="true"></i>
                     </div>
                     <br />
       
                     <div className="users__dashboard__charts__left__info">
                       <div>
                         <span className="users__dashboard__subscribe__checkbox">
                           subscribe to our newsletter{" "}
                         </span>
                         <input type="checkbox" />
                       </div>
                       <a href="#" onClick={openFundWalletForm}>
                         <i  className="fa fa-pencil" aria-hidden="true"></i>
                       </a>
                     </div>
                   </div> : <FundWallet/>

           }




         {/* {  !isAccountDetailsFormOpen?
                  <div className="users__dashboard__charts__right">
                  <div className="users__dashboard__charts__right__title">
                    <div>
                      <h1>Account details</h1>
                    </div>
                    <i className="fa fa-dollar-sign" aria-hidden="true"></i>
                  </div>
                  <div className="users__dashboard__charts__right__cards">
                    <div className="users__dashboard__charts__right__title">
                      <div>
                        <p></p>
                        <p>Wallet Balance</p>
                      </div>
                      <a href="#" onClick={openSubscriptionForm}>
                         <i  className="fa fa-pencil" aria-hidden="true"></i>
                       </a>
                    </div>
                  </div>
                </div>:  <UsersEditForm/>
         } */}

          




          </div>
        </main>

        <div
          className={
            !sideBarResponsive ? "users__dashboard__sidebar_responsive" : ""
          }
          id="sidebar"
        >
          <div className="users__dashboard__sidebar__title">
            <div className="users__dashboard__sidebar__img">
              <img
                src="https://uploads-ssl.webflow.com/5e865e09d8efa3310676b585/5e865e09d8efa3cf8176b5c2_Logo.png"
                alt="logo"
              />
              <h1 style={{ marginRight: "10px" }}>ChompApp </h1>
            </div>
            <i
              onClick={handleResponsiveness}
              className="fa fa-times"
              id="sidebarIcon"
              aria-hidden="true"
            ></i>
          </div>

          <div className="users__dashboard__sidebar__menu">
            <div className="users__dashboard__sidebar__link active_menu_link">
              <i className="fa fa-home"></i>
              <a href="/">Home</a>
            </div>
            <h2>Account</h2>
            <div className="users__dashboard__sidebar__link">
              <i className="fa fa-user" aria-hidden="true"></i>
              <a href="#">My Account Info</a>
            </div>
            <div className="users__dashboard__sidebar__link">
              <i className="fa fa-heart"></i>
              <a href="#">favorites</a>
            </div>
            <div className="users__dashboard__sidebar__link">
              <i className="fa fa-envelope"></i>

              <a href="#">Inbox</a>
            </div>
            <div className="users__dashboard__sidebar__link">
              <i className="fa fa-archive"></i>
              <a href="#">Pending orders</a>
            </div>
            <div className="users__dashboard__sidebar__link">
              <i className="fa fa-handshake"></i>
              <a href="#">orders</a>
            </div>
            <h2>Others</h2>
            <div className="users__dashboard__sidebar__link">
              <i className="fa fa-question"></i>
              <a href="#">FAQ</a>
            </div>

            <div className="users__dashboard__sidebar__link">
              <i className="fa fa-office"></i>
              <a href="#">Know more</a>
            </div>

            <div className="users__dashboard__sidebar__logout">
              <i className="fa fa-power-off"></i>
              <a href="#">Log out</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersDashboard;
