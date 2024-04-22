import React, { useState } from "react";
import "../Card/Card.css";
import basket from "../Images/basket_line.svg";
import { useCart } from "../cartContext";
import ArrowButton from "../ArrowButton/ArrowButton";
const Card = ({ product, setIsActivPopup }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
    setIsActivPopup(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
    setIsActivPopup(false);
  };

  return (
    <div className="myCard">
      <div className="cardContainer">
        <div className="photoContainer">
          <img
            className="productPhoto"
            src={product.photo}
            alt={product.name}
            onClick={openPopup}
          />
        </div>
        <div className="cardContent">
          <div className="cardInfo" onClick={openPopup}>
            <div className="lampName smallText">{product.name}</div>
            <div className="priceText">{product.price} lei</div>
          </div>

          <div className="cardDetails">
            <ArrowButton
              buttonText="Details"
              textColor="#010602"
              arrowColor="#010602"
              onClick={openPopup}
            />
            <img
              src={basket}
              alt="basket"
              className="iconCard"
              onClick={() => handleAddToCart(product)}
            />
          </div>
        </div>
      </div>

      {isPopupOpen && (
        <div className="popUpBackground">
          <div className="popUpInfo">
            <button onClick={closePopup} className="closeCart">
              ✖
            </button>

            <div className="popUpPhoto">
              <img src={product.photo} alt={product.name} />
            </div>

            <div className="popUpTextContent">
              <div
                className="subTitle popUpTitle"
                style={{ color: "#010602", fontWeight: 600 }}
              >
                Main characteristics
              </div>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <strong>Brand</strong>
                    </td>
                    <td>{product.brand}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Color</strong>
                    </td>
                    <td>{product.color}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Weight</strong>
                    </td>
                    <td>{product.weight}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Size (H x W x T)</strong>
                    </td>
                    <td>{product.size}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Model</strong>
                    </td>
                    <td>{product.model}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Power</strong>
                    </td>
                    <td>{product.power}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Power supply</strong>
                    </td>
                    <td>{product.powerSupply}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Color Temperature</strong>
                    </td>
                    <td>{product.colorTemperature}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Backlight type</strong>
                    </td>
                    <td>{product.backlightType}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Lamp life</strong>
                    </td>
                    <td>{product.lampLife}</td>
                  </tr>
                </tbody>
              </table>

              <div className="sellInfo">
                <div
                  className="priceText"
                  style={{ color: "#64B977", fontWeight: 600 }}
                >
                  {product.price} lei
                </div>
                <img
                  src={basket}
                  alt="basket"
                  className="iconPopUp"
                  onClick={() => handleAddToCart(product)}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
