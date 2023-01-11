import * as React from "react";


import PortraitImage from "../components/PortraitImage";

const skills = ["React Native", "React", "SwifUI", "Node.js", "Databases"]
const aboutMeText_1 = "Hello, I'm Olli, a long time software hobbyist and a second year software engineering student. I've been building my own apps and websites since 2017, all of which you can see on my " 
const aboutMeText_2 = ". My journey started when I discoverd a problem as a footballer that I wanted to solve. Playing competetively meant that I wanted to train on my own time. However, there wasn't a way to know if there was any space on the field to train. So I started building an app to solve this, first with Java, then with React Native. With no background to software engineering the learning curve felt impossibly deep. But with patience and lots of googling, I learned everything needed to build an app with authentication, a database and user interaction."
const aboutMeText_3 = "In the following years football became more of an hobby and I started taking software engineering even more seriously. I kept solving small inconveniences in my daily life with software, discovering new technologies and methodologies.  In 2020 I started my studies at University of Turku, studying Information Technology. Here I have met many like-minded friends to study and improve with.  Now my days consist of coding, studying and running. I also have a great interest in hiking, cycling and photography."
const IndexPage = () => {
  return (
    <main style={view_container}>
      <PortraitImage />
        <h1 style={text_header}>Building things to last</h1>
        <h2 style={text_name}>Olli Toivanen</h2>
        <h2 style={text_name}>
          <a style={text_personal_links} href={"https://www.linkedin.com/in/ollitoivanen/"}>LinkedIn</a>
        </h2>
        <h2 style={text_name}>
          <a style={text_personal_links} href={"https://github.com/ollitoivanen"}>GitHub</a>
        </h2>
        <div style={view_skills_container}>
          {skills.map(skill=>(
          <p style={text_skills}>{skill}</p>
          ))}      
      </div>
        <h2 style={text_about_me_header}>About Me</h2>
          <p style={text_about_me}>
            {aboutMeText_1}
          <a style={text_link} href="https://github.com/ollitoivanen">GitHub</a>
            {aboutMeText_2}
          </p>
          <p style={text_about_me}>{aboutMeText_3}</p>
    </main>
  );
};


const view_container = {
  padding: 48,
}

const text_header = {
  fontFamily: "Arvo Regular",
  paddingTop: 32,
};

const text_name = {
  fontFamily: "Arvo Regular",
  fontSize: 22,
  color: "gray",
};

const text_about_me_header = {
  fontFamily: "Arvo Regular",
  fontSize: 22,
  color: "gray",
  marginTop: 32
};

const text_skills = {
  fontFamily: "Arvo Regular",
  fontSize: 18,
};

const text_personal_links = {
  fontFamily: "Arvo Regular",
  fontSize: 18,
  marginVertical: 16
};

const text_about_me = {
  fontFamily: "Courier New",
  fontSize: 20,
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
  marginTop: 16,
  borderStyle: "solid",
  borderWidth: 3,
  borderColor: "black",
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
