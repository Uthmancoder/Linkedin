import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdPhoto, MdOutlineArticle } from "react-icons/md";
import { RxVideo } from "react-icons/rx";
import { FiMoreHorizontal } from "react-icons/fi";
import {
  AiTwotoneCalendar,
  AiTwotoneLike,
  FaRegCommentDots,
} from "react-icons/ai";
import { BsFillSendFill } from "react-icons/bs";
import { BiRepost } from "react-icons/bi";
const MainPage = () => {
  const [data, setData] = useState([]);
  const [newdata, setNewData] = useState([]);
  const [postcont, setPostcont] = useState("");
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3241/userprofile").then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:3241/posts").then((res) => {
      setNewData(res.data);
      console.log(res.data);
    });
  }, []);

  const chooseFile = (event) => {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result);
      const imagedt = reader.result;
      console.log(imagedt);
    };

    reader.readAsDataURL(file);
  };

  const Postcontent = () => {
    // Generate a unique ID for the new post
    const postId = Date.now().toString();

    // Create the post object with the generated ID
    const newPost = {
      id: postId,
      postcont,
      preview,
    };

    axios
      .post("http://localhost:3241/posts", newPost)
      .then((res) => {
        // Handle the response if needed
        console.log(res.data);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  };

  const [likedPosts, setLikedPosts] = useState([]);

  useEffect(() => {
    // Retrieve liked posts from localStorage on component mount
    const storedLikedPosts = localStorage.getItem("likedPosts");
    if (storedLikedPosts) {
      setLikedPosts(JSON.parse(storedLikedPosts));
    }
  }, []);

  useEffect(() => {
    // Save liked posts to localStorage whenever likedPosts state changes
    localStorage.setItem("likedPosts", JSON.stringify(likedPosts));
  }, [likedPosts]);

  const likePost = (id) => {
    if (likedPosts.includes(id)) {
      // Post is already liked, remove it from likedPosts
      const updatedLikedPosts = likedPosts.filter((postId) => postId !== id);
      setLikedPosts(updatedLikedPosts);
    } else {
      // Post is not liked, add it to likedPosts
      const updatedLikedPosts = [...likedPosts, id];
      setLikedPosts(updatedLikedPosts);
    }
  };
  return (
    <div>
      <div className="card border p-2">
        <div>
          <div className="d-flex align-items-center">
            {data.length > 0 &&
              data.map((el, i) => {
                return (
                  <div key={i}>
                    <img
                      className="img-fluid rounded-circle postimg border"
                      src={el.image}
                      alt=""
                    />
                  </div>
                );
              })}
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
              {/*i commented on modal dialogue here  */}
              <div className="modal-dialog  mx-auto" style={{ width: "60%" }}>
                {" "}
                {/* modal-dialog */}
                <div
                  className="modal-content p-3 "
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
                  <div className="header my-1 mx-3">
                    {data.length > 0 &&
                      data[0].image && // Add condition to check if data and image property exist
                      data.map((el, i) => {
                        return (
                          <div
                            key={i}
                            className="d-flex bag rounded-2 py-1 px-1 my-3"
                            style={{
                              width: "fit-content",
                              paddingRight: "10%",
                            }}
                          >
                            <div>
                              <img
                                className="img-fluid rounded-circle postingimg border"
                                src={el.image}
                                alt=""
                              />
                            </div>
                            <div className="d-grid mx-3">
                              <div className="d-flex align-items-center">
                                <h6>{el.firstname}</h6>
                                <h6 className="mx-2">{el.name}</h6>
                              </div>
                              <p>{el.text}</p>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                  <textarea
                    className="w-100 h-100"
                    name=""
                    id=""
                    onChange={(ev) => setPostcont(ev.target.value)}
                    cols="30"
                    rows="5"
                    placeholder="What do you want to talk about"
                    style={{ border: "none", outline: "none" }}
                  ></textarea>
                  {preview && (
                    <div className="mt-2">
                      <img
                        className=""
                        src={preview}
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                  )}

                  <div className="d-flex align-items-center">
                    <div>
                      <label
                        htmlFor="profilepix"
                        className="btn btn-light fs-3 text-secondary rounded-circle mx-2 d-flex align-items-center justify-content-center"
                        style={{ width: "50px", height: "50px" }}
                      >
                        <span className="photo">
                          {" "}
                          <MdPhoto />
                        </span>
                        <input
                          onChange={chooseFile}
                          type="file"
                          className="btn btn-dark hidden" //Visually Hidden Bug
                          name="profilepix"
                          id="profilepix"
                        />
                      </label>
                    </div>

                    <button
                      className="btn btn-light fs-3 text-secondary rounded-circle mx-2 d-flex align-items-center justify-content-center"
                      style={{ width: "50px", height: "50px" }}
                    >
                      <RxVideo />
                    </button>
                    <button
                      className="btn btn-light fs-3 text-secondary rounded-circle mx-2 d-flex align-items-center justify-content-center"
                      style={{ width: "50px", height: "50px" }}
                    >
                      <AiTwotoneCalendar />
                    </button>
                    <button
                      className="btn btn-light fs-3 text-secondary rounded-circle mx-2 d-flex align-items-center justify-content-center"
                      style={{ width: "50px", height: "50px" }}
                    >
                      <FiMoreHorizontal />
                    </button>
                  </div>

                  <hr />
                  <button
                    onClick={Postcontent}
                    className="btn btn-secondary w-25 rounded-5 text-right"
                  >
                    post
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-100 d-flex align-items-center justify-content-around"
            style={{ marginBottom: "-20px" }}
          >
            <p
              className="text-success posticons rounded-2 p-2 mt-1 "
              style={{ width: "fit-content" }}
            >
              <MdPhoto style={{ fontSize: "20px" }} /> <span>Photo</span>
            </p>
            <p
              className="text-success posticons rounded-2 p-2 mt-1 "
              style={{ width: "fit-content" }}
            >
              <RxVideo
                style={{ color: " rgb(10, 102, 194)", fontSize: "20px" }}
              />{" "}
              <span>Video</span>
            </p>
            <p
              className="text-success posticons rounded-2 p-2 mt-1 "
              style={{ width: "fit-content" }}
            >
              <AiTwotoneCalendar
                style={{ color: " rgb(10, 102, 194)", fontSize: "20px" }}
              />{" "}
              <span>Event</span>
            </p>
            <p
              className="text-success posticons rounded-2 p-2 mt-1 "
              style={{ width: "fit-content" }}
            >
              <MdOutlineArticle
                style={{ color: " rgb(10, 102, 194)", fontSize: "20px" }}
              />{" "}
              <span>Article</span>
            </p>
          </div>
        </div>
      </div>

      <div className="">
        {newdata &&
          newdata.map((el, i) => (
            <div key={i} className="d-grid my-3 card p-2  rounded-2 border">
              <div className="d-flex ">
                <img src={data[0].image} alt="" className="userimg" />
                <div className="d-grid mx-2">
                  <a href="#" className="text-dark fw-bold">
                    {data[0].firstname + " " + data[0].name}
                  </a>
                  <p>{el.postcont}</p>
                </div>
                <button
                  className="more"
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "100%",
                    border: "none",
                  }}
                >
                  <FiMoreHorizontal />
                </button>
              </div>
              <img className="w-100 h-100 img-fluid" src={el.preview} alt="" />

              <hr className="my-2" />

              <div
                className="w-100 d-flex align-items-center justify-content-around"
                // style={{ marginBottom: "-20px" }}
              >
                <button
                  onClick={() => likePost(el.id)}
                  className={`text-secondary posticons rounded-2 p-2 mt-1 ${
                    likedPosts.includes(el.id) ? "liked" : ""
                  }`}
                  style={{
                    width: "fit-content",
                    border: "none",
                    background: "none",
                  }}
                >
                  <AiTwotoneLike
                    style={{
                      fontSize: "20px",
                      color: likedPosts.includes(el.id) ? "blue" : "inherit",
                    }}
                  />{" "}
                  <span>Like</span>
                </button>
                <button
                  className="text-secondary posticons rounded-2 p-2 mt-1 d-flex align-items-center "
                  style={{
                    width: "fit-content",
                    border: "none",
                    background: "none",
                  }}
                >
                  <span class="material-symbols-outlined">chat</span>
                  <span>Comment</span>
                </button>
                <button
                  className="text-secondary posticons rounded-2 p-2 mt-1 "
                  style={{
                    width: "fit-content",
                    border: "none",
                    background: "none",
                  }}
                >
                  <BiRepost
                    style={{
                      fontSize: "20px",
                    }}
                  />{" "}
                  <span>Repost</span>
                </button>
                <button
                  className="text-secondary posticons rounded-2 p-2 mt-1 "
                  style={{
                    width: "fit-content",
                    border: "none",
                    background: "none",
                  }}
                >
                  <BsFillSendFill
                    style={{
                      fontSize: "20px",
                    }}
                  />{" "}
                  <span>Send</span>
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MainPage;
