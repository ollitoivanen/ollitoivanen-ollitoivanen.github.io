import React from "react";

const LinkIconItem = (props) => {
  return (
    <a href={props.link} target="_blank" rel="noreferrer">
      <img
        className="flex w-5 h-5 mx-2 hover:opacity-50 transition"
        src={props.src}
        alt={props.alt}
      />
    </a>
  );
};
export default LinkIconItem;
