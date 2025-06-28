import { Schema, model } from "mongoose";

const magazineScheme = new Schema({
    title: {
        type: String,
        required: true,
        min: 2,
    },
    issueNumber: {
        type: Number,
        required: true,
        unique: true,
    },
    publisher: {
        type: Schema.Types.ObjectId,
        ref: "publisher",
        required: true,
    }

}, { versionKey: false } );

const Magazine = model("magazine", magazineScheme);

export default Magazine;