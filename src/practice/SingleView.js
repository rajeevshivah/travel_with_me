import React from "react";
import ImageSlider from "./ImageSlider";
import PlaceDetails from "./PlaceDetails";
import "./SingleView.css";
const SingleView = (props) => {
  console.log(props.item);
  return (
    <fieldset className="single-view">
      <legend className="single-view__legend">{props.item.placeName}</legend>
      <ImageSlider image={props.item.placeImage} name={props.item.placeName} />
      <PlaceDetails
        image={props.item.travellerImage}
        name={props.item.travellerName}
        quote={props.item.quote}
        star={props.item.star}
      />
    </fieldset>
  );
};

export default SingleView;
