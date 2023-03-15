import React from "react";
import { NavBarContainer } from "../Styles/NavBarStyle";
import Puff from "../Assets/svg/puff.svg"
import Rain from "../Assets/svg/rain.svg"
import Cart from "../Assets/svg/cart.svg"
import Nap from "../Assets/svg/nap.svg"
import Abajo from "../Assets/svg/abajo.svg"
import ImgCopyright from "../Assets/svg/copyright.svg"

function NavBar() {
  return (
    <NavBarContainer>
      <div className="title">
        <h1>Pufi</h1>
        <img src={ImgCopyright} alt="" />
      </div>
      <div className="icons">
        <li className="item">
          <img src={Puff} alt="" />
          <h2>Pufi Puff</h2>
        </li>
        <hr />
        <li className="item">
          <img src={Rain} alt="" />
          <h2>Pufi Rain</h2>
        </li>
        <hr />
        <li className="item">
          <img src={Cart} alt="" />
          <h2>Pufi Cart</h2>
        </li>
        <hr />
        <li className="item">
          <img src={Nap} alt="" />
          <h2>Pufi Nap</h2>
        </li>
      </div>
      <div className="user">
        <ul className="list">
          <li className="item2">
            <span>MI CUENTA</span>
            <img src={Abajo} alt="" />
          </li>
          <hr />
          <li className="item2">
            <span>MI COMPRA</span>
          </li>
        </ul>
      </div>
    </NavBarContainer>
  );
}

export default NavBar;