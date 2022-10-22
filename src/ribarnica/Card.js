import React, { useState } from "react";
import { useEffect } from "react";
import card from "./card.css";
import Cart from "./Cart";

const PRODUCTS = "products";
const CART = "cart";

export default function Cards() {
  const [cart, setCart] = useState([]);
  const [products] = useState([
    {
      name: "Sea bass",
      cost: 20,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcI1jMvSp7kALiljpcpfggkAX24OBBxWTGPg&usqp=CAU"
    },
    {
      name: "Gilt-head bream",
      cost: 10,
      image:
        "https://frozenfish.direct/wp-content/uploads/2019/11/067D3C9B-170E-4042-8F55-9EDC6A8DBA42-600x400-min-1.jpeg",
    },
    {
      name: "Salmon",
      cost: 35,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdS1s60umdjcYlWPmJtmajlDa33-vmNZvBTQ&usqp=CAU",
    },
    {
      name: "Mackerel",
      cost: 17,
      image:
        "data:image/jpeg;base64,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",
    },
  ]);
  const [page, setPage] = useState(PRODUCTS);
  const populateChart = (product) => {
    console.log("clicked");
    setCart([...cart, {...product}]);
  };
  const removeChart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove))
  };

  function renderProdutcs() {
    return (
      <>
        <header>
          <button  className="addToCart" onClick={() => changePage(CART)}>
            Go to cart ({cart.length})
          </button>
        </header>
        <div className="product">
          {products.map((product, idx) => (
            <div className="prod" key={idx}>
              <h2>{product.name}</h2>
              <p>Price: {product.cost}</p>
              <img src={product.image} alt="something" />
              <button className="addToCart" onClick={() => populateChart(product)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </>
    );
  }
  function renderCart() {
    return (
      <>
        <header>
          <button className="addToCart" onClick={() => changePage(CART)}>
            Go to cart ({cart.length})
          </button>
          <button className="addToCart" onClick={() => changePage(PRODUCTS)}>Go to products</button>
        </header>
        <div className="product">
          {cart.map((product, idx) => (
            <div className="prod" key={idx}>
              <h2>{product.name}</h2>
              <p>{product.cost}</p>
              <img src={product.image} alt="something" />
              <button className="addToCart" onClick={() => removeChart(product)}>Remove</button>
            </div>
          ))}
        </div>
      </>
    );
  }

  function changePage(nextPage) {
    setPage(nextPage);
  }

  return (
    <div>
      <h1 className="mainTitle">Our offer</h1>
      {page === PRODUCTS && renderProdutcs()}
      {page === CART && renderCart()}
    </div>
  );
}
