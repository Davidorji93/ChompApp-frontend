import React, { useState, useEffect } from "react";
import "./Cart.css";
import Subtotal from "./Subtotal";
import CartCard from "./CartCard";
import Modal from "./Modal/Modal";
import axios from "axios";
import AuthHelper from "../utils/AuthHelper";
import _ from "lodash"
import StorageHelper from "../utils/StorageHelper";
import { GiShoppingCart } from "react-icons/gi";
import styles from "./CartCard.module.css";
import { useNavigate } from 'react-router-dom'

const headerStyle = {
  marginBottom: "20px",
  padding: 10,
  fontWeight: 500,
  color: "#111",
};

// api call
// this method ought to return all the details of the cart items
const usersDetails = AuthHelper.getUserDetails();
console.log(usersDetails.token);
const user_id = "2";
const axiosConfig = {
  headers: {
    Authorization: `Bearer ${usersDetails.token}`,
    "Content-Type": "application/json",
  },
};
const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [itemsCount, setItemsCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState();
  const [deleting, setDeleting] = useState(false);
  // const [itemToFavourite, setitemToFavourite] = useState(0);
  const navigate = useNavigate();
  

 
  useEffect(() => {
    if (usersDetails.token != null || usersDetails.token != undefined ){
      (async function () {
        try {
          const url = `https://chomp-food.herokuapp.com/user/viewCart`;
          setLoading(true);
        
          const response = await axios(url, axiosConfig);
          console.log(response);
          setCartItems(response.data.usersCartItems);
          setLoading(false);
        } catch (e) {}
      })();
    }else if (usersDetails.token == null || usersDetails.token == undefined ){
      setCartItems(StorageHelper.getItem('cartItems'));
    }
 
  }, []);

  useEffect(() => {
    const total = cartItems.reduce((acc, item) => {
      acc += item.amount;
      return acc;
    }, 0);
    const totalQty = cartItems.reduce((acc, item) => {
      acc += item.productQuantity;
      return acc;
    }, 0);
    setSubTotal(total);
    setItemsCount(totalQty);
  }, [cartItems]);

  const updateCartItem = (productId, fields) => {
    const newCartItems = cartItems.map((item) => ({
      ...item,
      ...(item.productId === productId && fields),
    }));
    setCartItems(newCartItems);
    if(!usersDetails.token){
      StorageHelper.saveItem("cartItems", newCartItems)
    }
    
  };
  const onDeleteClick = (productId) => {
    setItemToDelete(productId);
    setShowDeleteModal(true);
  };
  const deleteCartItem = async () => {
    if (!itemToDelete) {
      setShowDeleteModal(false);
      return;
    }
    setDeleting(true);
    if (usersDetails.token == null || usersDetails.token == undefined){
      setCartItems(cartItems.filter((item) => item.productId !== itemToDelete));
      StorageHelper.saveItem('cartItems',StorageHelper.getItem('cartItems').filter((item) => item.productId !== itemToDelete) )
    }else{
      try {
        const url = `https://chomp-food.herokuapp.com/user/delete/${itemToDelete}`;
        await axios.delete(url, axiosConfig);
        setCartItems(cartItems.filter((item) => item.productId !== itemToDelete));
      } catch (e) {
        console.log("error deleting item", e.message);
      }
    }
  
    setShowDeleteModal(false);
    setItemToDelete(null);
    setDeleting(false);
  };

  const updateQuantity = async (menuId, newQty) => {
    try{
      const url = `https://chomp-food.herokuapp.com/user/updatecartitemquantity/${menuId}/${newQty}`;
      await axios.post(url, {}, axiosConfig)
      console.log("logging something");

    }catch(e){
      console.log("error updating item quantity ", e.message);
    }
  }

  const debounceHandler = React.useCallback(_.debounce(updateQuantity, 500), [])

  let itemToFavourite;

  const onFavoriteClick = (productId)=>{
    console.log(productId);
    if (itemToFavourite === productId) {
      // setitemToFavourite(productId)
      removeFavorite();

    }else{
      // setitemToFavourite(productId)
      itemToFavourite = productId;
      addFavorite();
    }
    
    
  }
  
  const addFavorite = async () =>{
    
    try{
      const url = `https://chomp-food.herokuapp.com/user/addfavoritemeal/${itemToFavourite}`;
      await axios.post(url, axiosConfig);

    }catch(e){
      console.log("error adding to favorite " + e.message);
    }
  }

  const removeFavorite = async () =>{
    try {
      const url = `https://chomp-food.herokuapp.com/user/deletefavoritemeal/${itemToFavourite}`;
      await axios.post(url, axiosConfig);
    }
    catch(e) {
      console.log("error adding to favorite " + e.message);
    }
  }


  return (
    <>
      {showDeleteModal && <Modal
        cancelHandler={() => {
          setShowDeleteModal(false);
          setItemToDelete(null);
        }}
        handleDelete={deleteCartItem}
        deleting={deleting}
      />}
      <div className="cart_container">
        {loading ? (
          <div>Loading cart items ... </div>
        ) : (
          <>
            {cartItems.length > 0  ? (
              <>
                <table
                  className="sub__container"
                  style={{ marginRight: 50, border: "2px solid #eee" }}
                >
                  <tr>
                    <th
                      colSpan="5"
                      align="left"
                      style={{
                        ...headerStyle,
                        width: "100%",
                        borderBottom: "1px solid #ccc",
                      }}
                    >
                      {" "}
                      You have {itemsCount} {itemsCount > 1 ? "items" : "item"}{" "}
                      in your cart
                    </th>
                  </tr>
                  <tr>
                    <th align="left" width="20%" style={headerStyle}>
                      {" "}
                      Product
                    </th>
                    <th align="center" width="20%" style={headerStyle}>
                      Unit Price
                    </th>
                    <th align="center" width="20%" style={headerStyle}>
                      Quantity
                    </th>
                    <th align="center" width="20%" style={headerStyle}>
                      Sub Total
                    </th>
                    <th align="right" width="20%" style={headerStyle}>
                      Actions
                    </th>
                  </tr>
                  <tbody>
                
                    {cartItems.map((item) => (
                      <CartCard
                        item={item}
                        updateCartItem={updateCartItem}
                        qtyHandler= {debounceHandler }
                        deleteHandler={() => onDeleteClick(item.productId)}
                        addFavoritHandler = {() => onFavoriteClick(item.productId)}
                      />
                    ))}
                  </tbody>
                </table>
                <aside
                  style={{
                    flex: 0.3,
                    position: "sticky",
                    top: 0,
                    alignSelf: "flex-start",
                    height: "auto",
                  }}
                >
                  <Subtotal subTotal={subTotal} count={itemsCount} />
                </aside>
              </>
            ) : (
              <div  className={styles.emptyCart}>
                <div>
                  <GiShoppingCart className={styles.emptyCartIcon}/>
                </div>
                <h1> Your cart is currently empty</h1>
                <button className={styles.emptyCartBtn} onClick={() => {
          navigate('/')}}>Start Shopping</button>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
