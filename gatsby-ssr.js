import React from "react";
//Not doing anything currently
export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="Arvo Regular"
      rel="preload"
      href="/fonts/arvo-regular.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
  ]);
};
