import React from "react";
import "./Fetures.scss";
function Fetures() {
  return (
    <div className="fetures">
      <div className="container">
        <div className="box">
          <span>
            <i className="fa-solid fa-truck"></i>
          </span>
          <div className="info">
            <h4>free delivery</h4>
            <p>on all orders</p>
          </div>
        </div>
        <div className="box">
          <span>
            <i className="fa-solid fa-money-bill"></i>
          </span>
          <div className="info">
            <h4>10 days returns</h4>
            <p>moneyback guarantee</p>
          </div>
        </div>
        <div className="box">
          <span>
            <i className="fa-solid fa-gift"></i>
          </span>
          <div className="info">
            <h4>offer & gifts</h4>
            <p>on all order</p>
          </div>
        </div>
        <div className="box">
          <span>
            <i className="fa-solid fa-credit-card"></i>
          </span>
          <div className="info">
            <h4>secure payments</h4>
            <p>protected by paybal</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fetures;
