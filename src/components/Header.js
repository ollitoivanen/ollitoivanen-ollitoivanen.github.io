import React, { useState } from "react";

const Header = () => {
  return (
    <div className="bg-white w-full flex flex-row sticky top-0 z-1 border-b-2 border-black justify-between p-4 mb-16 ">
      <p className="font-arvo text-3xl ">Olli Toivanen</p>
      <div className="flex flex-row">
        <p className="font-arvo text-2xl mr-8 hover:scale-110 transition">
          Work
        </p>
        <p className="font-arvo text-2xl hover:scale-110 transition">
          About Me
        </p>
      </div>
    </div>
  );
};

export default Header;
