// This is  router
const express = require("express");
const user_router = express.Router();
const prod_controller = require("../controller/user_cont");

user_router.get("/users", prod_controller.getAlluser);

user_router.get("/users/:id", prod_controller.getuser);
//can be done like thiss also
user_router
  .post("/users", prod_controller.postuser)

  .post("/users/:id", prod_controller.postuser)

  .patch("/users/:id", prod_controller.patchuser)

  .delete("/users/:id", prod_controller.deletuser)

  .get("/data.json", prod_controller.getAlluser);

module.exports = {
  user_router,
};
