import express from "express";
import { createCategory, findAllCategories } from "../controller/categories.js"

const router = express.Router()

router.post('/', createCategory);

router.get("/", findAllCategories);

export default router;