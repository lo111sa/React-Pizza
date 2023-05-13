import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem } from "../../redux/slices/cartSlice";
import style from "./PizzaInfo.module.scss";

export const PizzaInfo: React.FC = () => {
  const [pizza, setPizza] = useState<any>({});
  const { id } = useParams();
  const dispatch = useDispatch();

  const cartItem = useSelector((state: any) =>
    state.cart.items.find((obj: { id: string }) => obj.id === id)
  );

  const addedCount = cartItem ? cartItem.count : 0;

  useEffect(() => {
    const fetchId = async () => {
      const items = await axios.get(
        `https://64527bb3bce0b0a0f748372b.mockapi.io/items/${id}`
      );

      setPizza(items.data);
    };

    fetchId();
  }, []);

  return (
    <div className={style.root}>
      <img className={style.img} src={pizza.imageUrl} alt="Pizza" />
      <h2>{pizza.name}</h2>
      <h3>{pizza.price} $</h3>

      <button
        onClick={() => dispatch(addItem(pizza))}
        className="button button--outline button--add"
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
            fill="white"
          />
        </svg>
        <span>Add to cart</span>
        {addedCount > 0 && <i>{addedCount}</i>}
      </button>
    </div>
  );
};
