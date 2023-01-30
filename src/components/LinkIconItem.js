import React from "react";

const LinkIconItem = (props) => {
  return (
    <a href={props.link} target="_blank">
      <img
        className="flex w-6 h-6 mx-2 hover:opacity-50 transition"
        src={props.src}
      />
    </a>
  );
};
export default LinkIconItem;
