import React from "react";
import NavBar from "./Components/NavBar";

const Profile = () => {
  return (
    <div>
      <NavBar />
      <div className="bg-light p-5 ">
        <div className="row container">
          <div className="col-8">
            <div className="card border rounded-2" >
              <div className="coverPhoto">
                <img
                  className="img-fluid coverpix"
                  src="https://media.licdn.com/dms/image/D4D16AQEQ_E4zh7MMEw/profile-displaybackgroundimage-shrink_350_1400/0/1686487635822?e=1692230400&v=beta&t=zDNJ2BZ7LXo38ZGa6YOOUOdZcqnoDNIUXknDDfV3cVY"
                  alt=""
                />
                <div className="profilebackground p-1">
                  <img
                    className="img-fluid rounded-circle"
                    src="https://media.licdn.com/dms/image/D4D03AQGzjH1IrCxglA/profile-displayphoto-shrink_400_400/0/1670274575667?e=1692230400&v=beta&t=YonOvw4TPtqfEQ8Ps_imzTvsIg80FMjniWv2lF5uD4Y"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
