import { Schema, model } from "mongoose";

export const venueSchema = new Schema({
    name: {type: String, required: true, unique: true},
    bookedFor: { type: [String], default: [] },
},{
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
    timestamps: true
});

export const VenueModel = new model("venue", venueSchema);