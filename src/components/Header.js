import React, { useEffect, useState } from "react";
import {
  ABOUT_ME,
  GITHUB_LINK,
  LINKEDIN_LINK,
  OLLI_TOIVANEN,
  WORK,
} from "../../static/constants";
import github_icon from "../../static/images/github_icon.png";
import linkedin_icon from "../../static/images/linkedin_icon.png";
import sidebar_icon from "../../static/images/sidebar_icon.png";

import LinkIconItem from "./LinkIconItem";
import SideBar from "./SideBar";

const Header = () => {
  const [showingSideBar, setShowingSideBar] = useState(false);
  useEffect(() => {
    console.log(showingSideBar);
  }, []);

  function renderSideBarButton() {
    console.log("hi");
    if (window.innerWidth < 1024) {
      return (
        <button onClick={setShowingSideBar(true)}>
          <img className="w-6 h-6" src={sidebar_icon}></img>
        </button>
      );
    }
    return (
      <p className="font-arvo text-2xl mr-8 hover:scale-110 transition">
        {WORK}
      </p>
    );
  }

  function renderSideBar() {
    if (!showingSideBar) {
      return null;
    }
    return SideBar;
  }
  return (
    <div className="bg-white w-full flex flex-row sticky top-0 z-1 border-b-2 border-black justify-between p-4 lg:mb-16">
      <div className="flex items-center">
        <p className=" flex font-arvo text-xl mr-2 lg:text-3xl ">
          {OLLI_TOIVANEN}
        </p>
        <LinkIconItem src={github_icon} link={GITHUB_LINK} />
        <LinkIconItem src={linkedin_icon} link={LINKEDIN_LINK} />
      </div>
      {() => renderSideBarButton()}
      <button onClick={() => setShowingSideBar(true)}>
        <img className="w-6 h-6" src={sidebar_icon}></img>
      </button>
      {showingSideBar ? (
        <SideBar setShowingSideBar={() => setShowingSideBar(false)} />
      ) : null}
    </div>
  );
};

export default Header;
