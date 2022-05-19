import React, { useEffect, useState} from 'react';
import './FundWallet.css';
import { useNavigate } from "react-router-dom"
import axios from 'axios';
import AuthHelper from "../utils/AuthHelper"
function FundWallet() {
const [amount, setAmount] = useState();
const [disabled, setDisabled] = useState(false);
const url = 'https://chomp-food.herokuapp.com/user/wallet/fundwallet'
const token = AuthHelper.getUserDetails().token
console.log(token);
const axiosconfig = {
headers:{
Authorization : `Bearer ${token}`,
"Content-Type": "application/json"
}
}
// const [redirect, setRedirect] = useState(false);
// const handleClick = () => {
// setReDirect(true);
// }
// const handleClick = () => {
// setRedirect(true);
// }
// useEffect(() => {
// }, [])
const handleSubmit = async(e) => {
e.preventDefault()
if(amount){
let nums = parseInt(amount);
console.log(amount)
try{
// let response = 
const backendResponse = await axios.post(url,{amount:nums}, axiosconfig);
const {authorization_url} = backendResponse.data.data
window.location.replace(authorization_url);
// console.log("->",response)
}catch(err){
console.log(err)
}
}else{
console.log('Enter an amount')
}
}
// console.log(amount, 'amount')
// console.log('Enter an amount')
const redirect = useNavigate();
return (
<div className='fundwallet'>
<form className='fundwallet__container'>
<p className='fundwallet__title'> Fund Wallet</p>
<div className='fundwallet__input__box'>
<input type="text" className='fundwallet__input' value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='enter amount' required/>
</div>
<div className='fundwallet__btn__box'>
{/* <button type="submit" disabled={disabled} onClick={() => {
if (amount) {
setDisabled(true);
redirect("https://chomp-food.herokuapp.com/user/wallet/fundwallet")
return;
} else {
setDisabled(false)
}
}} className='fundwallet__btn'> click </button> */}
<button type="button" onClick={handleSubmit} className="fundwallet__btn">Click</button>
</div>
{/* <button onClick = {e => alert(e.currentTarget.textContent)}>sanity check</button> */}
</form>
</div>
);
}
export default FundWallet;