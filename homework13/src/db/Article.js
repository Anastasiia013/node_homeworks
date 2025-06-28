import { Schema, model } from "mongoose";

const articleSchema = new Schema({
    title: {
        type: String,
        required: true,
        min: 2,
    },
    content: {
        type: String,
        min: 20,
        required: true,
    },
    tags: [{
        type: Schema.Types.ObjectId,
        ref: "tag"
    }],
}, { versionKey: false });

const Article = model("article", articleSchema);

export default Article;