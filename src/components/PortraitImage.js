import React, { useState } from "react";
import portrait_como from "../images/portrait_como.jpeg";
const PortraitImage = () => {
  return (
    <div>
      <img style={image_portrait} src={portrait_como}></img>
    </div>
  );
};

const view_container = {
  backgroundColor: "white",
  borderStyle: "solid",
  borderColor: "black",
  borderWidth: 3,
  borderRadius: 10,
  margin: 8,
  marginTop: 16,
  marginBottom: 16,
  paddingTop: 16,
  paddingBottom: 16,
  paddingRight: 16,
};

const image_portrait = {
  height: 320,
};

export default PortraitImage;
