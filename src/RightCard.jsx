import React from "react"; 
import {RiContactsBook2Line} from 'react-icons/ri'

const RightCard = () => {
  return (
    <div className="rightcard">
      <div className="card w-100 p-2 border">
        <div className="d-flex justify-content-between">
          <h6>Addd Your feed</h6>
          <small><RiContactsBook2Line/></small>
        </div>
        <div className="d-flex my-2" >
           <img className="ram" src="https://media.licdn.com/dms/image/D4D03AQHG6DPtExfbJw/profile-displayphoto-shrink_100_100/0/1676956217125?e=1692230400&v=beta&t=CwF6Zb8CC7B0fjhUsDIuGlFBuDsZGvINnEhHDOJQmgE" alt=""  style={{width:"50px" ,height: "50px", borderRadius:"100%" }}/>

           <div>
             <p className="fw-bold">Adewale Agbolahan 👩🏿‍💻</p>
             <small style={{marginTop : "-20px"}}>40M+views👩‍🎓Follow me for more amazing content related to this post that's just being...</small>
             <button className="btn btn-outline-secondary rounded-5 w-100"> Follow</button>
           </div>
        </div>
        <div className="d-flex my-2" >
           <img className="ram" src="https://media.licdn.com/dms/image/C4D03AQH4kNAz7ta5Ow/profile-displayphoto-shrink_100_100/0/1660647164035?e=1692230400&v=beta&t=xA6pz_Lp94ox_QtZRQ8gL1QL_PIZ768easp_hwOmh6I" alt=""  style={{width:"50px" ,height: "50px", borderRadius:"100%" }}/>

           <div>
             <p className="fw-bold">Peace Oyanbiji 👩🏿</p>
             <small style={{marginTop : "-20px"}}>40M+views👩‍🎓Follow me for more amazing content related to this post that's just being...</small>
             <button className="btn btn-outline-secondary rounded-5 w-100"> Follow</button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default RightCard;
