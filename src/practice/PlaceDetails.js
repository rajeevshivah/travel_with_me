import React from "react";
import "./PlaceDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const PlaceDetails = (props) => {
  return (
    <div className="main-container">
      <div>
        <p>{props.quote}</p>
        <div className="main-container__user">
          <div className="main-container__user__nameandreview">
            <h2>{props.name}</h2>
            <h3>
              <FontAwesomeIcon icon={faStar} className="faStar" />
              <FontAwesomeIcon icon={faStar} className="faStar" />
              <FontAwesomeIcon icon={faStar} className="faStar" />
              <FontAwesomeIcon icon={faStar} className="faStar" />
              <FontAwesomeIcon icon={faStar} className="faStar" />
            </h3>
          </div>
          <div className="main-container__user__image">
            <img src={props.image} alt="props.name" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceDetails;
