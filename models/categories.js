import mongoose from 'mongoose';

const categoriesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
});

const Categories = mongoose.model('Categories', categoriesSchema);
export default Categories;