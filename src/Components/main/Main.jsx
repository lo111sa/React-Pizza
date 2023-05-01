import React from "react";
import "./style.css";
import CardsContainer from "../cardsContainer/CardsContainer";
import Categories from "../categories/Categories";

export default function Main() {
  return (
    <div className="main">
      <Categories />
      <CardsContainer />
    </div>
  );
}
