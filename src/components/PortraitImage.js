import React from "react";
import portrait_como from "../../static/images/portrait_como.jpg";
const PortraitImage = () => {
  return (
    <img
      className="flex w-2/3 pl-4 pt-4 lg:w-1/3 lg:pl-0 lg: pr-4 lg:object-contain"
      src={portrait_como}
      alt={"Portrait of Olli Toivanen"}
    ></img>
  );
};

export default PortraitImage;
