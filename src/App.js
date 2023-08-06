import { Routes, Route } from "react-router-dom";


import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./views/ItemListContainer";
import { ItemDetailsContainer } from "./views/ItemDetailsContainer";
import { Cart } from "./views/Cart";
import {CartProvider} from "./context/CartContext"


function App() {
  return (
    <CartProvider>
      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer />}>
          
        </Route>
        <Route path="/category/:id" element={<ItemListContainer />}>
          
        </Route>
        <Route path="/item/:id" element={<ItemDetailsContainer />}>
          
        </Route>
        <Route path="/cart" element={<Cart />}></Route>
        
      </Routes>
    </CartProvider>
  );
}

export default App;
