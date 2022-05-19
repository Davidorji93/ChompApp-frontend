import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SingleMenuDetails.css'
import StorageHelper from '../utils/StorageHelper';
import AuthHelper from '../utils/AuthHelper'
import { useParams } from 'react-router-dom';


const cartCountKey = 'cart-count';
const usersDetails = AuthHelper.getUserDetails();

const token = usersDetails.token;
   
  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  }

export default function SingleMenuDetails() {
  const [menu, setMenu] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const { menuId } = useParams();

  
  
  // var menuId = StorageHelper.getItem("menuId");
  //  console.log(menuId);

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
      console.log(response.data);
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
    setErrorMessage("");
    setLoading(true);
    console.log(menu.id);
    axios.post(`https://chomp-food.herokuapp.com/user/add/${menuId}`, {qty: 1}, axiosConfig)
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



  //  const handleFavourite = () => {
  //   setErrorMessage("");
  //   setLoading(true);
  //   axios.post(`https://chomp-food.herokuapp.com/user/addfavoritemeal/${menuId}`,{}, axiosConfig)
  //   .then((response) => {
  //     setLoading(false);
  //   })
  //   .catch((error) =>  {
  //     console.log(error);
  //     setLoading(false);
  //     const data = error.response?.data
  //     const msg = data?.message || data?.error || "There was an error";
  //     setErrorMessage(msg);
  //   })
  //  }





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
                <div className="single-menu-price"><span>Price</span> <strong>NGN {menu.price}</strong></div>
                {/* <div className="single-menu-category">Price <br /> <span>$500</span></div> */}
                <div className="horizontal-line"></div>
                <p>{menu.description}</p>
                <div className="horizontal-line"></div>
                </div>



                {/* <div className="single-menu-category">Category <br /> <span>GROCERY</span></div> */}
                <div className="single-menu-price"><span>Category</span> <strong>{menu.category}</strong></div>
                <div>
                  {/* <button onClick={handleFavourite} className="btn-add-to-favourite">Add to favourite</button> */}
                  <button onClick={handleCart} className="btn-add-to-cart">Add to cart</button>
                  </div>
                
              </div>
      </div>
      </div>
  )
}
