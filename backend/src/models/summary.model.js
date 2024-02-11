import { Schema, model } from "mongoose";

export const summarySchema = new Schema({
    eventName: { type: String, required: true, unique: true},
    eventDate: { type: Date, required: true },
    eventLocation: { type: String, required: true },
    eventSummary: { type: String, required: true },
    images: { type: [String] },
});

export const SummaryModel = model("summary", summarySchema);