import React, { useState } from "react";
import { ABOUT_ME, OLLI_TOIVANEN, WORK } from "../../static/constants";

const Header = () => {
  return (
    <div className="bg-white w-full flex flex-row sticky top-0 z-1 border-b-2 border-black justify-between p-4 mb-16">
      <p className="font-arvo text-3xl ">{OLLI_TOIVANEN}</p>
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
