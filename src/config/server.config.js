const express = require("express");
require("dotenv").config();
const productController = require("../product/product.controller");

const app = express();
app.use(express.json());
app.use("/products", productController);

module.exports = app