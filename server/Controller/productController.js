import Product from "../Models/productModel.js";

export const getProducts = async (req, res) => {
  try {
    const sortOrder = req.query.sort;
    let products;
    if (sortOrder === "asc") {
      products = await Product.find().sort({ price: 1 });
    } else if (sortOrder === "dec") {
      products = await Product.find().sort({ price: -1 });
    } else {
      products = await Product.find();
    }
    if (products.length <= 0) {
      res.status(400).json({ message: "No products are found!" });
    }
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(400).json({ message: "Product not found!" });
    }
    res.status(200).json({ message: "Product found", product });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, price, image } = req.body;
    if (!name || !price || !image) {
      return res.status(400).json({ message: "All fields are required!" });
    }
    const newProduct = new Product({ name, price, image });
    await newProduct.save();
    res.status(201).json({ message: "Sucessfully Created.", newProduct });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    // Delete the user
    const deletedUser = await Product.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
