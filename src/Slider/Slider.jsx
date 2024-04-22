import React from "react";
import { useState } from "react";
import "../Slider/Slider.css";
import { faker } from "@faker-js/faker";
import { capitalize } from "lodash";
import SliderDots from "../SliderDots/SliderDots";
import photo1 from "../Images/lamp_photo3.jpg";
import photo2 from "../Images/lamp_photo2.jpg";
import photo3 from "../Images/lamp_photo1.jpg";
import photo4 from "../Images/lamp_photo4.jpg";
import photo5 from "../Images/lamp_photo5.jpg";
import photo6 from "../Images/lamp_photo6.jpg";
import Button from "../Button/Button";

const Slider = () => {
  const [count, setCount] = useState(0);

  const rightClick = () => {
    setCount(count + 1);
  };

  const leftClick = () => {
    setCount(count - 1);
  };

  const handleDotClick = (index) => {
    setCount(index);
  };

  const generateSlidesData = () => {
    const slides = [];

    for (let i = 0; i < 6; i++) {
      const title = capitalize(faker.lorem.words());
      const description = faker.lorem.paragraphs(5);

      slides.push({
        src: eval(`photo${i + 1}`),
        title,
        description,
        alt: `Slide ${i + 1}`,
      });
    }

    return slides;
  };

  const slides = generateSlidesData();

  const currentSlideIndex =
    count >= 0 ? count % slides.length : slides.length - 1;
  const currentSlide = slides[currentSlideIndex];

  return (
    <div className="sliderContainer blockMarginTop">
      <div className="sliderWrapper">
        <img src={currentSlide.src} alt={currentSlide.alt} />
        <div className="slideDescription">
          <div className="subTitle" style={{ marginBottom: "30px" }}>
            {currentSlide.title}
          </div>
          <div>{currentSlide.description}</div>
        </div>
      </div>
      <SliderDots
        slides={slides}
        currentSlideIndex={currentSlideIndex}
        onDotClick={handleDotClick}
        
      />
      <div className="sliderButtons">
        <Button buttonText="Previous" onClick={leftClick} />
        <Button buttonText="Next" onClick={rightClick} />
      </div>
    </div>
  );
};

export default Slider;
