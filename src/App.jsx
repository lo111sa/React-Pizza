import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import "./scss/app.scss";
import { NotFound } from "./pages/NotFound";
import { Cart } from "./pages/Cart";
/* import data from "./db.json"; */

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
