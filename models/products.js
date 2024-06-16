import mongoose from 'mongoose';

const productsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: String,
  categoriesId: { type: mongoose.Schema.Types.ObjectId, ref: 'Categories', required: true },
  quantity: { type: Number, required: true },
  image: String
});

const Products = mongoose.model('Products', productsSchema);
export default Products;