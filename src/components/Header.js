import React, { useState } from "react";
import {
  ABOUT_ME,
  GITHUB_LINK,
  LINKEDIN_LINK,
  OLLI_TOIVANEN,
  WORK,
} from "../../static/constants";
import github_icon from "../../static/images/github_icon.png";
import linkedin_icon from "../../static/images/linkedin_icon.png";
import LinkIconItem from "./LinkIconItem";

const Header = () => {
  return (
    <div className="bg-white w-full flex flex-row sticky top-0 z-1 border-b-2 border-black justify-between p-4 mb-16">
      <div className="flex items-center">
        <p className=" flex font-arvo text-3xl mr-4">{OLLI_TOIVANEN}</p>
        <LinkIconItem src={github_icon} link={GITHUB_LINK} />
        <LinkIconItem src={linkedin_icon} link={LINKEDIN_LINK} />
      </div>
      <div className="flex flex-row">
        <p className="font-arvo text-2xl mr-8 hover:scale-110 transition">
          {WORK}
        </p>
        <p className="font-arvo text-2xl hover:scale-110 transition">
          {ABOUT_ME}
        </p>
      </div>
    </div>
  );
};

export default Header;
