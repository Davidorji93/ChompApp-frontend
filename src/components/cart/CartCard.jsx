import React, { useState } from "react";
import QuantityCounter from "./QuantityCounter";
import { MdDelete, MdFavorite } from "react-icons/md";
import "./Cart.css";
import styles from "./CartCard.module.css";

const Cell = ({ children, style }) => {
  return (
    <td
      style={{
        padding: "20px 10px",
        borderTop: "2px solid #eee",
        ...style,
      }}
    >
      {children}
    </td>
  );
};
const CartCard = ({ item, updateCartItem, deleteHandler, addFavoritHandler, qtyHandler }) => {
  const [quantity, setQuantity] = useState(item.productQuantity);

  const changeQuantity = (action) => {
    const newQty = action === "add" ? quantity + 1 : Math.max(1, quantity - 1);
    setQuantity(newQty);
    updateCartItem(item.productId, { productQuantity: newQty, amount: newQty * item.productPrice });
    qtyHandler(item.productId, newQty);
  };
  return (
    <tr>
      <Cell class="cell" style={{ textAlign: "left" }}>
        <span className="cart_img_box">
          <img
            className="cart__img"
            src={item.productImage}
            alt={item.productName}
            style={{
              width: 80,
              height: 80,
            }}
          />
        </span>
        <div className="cart__item__name">{item.productName}</div>
      </Cell>
      <Cell class="cell" style={{ textAlign: "center" }}>
        <span className="cart__item__price">₦ {item.productPrice} </span>
      </Cell>
      <Cell class="cell" style={{ textAlign: "center" }}>
        <QuantityCounter
          value={quantity}
          incrementHandler={() => changeQuantity("add")}
          decrementHandler={() => changeQuantity("subtract")}
          max={20}
        />
      </Cell>
      <Cell class="cell" style={{ textAlign: "center" }}>
        <span className="cart__item__price sub_total">
          ₦{item.amount}{" "}
        </span>
      </Cell>
      <Cell class="" style={{ textAlign: "right" }}>
        {/* <button className="cart_action fav" onClick={addFavoritHandler}>
          <MdFavorite fill="#ff8946" style={{ height: "100%", width: 20 }} />
        </button> */}
        <button className="cart_action delete" onClick={deleteHandler}>
          <MdDelete fill="red" style={{ height: "100%", width: 20 }} />
        </button>
      </Cell>
    </tr>
  );
};

export default CartCard;
