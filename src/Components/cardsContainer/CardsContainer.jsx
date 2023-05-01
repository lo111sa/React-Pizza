import React, { useContext } from "react";
import "./style.css";
import Card from "../card/Card";
import { StoreContext } from "../../App";

export default function CardsContainer() {
  const store = useContext(StoreContext);

  return (
    <div className="cardsContainer">
      {store.pizzas.map((el) => (
        <Card key={el.id} title={el.name} price={el.price} img={el.imageUrl} />
      ))}
    </div>
  );
}
