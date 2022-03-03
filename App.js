import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import Header from "./components/Header";
import BuyPage from "./components/BuyPage";
import Cart from "./components/Cart";
import { toast, ToastContainer } from "react-toastify";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [cartItem, setCardItem] = useState([]);

  const addInCart = (item) => {
    const isAllreadyAdded = cartItem.findIndex(function (array) {
      return array.id === item.id;
    });
    if (isAllreadyAdded !== -1) {
      toast("already added in cart", {
        type: "error",
      });
      return;
    }
    setCardItem([...cartItem, item]);
  };

  const buyNow = () => {
    setCardItem([]);
    toast("purchase complete", {
      type: "success",
    });
  };

  const removeItem = (item) =>
    setCardItem(cartItem.filter((singleItem) => singleItem.id !== item.id));

  return (
    <Router>
      <Link to="cart">
        <Header />
      </Link>
      <Routes>
        <Route
          path="/cart"
          element={
            <Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow} />
          }
        />
      </Routes>

      <ToastContainer />

      <BuyPage addInCart={addInCart} />
    </Router>
  );
}

export default App;
