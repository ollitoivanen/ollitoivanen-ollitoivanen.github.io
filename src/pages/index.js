import * as React from "react";
import {
  ABOUT_ME_PARAGRAPH_1,
  ABOUT_ME_PARAGRAPH_2,
  ABOUT_ME_PARAGRAPH_3,
  BUILDING_THINGS,
} from "../../static/constants";
import Header from "../components/Header";

import PortraitImage from "../components/PortraitImage";

const skills = [
  "React Native",
  "React",
  "SwifUI",
  "Node.js",
  "Firebase",
  "MongoDB",
  "Agile methods",
  "Git",
];

const IndexPage = () => {
  return (
    <main className="p-12">
      <Header />
      <div className="flex">
        <PortraitImage />
        <div className="w-2/3 ml-8 mt-4">
          <h1 className="font-arvo text-2xl mb-4">{BUILDING_THINGS}</h1>
          <p className="font-poppins text-gray-800">{ABOUT_ME_PARAGRAPH_1}</p>
          <br />
          <p className="font-poppins text-gray-800">{ABOUT_ME_PARAGRAPH_2}</p>
          <br />
          <p className="font-poppins text-gray-800">{ABOUT_ME_PARAGRAPH_3}</p>
        </div>
      </div>
      <div className="flex border-gray-200 border-2 justify-around p-2 my-4">
        {skills.map((skill) => (
          <p className="font-arvo text-gray-800">{skill}</p>
        ))}
      </div>
    </main>
  );
};

const text_skills = {
  fontFamily: "Arvo Regular",
  fontSize: 18,
};

const text_personal_links = {
  fontFamily: "Arvo Regular",
  fontSize: 18,
  marginVertical: 16,
};

const text_about_me = {
  fontFamily: "Courier New",
  fontSize: 20,
};

const text_link = {
  fontFamily: "Courier New",
  fontSize: 20,
};

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
