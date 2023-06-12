import React, { useState, useEffect } from "react";
import { BsLinkedin } from "react-icons/bs";

const LogoPage = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (!visible) {
    return null; // Return null to hide the component
  }

  return (
    <div>
      <div className="bg-light w-100 logopage d-flex align-items-center justify-content-center text-center">
        <div>
          <h1 className="logo fw-bolder d-flex align-items-center">
            Linked<BsLinkedin />
          </h1>
          <div className="parent">
            <div className="child"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoPage;
