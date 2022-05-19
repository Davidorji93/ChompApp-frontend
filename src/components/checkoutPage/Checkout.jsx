
import './Checkout.css'
import React, {useState, useEffect} from "react";


const Checkout = ({handleCheckoutSubmit}) => {
  const [email, setEmail] = useState("")
  const [street, setStreet] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [phone, setPhone] = useState("")
  const [fullName, setFullName] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("")

  return ( 
    
    <form>
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
                />
                {/* <i className="far fa-calendar-alt"></i> */}
              </div>
              <div className="checkout-card-item icon-relative">
                <label className="checkout-label">State/ Province *</label>
                <input type="text" className="input" data-mask="000" onChange={(e) => setState(e.target.value)} />
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
          
          <div className="checkout-form" onChange={(e) => setPaymentMethod(e.target.value)}>
            <div className="checkout-form-header-box shipping-method-box">
              <div className="shipping-radio-box">
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  value="PAYSTACK"
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
                />
                <label for="html">E-wallet</label>
                <br />
                
              </div>
              
            </div>
          
          </div>
        </div>
      </div>
      {/* payment Info ends */}
      {/* Billing Address starts  */}
  

      {/* Billing address ends here  */}
    </div>
    <button onClick={handleCheckoutSubmit}></button>
    </form>
  );
};

export default Checkout;