import React from "react";
import "./Cart.scss";
import { useCartStore } from "../RSM/cart-store";

function Cart({ handleCloseCart }) {
  const { cart, increaseQuantity, decreaseQuantity } = useCartStore(
    (state) => ({
      cart: state.cart,
      increaseQuantity: state.increaseQuantity,
      decreaseQuantity: state.decreaseQuantity,
    })
  );

  return (
    <div className="cart">
      <div className="close_cart">
        <i className="fa-solid fa-xmark" onClick={handleCloseCart}></i>
      </div>
      <h2 className="title">Cart products</h2>
      {cart.length === 0 ? (
        <p className="empty_text">No items in cart</p>
      ) : (
        <div className="cart_products">
          {cart.map((product) => (
            <div key={product.id} className="product">
              <img src={product.img} alt={product.title} />
              <div className="product_info">
                <h3>{product.title}</h3>
                <p>${(product.price * product.quantity).toFixed(2)}</p>
              </div>
              <div className="product_quantity">
                <button onClick={() => decreaseQuantity(product.id)}>-</button>
                {product.quantity}
                <button onClick={() => increaseQuantity(product.id)}>+</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
