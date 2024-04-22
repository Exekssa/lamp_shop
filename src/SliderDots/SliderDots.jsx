import React from "react";
import "./SliderDots.css";

const SliderDots = ({ slides, currentSlideIndex, onDotClick }) => {
  return (
    <div className="sliderDotsContainer">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`sliderDot ${index === currentSlideIndex ? "active" : ""}`}
          onClick={() => onDotClick(index)}
        />
      ))}
    </div>
  );
};

export default SliderDots;
