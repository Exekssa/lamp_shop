import React from "react";
import MainScreen from "../../MainScreen/MainScreen";
import Slider from "../../Slider/Slider";
import SliderWithCards from "../../SliderWithCards/SliderWithCards";
import SliderWithCardsMob from "../../SliderWithCardsMob/SliderWithCardsMob";
import Map from "../../Map/Map";
import Contacts from "../../Contacts/Contacts";
import "../Main/Main.css";

const Main = () => {
  window.scrollTo(0, 0);

  return (
    <div>
      <MainScreen
        mainTitle="Lorem ipsum dolor sit amet"
        mainSubtitle="Praesent eget suscipit ipsum, vitae hendrerit ex. Curabitur id luctus felis, at congue erat. Nam in risus at ipsum vehicula laoreet vel et nisi. Suspendisse in bibendum mauris, a bibendum enim."
      />
      <Slider />
      <SliderWithCards/>
      <SliderWithCardsMob/>
      <Contacts />
    </div>
  );
};

export default Main;
