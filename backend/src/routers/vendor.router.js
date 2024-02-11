import { Router } from "express";
import asyncHandler from "express-async-handler";
import { VendorModel } from "../models/vendor.model";

const router = Router();

router.post("/create", asyncHandler(async (req, res) => {
    
        const { name, email, category } = req.body;
    
        const vendor = await VendorModel.findOne({ email: email });

        if(vendor){
            res.status(400);
            throw new Error("Vendor already exists");
        }

        const createdVendor = await VendorModel.create({ name, email, category });
        res.status(201).json({
            message: "Vendor created successfully",
            vendor: createdVendor,
        });
}))
