import React from "react";
import { useCart } from "../cartContext";
import "../Cart/Cart.css";

const Cart = ({ onClose }) => {
  const { cartItems, removeFromCart, decreaseFromCart } = useCart();

  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
  };
  const handleDecreaseFromCart = (product) => {
    decreaseFromCart(product);
  };

  return (
    <div className="cartСontainer">
      <button onClick={onClose} className="closeCart">
        ✖
      </button>

      <div className="subTitle" style={{ fontWeight: "600", marginBottom: "40px" }}>
        Total:{" "}
        {cartItems.reduce(
          (sum, item) => sum + parseInt(item.price) * parseInt(item.amount),
          0
        )}{" "}
        lei
      </div>

      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <div className="itemPriceInfo">
              <div>{item.price} lei</div>
              <div>
                Amount:{item.amount}
                {item.amount > 1 && (
                  <button
                    onClick={() => handleDecreaseFromCart(item)}
                    className="minusButton"
                  >
                    -
                  </button>
                )}
              </div>
            </div>

            <button
              onClick={() => handleRemoveFromCart(item)}
              className="deleteButton"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      
    </div>
  );
};

export default Cart;
