import React from "react";
import {
  ABOUT_ME_PARAGRAPH_1,
  ABOUT_ME_PARAGRAPH_2,
  ABOUT_ME_PARAGRAPH_3,
  BUILDING_THINGS,
} from "../../static/constants";
import Header from "../components/Header";
import PortraitImage from "../components/PortraitImage";
import Skills from "../components/Skills";

const IndexPage = () => {
  return (
    <main className="lg:p-12">
      <Header />
      <div className="flex flex-col lg:flex-row">
        <PortraitImage />
        <div className="px-4 mt-4">
          <h1 className="font-arvo text-xl mb-4 lg:text-2xl ">
            {BUILDING_THINGS}
          </h1>
          <p className="font-poppins text-gray-800">{ABOUT_ME_PARAGRAPH_1}</p>
          <br />
          <p className="font-poppins text-gray-800">{ABOUT_ME_PARAGRAPH_2}</p>
          <br />
          <p className="font-poppins text-gray-800">{ABOUT_ME_PARAGRAPH_3}</p>
        </div>
      </div>
      <Skills />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Olli Toivanen</title>;
