const express = require("express");
require("dotenv").config();
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path"); // Add this line to include the 'path' module

main().catch((err) => console.log(err));

async function main() {
  // console.log("hi");
  console.log(process.env.MONGO_URL);
  await mongoose.connect(
    // "mongodb+srv://bikramnarayandhanraj:BndAtlas@bnd.jwelvff.mongodb.net/?retryWrites=true&w=majority"
    process.env.MONGO_URL
  );
  console.log("database created");
}

const server = express();

server.use(cors());
server.use(express.json());

const product_router = require("./routes/routes");
const user_router = require("./routes/user");
server.use("/api", product_router.product_router);
server.use("/apii", user_router.user_router);

server.use(morgan("default"));

// Use 'path' module to join the path for serving static files
// server.use(express.static(path.join(build, "./public/build")));
// server.use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR)));

// server.use("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "build", "index.html"));
// });
// Make sure to adjust the path accordingly

server.listen(8080, () => {
  console.log("Express server started");
  console.log("env", process.env.DB_PASSWORD);
});

const autho = (req, res, next) => {
  next();
};

server.use(autho);

server.put("/", (req, res) => {
  res.json({ type: "Put" });
});
