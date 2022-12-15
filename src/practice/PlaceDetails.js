import React from "react";
import "./PlaceDetails.css";
const PlaceDetails = (props) => {
  return (
    <div className="main-container">
      <div>
        <p>{props.quote}</p>
        <div className="main-container__user">
          <div>
            <h2>{props.name}</h2>
            <h3>{props.star}</h3>
          </div>
          <div className="main-container__image">
            <img src={props.image} alt="props.name" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceDetails;
