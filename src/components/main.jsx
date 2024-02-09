import React from "react";
import main_img1 from "../images/main_img.png";
import "./main.css";
export const Main = () => {
  return (
    <div id="wrapper_main">
    <div className="main">
      <div className="half_main">
        <p className="text-2xl">Отзывы</p>
        <div className="wrap_all_divs">
          <div className="wrap_div1">
            <img className="img_main" src={main_img1} alt="" />
            <p className="about_alesya">Алеся Киселева</p>
            <p className="about_alesya1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex </p>
          </div>
          <div className="wrap_div1">
          <img className="img_main" src={main_img1} alt="" />
            <p className="about_alesya">Алеся Киселева</p>
            <p className="about_alesya1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex </p>
          </div>
          <div className="wrap_div1">
          <img className="img_main" src={main_img1} alt="" />
            <p className="about_alesya">Алеся Киселева</p>
            <p className="about_alesya1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex </p>
          </div>
        </div>
      </div>
    </div>
</div>
  );
};
export default Main;
