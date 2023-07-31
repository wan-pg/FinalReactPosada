import { Routes, Route } from "react-router-dom";

import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./views/ItemListContainer";
import { ItemDetailsContainer } from "./views/ItemDetailsContainer";
import { Cart } from "./views/Cart";
import { Checkout } from "./views/Checkout";


function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer />}>
          
        </Route>
        <Route path="/category/:id" element={<ItemListContainer />}>
          
        </Route>
        <Route path="/item/:id" element={<ItemDetailsContainer />}>
          
        </Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
      </Routes>
    </>
  );
}

export default App;
