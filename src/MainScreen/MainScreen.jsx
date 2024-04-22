import React from "react";
import { NavLink } from "react-router-dom";
import "../MainScreen/MainScreen.css";
import Button from "../Button/Button";
import ArrowButton from "../ArrowButton/ArrowButton";
import productOfDay from "../Images/productOfDay.jpg";
import productsData from "../products.json";

const MainScreen = ({ mainTitle, mainSubtitle }) => {
  const popularProduct = productsData[19];

  return (
  
      <div className="mainScreen ">
        <div className="mainContent">
          <h1 className="title">{mainTitle}</h1>
          <div className="subTitle">{mainSubtitle}</div>

          <div className="buttonMainContainer">
            <NavLink to="/products" exact activeClassName="activeLink">
              <Button buttonText="View all lamps" />
            </NavLink>

            <ArrowButton
              buttonText="About us"
              textColor="#010602"
              arrowColor="#010602"
              to="aboutUs"
            />
          </div>
        </div>
        <div className="mainProduct">
          <div className="mainProductInfo">
            <div
              className="smallText"
              style={{ color: "#0F3A27", fontWeight: "600" }}
            >
              {popularProduct.name}
            </div>
            <div className="priceText">{popularProduct.price} lei</div>
            {/* 
            <ArrowButton
              buttonText="Details"
              textColor="#010602"
              arrowColor="#010602"
            /> */}
          </div>
          <img src={productOfDay} alt="lamp of day" />
        </div>
      </div>
    
  );
};

export default MainScreen;
