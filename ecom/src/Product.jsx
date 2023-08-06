import React, { useEffect, useState } from "react";
import Data from "./data2.json";
import axios, { Axios } from "axios";
const p = Data.products;

export default function Product() {
  const [product, setProduct] = useState(p);
  const getProduct = async () => {
    const res = await axios.get("/api/products");
    console.log(res.data);
    setProduct(res.data);
  };

  const handleClick = async (id) => {
    const res = await axios.delete(`/api/products/${id}`);
    console.log(res.data);
    setProduct(res.data);
  };

  useEffect(() => {
    getProduct();
  }, []);
  const productElements = product.map((e) => (
    <div key={e.id} className="card">
      <div className="image-container">
        <div className="first">
          <div className="d-flex justify-content-between align-items-center">
            <span className="discount">-25%</span>
            <span className="wishlist">
              <i
                className="fa fa-heart-o"
                onClick={() => handleClick(e._id)}
              ></i>
            </span>
          </div>
        </div>
        <img
          src={e.thumbnail}
          className="img-fluid rounded thumbnail-image"
          alt={e.title}
        />
      </div>

      <div className="product-detail-container p-2">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="dress-name">{e.title}</h5>
          <div className="d-flex flex-column mb-2">
            <span className="new-price">&#8377; {e.price}</span>
            <small className="old-price text-right">&#8377; {e.price}</small>
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center pt-1">
          <div>
            <i className="fa fa-star-o rating-star"></i>
            <span className="rating-number">{e.rating}</span>
          </div>
          <span className="buy">BUY +</span>
          <span className="buy">{e._id}</span>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <h1>Hello</h1>
      {productElements}
    </div>
  );
}
