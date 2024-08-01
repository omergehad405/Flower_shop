import React, { useContext } from "react";
import "./Cart.scss";
import { CartContext } from "../Context/CartContext";

function Cart({ handleCloseCart }) {
  const { cart, setCart } = useContext(CartContext);

  function handleIncreaseQuantity(id) {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }
  function handleDecreaseQuantity(id) {
    setCart((prevCart) => {
      const updatedCart = prevCart
        .map((item) => {
          if (item.id === id) {
            if (item.quantity > 1) {
              return { ...item, quantity: item.quantity - 1 };
            } else {
              return null;
            }
          }
          return item;
        })
        .filter(Boolean);

      return updatedCart;
    });
  }

  return (
    <div className="cart">
      <div className="close_cart">
        <i className="fa-solid fa-xmark" onClick={handleCloseCart}></i>
      </div>
      <h2 className="title">Cart Items</h2>
      {cart.length === 0 ? (
        <p className="empty_text">No items in cart</p>
      ) : (
        <div className="cart_products">
          {cart.map((item) => (
            <div key={item.id} className="product">
              <img src={item.img} alt={item.title} />
              <div className="product_info">
                <h3>{item.title}</h3>
                <p>${(item.price * item.quantity).toFixed(2)}</p>
              </div>
              <div className="product_quantity">
                <button onClick={() => handleDecreaseQuantity(item.id)}>
                  -
                </button>
                {item.quantity}
                <button onClick={() => handleIncreaseQuantity(item.id)}>
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
