const mongoose = require("mongoose");
const { Schema } = mongoose;
//mongoose
const productSchema = new Schema({
  id: Number,
  title: { type: String, required: true },
  description: String,
  discountPercentage: {
    type: Number,
    min: [0, "wrong discount"],
    max: [50, "try lower"],
    required: true,
  },
  rating: {
    type: Number,
    min: [0, "wrong rating"],
    max: [5, "try lower"],
    // required: ture,
  },
  stock: Number,
  brand: String,
  category: String,
  thumbnail: [String],
});
exports.Product = mongoose.model("Products", productSchema);
