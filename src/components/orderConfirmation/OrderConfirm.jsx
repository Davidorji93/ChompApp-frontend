import styles from "./OrderConfirm.module.css";
import OrderCard from "./OrderCard";
import { useNavigate } from "react-router-dom";
import React, {useState, useEffect} from "react";
import axios from "axios";
import AuthHelper from '../utils/AuthHelper'
import StorageHelper from '../utils/StorageHelper'
import ItemOrderCard from "../itemsInorder/ItemOrderCard";

const OrderConfirm = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [subTotal, setSubTotal] = useState()
  const [itemsInOrder, setItemsInOrder]= useState([]);

  const token = AuthHelper.getUserDetails().token;
  const paymentmethod = StorageHelper.getItem('paymentmethod')
  console.log(token)

  // const axiosConfig = {
  //   headers: {user
  //     Authorization: `Bearer ${token}`,
  //     "Content-Type": "application/json",
  //   },
  // }

  const navigate = useNavigate();
  const url = `https://chomp-food.herokuapp.com/user/view_order_details`;


    // const url = "localhost:8085/user/view_order_details";

    useEffect(() => {
      const getOrders = async () => {
        const response = await fetch(url,
          { 
            method: 'get', 
            headers: new Headers({
              'Authorization': `Bearer ${token}` 
            })})
        .then(response => response.json())
        .then((data) =>  setItemsInOrder(data.viewOrderDtoList))
        .catch(err => console.log('Request Failed', err))
      };
      getOrders();
    }, []);


   const handlePayment = async (e) => {
    e.preventDefault()

    try{
      axios.post(
        `https://chomp-food.herokuapp.com/payment/process/`,
        {
          paymentMethod:paymentmethod
          },{
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }).then(response => {console.log("Product response " + response)
          if (paymentmethod == "PAYSTACK"){
            const {authorization_url} = response.data.data
            const {reference} = response.data.data
            StorageHelper.saveItem('transactionreference', reference)
            window.location.replace(authorization_url);
          }
        })
          console.log(paymentmethod)
          
     
  }catch(e){
      console.log(e.message);
  }
  
   }

  return (
    <div className={styles.order_wrapper}>
      <div className={styles.orderContent}>
        {/* <OrderCard title="Customer Information">
          <div className={styles.OrderCustomerDetails}>
            <div className={styles.orderShippingAddress}>
              <h4>Email</h4>

            </div>
            <div className={styles.orderShippingAddress}>
              <h4>Shipping Address</h4>
            
            </div>
          </div>
        </OrderCard> */}

        <OrderCard title="Shipping Method">
          <div className={styles.OrderShipping}>
            <p>Flat rate</p>
            <p>Standard flat rate for all shipments</p>
          </div>
        </OrderCard>

        <OrderCard title="Payment Info">
          <div className={styles.paymentInfo}>
            <div className={styles.payInfo}>
              <h4>Payment type</h4>
              <div>
                <p>{paymentmethod}</p>
               
              </div>
            </div>
            {/* <div className={styles.billingAdd}>
              <h4>Billing Address</h4>
              <div>
                <p>Fake name</p>
                <p>398 11th Street</p>
                <p>Sangotedo, Lagos</p>
              </div>
            </div> */}
          </div>
        </OrderCard>
        <OrderCard title="Items in Order">
        {
            itemsInOrder?.map(item =>(
            <ItemOrderCard
              id={itemsInOrder.indexOf(item)}
              image={item.image}
              price={item.price}
              quantity={item.quantity}
              title={item.name}
            />
          ))
            }
        </OrderCard>
      </div>
      <OrderCard title="Order Summary" className={styles.orderSum}>
        <div className={styles.orderSummaryCard}>
          <div className={styles.orderSummaryItems}>
            <div>Subtotal:</div>
            {StorageHelper.getItem("subtotal")}

          </div>
          <div className={styles.orderSummaryItems}>
            <div>Flat-Rate:</div>
            <div>N3,000</div>
          </div>
          <div className={styles.orderSummaryItems}>
            <div>Total:</div>
            <h3>{StorageHelper.getItem("subtotal") + 3000}</h3>
          </div>
          <div className={styles.summaryBtnsDiv}>
            {/* <button
              className={styles.orderButtons}
              onClick={() => {
                navigate("/checkout");
              }}
            >
              Back to Checkout
            </button> */}
            <button className="place-order" onClick={(e) => {handlePayment(e)}}>Proceed to Payment</button>
          </div>
        </div>
      </OrderCard>
    </div>
  );
};

export default OrderConfirm;
