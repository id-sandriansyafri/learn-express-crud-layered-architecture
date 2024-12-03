// Service layer bertujuan untuk handle business logic
// Kenapa dipisah? Supaya tanggung jawabnya ter-isolate, dan functions-nya
// reusable

import productRepository from "./product.repository.js";

const getAllProducts = async () => {
  const products = await productRepository.findProducts();

  return products;
};

const getProductById = async (id) => {
  const product = await productRepository.findProductById(id);

  if (!product) {
    throw Error("Product not found");
  }

  return product;
};

const createProduct = async (newProductData) => {

  const product = await productRepository.insertProduct(newProductData);
  return product;

};

const deleteProductById = async (id) => {

  await getProductById(id);
  await deleteProduct(id);

};

const editProductById = async (id, productData) => {

  await getProductById(id);
  const product = await productRepository.editProduct(id, productData)
  return product;
};

export default {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProductById,
  editProductById
};
