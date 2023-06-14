import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdPhoto, MdOutlineArticle } from "react-icons/md";
import {RxVideo} from 'react-icons/rx'
import {AiTwotoneCalendar} from 'react-icons/ai'
const MainPage = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3241/userprofile").then((res) => {
      setdata(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div>
      <div className="card border p-2">
        <div>
          <div className="d-flex align-items-center">
            {data.length > 0 && (
              <img
                className="img-fluid rounded-circle postimg border"
                src={data[0].image}
                alt=""
              />
            )}
            <button
              type="button"
              class="btn btn bg-light border p-2 mx-2  text-start rounded-5"
              style={{ width: "90%" }}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Start a Post
            </button>
           

            <div
              className="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog w-75  mx-auto">
                <div
                  className="modal-content "
                  style={{ width: "100%", margin: "auto" }}
                >
                  <div className="">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  {/* contents */}
                  <div className="my-5 mx-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequuntur explicabo dolorem quae fugit distinctio esse
                    necessitatibus perferendis nam laboriosam nostrum ea quam
                    debitis nisi, aliquid voluptates laudantium placeat tempore
                    voluptatibus.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-100 d-flex align-items-center justify-content-around" style={{marginBottom:"-20px"}}>
              <p className="text-success posticons rounded-2 p-2 mt-1 " style={{width:"fit-content"}}>
                <MdPhoto style={{ color: " rgb(10, 102, 194)", fontSize:"20px" }} />{" "}
                <span>Photo</span>
              </p>
              <p className="text-success posticons rounded-2 p-2 mt-1 " style={{width:"fit-content"}}>
                <RxVideo style={{ color: " rgb(10, 102, 194)",  fontSize:"20px"   }} />{" "}
                <span>Video</span>
              </p>
              <p className="text-success posticons rounded-2 p-2 mt-1 " style={{width:"fit-content"}}>
                <AiTwotoneCalendar style={{ color: " rgb(10, 102, 194)",  fontSize:"20px"  }} />{" "}
                <span>Event</span>
              </p>
              <p className="text-success posticons rounded-2 p-2 mt-1 " style={{width:"fit-content"}}>
                <MdOutlineArticle style={{ color: " rgb(10, 102, 194)", fontSize:"20px"   }} />{" "}
                <span>Article</span>
              </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
