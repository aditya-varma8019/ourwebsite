import { Router } from "express";
import asyncHandler from "express-async-handler";
import {SummaryModel} from "../models/summary.model.js";

const router = Router();

router.post(
  "/create",
  asyncHandler(async (req, res) => {
    try {
      const { eventName, eventDate, eventLocation, eventSummary, images } = req.body;

      // Ensure all required fields are present
      if (!eventName || !eventDate || !eventLocation || !eventSummary || !images) {
        return res.status(400).json({ message: "All fields are required" });
      }

      const newSummary = {
        eventName,
        eventDate,
        eventLocation,
        eventSummary,
        images
      };

      console.log("newSummary", newSummary);

      const result = await SummaryModel.create(newSummary);

      res.status(201).json(result); // Respond with the newly created summary object
    } catch (error) {
      console.error("Error creating event summary:", error);
      res.status(500).json({ message: "Server Error" }); // Respond with a generic error message
    }
  })
);

router.get(
  "/all",
  asyncHandler(async (req, res) => {
    const summaries = await SummaryModel.find().sort({ date: -1 }); // Sort by most recent first
    res.json(summaries);
  })
);

export default router;
