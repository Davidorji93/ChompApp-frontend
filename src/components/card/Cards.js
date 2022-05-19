 
 import React from 'react'
import productApi from '../../apis/ProductApi';

 
 const Cards = (props) => {


   
  // // add product to cart
  // const addToCart = async () => {
  //   const orderItems = {
  //     // props.Id,
  //     name: props.name,
  //     price: product.price,
  //     description: product.description,
  //     productImage: "",
  //   };

  //   const response = await productApi.addProductToCart(orderItems);

    



  // }
   return (
     <div className='menu__cards'>
       <div className='menu__image'>
         <img src={props.image} alt={props.name} />
       </div>
       <div className='menu__content'>
         <div className='menu__name__price'>
           <h1 className='menu__text'>{props.name}</h1>
           <h1 className='menu__price'>NGN {props.price}</h1>
         </div>

         <p className='menu__desc'>{props.description}</p>
         <div className='menu__cart'>
           <input className="menu__counter" type='number' id='tentacles' name='tentacles' min='10' max='100' value='0'/>
           <button className='menu__cart__button'>Add to cart</button>
         </div>
       </div>
     </div>
   );
 };
 
 export default Cards