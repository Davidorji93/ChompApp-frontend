import React, { useState, useEffect } from "react";

import { Link, useParams } from "react-router-dom";
import AuthHelper from "../../utils/AuthHelper";
import StorageHelper from "../../utils/StorageHelper";

import axios from "axios";

const MenuCard = ({ id, image, price, title, desc }) => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);
  let componentMounted = true;

  const token = AuthHelper.getUserDetails().token;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(
        `https://chomp-food.herokuapp.com/menu/${0}/id`
      );
      if (componentMounted) {
        setData(await response.data);
        setFilter(await response.data);
        setLoading(false);
        // console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const addToCartFunction = (event) => {
    event.preventDefault();


    if (token!= null){
      try{
        const url = `https://chomp-food.herokuapp.com/user/add/${id}`
        console.log(quantity);
        axios.post(
          url,
          {
            qty:quantity
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            }
          }
        ).then(response => {
          console.log("Product response " + response)
          if(response.status === 200){
            let currentValueOfCartItem = parseInt(StorageHelper.getItem('cart-count'));
            StorageHelper.saveItem('cart-count', currentValueOfCartItem+parseInt(quantity));
            window.location.reload();
          }
        })
        console.log("adding to cart");
      }
      catch(e){
        console.log(e.message);
      }
    }else if(token == null || token == undefined){
      var cartItems = StorageHelper.getItem('cartItems');
      let pushNewObject = true;
      cartItems.forEach(item=> {if (item.productId == id){
        item.productQuantity+= quantity;
        pushNewObject = false;
      }})
      if (pushNewObject == true){
        cartItems.push({
          amount:price*quantity,
          productId :id,
          productImage:image,
          productPrice:price,
          productName:title,
          productQuantity:quantity,
      })
      }

      StorageHelper.saveItem('cartItems', cartItems);
      console.log(StorageHelper.getItem('cartItems'))

       console.log(quantity)
      let currentValueOfCartItem = parseInt(StorageHelper.getItem('cart-count'));
      StorageHelper.saveItem('cart-count', currentValueOfCartItem+parseInt(quantity));
      window.location.reload();
      console.log("adding to cart");
    }
    
    
  }
  const storeMenuid = ()=>{
    StorageHelper.saveItem("menuId", id);
  };

  return (
    <div className="menu__cards">
      <div className="menu__image" onClick={storeMenuid}>
        <Link to={`/menu/${id}`}>
          <img src={image} alt={title} />
        </Link>
      </div>
      <form className="menu__content" onSubmit={addToCartFunction}>
        <div className="menu_name_price">
          <h1 className="menu__text">{title}</h1>
          <h1 className="menu__price">₦ {price}</h1>
        </div>
        <p className="menu__desc">{desc}</p>
        <div className="menu__cart">
          <input
            className="menu__counter"
            type="number"
            id="tentacles"
            name="tentacles"
            min="1"
            max="100"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <button className="menu__cart__button">Add to cart</button>
        </div>
      </form>
    </div>
  );
};

export default MenuCard;
