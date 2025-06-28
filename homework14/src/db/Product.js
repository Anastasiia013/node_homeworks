import { Schema, model } from "mongoose";

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        minlength: 10,
    },
    price: {
        type: Number,
        required: true,
    },
    count: {
        type: Number,
        default: 10,
        required: true,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "category",
        required: true,
    }
}, { versionKey: false, timestamps: true });

const Product = model("product", productSchema);

export default Product;