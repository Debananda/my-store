import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema({
  name: { type: String, require: true },
  price: { type: Number, require: true },
  description: String,
  images: [String],
});

const Product = models.Product || model("Product", ProductSchema);

export default Product;
