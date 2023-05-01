import React from "react";
import "./style.css";

export default function CategoryItem({ category }) {
  return <button className="catButton">{category}</button>;
}
