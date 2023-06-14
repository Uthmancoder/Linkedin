import React from "react";
import NavBar from "./Components/NavBar";
import LeftCard from "./LeftCard";
import MainPage from "./MainPage";
import RightCard from "./RightCard";

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <div className="bg-light mainpage py-3 px-5">
        <div className="container row mt-3 ">
          <div className="col-3">
            <LeftCard />
          </div>
          <div className="col-6"><MainPage/></div>
          <div className="col-3"><RightCard/></div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
