import dotenv from 'dotenv';
import express from 'express';
import { dbConnect } from './src/configs/database.config.js';
import cors from 'cors';
import userRouter from './src/routers/user.router.js';
import eventRouter from './src/routers/event.router.js';
import uploadRouter from './src/routers/upload.router.js';
import vendorRoute from './src/routers/vendor.router.js';

dotenv.config();

dbConnect();

const app = express();
app.use(express.json());
app.use(cors()); // <-- Call the cors middleware function

app.get("/", (req, res) => {
    console.log("Server is running");
    res.send("Server is running");
});

app.use("/api/users", userRouter);
app.use("/api/events", eventRouter);
app.use("/api/upload", uploadRouter);
app.use("/api/vendor", vendorRoute);

const port = 5000;

app.listen(port, () => {
    console.log(`Server started at http://localhost:` + port);
});
