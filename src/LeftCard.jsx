import React, { useState, useEffect } from "react";
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
    <div className="leftcard w-100">
      <div className="card w-100 ">
        <div className="coverPhoto">
        {data.length > 0 && (
                  <img
                    className="img-fluid coverpix"
                    src={data[0].coverPhoto}
                    alt=""
                  />
              )}
          <div className="pixboarder">
          {data.length > 0 && (
                  <img
                    className="img-fluid rounded-circle"
                    src={data[0].image}
                    alt=""
                  />
              )}
          </div>
        </div>

        <div className="p-3">
          <div className="name my-3 mt-5 text-center">
            {data.length > 0 && (
              <div>
                <div className="d-flex align-items-center">
                  <h5 className="mx-2">{data[0].firstname}</h5>
                  <h5>{data[0].name}</h5>
                </div>
                <small>{data[0].school}</small>
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
