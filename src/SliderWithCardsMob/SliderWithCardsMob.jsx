import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import productsData from "../products.json";
import "../SliderWithCardsMob/SliderWithCardsMob.css";

const SliderWithCardsMob = ({ onAddToCart }) => {
  const [cardsPerPage, setCardsPerPage] = useState(1); // Используем состояние для числа карточек в строке
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setProducts(productsData);
    updateCardsPerPage(); 
    window.addEventListener("resize", updateCardsPerPage); 
    return () => {
      window.removeEventListener("resize", updateCardsPerPage); 
    };
  }, []);

  const updateCardsPerPage = () => {
   
    if (window.innerWidth <= 1024 && window.innerWidth > 640 ) {
      setCardsPerPage(2);
    } else if (window.innerWidth <= 640) {
      setCardsPerPage(1);
    } else {
      setCardsPerPage(1);
    }
  };

  const [groupIndex, setGroupIndex] = useState(0);

  const isLastGroup =
    groupIndex === Math.ceil(products.length / cardsPerPage) - 1;
  const isFirstGroup = groupIndex === 0;

  const nextGroup = () => {
    if (!isLastGroup) {
      setGroupIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevGroup = () => {
    if (!isFirstGroup) {
      setGroupIndex((prevIndex) => prevIndex - 1);
    }
  };

  const currentGroup = products.slice(
    groupIndex * cardsPerPage,
    (groupIndex + 1) * cardsPerPage
  );

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    onAddToCart(product);
  };

  const wrapperStyle = {
    display: "flex",
    gap: "40px",
    height: "100%",
    alignItems: "stretch",
    justifyContent: "space-between",
  };

  return (
    <div className="sliderContainerGroupMob">
      <div className="sliderWrapperGroup blockMarginTop" style={wrapperStyle}>
        {currentGroup.map((product, index) => (
          <Card
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>

      {!isLastGroup && (
        <div>
          <button className="sliderButton rightButton" onClick={nextGroup}>
            &gt;
          </button>
        </div>
      )}
      {!isFirstGroup && (
        <div>
          <button className="sliderButton leftButton" onClick={prevGroup}>
            &lt;
          </button>
        </div>
      )}
    </div>
  );
};

export default SliderWithCardsMob;
