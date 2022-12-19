import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import "./ImageSlider.css";

const ImageSlider = (props) => {
  return (
    <div className="slider">
      <div className="slider-left">
        <FontAwesomeIcon icon={faArrowLeftLong} />
      </div>
      <div>
        <img src={props.image} alt={props.placeName} />
      </div>
      <div className="slider-right">
        <FontAwesomeIcon icon={faArrowRightLong} />
      </div>
    </div>
  );
};

export default ImageSlider;
