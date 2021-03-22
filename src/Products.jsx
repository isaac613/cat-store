import React, { useState, useEffect } from "react";
import faker from "faker";
import { Modal } from "./Modal.js";

export default function Products({ setCart, cart }) {
  const [products, setProducts] = useState([]);

  const fetchData = () => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=10")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((item) => {
          item.name = faker.name.firstName();
          item.cost = faker.commerce.price();
        });
        setProducts(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find((item) => product.name === item.name);
    if (itemInCart) {
      alert("Item is already in cart!");
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };
  const [show, setShow] = useState(false);

  const closeModalHandler = () => setShow(false);
  return (
    <>
      <h1>Kittens and Cats for sale</h1>
      <div>
        {show ? (
          <div onClick={closeModalHandler} className="back-drop"></div>
        ) : null}
        <button onClick={() => setShow(true)} className="btn-openModal">
          Basket
        </button>
        <Modal show={show} close={closeModalHandler} />
      </div>
      <div className="products">
        {products.map((product, index) => (
          <div className="product" key={index}>
            <div className="cat-product">
              <h3>{product.name}</h3>
              <h4>£{product.cost}</h4>
              <img src={product.url} />
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
