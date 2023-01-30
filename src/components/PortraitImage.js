import React from "react";
import portrait_como from "../images/portrait_como.jpeg";
const PortraitImage = () => {
  return (
    <div>
      <img className="w-1/3" src={portrait_como}></img>
    </div>
  );
};

const image_portrait = {
  height: 300,
  marginRight: 48,
};
export default PortraitImage;
