import Categories from "../models/categories.js";

export const createCategory = async (req, res) => {
  try {
    const productData = req.body
    const result = await Categories.create(productData);
    return res.status(201).json({
      category: result
    })
  } catch (error) {
    return res.status(500).json(error)
  }
}

export const findAllCategories = async (req, res) => {
  try {
    const categories = await Categories.find();
    return res.status(200).json(categories);
  } catch (error) {
    res.status(500).send(error);
  }
};