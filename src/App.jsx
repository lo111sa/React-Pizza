import { useEffect, useState } from "react";
import Categories from "./components/Categories";
import Header from "./components/Header";
import PizzaBlock from "./components/PizzaBlock";
import Sort from "./components/Sort";
import "./scss/app.scss";
import axios from "axios";
/* import data from "./db.json"; */

function App() {
  const data = [];
  const [items, setItems] = useState([]);

  const getData = async () => {
    const list = await axios.get(
      "https://64527bb3bce0b0a0f748372b.mockapi.io/items"
    );
    setItems(list.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">All pizzas</h2>
          <div className="content__items">
            {items.map((obj) => (
              <PizzaBlock key={obj.id} {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
