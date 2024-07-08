import React from "react";
import img1 from "../images/ps1-removebg-preview.png";
import img2 from "../images/ps3-removebg-preview.png";
import img3 from "../images/ps4-removebg-preview.png";
import img4 from "../images/ps6-removebg-preview.png";

import "../styles/product.css";
const Products = [
  {
    id: 1,
    image: img1,
    productname: "Body Milk",
    price: "#6,500",
  },
  {
    id: 2,
    image: img2,
    productname: "Body Scrum",
    price: "#6,000",
  },
  {
    id: 3,
    image: img3,
    productname: "Body Scrub",
    price: "#6,500",
  },
  {
    id: 4,
    image: img4,
    productname: "Body Perfume",
    price: "#6,500",
  },
];

const ProductItem = ({ image, productname, price }) => (
  <div className="product_item_container">
    <div className="product_item">
      <div className="image_container">
        {" "}
        <img src={image} alt={productname} />
      </div>

      <h3>{productname}</h3>
      <p>{price}</p>
    </div>
    <div className="product_item">
      <div className="image_container">
        {" "}
        <img src={image} alt={productname} />
      </div>
      <h3>{productname}</h3>
      <p>{price}</p>
    </div>
  </div>
);

function Product() {
  return (
    <div className="products">
      <h2>Shop Our Products</h2>
      <div className="product_list">
        {Products.map((product) => (
          <ProductItem
            key={product.id}
            image={product.image}
            productname={product.productname}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Product;
