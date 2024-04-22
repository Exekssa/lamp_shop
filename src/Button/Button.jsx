import React from "react";
import "../Button/Button.css";


const Button = ({ buttonText, onClick }) => {
  return (
    <div>
      <button className="buttonDesign" onClick={onClick}>{buttonText} </button>
    </div>
  );
};

export default Button;
