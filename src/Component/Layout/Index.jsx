import React, { useEffect, useState } from "react";
import ArrowImage from "./image.png";
import "./Layout.css";
import BannerComponent from "../BannerComponent/index.jsx";
import TextComponent from "../TextComponent/TextComponent.jsx";
import Carousel from "../Carousel/index.jsx";

function Layout() {
  return (
    <div>
      {/* banner Image */}
      <BannerComponent />
      {/* text */}
      <div>
        <TextComponent />
      </div>
      {/* Slider */}
      <div>
        <Carousel />
      </div>
    </div>
  );
}

export default Layout;
