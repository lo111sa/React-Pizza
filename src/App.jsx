import "./App.css";
import { createContext, useEffect, useState } from "react";
import Header from "./Components/header/Header";
import Main from "./Components/main/Main";
import axios from "axios";

export const StoreContext = createContext();
function App() {
  const [pizzas, setPizzas] = useState([]);
  const [sortItems, setSortItems] = useState([
    "Popular",
    "By price",
    "Alphabet",
  ]);
  const [categories, setCategories] = useState([
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ]);

  const getPizzas = async () => {
    const items = await axios.get("http://localhost:3000/db.json");
    setPizzas(items.data.pizzas);
  };

  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <div className="container">
      <StoreContext.Provider value={{ pizzas, categories, sortItems }}>
        <Header />
        <Main />
      </StoreContext.Provider>
    </div>
  );
}

export default App;
