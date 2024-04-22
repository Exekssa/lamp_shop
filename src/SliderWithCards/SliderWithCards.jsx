import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import productsData from "../products.json";
import "./SliderWithCards.css";

const SliderWithCards = ({ onAddToCart }) => {
  const cardsPerPage = 4;
  const [isActivPopup, setIsActivPopup] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const [groupIndex, setGroupIndex] = useState(0);

  const isLastGroup =
    groupIndex === Math.ceil(products.length / cardsPerPage) - 1;
  const isFirstGroup = groupIndex === 0;

  const nextGroup = () => {
    if (!isLastGroup) {
      setGroupIndex(
        (prevIndex) => (prevIndex + 1) % Math.ceil(products.length / 4)
      );
    }
  };

  const prevGroup = () => {
    if (!isFirstGroup) {
      setGroupIndex(
        (prevIndex) =>
          (prevIndex - 1 + Math.ceil(products.length / 4)) %
          Math.ceil(products.length / 4)
      );
    }
  };

  const currentGroup = products.slice(groupIndex * 4, (groupIndex + 1) * 4);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    onAddToCart(product);
  };

  const wrapperStyle = {
    display: "flex",
    gap: "40px",
    height: "100%",
    alignItems: "stretch",
    justifyContent:
      currentGroup.length < cardsPerPage ? "flex-start" : "space-between",
  };

  return (
    <div className="sliderContainerGroup">
      <div className="sliderWrapperGroup blockMarginTop" style={wrapperStyle}>
        {currentGroup.map((product, index) => (
          <Card
            key={product.id}
            product={product}
            setIsActivPopup={setIsActivPopup}
          />
        ))}
      </div>

      {!isActivPopup && (
        <div>
          <button className="sliderButton leftButton" onClick={prevGroup}>
            &lt;
          </button>
          <button className="sliderButton rightButton" onClick={nextGroup}>
            &gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default SliderWithCards;
