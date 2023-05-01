import React from "react";
import "./style.css";

export default function Card({ title, price, img }) {
  return (
    <div className="card">
      <img width={260} height={260} src={img} alt="" />
      <h3>{title}</h3>
      <div className="types">
        <div className="thickness">
          <button className="btnTypes">Thick</button>
          <button className="btnTypes">Traditional</button>
        </div>
        <div className="sizes">
          <button className="btnTypes">26 cm</button>
          <button className="btnTypes">30 cm</button>
          <button className="btnTypes">40 cm</button>
        </div>
      </div>
      <div className="bottom">
        <h2>{price} $</h2>
        <button className="button outline">+ Add to cart</button>
      </div>
    </div>
  );
}
