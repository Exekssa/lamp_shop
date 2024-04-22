import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import logo from "../Images/logo.svg";
import { faker } from "@faker-js/faker";
import "./Footer.css";

const Footer = () => {
  const footerItems = [];

  for (let i = 0; i < 8; i++) {
    const text = faker.lorem.words(3);
    const capitalizedText = text.replace(/\b\w/g, (char) => char.toUpperCase()); // Преобразование первой буквы каждого слова в верхний регистр
    footerItems.push(capitalizedText);
  }

  const firstHalf = footerItems.slice(0, 4);
  const secondHalf = footerItems.slice(4);

  return (
    <div className="footer blockMarginTop ">
      <div className="footerContainer">
        <div className="footerContacts">
          <img src={logo} alt="logo" className="footerLogo" />

          <div className="contactsItem">
            <FaSquareFacebook size={25} color="#64B977" />
            <a href="#">@lampOn</a>
          </div>

          <div className="contactsItem">
            <FaWhatsappSquare size={25} color="#64B977" />
            <a href="#">+373 79 777 777</a>
          </div>
        </div>


        <ul className="footerUl">
          {firstHalf.map((str, index) => (
            <li key={index}>{str}</li>
          ))}
        </ul>

        <ul className="footerUl">
          {secondHalf.map((str, index) => (
            <li key={index}>{str}</li>
          ))}
        </ul>
       
      </div>
    </div>
  );
};

export default Footer;