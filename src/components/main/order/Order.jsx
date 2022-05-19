import React from "react";
import "./Order.css";

const Order = () => {
  return (
    <div className="order">
      <div className="order__left__section">
          <img src="https://images.unsplash.com/photo-1525164286253-04e68b9d94c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
      </div>

      <div className="order__right__section">
        <div className="order__title__box">
          <h1 className="order__text">
            {" "}
            <span className="emphasis">Support</span> good <br /> food <br />{" "}
            and local <br /> businesses{" "}
          </h1>
        </div>

        <div className="order__button__section">
          <button className="order__button">Order now</button>
        </div>
      </div>
    </div>
  );
};

export default Order;
