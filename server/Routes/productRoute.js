import express from "express";
import {
  getProduct,
  getProducts,
  createProduct,
  deleteProduct,
} from "../Controller/productController.js";
const route = express.Router();

//fetching all the products
route.get("/", getProducts);

//fetching a product by product id
route.get("/:id", getProduct);

//creating a product
route.post("/", createProduct);

//deleting a product
route.delete("/:id", deleteProduct);

//updating a product

export default route;
