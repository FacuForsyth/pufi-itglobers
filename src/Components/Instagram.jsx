import React from "react";
import { InstagramContainer } from "../Styles/InstagramStyle";
import ImgInstagram1 from "../Assets/img/ImgInstagram1.png"
import ImgInstagram2 from "../Assets/img/ImgInstagram2.png"
import ImgInstagram3 from "../Assets/img/ImgInstagram3.png"
import ImgInstagram4 from "../Assets/img/ImgInstagram4.png"
import ImgInstagram5 from "../Assets/img/ImgInstagram5.png"
import ImgInstagram6 from "../Assets/img/ImgInstagram6.png"

function Instagram() {
  return (
    <InstagramContainer>
      <h4>Instagram</h4>
      <h2>#EsPufi</h2>
      <ul className="imgInstagram">
        <li className="item">
          <img src={ImgInstagram1} alt="" />
        </li>
        <li className="item">
          <img src={ImgInstagram2} alt="" />
        </li>
        <li className="item">
          <img src={ImgInstagram3} alt="" />
        </li>
        <li className="item">
          <img src={ImgInstagram4} alt="" />
        </li>
        <li className="item">
          <img src={ImgInstagram5} alt="" />
        </li>
        <li className="item">
          <img src={ImgInstagram6} alt="" />
        </li>
      </ul>
    </InstagramContainer>
  );
}

export default Instagram;