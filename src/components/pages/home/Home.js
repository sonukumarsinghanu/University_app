import React from "react";
import Slider from "../../slider/Slider";
import About from "../about/About";
import Message from "../../message/Message";
import VideoPage from "../../videoSection/VideoPage";
import Courses from "../../courses/Courses";
import PhotoGallery from "../../gallery/PhotoGallery";

const Home = () => {
  return (
    <div className="App">
      <Slider />
      <About />
      <Message />
      <VideoPage />
      <Courses />
      {/* <PhotoGallery /> */}
    </div>
  );
};

export default Home;
