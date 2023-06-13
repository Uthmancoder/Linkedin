import React from "react";
import { FaWeightHanging } from "react-icons/fa";

const LeftCard = () => {
  return (
    <div>
      <div className="card w-100 ">
        <div className="coverPhoto">
          <img
            className="img-fluid coverpix"
            src="https://media.licdn.com/dms/image/D4D16AQEQ_E4zh7MMEw/profile-displaybackgroundimage-shrink_350_1400/0/1686487635822?e=1692230400&v=beta&t=zDNJ2BZ7LXo38ZGa6YOOUOdZcqnoDNIUXknDDfV3cVY"
            alt=""
          />
          <div className="pixboarder">
            <img
              className="profilepix"
              src="https://media.licdn.com/dms/image/D4D03AQGzjH1IrCxglA/profile-displayphoto-shrink_400_400/0/1670274575667?e=1692230400&v=beta&t=YonOvw4TPtqfEQ8Ps_imzTvsIg80FMjniWv2lF5uD4Y"
              alt=""
            />
          </div>
        </div>

        <div className="p-3">
          <div className="name my-3 mt-5 text-center">
            <h5>Adebayo Uthman</h5>
            <small>Student of sqi college of ict</small>
          </div>
          <hr />
          <div className="connections d-flex justify-content-between">
            <div className="d-grid">
              <small className="text-secondary">connections </small>
              <small>Connect with alumni</small>
            </div>
            <span className="text-primary">92</span>
          </div>
          <div className="d-flex justify-content-between">
            <small className="text-secondary">Who viewed your profile </small>
            <small className="text-primary">12</small>
          </div>
          <hr />
          <div>
            <small>access exclusive tools & insights</small>
            <small>Get hired faster, Try premium Free </small>
          </div>
          <hr />
          <div className="d-flex align-items-center">
            <FaWeightHanging />
            My items
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftCard;
