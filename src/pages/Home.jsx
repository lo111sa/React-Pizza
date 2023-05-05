import { useEffect, useState } from "react";
import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock";
import Sort from "../components/Sort";
import "../scss/app.scss";
import axios from "axios";
import PizzaSkeleton from "../components/PizzaSkeleton";

import React from "react";

function Home() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState(0);

  const getData = async () => {
    setIsLoading(true);
    const list = await axios.get(
      `https://64527bb3bce0b0a0f748372b.mockapi.io/items?category=${
        activeCategory > 0 ? activeCategory : ""
      }`
    );
    setItems(list.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, [activeCategory]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={activeCategory}
          setActiveCategory={(id) => setActiveCategory(id)}
        />
        <Sort />
      </div>
      <h2 className="content__title">All pizzas</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, i) => <PizzaSkeleton key={i} />)
          : items.map((obj, i) => <PizzaBlock key={i} {...obj} />)}
      </div>
    </div>
  );
}

export default Home;
