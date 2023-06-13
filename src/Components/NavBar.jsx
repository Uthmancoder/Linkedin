import React from "react";
import {
  BsLinkedin,
  BsSearch,
  BsFillPeopleFill,
  BsBellFill,
  BsFillBagDashFill
} from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { IoIosText } from "react-icons/io";
import { GoTriangleDown } from "react-icons/go";
import { GrApps } from "react-icons/gr";

const NavBar = () => {
  return (
    <div>
      <nav className="d-flex align-items-center justify-content-around shadow">
        <div className="d-flex align-items-center">
         <span className="mx-3 linkedin"> <BsLinkedin  style={{fontSize:"40px", }}/></span>
          <div className="d-flex bigboard align-items-center p-2 border rounded-2">
            <span className="mx-1"><BsSearch  /></span>
            <input type="search" placeholder="search"  className="inpsearch"/>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <div className="d-grid text-secondary text-center mx-2">
            <span className="mx-1">
              <AiFillHome  style={{fontSize : "24px"}}/>
            </span>
            <small>Home</small>
          </div>
          <div className="d-grid text-secondary text-center mx-2 mt-1">
            <span className="mx-1">
              <BsFillPeopleFill  style={{fontSize : "22px"}}/>
            </span>
            <small>My Network</small>
          </div>
          <div className="d-grid text-secondary text-center mx-2">
            <span style={{fontSize : "23px"}}><BsFillBagDashFill/></span>
            <small>Jobs</small>
          </div>
          <div className="d-grid text-secondary text-center mx-2 mt-1">
            <span class="mx-2">
              <IoIosText  style={{fontSize : "25px"}}/>
            </span>
            <small>Messaging</small>
          </div>
          <div className="d-grid text-secondary text-center mx-2 mt-1">
            <span class="mx-2">
              <BsBellFill style={{fontSize : "20px"}} />
            </span>
            <small>Notifications</small>
          </div>
          <div className="d-grid text-secondary text-center mx-2">
            <img
            className="profile"
              src="https://media.licdn.com/dms/image/D4D03AQGzjH1IrCxglA/profile-displayphoto-shrink_100_100/0/1670274575667?e=1692230400&v=beta&t=brLGZ-YC3artsPD_7S57JIW2ydDJPg8uq5V264gGZR4"
              alt=""
            />
            <small>
              Me <GoTriangleDown  />
            </small>
          </div>
          <hr className="hr" />
          <div className="d-grid text-secondary text-center mx-2">
            <span class="mx-2">
              <GrApps />
            </span>
            <small>
              For Business <GoTriangleDown />
            </small>
          </div>
          <div className="d-grid text-secondary">
            <small>Get Hired Fast</small>
            <small>Try Premium Free</small>
          </div>
        </div>
      </nav>

    </div>
  );
};

export default NavBar;
