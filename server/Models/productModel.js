import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["men", "women", "unisex"],
  },
  brand: {
    type: String,
    enum: ["nike", "adidas", "converse"],
  },
  category: {
    type: String,
    enum: ["sports", "sneakers", "formals"],
  },
});

const Product = mongoose.model("Product", productSchema);
export default Product;
