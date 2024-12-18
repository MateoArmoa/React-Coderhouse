import { useState, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import NavBar from "./componentes/NavBar/NavBar";
import { ItemListContainer } from "./componentes/ItemListContainer/ItemListContainer";
//import ItemCount from './componentes/ItemCount/ItemCount';
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import CartContainer from "./componentes/CartContainer/CartContainer";

import "bootstrap/dist/css/bootstrap.min.css";
import { CartContextProvider } from "./context/CartContext";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <div>
          <Routes>
            <Route
              path="/"
              element={
                <ItemListContainer saludo="saludo soy ItemList Container" />
              }
            />
            <Route
              path="/categoria/:idCategoria"
              element={
                <ItemListContainer saludo="saludo soy ItemList Container" />
              }
            />

            <Route
              path="/detalle/:idProducto"
              element={<ItemDetailContainer />}
            />
            <Route path="/cart" element={<CartContainer />} />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
