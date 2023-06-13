import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [data, setData] = useState([]);
  const Navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3241/signedusers") // Use axios.get instead of axios.post
      .then((res) => res.data)
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => {
        console.log("Error fetching data", error);
      });
  }, []);

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Must be a valid email")
      .required("This input field is required"),
    password: yup
      .string()
      .min(6, "Password too short")
      .max(8, "Password too long")
      .required("This input field is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema, // Assign the yup schema object
    onSubmit: (values) => {
      console.log(values);
      let emailExist = data.find((el) => el.email === values.email);
      let passwordExist = data.find((el) => el.password === values.password);

      if (emailExist) {
        toast.error("Email already in use");
      } else if (passwordExist) {
        toast.error("password already in use");
      } else {
        axios
          .post("http://localhost:3241/signedusers", values)
          .then((res) => {
            console.log(res);
            toast.success("Registration Successful");
            setTimeout(() => {
              Navigate("/signin");
            }, 6000);
          })
          .catch((error) => {
            console.log(error);
            toast.error("Registration failed");
          });
      }
    },
  });

  const handleshow = (event) => {
    event.preventDefault();
    document.getElementById("password").type = "text";
    document.querySelector(".show").style.display = "none";
    document.querySelector(".hide").style.display = "block";
  };
  const handleHide = (ev) => {
    ev.preventDefault();
    document.getElementById("password").type = "password";
    document.querySelector(".hide").style.display = "none";
    document.querySelector(".show").style.display = "block";
  };
  return (
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
            <p className="fs-1 text-center">
              Make the most of your professional life
            </p>
            <form
              action=""
              onSubmit={formik.handleSubmit}
              className="form  mx-auto  p-4  shadow rounded-2"
            >
              <div>
                <label htmlFor="email">Email or phone number</label>
                <input
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  className={
                    formik.errors.email
                      ? "is-invalid form-control"
                      : "form-control"
                  }
                />
                <small className="text-danger">{formik.errors.email}</small>
              </div>
              <div>
                <label htmlFor="email">Password (6 or more characters)</label>
                <div className="d-flex align-items-center rel">
                  <input
                    id="password"
                    type="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    className={
                      formik.errors.password
                        ? "is-invalid form-control"
                        : "form-control"
                    }
                  />
                  <button onClick={handleshow} className="show">
                    show
                  </button>
                  <button onClick={handleHide} className="hide">
                    hide
                  </button>
                </div>

                <small className="text-danger">{formik.errors.password}</small>
              </div>
              <small className="text-center">
                By clicking Agree & Join, you agree to the LinkedIn{" "}
                <span className="text-primary fw-200">
                  User Agreement, Privacy Policy,
                </span>{" "}
                and <span className="text-primary fw-200">Cookie Policy</span>.
              </small>
              <button className="agree w-100 rounded-5 fw-bold  my-3">
                Agree & join
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
                    <small className="smh">adewaleagbolahan123@gmail.com</small>
                  </div>
                </div>
                <img
                  className="img"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png"
                  alt=""
                />
              </div>
              <small className="mx-auto text-center">
                Already on LinkedIn? <Link to="/signin">Sign in</Link>
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
  );
};

export default SignUp;
