import React from "react";
import { useNavigate } from 'react-router-dom'
import AuthHelper from "../utils/AuthHelper";

import "./Cart.css";
const Subtotal = ({ subTotal, count }) => {
  const navigate = useNavigate();

  const token = AuthHelper.getUserDetails().token;
  let isLoggedIn = false;
  if (token != null || token != undefined){
    isLoggedIn = true;
  }

  return (
    <div className="cart__subtotal">
      <h4
        style={{
          padding: 10,
          color: "#f00",
          width: "100%",
          borderBottom: "2px solid #eee",
        }}
      >
        CART SUMMARY
      </h4>
      <div className="cart_summary_box">
        <div className="subtotal">
          <span>Number of Items : </span>
          <span>{count}</span>
        </div>
        <div className="subtotal">
          <span> Subtotal: </span>
          <span> ₦ {subTotal}</span>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          padding: "0 10px",
          bottom: 5,
          display: "flex",
          justifyContent: "space-evenly",
          backgroundColor:"#fff",
        }}
      >
        <button className="continue_shopping" onClick={() => {
          navigate('/');
        }}>Continue Shopping</button>
        <button className="cart_proceed_checkout_button" onClick={() => {
           //this should be a global state
          isLoggedIn ? navigate('/checkout') : navigate('/login')
        }}>Checkout</button>
      </div>
    </div>
  );
};

export default Subtotal;
