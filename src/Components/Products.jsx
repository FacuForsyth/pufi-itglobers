import React from "react";
import { ProductsContainer } from "../Styles/ProductsStyle";

function Products({ position, img1, img2, name }) {
  return (
    <ProductsContainer position={position}>
      <div className="imgContainer">
        <button>shop</button>
        <img src={img1} alt="" />
      </div>
      <div className="detail">
        <div className="subDetail">
          <img src={img2} alt="" />
          <h3>{name}</h3>
          <hr />
          <p>Descripción del producto. Este es un texto simulado</p>
          <button>{"> ver mas"}</button>
        </div>
      </div>
    </ProductsContainer>
  );
}

export default Products;