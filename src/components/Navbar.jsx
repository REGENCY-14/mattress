// eslint-disable-next-line no-unused-vars
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="bg-[#f40000] flex w-full justify-center gap-5">
        <div>
          <img src="./images/wsports.jpg" alt="" className="h-8 w-1"/>
        </div>
        <div>
          <input type="search" placeholder="Search..." />
        </div>
        <div>
          <p>Phone Logo</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
