import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import "./style.css";
import { useNavigate } from "react-router-dom";

export default function CartButton() {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate("/cart")} className="button cartButton">
      <p className="sum">520 $</p>

      <p className="cartIcon">
        <FiShoppingCart /> <span>3</span>
      </p>
    </button>
  );
}
