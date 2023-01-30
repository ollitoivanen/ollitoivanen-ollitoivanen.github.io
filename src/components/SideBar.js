import React from "react";

import close_icon from "../../static/images/close_icon.png";

const SideBar = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-screen z-10 bg-white p-4 flex justify-between">
      <p>Work</p>
      <button onClick={() => props.setShowingSideBar(false)}>
        <img className="w-6 h-6" src={close_icon}></img>
      </button>
    </div>
  );
};

export default SideBar;
