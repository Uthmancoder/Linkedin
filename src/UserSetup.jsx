import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { BsLinkedin } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const UserSetup = () => {
    const [formData, setFormData] = useState({
        firstname: "",
        name: "",
        title: "",
        school: "",
        location: ""
      });
    
      const Navigate = useNavigate();
    
      useEffect(() => {
        axios
          .get("http://localhost:3241/userprofile")
          .then((res) => {
            setFormData(res.data);
            console.log(res.data);
          })
          .catch((error) => {
            console.log("Error fetching data", error);
          });
      }, []);
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    
        axios
          .post("http://localhost:3241/userprofile", formData)
          .then((res) => {
            console.log(res);
            toast.success("Profile set up successfully");
            setTimeout(() => {
              Navigate("/");
            }, 6000);
          })
          .catch((error) => {
            console.log(error);
            toast.error("An error occurred. Please try uploading your profile again.");
          });
      };

  return (
    <div>
      <div className="bg-light " style={{ height: "100vh" }}>
        <nav className="row w-100 bg-light">
          <div className="col-6 ">
            <h1 className="fs-2 log fw-bolder d-flex align-items-center">
              Linked
              <BsLinkedin />
            </h1>
          </div>
        </nav>
        <main className="bg-light">
          <div className="">
            <div className="mx-auto ">
              <form
                action=""
                onSubmit={handleSubmit}
                className="form  mx-auto w-50  p-4  shadow rounded-2"
              >
                <h1>Set up your profile</h1>
                <small>Stay updated on your professional world</small>
                <div className="d-flex align-items-center">
                  <div className="w-50 px-3">
                    <input
                      type="text"
                      name="firstname"
                      className="form-control p-2 "
                      placeholder="Firstname"
                      value={formData.firstname}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="w-50 px-3">
                    <input
                      id="name"
                      type="text"
                      name="name"
                      className="form-control my-3 p-2"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="d-flex align-items-center my-1">
                  <div className="w-50 px-3">
                    <input
                      type="text"
                      name="title"
                      className="form-control p-2 "
                      placeholder="Job title"
                      value={formData.title}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="w-50 px-3">
                    <input
                      id="school"
                      type="text"
                      name="school"
                      className="form-control my-3 p-2"
                      placeholder="School"
                      value={formData.school}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="w-50 px-3">
                  <input
                    id="location"
                    type="text"
                    name="location"
                    className="form-control my-3 p-2"
                    placeholder="Location"
                    value={formData.location}
                    onChange={handleChange}
                  />
                </div>
                <button
                
                  className="btn btn-primary w-75 rounded-5 p-2 mx-5"
                >
                  Add Info
                </button>
              </form>
              <div className="d-flex align-items-center my-3">
                <small className="text-center w-100 mx-auto">
                  Looking to create a page for a business?{" "}
                  <Link to="/">Get help</Link>
                  <ToastContainer />
                </small>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserSetup;
