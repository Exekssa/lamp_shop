import React from "react";
import { Link } from "react-scroll"; 
import "./ArrowButton.css";

const ArrowButton = ({ buttonText, textColor, arrowColor, to, onClick }) => {
  const arrowStyle = {
    color: arrowColor,
  };

  const textStyle = {
    color: textColor,
  };

  return (
    <Link to={to} smooth={true} duration={500}>
      <button className="arrowButton" onClick={onClick}>
        <div style={textStyle}>{buttonText}</div>
        <span style={arrowStyle}>&gt;</span>
      </button>
    </Link>
  );
};

export default ArrowButton;
