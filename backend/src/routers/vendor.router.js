import { Router } from "express";
import asyncHandler from "express-async-handler";
import { VendorModel } from "../models/vendor.model.js";
import { sendEmailReceipt } from "../helpers/mail.helper.js";

const router = Router();

router.post("/create", asyncHandler(async (req, res) => {
    
        const { email, category, itemDescription, price } = req.body;
    
        const vendorObj = {
            email,
            category,
            itemDescription,
            price
        };

        sendEmailReceipt(vendorObj);

        // const vendor = new VendorModel(vendorObj);
        
        // await vendor.save()
        // res.status(201).send(vendor);
}))

export default router;
