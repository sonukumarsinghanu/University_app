import React from "react";
import slide03 from "../../images/slide-03.jpg";
import slide02 from "../../images/slide-02.jpg";
import slide01 from "../../images/slide-01.jpg";
import "./carosal.css";

const CarosalImage = () => {
  return (
    <div>
      <img src={slide03} alt="carosal" className="image" />
    </div>
  );
};
const CarosalImage1 = () => {
  return (
    <div>
      <img src={slide02} alt="carosal" className="image" />
    </div>
  );
};
const CarosalImage2 = () => {
  return (
    <div>
      <img src={slide01} alt="carosal" className="image" />
    </div>
  );
};

export { CarosalImage, CarosalImage1, CarosalImage2 };
