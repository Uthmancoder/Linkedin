import React, { useState, useEffect } from "react";
import {
  BsLinkedin,
  BsSearch,
  BsFillPeopleFill,
  BsBellFill,
  BsFillBagDashFill,
} from "react-icons/bs";
import axios from "axios";
import { AiFillHome } from "react-icons/ai";
import { IoIosText } from "react-icons/io";
import { GoTriangleDown } from "react-icons/go";
import { GrApps } from "react-icons/gr";

const NavBar = () => {
  const [data, setData] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3241/userprofile").then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);

  const chooseFile = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);

    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const addimg = () => {
    if (selectedImage) {
      const formData = new FormData();
      formData.append("data.image", selectedImage);

      fetch("http://localhost:3241/userprofile/image", {
        method: "PATCH",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Image updated:", data);
          alert("image uploaded successfully");
        })
        .catch((error) => {
          console.error("Error updating image:", error);
          alert(error);
        });
    }
  };
  useEffect(() => {
    const user = document.getElementById("me");
    const upload = document.querySelector(".usersupload");
    user.addEventListener("click", () => {
     if ( upload.style.display === "none") {
      upload.style.display = "block";
     }else{
      upload.style.display = "none";
     }
    });
    return () => {
      user.removeEventListener("click", () => {
        upload.style.display = "block";
      });
    };
  }, []);

  return (
    <div>
      <nav className="d-flex align-items-center justify-content-around shadow">
        <div className="d-flex align-items-center">
          <span className="mx-3 linkedin">
            {" "}
            <BsLinkedin style={{ fontSize: "40px" }} />
          </span>
          <div className="d-flex bigboard align-items-center p-2 border rounded-2">
            <span className="mx-1">
              <BsSearch />
            </span>
            <input type="search" placeholder="search" className="inpsearch" />
          </div>
        </div>
        <div className="d-flex align-items-center">
          <div className="d-grid text-secondary text-center mx-2">
            <span className="mx-1">
              <AiFillHome style={{ fontSize: "24px" }} />
            </span>
            <small>Home</small>
          </div>
          <div className="d-grid text-secondary text-center mx-2 mt-1">
            <span className="mx-1">
              <BsFillPeopleFill style={{ fontSize: "22px" }} />
            </span>
            <small>My Network</small>
          </div>
          <div className="d-grid text-secondary text-center mx-2">
            <span style={{ fontSize: "23px" }}>
              <BsFillBagDashFill />
            </span>
            <small>Jobs</small>
          </div>
          <div className="d-grid text-secondary text-center mx-2 mt-1">
            <span class="mx-2">
              <IoIosText style={{ fontSize: "25px" }} />
            </span>
            <small>Messaging</small>
          </div>
          <div className="d-grid text-secondary text-center mx-2 mt-1">
            <span class="mx-2">
              <BsBellFill style={{ fontSize: "20px" }} />
            </span>
            <small>Notifications</small>
          </div>
          <div id="me" className="d-grid text-secondary  text-center mx-2">
            <div className="profile ">
              {data.length > 0 && (
                <img
                  className="img-fluid rounded-circle"
                  src={data[0].image}
                  alt=""
                />
              )}
            </div>
            <small>
              Me <GoTriangleDown />
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

        <div
          className="card p-3 usersupload w-25 my-2"
          style={{ position: "absolute", right: "20%", display: "none" }}
        >
          <div className="d-flex align-items-center">
            {data.length > 0 && (
              <img
                className="img-fluid rounded-circle changeimg"
                src={data[0].image}
                alt=""
              />
            )}
            {data.length > 0 && (
              <div>
                <div className="d-flex name align-items-center text-start">
                  <h6 className="mx-2">{data[0].firstname}</h6>
                  <h6>{data[0].name}</h6>
                </div>
                <small className="mx-2">{data[0].school}</small>
              </div>
            )}
          </div>

          <label htmlFor="profilepix" className="custom-file-input">
            Add Profile Image
          </label>
          <input
            onChange={chooseFile}
            type="file"
            className="btn btn-dark w-100 rounded-5 visually-hidden"
            name="profilepix"
            id="profilepix"
          />

          {imagePreview && (
            <div className="mt-2">
              <img
                className="img-fluid"
                src={imagePreview}
                alt="ImgPreview"
                style={{ width: "100px", height: "100px" }}
              />
              <button onClick={addimg} className="btn btn-success mx-3">
                {" "}
                add{" "}
              </button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
