import React from "react";
import {
  GITHUB_LINK,
  LINKEDIN_LINK,
  OLLI_TOIVANEN,
} from "../../static/constants";
import github_icon from "../../static/images/github_icon.png";
import linkedin_icon from "../../static/images/linkedin_icon.png";
import LinkIconItem from "./LinkIconItem";

const Header = () => {
  return (
    <div className="bg-white w-full flex flex-row sticky top-0 z-1 border-b-2 border-black justify-between p-4 lg:mb-16">
      <div className="flex items-center">
        <p className=" flex font-arvo text-xl mr-2 lg:text-3xl ">
          {OLLI_TOIVANEN}
        </p>
        <LinkIconItem
          src={github_icon}
          link={GITHUB_LINK}
          alt={"Github icon"}
        />
        <LinkIconItem
          src={linkedin_icon}
          link={LINKEDIN_LINK}
          alt={"LinkedIn icon"}
        />
      </div>
    </div>
  );
};

export default Header;
