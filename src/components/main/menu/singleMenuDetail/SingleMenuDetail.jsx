import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './SingleMenuDetail.css'
import StorageHelper from '../../../utils/StorageHelper';
import AuthHelper from '../../../utils/AuthHelper';

const cartCountKey = 'cart-count';
const token = AuthHelper.getUserDetails().token;


export default function SingleMenuDetails() {
  const [menu, setMenu] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);
  
  
  var menuId = StorageHelper.getItem("menuId");
  console.log(menuId);

  const getSingleMenuUrl = `https://chomp-food.herokuapp.com/menu/${menuId}`;
  const addToCartUrl = `https://chomp-food.herokuapp.com/user/add/${menuId}`;
  const addToFavouriteUrl = `https://chomp-food.herokuapp.com/user/addfavoritemeal/${menuId}`; 

  useEffect(() => {
  setErrorMessage("");
  setLoading(true);
  axios.get(getSingleMenuUrl)
  .then((response) => {
    console.log(response.data)
    setMenu(response.data);
    setLoading(false);
  })
  .catch((error) =>  {
    console.log(error);
    setLoading(false);
    const data = error.response?.data
    const msg = data?.message || data?.error || "There was an error";
    setErrorMessage(msg);
  })
  }, [])


   const handleCart = () => {
    if (token == null || token == undefined){
      var cartItems = StorageHelper.getItem('cartItems');
      let pushNewObject = true;
      cartItems.forEach(item=> {if (item.productId == menu.id){
        item.productQuantity+= quantity;
        pushNewObject = false;
      }})
      if (pushNewObject == true){
        cartItems.push({
          amount: menu.price*quantity,
          productId :menu.id,
          productImage:menu.image,
          productPrice:menu.price,
          productName:menu.title,
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
    }else if (token!= null){
      setErrorMessage("");
      setLoading(true);
      axios.post(addToCartUrl, {qty: quantity},{
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      } )
      .then((response) => {
        let count = StorageHelper.getItem(cartCountKey) || 0;
        StorageHelper.saveItem(cartCountKey, count + 1);
        window.location.reload();
        setLoading(false);
      })
      .catch((error) =>  {
        console.log(error);
        setLoading(false);
        const data = error.response?.data
        const msg = data?.message || data?.error || "There was an error";
        setErrorMessage(msg);
      })
    }


    
   }



   const handleFavourite = () => {
    setErrorMessage("");
    setLoading(true);
    axios.post(addToFavouriteUrl, menu)
    .then((response) => {
      setLoading(false);
    })
    .catch((error) =>  {
      console.log(error);
      setLoading(false);
      const data = error.response?.data
      const msg = data?.message || data?.error || "There was an error";
      setErrorMessage(msg);
    })
   }





  return (
    <div className="single-menu-details-wrapper">
      {loading && <div className="text-center">Loading...</div>}
      <p className="form-error-message">{errorMessage}</p>
        <div className="single-menu-details">
              <div className="single-menu-container single-menu">
                <div className="single-menu-image">
                  <img
                    src={menu.image === "string" || !menu.image ? "https://cdn.shopify.com/s/files/1/0244/1838/5975/products/burger-patties-grass-fed-organic-burger-australian-beef_600x.jpg?v=1639848416": menu.image}
                    alt=""
                  />
                </div>
              </div>
              <div className="single-menu-container menu-details" >
                <div>
                <h2>{menu.name}</h2>
                <div className="single-menu-price"> <strong>NGN {menu.price}</strong></div>
                {/* <div className="single-menu-category">Price <br /> <span>$500</span></div> */}
                <div className="horizontal-line"></div>
                <p className='single-menu-description'>{menu.description}  </p>
                </div>



                <div>
                  {/* <button onClick={handleFavourite} className="btn-add-to-favourite">Add to favourite</button> */}
                <input className='single-menu-input-counter' value={quantity} onChange={(e)=> setQuantity(e.target.value)}  type="number"/>

                  <button onClick={handleCart} className="btn-add-to-cart">Add to cart</button>
                <div className="horizontal-line bottom-line"></div>

                  </div>
                
              </div>
      </div>
      </div>
  )
}