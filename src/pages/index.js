import * as React from "react";


import PortraitImage from "../components/PortraitImage";

const view_container = {
  padding: 48
}

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

const text_about_me_header = {
  fontFamily: "Arvo Regular",
  fontSize: 22,
  color: "gray",
  paddingLeft: 64,
  marginTop: 64
};

const text_skills = {
  fontFamily: "Arvo Regular",
  fontSize: 18,
};

const text_about_me = {
  fontFamily: "Courier New",
  fontSize: 20,
  paddingLeft: 80,
  width: "75%"
}

const text_link = {
  fontFamily: "Courier New",
  fontSize: 20,
}

const view_skills_container = {
  display: "inline-block",
  padding: 6,
  paddingLeft: 36,
  paddingRight: 36,
  marginTop: 24,
  marginLeft: 96,
  borderStyle: "solid",
  borderWidth: 3,
  borderColor: "black",
};
const IndexPage = () => {
  return (
    <main style={view_container}>
      <PortraitImage />
      <h1 style={text_header}>Building things to last</h1>
      <h2 style={text_name}>Olli Toivanen</h2>
      <div style={view_skills_container}>
        <p style={text_skills}>Full Stack Developement</p>
        <p style={text_skills}>iOS / Android apps</p>
      </div>
      <h2 style={text_about_me_header}>About Me</h2>
      <p style={text_about_me}>Hello, I'm Olli, a long time software hobbyist and a second year software engineering student.
       I've been building my own apps and websites since 2017,
        all of which you can see on my <a style={text_link} href="https://github.com/ollitoivanen?tab=repositories">GitHub</a>
      .</p>

    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
