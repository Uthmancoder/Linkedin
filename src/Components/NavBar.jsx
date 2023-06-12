import React from "react";
import { BsLinkedin, BsSearch } from "react-icons/bs";

const NavBar = () => {
  return (
    <div>
      <nav>
        <div>
          <BsLinkedin />
          <div className="d-flex align-items-center p-2 border rounded-2">
            <BsSearch/>
            <input type="text" placeholder="search" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
