import React from "react";
import "./style.css";

import CartButton from "../cartButton/CartButton";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <img width={38} height={38} src="../.././img/logo.png" alt="Logo" />
        <div className="logo-text">
          <h3>REACT PIZZA</h3>
          <p>The best pizza in the world</p>
        </div>
      </div>
      <CartButton />
    </header>
  );
}
