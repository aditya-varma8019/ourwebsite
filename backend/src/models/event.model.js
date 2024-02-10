import { Schema, model } from "mongoose";

const eventSchema = new Schema({
    name: { type: String, required: true, unique: true},
    venue: { type: String, required: true },
    description: { type: String, default: "" },
    date: { type: Date, required: true },
    isLateNight: { type: Boolean, default: false },
    budget: { type: Number, required: true },
    duration: { type: String, required: true },
    isApproved1: { type: Boolean, default: false },   // 1. Faculty Inc 2. Associate Dean 3. Dean 4. Security 5. CRC Admin
    isApproved2: { type: Boolean, default: false },
    isApproved3: { type: Boolean, default: false },
    isApproved4: { type: Boolean, default: false },
    isApproved5: { type: Boolean, default: false },
    isApproved6: { type: Boolean, default: false },
    isPending1: { type: Boolean, default: true },
    isPending2: { type: Boolean, default: true },
    isPending3: { type: Boolean, default: true },
    isPending4: { type: Boolean, default: true },
    isPending5: { type: Boolean, default: true },
    isPending6: { type: Boolean, default: true },
    numberOfPermissions: { type: Number, default: 0 },
    clubName : {type : String, required : true},
    speakerList: { type: String }, // Changed to String type
    sponsorList: { type: String },
    remarks: { type: String, default: "" },
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