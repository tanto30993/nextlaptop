import express from "express";
import productsRoutes from "./products.js";
import categoriesRoutes from "./categories.js";
const router = express.Router();

router.use('/products', productsRoutes);
router.use('/categories', categoriesRoutes);

export default router;