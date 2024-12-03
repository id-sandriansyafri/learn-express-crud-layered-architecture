// Layer untuk handle request dan response
// Biasanya juga handle validasi body

import express from "express";
import productService from "./product.service.js";


const router = express.Router();
router.get("/", async (req, res) => {

  const products = await productService.getAllProducts();
  res.send(products);

});

// get product by id
router.get("/:id", async (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const product = await productService.getProductById(parseInt(productId));

    res.send(product);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// create product
router.post("/", async (req, res) => {
  try {

    const newProductData = req.body;
    const product = await productService.createProduct(newProductData);

    res.send({
      data: product,
      message: "create product success",
    });

  } catch (error) {
    res.status(400).send(error.message);
  }
});

// delete product
router.delete("/:id", async (req, res) => {
  try {

    const productId = req.params.id; // string
    await productService.deleteProductById(parseInt(productId));
    
    res.send("product deleted");

  } catch (error) {
    res.status(400).send(error.message);
  }
});

// update product
router.put("/:id", async (req, res) => {
  
  const productId = req.params.id;
  const productData = req.body;

  if (
    !(
      productData.image &&
      productData.description &&
      productData.name &&
      productData.price
    )
  ) {
    return res.status(400).send("Some fields are missing");
  }

  const product = await productService.editProductById(parseInt(productId), productData);

  res.send({
    data: product,
    message: "edit product success",
  });
});

router.patch("/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const productData = req.body;

    const product = await productService.editProductById(parseInt(productId), productData);

    res.send({
      data: product,
      message: "edit product success",
    });
  } catch (err) {
    res.status(400).send(err.message);
  }
});

export default router
