import React from "react";
import Map from "../Map/Map";
import faker from "faker";
import "../Contacts/Contacts.css";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";

const Contacts = () => {
  const loremText = faker.lorem.paragraphs(4);

  return (
    <div id="aboutUs" className="contactsContainer blockMarginTop">
      <div className="textContainer">
        <div className="title" style={{ marginBottom: "30px" }}>
          About us
        </div>

        {loremText.split("\n").map((paragraph, index) => (
          <div className="simpleText" key={index}>
            {paragraph}
            <br/>
            <br/>
          </div>
        ))}

        <div className="contactsItems">
          <div className="contactsItem">
            <FaSquareFacebook size={25} color="#64B977" />
            <a href="#">@lampOn</a>
          </div>

          <div className="contactsItem">
            <FaWhatsappSquare size={25} color="#64B977" />
            <a href="#">+373 79 777 777</a>
          </div>
        </div>
      </div>

      {/* <div className="mapContainer"> */}
      <Map className="mapContainer" />
      {/* </div> */}
    </div>
  );
};

export default Contacts;
