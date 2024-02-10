import { connect } from "mongoose";

export const dbConnect = () => {
    connect(process.env.MONGODB_URL).then(
        () => {
            console.log("Connected to database");
        },
        (err) => {
            console.log("Error connecting to database", err);
        }
    )
};