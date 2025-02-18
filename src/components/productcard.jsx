// write product card here
import React from "react";
import ViewProductButton from "../components/button"; 
import "./ProductCard.css"; 

const Productcard = () => {
  const productImage = "https://cms.dresma.com/uploads/Image_2_11cac6fa82.jpg"; 
  const productName = "Perfume";
  const productPrice = "$4998.99";

  return (
    <div className="product-card">
      <img src={productImage} alt="Product" />
      <h2>{productName}</h2>
      <p className="price">{productPrice}</p>
      <ViewProductButton /> {}
    </div>
  );
};

export default Productcard;