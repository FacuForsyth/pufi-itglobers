import React from "react";
import { FooterContainer } from "../Styles/FooterStyle";
import ImgDataFiscal from "../Assets/img/DataFiscal.jpg"
import ImgBrandlive from "../Assets/img/Brandlive.png"
import ImgShield from "../Assets/svg/shield.svg"
import ImgFacebook from "../Assets/svg/facebook.svg"
import ImgTwitter from "../Assets/svg/twitter.svg"
import ImgInstagram from "../Assets/svg/instagram.svg"
import ImgCopyright from "../Assets/svg/copyright.svg"

function Footer() {
  return (
    <FooterContainer>
      <div className="container">
        <div className="title">
          <h2>Pufi</h2>
          <img src={ImgCopyright} alt="" />
        </div>
        <ul className="listFooter">
          <li>Pufi Rain</li>
          <li>Pufi Puff</li>
          <li>Pufi Cart</li>
          <li>Pufi Nap</li>
        </ul>
        <ul className="listFooter">
          <li>Contacto</li>
          <li>Ayuda</li>
          <li>Cómo comprar</li>
          <li>Términos & Condiciones</li>
        </ul>
        <div className="safeGuard">
          <span>Compra 100% segura</span>
          <div className="assurance">
            <img className="imgDataFiscal" src={ImgDataFiscal} alt="" />
            <img className="imgShield" src={ImgShield} alt="" />
            <span>Comprá con la garantía de Pufi</span>
          </div>
        </div>
        <div className="socialMedia">
          <span>Seguinos en</span>
          <img src={ImgFacebook} alt="" />
          <img src={ImgTwitter} alt="" />
          <img src={ImgInstagram} alt="" />
        </div>
      </div>
      <hr />
      <div className="container2">
        <span>PUFI Copyright 2023 - Todos los derechos reservados</span>
        <img src={ImgBrandlive} alt="" />
      </div>
    </FooterContainer>
  );
}

export default Footer;