import React, { useState } from "react";
import "./App.css";
import Products from "./Products";
import Cart from "./Cart";
import basketLogo from "./components/shopping-cart.png";
import shopLogo from "./components/shop.png";
const PAGE_PRODUCTS = "products";
const PAGE_CART = "cart";

function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const getCartTotal = () => {
    return cart.reduce((sum, { quantity }) => sum + quantity, 0);
  };

  return (
    <div className="App">
      <header>
        <button onClick={() => navigateTo(PAGE_CART)}>
          Basket <img src={basketLogo} alt="basket-logo" className="photo" /> (
          {getCartTotal()})
        </button>

        <button onClick={() => navigateTo(PAGE_PRODUCTS)}>
          Products
          <img src={shopLogo} alt="shop-logo" className="photo" />
        </button>
      </header>
      {page === PAGE_PRODUCTS && <Products cart={cart} setCart={setCart} />}
      {page === PAGE_CART && <Cart cart={cart} setCart={setCart} />}
    </div>
  );
}
//test comment

/* Random comment for test commit */

export default App;
