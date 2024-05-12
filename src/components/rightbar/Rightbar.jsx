import React from "react";
import "./rightbar.scss"
import image from "../../pages/login/pexels-flodahm-699459.jpg"

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="container">
        <div className="item">
          <span>Suggestion For You</span>
          <div className="user">
            <div className="userinfo">
            <img src={image} alt="" />
              <span>Tanmay kumar chaurasia</span>
            </div>

            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
