import React from "react";
import NavBar from "./Components/NavBar";
import LeftCard from "./LeftCard";

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <div className="bg-light mainpage py-3">
        <div className="container row mt-3 ">
          <div className="col-3">
            <LeftCard />
          </div>
          <div className="col-6"></div>
          <div className="col-3"></div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
