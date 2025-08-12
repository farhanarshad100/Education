
import React from "react";

const Cart = ({ cart }) => {
  return (
    <div>
      <h2>🛒 Cart ({cart.length})</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.title}
            <br />
            <img src={item.image} alt={item.title} style={{ height: "50px" }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
