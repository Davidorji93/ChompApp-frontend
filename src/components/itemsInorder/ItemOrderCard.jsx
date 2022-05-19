import React, {useState, useEffect} from "react";
import axios from "axios"
import StorageHelper from '../utils/StorageHelper';
import { Link, useParams } from 'react-router-dom'
import "../main/menu/Menu.css";


const ItemOrderCard = ({id,image, price, title, quantity}) => {


    const storeMenuid = ()=>{
        StorageHelper.saveItem("menuId", id);
      }
    

      return (
        <div className="menu__cards">
        <div className="menu__image" onClick={storeMenuid}>
          <Link to={`/menu/${id}`}>
          <img
          style={{height:'80%', width:'80%', borderRadius:'5px'}}
            src={image}
            alt={title}
            // className="itemInOrderImage"
          />
          </Link>
          
       
        </div>
        <div className="menu__content" >
          <div className="menu_name_price">
            <h1 className="menu__text">{title}</h1>
            <h1 className="menu__price">{'NGN '}{price}</h1>
          </div>
          <p className="menu__desc">
          {'quantity: '} {quantity}
          </p>
        </div>
      </div>
      )
}

export default ItemOrderCard