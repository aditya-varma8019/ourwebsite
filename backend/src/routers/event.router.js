import { Router } from "express";
import asyncHandler from "express-async-handler";
import { EventModel } from "../models/event.model.js";
import { VenueModel } from "../models/venue.model.js";

const router = Router();

router.post("/create", asyncHandler(async (req, res) => {

    const { name, venue, description, date, isLateNight, budget, duration, clubName, speakerList, sponsorList } = req.body;

    const event = await EventModel.findOne({ name });
    if (event) {
        res.status(400);
        throw new Error("Event already exists");
    }

    const dbVenue = await VenueModel.findOne({ name: venue }); 
    if (!dbVenue) {
        res.status(400);
        throw new Error("Venue does not exist");
    }

    const arr = dbVenue.bookedFor;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === date) {
            res.status(400).json({message: "Venue already booked for this date"});
            throw new Error("Venue already booked for this date");
        }
    }
    
    dbVenue.bookedFor.push(date);
    await dbVenue.save();   
    
    

    let numberOfPermissions = 3;
    if(isLateNight === "no" && venue === "CRC"){
        numberOfPermissions = 4;
    }
    else if(isLateNight === "no" && venue === "Auditorium"){
        numberOfPermissions = 5;
    }
    else if(isLateNight === "yes" && venue === "CRC"){
        numberOfPermissions = 6;
    }
    else if(isLateNight === "yes" && venue === "Auditorium"){
        numberOfPermissions = 7;
    }

    const createFields = { name, venue, description, date, isLateNight, budget, duration, numberOfPermissions, clubName, speakerList, sponsorList};

    const createdEvent = await EventModel.create(createFields);
    
    res.status(201).json(createdEvent);
}));

router.put("/update", asyncHandler(async (req, res) => {
    const { name, venue, description, date, isLateNight, budget, duration, clubName, speakerList, sponsorList, remarks } = req.body;

    const event = await EventModel.findOne({ name });
    if (!event) {
        res.status(400);
        throw new Error("Event does not exist");
    }

    console.log(isLateNight, venue);

    let numberOfPermissions = 3;
    if(!isLateNight && venue === "CRC"){
        numberOfPermissions = 4;
    }
    else if(!isLateNight && venue === "Auditorium"){
        numberOfPermissions = 5;
    }
    else if(isLateNight && venue === "CRC"){
        numberOfPermissions = 6;
    }
    else if(isLateNight && venue === "Auditorium"){
        numberOfPermissions = 7;
    }

    const updateFields = { venue, description, date, isLateNight, budget, duration, numberOfPermissions, clubName, speakerList, sponsorList, remarks };

    const updatedEvent = await EventModel.findOneAndUpdate({ name }, updateFields, { new: true });
    res.json(updatedEvent);
}));

// @desc Get all events
// @route GET /api/events
// @access Public
router.get("/", asyncHandler(async (req, res) => {
    const events = await EventModel.find({});
    res.json(events);
}));

router.get("/getByClub/:clubName", asyncHandler(async (req, res) => {
    const {clubName} = req.params
    const events = await EventModel.find({ clubName });
    // console.log(events);
    res.json(events);
}));


// @desc Update event
// @route PUT /api/events/:id
// @access Public
router.put("/toapprove/:num", asyncHandler(async (req, res) => {
    const name = req.body.name;
    const num = req.params.num;

    const fieldToUpdate = `isApproved${num}`;
    const fieldToUpdate2 = `isPending${num}`;

    // Set the values for update
    const updateValues = {
        [fieldToUpdate]: true, // Assuming you want to set it to true
        [fieldToUpdate2]: false // Assuming you want to set 'isPending' to false
    };

    const event = await EventModel.findOneAndUpdate({ name }, { $set: updateValues }, { new: true });
    res.json(event);
}));

router.put("/toreject/:num", asyncHandler(async (req, res) => {
    const name = req.body.name;
    const num = req.params.num;
    
    const fieldToUpdate = `isApproved${num}`;
    const fieldToUpdate2 = `isPending${num}`;

    // Set the values for update
    const updateValues = {
        [fieldToUpdate]: false, // Assuming you want to set it to true
        [fieldToUpdate2]: false // Assuming you want to set 'isPending' to false
    };

    // Update the document
    const event = await EventModel.findOneAndUpdate({ name }, { $set: updateValues }, { new: true });

    res.json(event);
}));

router.get("/getByName/:name", asyncHandler(async (req, res) => {
    const {name} = req.params
    const event = await EventModel.findOne({ name });
    if (event) {
        res.json(event);
    } else {
        res.status(404);
        throw new Error("Event not found");
    }
}));

export default router;
