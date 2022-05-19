import React from "react";
import './Cart.css'
const buttonStyle = {
    width: 25,
    height: 25,
    margin: 10,
    cursor: "pointer",
    borderRadius: 5,
    color: '#fff'
  };
const QuantityCounter = ({value, incrementHandler, decrementHandler, max}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button
        className="subtract"
        onClick={decrementHandler}
        style={buttonStyle}
        disabled={value === 1}
      >
        -
      </button>
      {value}
      <button
        className="add"
        onClick={incrementHandler}
        style={buttonStyle}
        disabled ={ value === max}
      >
        +
      </button>
    </div>
  );
};

export default QuantityCounter;
