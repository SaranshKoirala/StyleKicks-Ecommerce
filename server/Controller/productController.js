import Product from "../Models/productModel.js";

export const getProducts = async (req, res) => {
  const { search = "", sort = "asc" } = req.query;

  // Build the filter object for search term
  const filter = search ? { name: { $regex: search, $options: "i" } } : {}; // Case-insensitive search on product name

  // Build the sort object
  const sortOrder = sort === "asc" ? 1 : sort === "dec" ? -1 : 1;
  try {
    let products = await Product.find(filter).sort({ price: sortOrder });
    if (products.length <= 0) {
      products = await Product.find().sort({ price: sortOrder });
      return res.status(200).json({ products });
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
