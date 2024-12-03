import express from "express";
import './dotenv.config.js'
import productController from "../product/product.controller.js";


const app = express();
app.use(express.json());
app.use("/products", productController);

export default app