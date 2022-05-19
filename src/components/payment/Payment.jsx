import React, {useState, useEffect} from "react";
import axios from "axios";
import AuthHelper from '../utils/AuthHelper'
import StorageHelper from '../utils/StorageHelper'
import  "./payment.css";
import { useNavigate } from "react-router-dom";



const Payment = () => {

    const transactionReferencer = StorageHelper.getItem('transactionreference');
    const token = AuthHelper.getUserDetails().token;
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault()

    try{
      axios.post(
        `https://chomp-food.herokuapp.com/payment/verifyPayment`,
        {
          transactionreference:transactionReferencer
          },{
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }).then(response => {console.log("Product response " + response)
          navigate('/') 
          
        })
          
          
     
  }catch(e){
      console.log(e.message);
  }
    }
  return (
      <>
    <form style={{margin:'200px auto'}}>
        <div class="miniPaymentPage" style={{textAlign:'center'}}>
        <p class="payment-text"  style={{paddingBottom:'50px'}}>click to verify transaction</p>
        <button class="button" onClick={(e)=> handleClick(e)}>Verify Transaction</button>
    </div>
    </form>
    </>

  )
}

export default Payment