import express from "express";
import Products from "../models/products.js";
import { uploadProductImage, createProduct, findAllProduct, findProductbyId, updateProductbyId, deleteProductbyId } from "../controller/products.js";
import upload from "../middlewares/upload.js";

const router = express.Router();

//CREATE
router.post("/", createProduct)

// READ ALL

router.get("/", findAllProduct);

// READ ONE
router.get("/:id", findProductbyId);

// UPDATE
router.put("/:id", updateProductbyId);

// DELETE
router.delete("/:id", deleteProductbyId);


router.put("/upload-image/:id",upload.single("productImage"), uploadProductImage)

export default router;