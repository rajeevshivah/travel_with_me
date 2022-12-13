import React from "react";
import ImageSlider from "./ImageSlider";
import "./View.css";

const View = () => {
  return (
    <div className="view-container">
      <div className="view-container__slider">
        <ImageSlider
          image="https://www.shutterstock.com/image-photo/rishikesh-yoga-city-india-ganges-260nw-1136356940.jpg"
          name="Rishikesh"
        />
      </div>
      {/* <div className="view-container__details">
      <h3 className="view-container__name"></h3>
      <div className="quote-box">
        <p className="quote">Pahadon pe pyar nai, pahadon se pyar hota hai</p>
        <div className="user">
          <div className="rating"></div>
          <img/>
        </div>

      </div>
    </div> */}
    </div>
  );
};

export default View;
