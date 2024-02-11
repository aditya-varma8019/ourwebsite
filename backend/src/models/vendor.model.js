import { Schema, model } from "mongoose";

export const vendorSchema = new Schema({
    name: {type: String, default: "vendor",},
    email: { type: String, required: true, unique: true },
    category: { type: String, required: true },
}, {
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
    timestamps: true
});

export const VendorModel = new model("vendor", vendorSchema);

