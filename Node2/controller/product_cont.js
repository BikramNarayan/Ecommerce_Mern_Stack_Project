//This is controller
const { error, log } = require("console");
const model = require("../model/product");
const Product = model.Product;
const fs = require("fs");
const index = fs.readFileSync("index.html", "utf-8");
// server.use(express.json());
const data2 = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const product = data2.products;
exports.getAllProduct = async (req, res) => {
  try {
    const p = await Product.find({});

    res.status(200).json(p);
  } catch {
    res.status(404).send("Error ailo he");
  }
};
exports.getProduct = async (req, res) => {
  // res.json(product[req.params.id]);
  const id = req.params.id;
  // console.log(id);
  try {
    // const p = await Product.find({ id: id });
    const p = await Product.findById(id);
    res.status(200).json(p);
  } catch {
    res.status(500).send("kuch dikata hai");
  }
};

exports.createProduct = async (req, res) => {
  const p = new Product(req.body);
  // p.title = "New xioami";
  // p.price = 353;
  // p.rating = 5;
  try {
    await p.save();
    console.log("Product created:", p);
    res.send("Created");
  } catch (error) {
    console.error("Error creating product:", error);
    // res.status(500).send("Error creating product");
  }
};

// + JavaScript trick to convert a string representation of a number into an actual numeric value (integer or float).
exports.postProduct = (req, res) => {
  console.log(req.body);

  const id = +req.params.id;
  const productIndex = product.findIndex((p) => p.id == id);
  const prod_new = product[productIndex];
  // Change the following line to update prod_new instead of trying to reassign it
  Object.assign(prod_new, req.body);

  res.status(201).json(prod_new);
};

exports.updateProduct = async (req, res) => {
  console.log("Update is running");
  const id = req.params.id;
  try {
    const p = await Product.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).json(p);
  } catch (err) {
    console.log("kuch put gadbad");
  }
};

exports.deletProduct = async (req, res) => {
  const id = req.params.id;
  console.log("Delte is running");
  try {
    await Product.findOneAndDelete({ _id: id });
  } catch (err) {
    console.log("nhi delete hua");
  }
  res.status(200).json("deleted");
};

exports.replaceProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const p = await Product.findOneAndReplace({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).json(p);
  } catch (err) {
    console.log("kuch gadbad");
  }
};
