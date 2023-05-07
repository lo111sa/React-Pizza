import { useEffect, useState } from "react";
import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock";
import Sort from "../components/Sort";
import "../scss/app.scss";
import axios from "axios";
import PizzaSkeleton from "../components/PizzaSkeleton";

import { useSelector, useDispatch } from "react-redux";
import { setCategoryId } from "../redux/slices/filterSlice";

import React from "react";

function Home() {
  const activeCategory = useSelector((state) => state.filter.categoryId);
  const searchValue = useSelector((state) => state.filter.searchValue);
  const dispatch = useDispatch();

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    setIsLoading(true);
    await axios
      .get(
        `https://64527bb3bce0b0a0f748372b.mockapi.io/items?${
          activeCategory > 0 ? "category=" + activeCategory : ""
        }&sortBy=rating&order=desc&name=${searchValue}`
      )
      .then((list) => {
        setItems(list.data);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, [activeCategory, searchValue]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={activeCategory}
          setActiveCategory={(id) => dispatch(setCategoryId(id))}
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
