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

const Home: React.FC = () => {
  const { categoryId, searchValue, sort } = useSelector(
    (state: any) => state.filter
  );

  const dispatch = useDispatch();
  const sortBy: string = sort.sortProperty.replace("-", "");
  const sortType: string = sort.sortProperty.includes("-") ? "desc" : "asc";
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    setIsLoading(true);
    await axios
      .get(
        `https://64527bb3bce0b0a0f748372b.mockapi.io/items?${
          categoryId > 0 ? "category=" + categoryId : ""
        }&sortBy=${sortBy}&order=${sortType}&name=${searchValue}`
      )
      .then((list) => {
        setItems(list.data);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, [categoryId, searchValue, sort]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          categoryId={categoryId}
          setActiveCategory={(id: string) => dispatch(setCategoryId(id))}
        />
        <Sort />
      </div>
      <h2 className="content__title">All pizzas</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, i) => <PizzaSkeleton key={i} />)
          : items.map((obj: any, i: number) => <PizzaBlock key={i} {...obj} />)}
      </div>
    </div>
  );
};

export default Home;
