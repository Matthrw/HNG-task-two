import React from "react";
import img5 from "../images/DO_07706.jpg";
import img6 from "../images/DO_07681.jpg";
import "../styles/extraproduct.css";
function ExtraProduct() {
  return (
    <>
      <h2>Latest Products</h2>
      <div className="extraproduct_container">
        <div className="image">
          <img src={img5} alt="other_products" />
          <img src={img6} alt="other_products" />
        </div>
        <div className="content">
          <h3>Newly launched</h3>
          <p>just Arrived</p>
          <p>New products tailored</p>
          <p>just for a specific needs</p>
          <button>Shop now</button>
        </div>
      </div>
    </>
  );
}

export default ExtraProduct;
