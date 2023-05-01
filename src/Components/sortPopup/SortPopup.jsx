import React, { useContext } from "react";
import "./style.css";
import { StoreContext } from "../../App";

export default function SortPopup() {
  const store = useContext(StoreContext);
  return (
    <div className="sortPopup">
      <ul className="list">
        {store.sortItems.map((el) => (
          <li>{el}</li>
        ))}
      </ul>
    </div>
  );
}
