import React, {useState, useEffect} from "react";
import axios from "axios";


const MainPage = () => {
    const [data, setdata] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3241/userprofile")
        .then((res)=> {
            setdata(res.data)
            console.log(res.data);
        })
    }, [])
    
  return (
    <div>
      <div className="card border p-2">
        <div>
          <div className="d-flex align-items-center">
            <img
              className="postimg"
              src="https://media.licdn.com/dms/image/D4D03AQGzjH1IrCxglA/profile-displayphoto-shrink_100_100/0/1670274575667?e=1692230400&v=beta&t=brLGZ-YC3artsPD_7S57JIW2ydDJPg8uq5V264gGZR4"
              alt=""
            />
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
                <div className="modal-content "style={{width: "100%" , margin:"auto"}}>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur explicabo dolorem quae fugit distinctio esse necessitatibus perferendis nam laboriosam nostrum ea quam debitis nisi, aliquid voluptates laudantium placeat tempore voluptatibus.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
