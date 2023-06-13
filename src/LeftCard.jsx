import React, {useState, useEffect} from "react";
import { FaWeightHanging, FaAngleUp } from "react-icons/fa";
import axios from "axios";

const LeftCard = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3241/userprofile").then((res) => {
      setdata(res.data);
      console.log(res.data);
    });
  }, []);

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
          {data.length > 0 && (
              <div className="d-flex align-items-center">
                <h5>{data[0].username}</h5>
                <h5>{data[0].name}</h5>
              </div>
            )}
          </div>
          <hr />
          <div className="connections d-flex justify-content-between">
            <div className="d-grid">
              <small className="text-secondary">connections </small>
              <small stytle={{ fontSize: "15px" }}>Connect with alumni</small>
            </div>
            <span className="text-primary " stytle={{ fontSize: "14px" }}>
              92
            </span>
          </div>
          <div className="d-flex justify-content-between">
            <small className="text-secondary" stytle={{ fontSize: "13px" }}>
              {" "}
              Who viewed your profile{" "}
            </small>
            <small className="text-primary">12</small>
          </div>
          <hr />
          <div>
            <small>access exclusive tools & insights</small>
            <small>Get hired faster, Try premium Free </small>
          </div>
          <hr />
          <div className="d-flex align-items-center">
            <span className="mx-3">
              <FaWeightHanging />
            </span>
            My items
          </div>
        </div>
      </div>

      {/* second card */}
      <div className="card border w-100 p-2 my-3">
        <div className="header d-flex justify-content-between ">
          <small>Recent</small>
          <button className="angup">
            <FaAngleUp style={{ color: "rgb(77, 74, 71)" }} />
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default LeftCard;
