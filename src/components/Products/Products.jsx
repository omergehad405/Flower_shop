import React, { useContext, useState } from "react";
import "./Products.scss";
import { CartContext } from "../Context/CartContext";
function Products() {
  const [products, setProducts] = useState([
    {
      id: 1,
      img: "/images/img-1.jpg",
      title: "flower pot",
      price: 11.99,
      quantity: 1,
    },
    {
      id: 2,
      img: "/images/img-2.jpg",
      title: "flower pot",
      price: 14.99,
      quantity: 1,
    },
    {
      id: 3,
      img: "/images/img-3.jpg",
      title: "flower pot",
      price: 19.99,
      quantity: 1,
    },
    {
      id: 4,
      img: "/images/img-4.jpg",
      title: "flower pot",
      price: 29.99,
      quantity: 1,
    },
    {
      id: 5,
      img: "/images/img-5.jpg",
      title: "flower pot",
      price: 39.99,
      quantity: 1,
    },
    {
      id: 6,
      img: "/images/img-6.jpg",
      title: "flower pot",
      price: 54.99,
      quantity: 1,
    },
    {
      id: 7,
      img: "/images/img-7.jpg",
      title: "flower pot",
      price: 69.99,
      quantity: 1,
    },
    {
      id: 8,
      img: "/images/img-8.jpg",
      title: "flower pot",
      price: 79.99,
      quantity: 1,
    },
    {
      id: 9,
      img: "/images/img-9.jpg",
      title: "flower pot",
      price: 99.99,
      quantity: 1,
    },
  ]);
  const [activeProduct, setActiveProduct] = useState(null);
  const { setCart } = useContext(CartContext);

  function handleShowOptions(id) {
    setActiveProduct(id);
  }
  function handleHideOptions() {
    setActiveProduct(null);
  }
  function handleItem(id) {
    const selectedProduct = products.find((product) => product.id === id);
    setCart((prevCart) => {
      const currentProduct = prevCart.find((item) => item.id === id);
      if (currentProduct) {
        return prevCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...selectedProduct, quantity: 1 }];
      }
    });
  }

  return (
    <section className="Lproducts" id="products">
      <h1 className="heading">
        <span>latest </span>Products
      </h1>
      <div className="container">
        {products.map((product) => (
          <div
            className="product"
            key={product.id}
            onMouseEnter={() => handleShowOptions(product.id)}
            onMouseLeave={handleHideOptions}
          >
            <div className="image_box">
              <img src={product.img} />
              <div
                className={`options ${
                  activeProduct === product.id ? "apear" : "desapear"
                }`}
              >
                <button>
                  <a>
                    <i className="fa-solid fa-heart"></i>
                  </a>
                </button>
                <button onClick={() => handleItem(product.id)}>
                  <a>add to cart</a>
                </button>
                <button>
                  <a>
                    <i className="fa-solid fa-share"></i>
                  </a>
                </button>
              </div>
            </div>
            <div className="info">
              <h3>{product.title}</h3>
              <span>${product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
