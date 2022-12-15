import React from "react";
import ImageSlider from "./ImageSlider";
import SingleView from "./SingleView";
import "./View.css";
const DUMMY_DATA = [
  {
    placeImage:
      "https://www.shutterstock.com/image-photo/rishikesh-yoga-city-india-ganges-260nw-1136356940.jpg",
    placeName: "Rishikesh",
    travellerName: "Anshika",
    travellerImage:
      "https://images.unsplash.com/photo-1622782045716-a05bcc4f5ae8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aW5kaWFuJTIwZ2lybHxlbnwwfHwwfHw%3D&w=1000&q=80",
    star: 5,
    quote: "Pahado pe pyar nai, Pahado se pyar hota hai",
  },

  {
    placeImage:
      "https://www.shutterstock.com/image-photo/rishikesh-yoga-city-india-ganges-260nw-1136356940.jpg",
    placeName: "Rishikesh",
    travellerName: "Anshika",
    travellerImage:
      "https://images.unsplash.com/photo-1622782045716-a05bcc4f5ae8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aW5kaWFuJTIwZ2lybHxlbnwwfHwwfHw%3D&w=1000&q=80",
    star: 2,
    quote: "Pahado pe pyar nai, Pahado se pyar hota hai",
  },
  {
    placeImage:
      "https://www.shutterstock.com/image-photo/rishikesh-yoga-city-india-ganges-260nw-1136356940.jpg",
    placeName: "Rishikesh",
    travellerName: "Anshika",
    travellerImage:
      "https://images.unsplash.com/photo-1622782045716-a05bcc4f5ae8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aW5kaWFuJTIwZ2lybHxlbnwwfHwwfHw%3D&w=1000&q=80",
    star: 4,
    quote: "Pahado pe pyar nai, Pahado se pyar hota hai",
  },
  {
    placeImage:
      "https://www.shutterstock.com/image-photo/rishikesh-yoga-city-india-ganges-260nw-1136356940.jpg",
    placeName: "Rishikesh",
    travellerName: "Anshika",
    travellerImage:
      "https://images.unsplash.com/photo-1622782045716-a05bcc4f5ae8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aW5kaWFuJTIwZ2lybHxlbnwwfHwwfHw%3D&w=1000&q=80",
    star: 5,
    quote: "Pahado pe pyar nai, Pahado se pyar hota hai",
  },
];
const View = () => {
  return (
    <div className="view-container">
      {/* <ImageSlider
          image="https://www.shutterstock.com/image-photo/rishikesh-yoga-city-india-ganges-260nw-1136356940.jpg"
          name="Rishikesh"
        /> */}
      {DUMMY_DATA.map((data) => {
        return <SingleView item={data} />;
      })}
    </div>
  );
};

export default View;
