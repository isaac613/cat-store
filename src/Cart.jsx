import React from "react";
export default function Cart({ cart, setCart }) {
  const getTotalSum = () => {
    return cart.reduce((sum, { cost, quantity }) => sum + cost * quantity, 0);
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  return (
    <>
      <h1>Basket</h1>

      <div className="products">
        {cart.map((product, index) => (
          <div className="product cat-product" key={index}>
            <h3>{product.name}</h3>
            <h4>£{product.cost}</h4>

            <img src={product.url} alt={product.name} />
            <button onClick={() => removeFromCart(product)}>Remove</button>
          </div>
        ))}
      </div>

      <div className="total-cost">Total Cost: £{getTotalSum()}</div>

      {cart.length > 0 && <button onClick={clearCart}>Clear Cart</button>}
    </>
  );
}
