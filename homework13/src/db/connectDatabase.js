import mongoose from "mongoose";

const { DATABASE_URI } = process.env;

const connectDatabase = async () => {
    try {
        await mongoose.connect(DATABASE_URI);
        console.log("Successfully connected to database");
    } catch (error) {
        console.log("Error connecting database");
        console.log(error);
        throw error;
    }
}

export default connectDatabase;