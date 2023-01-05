import * as React from "react";

import PortraitImage from "../components/PortraitImage";

const pageStyles = {
  color: "#232129",
  padding: 48,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const text_header = {
  fontFamily: "Arvo Regular",
  paddingTop: 32,
  paddingLeft: 48,
};

const text_name = {
  fontFamily: "Arvo Regular",
  fontSize: 22,
  color: "gray",
  paddingLeft: 64,
};

const text_skills = {
  fontFamily: "Arvo Regular",
  fontSize: 18,
  wrap: true,
};

const view_skills_container = {
  paddingTop: 6,
  paddingLeft: 96,
  borderWidth: 4,
  borderColor: "black",
};
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <PortraitImage></PortraitImage>
      <h1 style={text_header}>Building things to last</h1>
      <h2 style={text_name}>Olli Toivanen</h2>
      <div style={view_skills_container}>
        <p style={text_skills}>Full Stack Developement</p>
        <p style={text_skills}>iOS / Android apps</p>
        <p style={text_skills}>Design</p>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
