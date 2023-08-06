import React, { useState } from "react";
import axios from "axios";

axios.defaults.headers.common["Authorization"] =
  "Bearer your_access_token_here";

const AddProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    // _id: 0,
    discountPercentage: 0,
    thumbnail: "",
    price: 0,
    rating: 0,
    category: "",
    brand: "",
  });
  const [pro, setPro] = useState({
    title: "",
    // _id: 0,
    discountPercentage: 0,
    thumbnail: "",
    price: 0,
    rating: 0,
    category: "",
    brand: "",
  });
  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProduct({ ...product, e });
    console.log(product);
    await addProduct(product);
    setProduct(setPro);
  };

  const addProduct = async (product) => {
    try {
      const res = await axios.post("api/products/c", product);
      console.log(res.data);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <form className="form-horizontal" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Add Product</legend>
        <div className="form-group">
          <label className="col-md-4 control-label" htmlFor="title">
            Title
          </label>
          <div className="col-md-4">
            <input
              id="title"
              name="title"
              type="text"
              placeholder="Title"
              className="form-control input-md"
              onChange={handleChange}
              value={product.title}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="col-md-4 control-label" htmlFor="thumbnail">
            Thumbnail
          </label>
          <div className="col-md-4">
            <input
              id="thumbnail"
              name="thumbnail"
              type="text"
              placeholder="Thumbnail URL"
              className="form-control input-md"
              onChange={handleChange}
              value={product.thumbnail}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="col-md-4 control-label" htmlFor="price">
            Price
          </label>
          <div className="col-md-4">
            <input
              id="price"
              name="price"
              type="number"
              placeholder="Price"
              className="form-control input-md"
              onChange={handleChange}
              value={product.price}
            />
          </div>
          <label className="col-md-4 control-label" htmlFor="rating">
            Rating
          </label>
          <div className="col-md-4">
            <input
              id="rating"
              name="rating"
              type="number"
              placeholder="Rating"
              className="form-control input-md"
              onChange={handleChange}
              value={product.rating}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="col-md-4 control-label" htmlFor="category">
            Category
          </label>
          <div className="col-md-4">
            <select
              id="category"
              name="category"
              className="form-control"
              onChange={handleChange}
              value={product.category}
            >
              <option value="">Choose</option>
              <option value="smartphone">SmartPhone</option>
              <option value="laptops">Laptops</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label className="col-md-4 control-label" htmlFor="brand">
            Brand
          </label>
          <div className="col-md-4">
            <select
              id="brand"
              name="brand"
              className="form-control"
              onChange={handleChange}
              value={product.brand}
            >
              <option value="">Choose</option>
              <option value="apple">Apple</option>
              <option value="samsung">Samsung</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label
            className="col-md-4 control-label"
            htmlFor="discountPercentage"
          >
            Discount
          </label>
          <div className="col-md-4">
            <input
              id="discountPercentage"
              name="discountPercentage"
              type="number"
              placeholder="Discount Percentage"
              className="form-control input-md"
              onChange={handleChange}
              value={product.discountPercentage}
            />
            <span className="help-block">help</span>
          </div>
        </div>
        <div className="form-group">
          <div className="col-md-4">
            <button
              id="singlebutton"
              name="singlebutton"
              className="btn btn-primary"
              type="submit"
            >
              Add
            </button>
          </div>
        </div>
      </fieldset>
    </form>
  );
};

export default AddProduct;
