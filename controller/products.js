import Products from "../models/products.js";
import mongoose from "mongoose";
import handleUpload from "../utils/cloudinary.js";
export const createProduct = async (req, res) => {
  try {
    const productData = req.body
    const result = await Products.create(productData);
    return res.status(201).json({
      product: result
    })
  } catch (error) {
    return res.status(500).json(error)
  }
};

export const findAllProduct = async (req, res) => {
  try {
    const products = await Products.find();
    return res.status(200).json(products);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const findProductbyId = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send("Invalid ID format");
    }
    const product = await Products.findById(id);
    if (!product) {
      return res.status(404).send("Can not find product by id!");
    }
    return res.status(200).json(product);
  } catch (error) {
    res.status(500).send(error);
  }
}

export const updateProductbyId = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send("Invalid ID format");
    }
    const product = await Products.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    if (!product) return res.status(404).send("Can not find product by id!");
    res.status(200).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const deleteProductbyId = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send("Invalid ID format");
    }
    const product = await Products.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).send("Can not find product by id!");
    res.status(200).send(`Delete product with id ${id}`);
  } catch (error) {
    res.status(500).send(error);
  }
}

export const uploadProductImage = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send("Invalid ID format");
    }
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
    const result = await handleUpload(dataURI);
    const updateProduct = await Products.findByIdAndUpdate(id, {
      image: result.url
    })
    return res.status(200).json(updateProduct);
  } catch (error) {
    return res.status(500).json(error);
  }
}