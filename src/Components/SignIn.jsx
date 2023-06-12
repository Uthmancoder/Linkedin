import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const [data, setData] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    // getting the items from the server
    axios
      .get("http://localhost:3241/signedusers") 
      .then((res) => res.data)
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => {
        console.log("Error fetching data", error);
      });

  }, []);
  const usermail = document.querySelector(".email")
  const userpass = document.querySelector(".password")
  const handleSubmit = ()=>{
    let emailExist = data.find((el)=> el.email === usermail.value)
    let passwordExist = data.find((el)=> el.password === userpass.value)

    if (emailExist && passwordExist) {
        toast.success("User logged in successful")
    }else if (!emailExist && !passwordExist) {
        toast.error("User not found")
    }
  }
  const handleshow = (event)=>{
    event.preventDefault()
    document.getElementById("password").type = "text"
    document.querySelector(".show").style.display ="none"
    document.querySelector(".hide").style.display ="block"
  }
  const handleHide = (ev)=>{
    ev.preventDefault()
    document.getElementById("password").type = "password"
    document.querySelector(".hide").style.display ="none"
    document.querySelector(".show").style.display ="block"
  }
  return (
    <div>
      <div className="bg-light">
        <nav className="row w-100">
          <div className="col-6">
            <h1 className="fs-2 log fw-bolder d-flex align-items-center">
              Linked
              <BsLinkedin />
            </h1>
          </div>
        </nav>
        <main>
          <div className="">
            <div className="mx-auto ">
              <form
                action=""
                onSubmit={handleSubmit}
                className="form  mx-auto  p-4  shadow rounded-2"
              >
                <h1>Sign in</h1>
                <small>Stay updated on your professional world</small>
                <div>
                <input
                    type="email"
                    name="email"
                    className="form-control p-2"
                    placeholder="Email or phone number"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <div className="d-flex align-items-center rel">
                  <input
                      id="password"
                      type="password"
                      name="password"
                      className="form-control my-3 p-2"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={handleshow} className="show">
                      show
                    </button>
                    <button onClick={handleHide} className="hide">
                      hide
                    </button>
                  </div>
                </div>
                <button className="forgot">Forgot Password</button>
                <button className="agree w-100 rounded-5 fw-bold  my-2">
                  Sign In
                </button>

                <div className="d-flex ">
                  <hr className="w-50" />
                  <span className="mx-2">or</span>
                  <hr className="w-50" />
                </div>

                <div
                  id="swggl"
                  className="d-flex align-items-center justify-content-between w-100 border  rounded-5 py-1 px-3"
                >
                  <div className="d-flex align-items-center">
                    <img
                      className="img"
                      src="https://lh3.googleusercontent.com/a/AAcHTtfBNgREwFJQMRoJdW6Vv2kHjH8-p421CAh5Tp_z=s96-c"
                      alt=""
                    />
                    <div className="d-grid mx-3">
                      <small className="smh">Continue as adewale</small>
                      <small className="smh">
                        adewaleagbolahan123@gmail.com
                      </small>
                    </div>
                  </div>
                  <img
                    className="img"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png"
                    alt=""
                  />
                </div>
                <small className="mx-auto text-center">
                  Already on LinkedIn? <Link to="signin">Sign in</Link>
                </small>
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

export default SignIn;
