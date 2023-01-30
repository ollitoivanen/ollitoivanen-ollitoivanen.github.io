import React from "react";

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
const Skills = () => {
  return (
    <div className="flex border-gray-200 border-2 justify-around mx-4 p-2 my-8 flex-wrap">
      {skills.map((skill) => (
        <p className="font-arvo text-gray-800 p-2">{skill}</p>
      ))}
    </div>
  );
};
export default Skills;
