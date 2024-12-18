import { useState, useEffect } from "react";
//import { BrowserRouter, Navigate, Route, Routes  } from 'react-router-dom';
import NavBar from "../NavBar/NavBar";
import { ItemListContainer } from "../ItemListContainer/ItemListContainer";
//import ItemCount from "../ItemCount/ItemCoutn";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import CartContainer from "../CartContainer/CartContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartContextProvider } from "../../context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
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
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
