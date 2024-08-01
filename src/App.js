import Nav from "./components/Nav";
import Footer from "./components/Footer";
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { decors } from "./decors";
import Home from "./pages/Home";
import Decors from "./pages/Decors";
import DecorInfo from "./pages/DecorInfo";
import Cart from "./pages/Cart";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(decor) {
    setCart([...cart, {...decor, quantity: 1}])
  }

  function changeQuantity(decor, quantity) {
    setCart(
      cart.map(item => 
        item.id === decor.id 
          ? {
            ...item,
            quantity: +quantity,
          }
          : item
      )
    );
  }

  function removeItem(item) {
    setCart(cart.filter(decor => decor.id !== item.id))
  }

  function numberOfItems() {
    let counter = 0;
    cart.forEach((item) => {
      counter += item.quantity;
    })
    return counter;
  }

  useEffect(() => {
    console.log(cart);
  }, [cart])

  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems()}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/decors"  element={<Decors decors={decors} />} />
          <Route path="/decors/:id" element={<DecorInfo decors={decors} addToCart={addToCart} cart={cart} />} />
          <Route path="/cart" element={<Cart decors={decors} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
