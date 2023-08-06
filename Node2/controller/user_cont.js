//This is controller
const fs = require("fs");
const index = fs.readFileSync("index.html", "utf-8");
// server.use(express.json());
const data2 = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const user = data2.users;
exports.getAlluser = (req, res) => {
  res.json(data2);
};
exports.getuser = (req, res) => {
  res.json(user[req.params.id]);
};

// + JavaScript trick to convert a string representation of a number into an actual numeric value (integer or float).
exports.postuser = (req, res) => {
  console.log(req.body);
  // console.log({ ...req.body });
  const id = +req.params.id;
  const userIndex = user.findIndex((p) => p.id == id);
  const prod_new = user[userIndex];
  prod_new = req.body;
  // user.splice(userIndex, 1, { ...req.body, id: id });
  res.status(201).json(prod_new);
};

exports.patchuser = (req, res) => {
  const id = +req.params.id;
  const userIndex = user.findIndex((p) => p.id == id);
  // console.log(user);
  console.log(userIndex);
  // console.log(req.body);
  // console.log({ ...req.body });
  user[userIndex] = req.body;
  console.log(user[userIndex]);
  // user.splice(userIndex, 1, { ...req.body, id: id });
  // console.log(user);
  res.status(201).json(user);
};
exports.deletuser = (req, res) => {
  const id = +req.params.id;
  const userIndex = user.findIndex((p) => p.id == id);
  const del_user = user[userIndex];
  user.splice(userIndex, 1);
  res.status(201).json(del_user);
};
