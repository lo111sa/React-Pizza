import React from "react";

export const CartEmpty: React.FC = () => {
  return (
    <div className="cart cart--empty">
      <h2>Cart is empty 😕</h2>
      <p>
        You have not ordered pizza yet
        <br />
        If you want to order pizza, go to main page
      </p>
      <img src="/img/empty-cart.png" alt="Empty cart" />
      <a href="/" className="button button--black">
        <span>Go to main</span>
      </a>
    </div>
  );
};
