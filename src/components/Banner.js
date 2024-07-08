import React from "react";
import "../styles/banner.css";
import img from "../images/IMG_0585-removebg.png";

function Banner() {
  return (
    <div className="banner">
      <div className="banner_content">
        <h2 className="h2_one">Glow Natural with Our Premium</h2>
        <h2> Skincare Collection</h2>
        <p className="p1">
          Discover the perfect blend of natural ingredients and
        </p>
        <p className="p2"> cutting-edge science for radiant, healthy skin</p>
        <p className="p_red">Get up to 20% of your first order</p>
        <button>Shop now</button>
      </div>
      <div className="banner-image">
        <img src={img} alt="banner" />
      </div>
    </div>
  );
}

export default Banner;
