import Checkout from "../checkoutPage/Checkout";
import "./ItemsInOrder.css";
import React, {useState, useEffect} from "react";
import axios from "axios";
import AuthHelper from '../utils/AuthHelper'
import StorageHelper from '../utils/StorageHelper'
import ItemOrderCard from "./ItemOrderCard";
import { useNavigate } from 'react-router-dom'




const ItemsInOrder = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [errorMessage, setErrorMessage] = useState("");
  const [menu, setMenu] = useState([])

  const [email, setEmail] = useState("")
  const [street, setStreet] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [phone, setPhone] = useState("")
  const [fullName, setFullName] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("")
  const [subTotal, setSubTotal] = useState()

  const token = AuthHelper.getUserDetails().token;
  const navigate = useNavigate();


  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  }

  

  const handleCheckoutSubmit = (e)=>{
      e.preventDefault()

      try{
        axios.post(
          `https://chomp-food.herokuapp.com/user/shipping-address`,
          {
              fullName: fullName,
              city: city,
              email: email,
              state: state,
              street: street
            },{
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }).then(response => {console.log("Product response " + response)})
            StorageHelper.saveItem('paymentmethod', paymentMethod)
            console.log(paymentMethod)
       
    }catch(e){
        console.log(e.message);
    }


    //creating the order
   
      const createOrders = async () => {
        const response = await fetch("https://chomp-food.herokuapp.com/user/new/order",
          { 
            method: 'post', 
            headers: new Headers({
              'Authorization': `Bearer ${token}` 
            })})
        .then(response => response.json())
        .then((data) => console.log(data))
        .catch(err => console.log('Request Failed', err))
      };
      createOrders();
  
  }
  

  



  const url = `https://chomp-food.herokuapp.com/user/checkout`

  useEffect(() => {
    const checkoutCall = async ()=>{
    setErrorMessage("");
    axios.get(url, axiosConfig)
    .then((response) => {
      console.log(response.data)
      setMenu(response.data.usersCartItems);
      // StorageHelper.saveItem('orderid', response.data)
      setSubTotal(response.data.usersCartItems.reduce((acc, item) => {
        acc += item.amount;
        return acc;
      }, 0))
    })
    .catch((error) =>  {
      console.log(error);
      const data = error.response?.data
      const msg = data?.message || data?.error || "There was an error";
      setErrorMessage(msg);
    })
  }; checkoutCall()
   }, [])
   console.log(menu);


const handleCheckoutSubmitAndRedirect=(e)=>{
  e.preventDefault()
  handleCheckoutSubmit(e)
  StorageHelper.saveItem("subtotal", subTotal);
    navigate('/orderConfirm') 
}
  

  return (
    <form onSubmit={handleCheckoutSubmitAndRedirect}>
    <div className="item-in-order-container">
      <div className="item-in-order-wrapper">

        <div className="item-display">

          <div className="nav-item-in-order">
            <h1 className="itemsInOrder">Items in order</h1>
          </div>
        {
            menu?.map(item =>(
            <ItemOrderCard
              id={item.productId}
              image={item.productImage}
              price={item.productPrice}
              quantity={item.productQuantity}
              title={item.productName}
            />
          ))
            }
        </div>
    
    <div className="checkout">
      <div className="checkout-wrapper">
        <div className="payment">
          <div className="checkout-form-header-box">
            <h2>Customer Info</h2>
            <p>* Required</p>
          </div>
          <div className="checkout-form-header-line"></div>
          <div className="checkout-form">
            <div className="checkout-card space icon-relative">
              <label className="checkout-label">Email *</label>
              <input
                type="text"
                className="input"
                data-mask="0000 0000 0000 0000"
                onChange={(e) => setEmail(e.target.value)} />
              <i className="far fa-envelope"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Info ends here */}
      {/* shipping methods starts here  */}
      <div className="checkout-wrapper">
        <div className="payment shipping-container">
          <div className="checkout-form-header-box shipping-method-title-box">
            <h2>Shipping Method</h2>
          </div>
          <div className="checkout-form">
            <div className="checkout-form-header-box shipping-method-box">
              <div className="shipping-radio-box">
             
                <label for="html">Flat-rate</label>
                <br />
                <p>Standard flat rate for all applicants</p>
              </div>
        
            </div>
          
          </div>
        </div>
      </div>
      {/* shipping methods ends here */}
      {/* Order Adrress Starts Here */}
      <div className="checkout-wrapper">
        <div className="payment">
          <div className="checkout-form-header-box">
            <h2>Order Address</h2>
            <p>* Required</p>
          </div>
          <div className="checkout-form-header-line"></div>
          <div className="checkout-form">
            <div className="checkout-card space icon-relative">
              <label className="checkout-label">Full Name *</label>
              <input
                type="text"
                className="input"
                data-mask="0000 0000 0000 0000"
                onChange={(e) => setFullName(e.target.value)}
                required
              />
              <i className="far fa-name"></i>
            </div>
            <div className="checkout-card space icon-relative">
              <label className="checkout-label">Street Address *</label>
              <input
                type="text"
                className="input"
                data-mask="0000 0000 0000 0000"
                onChange={(e) => setStreet(e.target.value)}
                required
              />
              {/* <i className="far fa-home"></i> */}
            </div>
  
            <div className="checkout-card-grp space">
              <div className="checkout-card-item icon-relative">
                <label className="checkout-label">City *</label>
                <input
                  type="text"
                  name="expiry-data"
                  className="input"
                  data-mask="00 / 00"
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
                {/* <i className="far fa-calendar-alt"></i> */}
              </div>
              <div className="checkout-card-item icon-relative">
                <label className="checkout-label">State/ Province *</label>
                <input type="text" className="input" data-mask="000" onChange={(e) => setState(e.target.value)}
                required
                />
                {/* <i className="fas fa-lock"></i> */}
              </div>
            
            </div>
     
          </div>
        </div>
      </div>
      {/* Order Address Ends here */}
      {/* payment Info starts*/}
      <div className="checkout-wrapper">
        <div className="payment">
          <div className="checkout-form-header-box">
            <h2>Payment Info</h2>
            <p>* Required</p>
          </div>
          
          <div className="checkout-form" >
            <div className="checkout-form-header-box shipping-method-box">
              <div className="shipping-radio-box">
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  value="PAYSTACK"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  required
                />
                <label for="html">Paystack</label>
                <br />
                
              </div>
             
            </div>
            <div className="checkout-form-header-box shipping-method-box">
              <div className="shipping-radio-box">
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  value="HTML"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  required
                />
                <label for="html">E-wallet</label>
                <br />
                
              </div>
              
            </div>
          
          </div>
        </div>
      </div>
      {/* payment Info ends */}
   
    </div>
  
   </div>

      <div className="item-checkout">
        <div className="item-checkout-parent">

          <div className="first-child">
            <div className="order-summary-box">
                <h2>Order summary</h2>
            </div>
        <div className="horizontal-ruler"></div>


            <div className="order-subtotal-box">
                <div className="items-checkout-details">
                    <span>subtotal</span>
                    <span>{'NGN '}{subTotal}</span>
                </div>
              
            </div>
          </div>
          <div className="second-child">
            <button type="submit"  className="orderButtons">Place Order</button>

            <button
             className="orderButtons"
              onClick={() => {
                navigate("/cart");
              }}
            >
              Back to Cart
            </button>

          </div>
        </div>
      </div>
    </div>
    </form>
  );
};

export default ItemsInOrder;
