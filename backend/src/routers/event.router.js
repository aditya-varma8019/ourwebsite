import { Router } from "express";
import asyncHandler from "express-async-handler";
import { EventModel } from "../models/event.model.js";

const router = Router();

router.post("/create", asyncHandler(async (req, res) => {

    const { name, venue, description, date } = req.body;

    const event = await EventModel.findOne({ name });
    if (event) {
        res.status(400);
        throw new Error("Event already exists");
    }

    const createdEvent = await EventModel.create({ name, venue, description, date });
    
    res.status(201).json(createdEvent);
}));

// @desc Get all events
// @route GET /api/events
// @access Public
router.get("/", asyncHandler(async (req, res) => {
    const events = await EventModel.find({});
    res.json(events);
}));

// @desc Get single event by id
// @route GET /api/events/:id
// @access Public
router.get("/:id", asyncHandler(async (req, res) => {
    const event = await EventModel.findById(req.params.id);
    if (event) {
        res.json(event);
    } else {
        res.status(404);
        throw new Error("Event not found");
    }
}));

// @desc Update event
// @route PUT /api/events/:id
// @access Public
router.put("/toapprove", asyncHandler(async (req, res) => {
    const name = req.body.name;
    const isApproved = true;
    const isPending = false;
    const event = await EventModel.findOneAndUpdate({ name }, { $set: { isApproved }}, { new: true  });
    const event2 = await EventModel.findOneAndUpdate({ name }, { $set: { isPending }}, { new: true  });
    res.json(event2);
}));

router.put("/toreject", asyncHandler(async (req, res) => {
    const name = req.body.name;
    const isApproved = false;
    const isPending = false;
    const event = await EventModel.findOneAndUpdate({ name }, { $set: { isApproved }}, { new: true  });
    const event2 = await EventModel.findOneAndUpdate({ name }, { $set: { isPending }}, { new: true  });
    res.json(event2);
}));

export default router;
