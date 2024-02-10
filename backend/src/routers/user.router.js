import { Router } from "express";
import asyncHandler from "express-async-handler";
import { UserModel } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { sample_users } from "../data.js";

const router = Router();

// Endpoint to seed sample users into the database
router.get(
    "/seed",
    asyncHandler(async (req, res) => {

        console.log("Seeding sample users");

        // Check if users are already seeded
        const usersCount = await UserModel.countDocuments();
        if (usersCount > 0) {
            res.send("Sample users already seeded");
            return;
        }

        // Hash passwords and create users in the database
        for (let user of sample_users) {
            user.password = await bcrypt.hash(user.password, 10);
            await UserModel.create(user);
        }

        // Send success message
        res.send("Sample users seeded successfully");
    })
);

router.post(
    "/login",
    asyncHandler(async (req, res) => {
        const { email, password } = req.body;
        
        const user = await UserModel.findOne({ email });

        if (user && (await bcrypt.compare(password, user.password))) {
            res.status(200).json({
                message: "Login Successful",
                user: user,
            });
        } else {
            res.status(401).json({
                message: "Invalid email or password",
            });
        }
    })
);

router.post(
    "/signup",
    asyncHandler(async (req, res) => {
        const { name, email, password } = req.body;
        const user = await UserModel.findOne({ email });

        if (user) {
            res.status(400).json({
                message: "User already exists",
            });
        } else {
            
            const encryptedPassword = await bcrypt.hash(password, 10);

            const newUser = new UserModel({
                id: "",
                name,
                email: email.toLowerCase(),
                password: encryptedPassword,
            });

            const dbUser = await UserModel.create(newUser);

            res.status(201).json({
                message: "User created successfully! Please login to continue.",
                user: dbUser,
            });
        }
    })
);

export default router;