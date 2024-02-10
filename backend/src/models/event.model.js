import { Schema, model } from "mongoose";

const eventSchema = new Schema({
    name: { type: String, required: true, unique: true},
    venue: { type: String, required: true },
    description: { type: String, default: "" },
    date: { type: Date, required: true },
    isApproved: { type: Boolean, default: false },
    isPending: { type: Boolean, default: true },
},{
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
    timestamps: true
});

export const EventModel = new model("event", eventSchema);