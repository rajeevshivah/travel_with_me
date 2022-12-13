import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ImageSlider.css";

const ImageSlider = (props) => {
  return (
    <div className="slider">
      <div className="slider-left">
        {/* <FontAwesomeIcon icon="fa-solid fa-arrow-left-long" /> */}
        <i class="fa-solid fa-arrow-left-long"></i>
      </div>
      <div>
        <img src={props.image} alt={props.name} />
      </div>
      <div className="slider-right">
        <FontAwesomeIcon icon="fa-solid fa-arrow-right-long" />
      </div>
    </div>
  );
};

export default ImageSlider;
