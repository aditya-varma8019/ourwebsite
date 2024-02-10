import { Schema, model } from "mongoose";

export const userSchema = new Schema({
    name: {type: String, required: true},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isManager: { type: Boolean, default: true},
    isAdmin: { type: Boolean, default: false},
    isVendor: { type: Boolean, default: false}
},{
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
    timestamps: true
});

export const UserModel = new model("user", userSchema);