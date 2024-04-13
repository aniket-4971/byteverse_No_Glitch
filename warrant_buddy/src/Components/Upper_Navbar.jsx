import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import tiranga from "../Assets/tiranga.jpg" ;
// import Flag from "C:\Byteverse\byteverse_No_Glitch\warrant_buddy2\src\Flag.webp" ;
import "./TirangaAnimation.css" ;
function Upper_Navbar() {

  

  return (
    <div className=" navbar  ">
      <div className="m-2">
      {/* <TirangaAnimation width="50" height="50" className="d-inline-block align-top mr-2" /> */}
      <img
          src={tiranga}
          width="50"
          height="50"
          className="d-inline-block align-top mr-2"
          alt="Preamble"
        />
      </div>
      <div className="m-2 text-warning hover-overlay">GOVERNMENT OF INDIA</div>
    </div>
  );
}

export default Upper_Navbar;
