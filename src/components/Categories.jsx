import React, { useState } from "react";

function Categories({ activeCategory, setActiveCategory }) {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((el, index) => (
          <li
            key={index}
            onClick={() => setActiveCategory(index)}
            className={activeCategory === index ? "active" : ""}
          >
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
