import Product from "../models/product.model.js";

const getProducts = async () => {
  return await Product.find({});
};

const getProduct = async (id) => {
  return await Product.findById(id);
};

const createProduct = async (data) => {
  const { name, quantity, price } = data;
  return await Product.create({ name, quantity, price });
};

const updateProduct = async (id, data) => {
  return await Product.findByIdAndUpdate(id, data, { new: true });
};

const deleteProduct = async (id) => {
  return await Product.findByIdAndDelete(id);
};

export default {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
