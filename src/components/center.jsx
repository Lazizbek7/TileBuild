import React from "react";
import "./center.css";
import center from "../images/center.png";

export const Center = () => {
  return (
    <div className="all_Center">
         <div className="center">
    <div className="half_center">
      <p className="main_txt_center">Плитки</p>
      <div className="all_anons_divs">
      <div className="anons">
        <img src={center} alt="" />
        <p>Плитка Меник</p>
        <p>Разработка интерьера в 3D c использованием VRAY технологий</p>

      </div>
      <div className="anons">
      <img src={center} alt="" />
        <p className="p_txt">Плитка Меник</p>
        <p>Разработка интерьера в 3D c использованием VRAY технологий</p>
      </div>
      <div className="anons">
      <img src={center} alt="" />
        <p  className="p_txt">Плитка Меник</p>
        <p>Разработка интерьера в 3D c использованием VRAY технологий</p>
      </div>
      <div className="anons">
      <img src={center} alt="" />
        <p  className="p_txt">Плитка Меник</p>
        <p>Разработка интерьера в 3D c использованием VRAY технологий</p>
      </div></div></div>
    </div>
    <div className="bottom_center_all">
      <div className="bottom_center">
      <p className="year">12 лет на рынке</p>
      <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
      <a className='btn2'>Связаться</a></div>
    </div>
    </div>
    
  );
};
export default Center;
