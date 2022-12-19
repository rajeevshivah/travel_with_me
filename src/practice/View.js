import React from "react";
import ImageSlider from "./ImageSlider";
import SingleView from "./SingleView";
import "./View.css";
const DUMMY_DATA = [
  {
    placeImage:
      "https://www.euttaranchal.com/tourism/photos/happy-valley-mussoorie-5606944.jpg",
    placeName: "Rishikesh",
    travellerName: "Anshika",
    travellerImage:
      "https://i.pinimg.com/originals/09/ee/97/09ee9790e4a873be73302693a56a9bf6.jpg",
    star: 5,
    quote: "Pahado pe pyar nai, Pahado se pyar hota hai",
  },

  {
    placeImage:
      "https://www.shutterstock.com/image-photo/rishikesh-yoga-city-india-ganges-260nw-1136356940.jpg",
    placeName: "Musoorie",
    travellerName: "Saumya",
    travellerImage:
      "https://i.pinimg.com/564x/ac/55/47/ac5547f0bd276cbbad2fb5aa6cf8cf34.jpg",
    star: 2,
    quote: "Pahado ki rani Musoorie",
  },
  {
    placeImage:
      "https://thumbs.dreamstime.com/b/romantic-beach-night-goa-restaurant-menu-candle-lighting-palolem-india-69548327.jpg",
    placeName: "Goa",
    travellerName: "Ritik",
    travellerImage:
      "https://cdn.pixabay.com/photo/2021/03/27/19/25/boy-6129399__340.jpg",
    star: 4,
    quote: "Goa is Like that quite river which is dangerous but quite",
  },
  {
    placeImage:
      "https://www.shutterstock.com/image-photo/rishikesh-yoga-city-india-ganges-260nw-1136356940.jpg",
    placeName: "Rishikesh",
    travellerName: "Anshika",
    travellerImage:
      "https://i.pinimg.com/originals/09/ee/97/09ee9790e4a873be73302693a56a9bf6.jpg",
    star: 5,
    quote: "Pahado pe pyar nai, Pahado se pyar hota hai",
  },
];
const View = () => {
  return (
    <div className="view-container">
      {DUMMY_DATA.map((data) => {
        return <SingleView item={data} />;
      })}
    </div>
  );
};

export default View;
