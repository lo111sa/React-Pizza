import React, { useContext, useState } from "react";
import CategoryItem from "../categoryItem/CategoryItem";
import "./style.css";
import { StoreContext } from "../../App";
import SortPopup from "../sortPopup/SortPopup";

export default function Categories() {
  const store = useContext(StoreContext);
  const [clicked, setClicked] = useState(false);

  return (
    <div className="wrapper">
      <div className="categories">
        <div>
          <CategoryItem category={"All"} />
          {store.categories.map((el, index) => (
            <CategoryItem key={index} category={el} />
          ))}
        </div>
        <div className="sortBox">
          <p>Sort By :</p>
          <button
            onClick={() => {
              setClicked(!clicked);
              console.log(clicked);
            }}
          >
            asdasd
          </button>
        </div>
      </div>
      {clicked ? <SortPopup /> : null}
      <h2>All pizzas</h2>
    </div>
  );
}
