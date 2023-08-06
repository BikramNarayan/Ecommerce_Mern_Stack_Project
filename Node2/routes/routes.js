// This is  router
const express = require("express");
const product_router = express.Router();
const prod_controller = require("../controller/product_cont");

product_router
  .get("/products", prod_controller.getAllProduct)
  .post("/products/c", prod_controller.createProduct)
  .get("/products/:id", prod_controller.getProduct)
  .patch("/products/:id", prod_controller.updateProduct)
  .put("/products/:id", prod_controller.replaceProduct)
  .delete("/products/:id", prod_controller.deletProduct)
  .get("/data.json", prod_controller.getAllProduct);

module.exports = {
  product_router,
};
