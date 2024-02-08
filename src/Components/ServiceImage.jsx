import React from "react";
import "./ServiceImage.css";
import apple1 from "../Assets/apple1.png";
import samsung from "../Assets/samsung.jpg";
import oneplus from "../Assets/oneplus.jpg";
import google from "../Assets/google.jpg";
import mi from "../Assets/mi.jpg";
import vivo from "../Assets/vivo.jpg";
import oppo from "../Assets/oppo.jpg";
import realme from "../Assets/realme.jpg";
import asus from "../Assets/asus.jpg";
import nokia from "../Assets/nokia.jpg";
import poco from "../Assets/poco.jpg";
import motorola from "../Assets/motorola.jpg";

const ServiceContent = () => {
  return (
    <div>
      <div className="container3">
        <div className="container4">
          <div className="brands">
            <img src={apple1} alt="" />
          </div>
          <div className="brands">
            <img src={samsung} alt="" />
          </div>
          <div className="brands">
            <img src={oneplus} alt="" />
          </div>
          <div className="brands">
            <img src={google} alt="" />
          </div>
          <div className="brands">
            <img src={mi} alt="" />
          </div>
          <div className="brands">
            <img src={vivo} alt="" />
          </div>
          <div className="brands">
            <img src={oppo} alt="" />
          </div>
          <div className="brands">
            <img src={realme} alt="" />
          </div>
          <div className="brands">
            <img src={asus} alt="" />
          </div>
          <div className="brands">
            <img src={nokia} alt="" />
          </div>
          <div className="brands">
            <img src={poco} alt="" />
          </div>
          <div className="brands">
            <img src={motorola} alt="" />
          </div>
        </div>
      </div>
      <hr/>
    </div>
  );
};

export default ServiceContent;
