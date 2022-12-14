import React from "react";
import ImageSlider from "./ImageSlider";
import "./View.css";
const DUMMY_DATA = [
  {
    image:
      "https://www.shutterstock.com/image-photo/rishikesh-yoga-city-india-ganges-260nw-1136356940.jpg",
    name: "Rishikesh",
  },
  {
    image:
      "https://www.shutterstock.com/image-photo/rishikesh-yoga-city-india-ganges-260nw-1136356940.jpg",
    name: "Rishikesh",
  },
  {
    image:
      "https://www.shutterstock.com/image-photo/rishikesh-yoga-city-india-ganges-260nw-1136356940.jpg",
    name: "Rishikesh",
  },
  {
    image:
      "https://www.shutterstock.com/image-photo/rishikesh-yoga-city-india-ganges-260nw-1136356940.jpg",
    name: "Rishikesh",
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
        return <ImageSlider image={data.image} name={data.name} />;
      })}
    </div>
  );
};

export default View;
