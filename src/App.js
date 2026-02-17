import React, { useState } from "react";
import "./App.css";

function App() {
  const menu = [
    { id: 1, name: "すし", price: 250 },
    { id: 2, name: "ラーメン", price: 180 },
    { id: 3, name: "てんぷら", price: 200 },
    { id: 4, name: "おにぎり", price: 80 },
    { id: 5, name: "マッチャティー", price: 60 },
  ];

  const [cart, setCart] = useState([]);

  // Add item to cart
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  // Calculate total
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="app">
      <h1>🌸 サクラ・ジャパニーズ・レストラン</h1>

      {/* Menu Section */}
      <h2>メニュー</h2>
      <div className="menu">
        {menu.map((item) => (
          <div key={item.id} className="menu-item">
            <h3>{item.name}</h3>
            <p> {item.price} 円</p>
            <button onClick={() => addToCart(item)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      <h2>🛒 Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <div>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} -  {item.price} 円
              </li>
            ))}
          </ul>

          <h3>Total: {total}  円 </h3>
        </div>
      )}
    </div>
  );
}

export default App;
