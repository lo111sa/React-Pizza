import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import "./style.css";

export default function CartButton() {
  return (
    <button className="button cartButton">
      <p className="sum">520 $</p>

      <p className="cartIcon">
        <FiShoppingCart /> <span>3</span>
      </p>
    </button>
  );
}
